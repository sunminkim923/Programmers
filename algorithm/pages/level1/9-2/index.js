export default function Algorithm() {
  //문지열 내 마음대로 정렬하기

  const strings = ["sun", "bed", "car"];
  const n = 1;

  console.log(strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n)));
}
