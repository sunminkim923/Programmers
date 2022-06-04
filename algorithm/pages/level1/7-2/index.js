export default function Algorithm() {
  //이상한 문자 만들기

  let s = "try hello world";

  let array = s.split(" ");

  let array2 = array.map((data) => [...data]);

  let string = array2.map((data) =>
    data.map((data2, index2) => {
      if (index2 % 2 === 0) {
        return data2.toUpperCase();
      } else {
        return data2.toLowerCase();
      }
    })
  );

  let answer = "";

  answer = string.map((data) => data.join("")).join(" ");

  return answer;
}
