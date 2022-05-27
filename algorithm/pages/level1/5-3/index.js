export default function Algorithm() {
  let arr = [4, 3, 2, 1];

  let answer = arr.filter((data) => data !== Math.min(...arr));

  if (answer.length === 0) {
    return [-1];
  } else {
    return answer;
  }
}
