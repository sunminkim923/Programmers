export default function Algorithm() {
  //콜라츠 추측
  let num = 6;
  let answer = 0;
  for (let i = 0; i <= 501; i++) {
    if (num === 1) {
      answer = i;
      console.log(answer);
      return;
    }

    if (num % 2 !== 0) {
      num = num * 3 + 1;
    } else if (num % 2 === 0) {
      num = num / 2;
    }
  }
}
