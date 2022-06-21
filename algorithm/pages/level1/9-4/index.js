export default function Algorithm() {
  // 나누어 떨어지는 숫자 배열

  const arr = [5, 9, 7, 10];

  const divisor = 5;

  const newArr = arr.filter((data) => data % divisor === 0);

  if (!newArr.length) {
    return [-1];
  } else {
    return newArr.sort((a, b) => a - b);
  }
}
