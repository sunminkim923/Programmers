export default function Algorithm() {
  // 신고결과 받기

  const idList = ["muzi", "frodo", "apeach", "neo"];
  const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ];
  const k = 2;

  //인정되는 신고건수를 담을 배열
  let realList = [];

  //중복 신고자 제거
  report.forEach((data) => {
    if (!realList.includes(data)) {
      realList.push(data);
    }
  });

  //신고당한 사람들만 추려버림
  const blackList = report.map((data) => data.split(" ")[1]);

  console.log(blackList);
}
