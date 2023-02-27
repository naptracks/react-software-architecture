import express from "express";
import React from "react";
import  path from "path"
import fs from "fs"
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./src/App.js";


const app = express();

app.use(express.static("./build", { index: false })); // to not load index.html from folder

app.get("/*", (req, res) => {
  const sheet = new ServerStyleSheet();

  const reactApp = renderToString(
    <StaticRouter locatin={req.url}>
      <App />
    </StaticRouter>
  );

  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
        .replace("{{styles}}", sheet.getStyleTags())
    );
  });
});

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
