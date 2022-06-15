export default function Algorithm() {
  //소수찾기

  const n = 2;

  const numArray = [];

  const answer = [];
  for (let i = 1; i <= n; i++) {
    numArray.push(i);
  }

  console.log(
    numArray.filter(
      (data) => data % 2 !== 0 && Number.isInteger(Math.sqrt(data)) === false
    )
  );
}
