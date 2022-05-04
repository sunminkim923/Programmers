export default function Algorithm() {
  let x = -4;

  let n = 2;

  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(x + x * i);
  }

  console.log(answer);
}
