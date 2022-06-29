export default function Algorithm() {
  //같은숫자는 싫어

  const arr = [1, 1, 3, 3, 0, 1, 1];
  let answer = [];

  arr.map((data, index) => {
    if (data !== arr[index - 1]) {
      answer.push(data);
    }
  });
  console.log(answer);
}
