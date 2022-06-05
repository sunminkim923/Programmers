export default function Algorithm() {
  //시저암호

  let str = "a B z";
  let n = 4;

  let answer = [];
  //

  str.split("").map((data, index) => {
    if (data === data.toUpperCase() && data !== " ") {
      //대문자인경우

      //z를 넘어가는경우
      if (data.charCodeAt() + n > 90) {
        answer.push(String.fromCharCode(data.charCodeAt() + (n - 26)));
      } else {
        answer.push(String.fromCharCode(data.charCodeAt() + n));
      }
    }
    if (data === data.toLowerCase() && data !== " ") {
      //소문자인경우

      //z를 넘어가는경우
      if (data.charCodeAt() + n > 122) {
        answer.push(String.fromCharCode(data.charCodeAt() + (n - 26)));
      } else {
        answer.push(String.fromCharCode(data.charCodeAt() + n));
      }
    }
    if (data === " ") {
      //공백인경우
      answer.push(data);
    }
  });

  console.log(answer.join(""));

  return answer.join("");
}
