export default function Algorithm() {
  //문자열 내 p와 y의 개수

  const s = "pPoooyY";

  const sArray = s.split("").map((data) => data.toUpperCase());

  const pArray = sArray.filter((data) => data === "P");

  const yArray = sArray.filter((data) => data === "Y");

  return pArray.length === yArray.length;
}
