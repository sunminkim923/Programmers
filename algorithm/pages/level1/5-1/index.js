export default function Algorithm() {
  //최대공약수, 최소공배수
  const n = 9;
  const m = 12;

  //최대 공약수
  let nMeasure = [];
  let mMeasure = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      nMeasure.push(i);
    }
  }

  for (let i = 0; i <= m; i++) {
    if (m % i === 0) {
      mMeasure.push(i);
    }
  }

  const aaa = [
    nMeasure.filter((data) => mMeasure.includes(data)).reduce((a, b) => a * b),
  ];

  const bbb = [(n * m) / aaa];

  const answer = aaa.concat(bbb);
  console.log(answer);

  // //최소공배수
  // let nMultiple = [];
  // let mMultiple = [];
  //
  // let 최소공배수 = "";
  //
  // for (let i = 0; i < 10000000000; i++) {
  //   const aaa = nMultiple.filter((data) => mMultiple.includes(data));
  //   if (aaa.length === 1) {
  //     최소공배수 = aaa;
  //     break;
  //   }
  //   nMultiple.push(n + n * i);
  //   mMultiple.push(m + m * i);
  // }
  //
  // const answer = 최대공약수.concat(최소공배수);
  //
  // console.log(answer);
}
