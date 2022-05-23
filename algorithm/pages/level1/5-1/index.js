export default function Algorithm() {
  //최대공약수, 최소공배수
  const n = 9;
  const m = 12;

  //최대 공약수
  let nMeasure = [];
  let mMeasure = [];

  //n의 약수를 구한다
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      nMeasure.push(i);
    }
  }

  //m의 약수를 구한다
  for (let i = 0; i <= m; i++) {
    if (m % i === 0) {
      mMeasure.push(i);
    }
  }

  // n과 m의 약수중 공통된 부분만 추출한다.
  const commonMeasure = nMeasure.filter((data) => mMeasure.includes(data));

  //공약수 중에 최대값을 추출한다.
  const maxMeasure = Math.max.apply(null, commonMeasure);

  //최소 공배수 공식 => 두 수를 곱한다음 최대공약수로 나누면 최소공배수가 됨.
  const minMultiple = [(n * m) / maxMeasure];

  const answer = [maxMeasure].concat(minMultiple);

  return answer;
}
