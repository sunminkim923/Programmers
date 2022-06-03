export default function Algorithm() {
  //약수의 합

  const n = 12;

  let answer = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }

  return answer.reduce((a, b) => a + b);
}
