const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const dfd = require("danfojs-node");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "172.17.0.1",
  user: "cascha",
  password: "Pnqf@ju2",
  database: "react_map_news",
  port: 3306,
});

app.get("/api/get_mean_ipc_date", (req, res) => {
  const sqlQuery =
    'select DATE_FORMAT(date, "%Y-%m-%d") as x, AVG(ipc) as y from ipc where date >= ? AND date <= ? GROUP BY date;';
  db.query(sqlQuery, [req.query.minDate, req.query.maxDate], (err, result) => {
    res.send(result);
  });
});

app.get("/api/get_mean_ipc_date_by_region", (req, res) => {
  const sqlQuery =
    'select region, DATE_FORMAT(date, "%Y-%m-%d") as x, ipc as y from ipc where date >= ? AND date <= ?;';
  db.query(sqlQuery, [req.query.minDate, req.query.maxDate], (err, result) => {
    let df = new dfd.DataFrame(
      result.map((item) => {
        return { region: item.region, x: item.x, y: item.y };
      })
    ).dropNa({ axis: 1 });
    if (req.query.regions !== undefined) {
      let df_regions = new dfd.DataFrame({ region: req.query.regions });
      df = dfd.merge({
        left: df,
        right: df_regions,
        on: ["region"],
        how: "inner",
      });
    }
    df = df.drop({ columns: ["region"] });
    res.send(dfd.toJSON(df.groupby(["x"]).mean().rename({ y_mean: "y" })));
  });
});

app.get("/api/get_ipc_mean", (req, res) => {
  const sqlQuery =
    "select region, round(AVG(ipc)) as ipc from ipc where date >= ? AND date <= ? GROUP BY region;";
  db.query(sqlQuery, [req.query.minDate, req.query.maxDate], (err, result) => {
    res.send(result);
  });
});


app.get("/api/example", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => console.log("running on port 3001"));
