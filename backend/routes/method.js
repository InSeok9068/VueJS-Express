var express = require("express");
var router = express.Router();

const axios = require("axios");
const fs = require("fs");

const secretJsonData = JSON.parse(
  fs.readFileSync("./secret/secret.json", "utf8")
);

/* GET users listing. */
router.get("/name", function (req, res, next) {
  console.log("테스트");
  console.log(req.query);
  axios({
    url: "https://openapi.naver.com/v1/papago/n2mt",
    method: "post",
    headers: {
      "X-Naver-Client-Id": secretJsonData.papago["X-Naver-Client-Id"],
      "X-Naver-Client-Secret": secretJsonData.papago["X-Naver-Client-Secret"],
    },
    data: {
      source: "ko",
      target: "en",
      text: req.query.text,
    },
  }).then(function (response, body) {
    res.json(response.data.message.result.translatedText);
    res.end();
  });
});

module.exports = router;
