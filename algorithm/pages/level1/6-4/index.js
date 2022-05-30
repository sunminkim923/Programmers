export default function Algorithm() {
  //자연수 뒤집어 배열 만들기
  let n = 12345;
  let answer = "";

  let array = [...String(n)];
  answer = array.reverse().map((data) => Number(data));

  return answer;
}
