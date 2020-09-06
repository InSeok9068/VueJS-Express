var express = require("express");
var router = express.Router();

const axios = require("axios");
const fs = require("fs");

/* GET users listing. */
router.get("/name", function (req, res, next) {
  console.log(req);
  axios({
    url: "https://openapi.naver.com/v1/papago/n2mt",
    method: "post",
    headers: {
      "X-Naver-Client-Id": secretJsonData.papago["X-Naver-Client-Id"],
      "X-Naver-Client-Secret": secretJsonData.papago["X-Naver-Client-Secret"],
    },
    data: {
      source: "ko",
      target: "ja",
      text: "현경아~~~~",
    },
  }).then(function (response, body) {
    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
    console.log(response.data.message.result.translatedText);
    res.end(body);
  });
});

module.exports = router;
