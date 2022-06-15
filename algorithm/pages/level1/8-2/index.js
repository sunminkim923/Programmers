export default function Algorithm() {
  //문자열 다루기 기본

  const s = "1234";

  const ss = "a234";

  console.log(
    ss
      .split("")
      .map((data) => Number(data))
      .filter((data) => !isNaN(data))
  );

  if (
    s.split("").length !==
    s
      .split("")
      .map((data) => Number(data))
      .filter((data) => !isNaN(data)).length
  ) {
    return false;
  } else {
    return true;
  }
}
