// NeDB 공식 GitHub 메뉴얼 확인
// https://github.com/louischatriot/nedb

var nedb = require("nedb");

const db = new nedb({
  filename: "../backend/db/datafile.db", // DB 파일의 위치 및 이름
  autoload: true, // DB 생성시 파일 로드
});

module.exports = db;
