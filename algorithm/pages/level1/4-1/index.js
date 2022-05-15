export default function Algorithm() {
  const arr1 = [1, 2, 3, 4];

  const sum = arr1.reduce((a, b) => a + b);

  const answer = sum / arr1.length;

  return answer;
}
