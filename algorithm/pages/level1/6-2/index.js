export default function Algorithm() {
  //제곱근 판별

  let n = 121;
  let answer = "";

  if (Number.isInteger(Math.sqrt(n))) {
    answer = Math.pow(Math.sqrt(n) + 1, 2);
  } else {
    answer = -1;
  }

  return answer;
}
