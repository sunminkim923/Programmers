export default function Algorithm() {
  // 두 정수 사이의 합
  const a = 5;
  const b = 3;

  const array = [a, b].sort((a, b) => a - b);

  const data = [];

  for (let i = array[0]; i <= array[1]; i++) {
    data.push(i);
  }

  return data.reduce((a, b) => a + b);
}
