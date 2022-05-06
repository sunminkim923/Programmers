export default function Algorithm() {
  // 하샤드 수

  const arr = 18;

  const splitArr = String(arr)
    .split("")
    .map((data) => Number(data));

  let sumData = "";

  const reducer = (accumulator, curr) => accumulator + curr;
  console.log(arr % splitArr.reduce(reducer));

  // function solution(x) {
  //   let answer = "";
  //
  //   let array = String(x)
  //     .split("")
  //     .map((data) => Number(data));
  //
  //   const reducer = (accumulator, curr) => accumulator + curr;
  //
  //   if (x % array.reduce(reducer) === 0) {
  //     answer = true;
  //   } else {
  //     answer = false;
  //   }
  //   return answer;
  // }
}
