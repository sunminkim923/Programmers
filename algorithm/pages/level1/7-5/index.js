export default function Algorithm() {
  //수박수박수박수박수

  let n = 3;
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push("수");
    } else {
      answer.push("박");
    }
  }

  return answer.join("");
}
