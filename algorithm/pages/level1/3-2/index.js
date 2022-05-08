export default function Algorithm() {
  //휴대폰 번호 가리기

  const phoneNumber = "01033334444";

  const newArr = phoneNumber.split("");

  const fillArr = newArr.fill("*", 0, newArr.length - 4);

  console.log(fillArr.join(""));
}
