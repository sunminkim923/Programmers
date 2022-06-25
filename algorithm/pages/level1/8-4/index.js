export default function Algorithm() {
  //소수찾기

  const n = 50;

  let array = [];

  for (let i = 2; i <= n; i++) {
    array.push(i);
  }

  let answer = [];
  // console.log(array);
  array.map((data) => {
    if (data === 2 || data === 3 || data === 5 || data === 7) {
      answer.push(data);
    } else {
      if (
        data % 2 !== 0 &&
        data % 3 !== 0 &&
        data % 5 !== 0 &&
        data % 7 !== 0
      ) {
        answer.push(data);
      }
    }
  });

  // array.filter((data) => data ===2 || data === 3 || data === 5 || data === 7 && )

  console.log(answer);

  console.log(answer.length);
}
