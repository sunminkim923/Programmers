export default function Algorithm() {
  //내림차순 정렬
  let n = 118372;
  let answer = "";
  const array = [...String(n)];

  let array2 = array.sort((a, b) => b - a);

  answer = Number(array2.join(""));

  return answer;
}
