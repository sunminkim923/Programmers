export default function Algorithm() {
  //자릿수 더하기
  let n = 2;
  let answer = "";
  const array = [...String(n)];

  if (array.length === 1) {
    answer = Number(array[0]);
  } else {
    answer = array.reduce((a, b) => Number(a) + Number(b));
  }

  return answer;
}
