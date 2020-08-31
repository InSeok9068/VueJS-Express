var express = require("express");
var router = express.Router();

const xlsx = require("xlsx");
const book = xlsx.utils.book_new();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const nurses = xlsx.utils.json_to_sheet(
    [
      { A: "학과", B: "직급", C: "이름", D: "나이" },

      { A: "흉부외과", B: "PA간호사", C: "소이현", D: "33" },

      { A: "소아외과", B: "PA간호사", C: "한현희", D: "29" },

      { A: "산부인과", B: "분만실간호사", C: "한한승주현희", D: "41" },

      { A: "산부인과", B: "PA간호사", C: "은선진", D: "36" },

      { A: "간담췌외과", B: "수간호사", C: "송수빈", D: "45" },

      { A: "간담췌외과", B: "병동간호사", C: "이영하", D: "35" },

      { A: "간담췌외과", B: "병동간호사", C: "김재환", D: "28" },

      { A: "간담췌외과", B: "PA간호사", C: "국해성", D: "32" },

      { A: "간담췌외과", B: "이식코디네이터", C: "함덕주", D: "37" },

      { A: "신경외과", B: "PA간호사", C: "황재신", D: "39" },

      { A: "응급의학과", B: "응급실간호사", C: "선우희수", D: "26" },
    ],
    { header: ["A", "B", "C", "D"], skipHeader: true }
  );

  // @breif CELL 넓이 지정

  nurses["!cols"] = [
    { wpx: 130 }, // A열

    { wpx: 100 }, // B열

    { wpx: 80 }, // C열

    { wch: 60 }, // D열
  ];

  // @details 두번째 시트에 작성한 데이터를 넣는다.

  xlsx.utils.book_append_sheet(book, nurses, "NURSES");

  // @files 엑셀파일을 생성하고 저장한다.

  xlsx.writeFile(book, "dramatis_personae.xlsx");
});

module.exports = router;
