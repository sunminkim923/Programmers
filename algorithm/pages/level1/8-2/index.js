export default function Algorithm() {
  //문자열 다루기 기본

  const s = "s234";
  console.log(isNaN());

  // if ([...s].includes("e")) {
  //   return false;
  // }
  console.log([...s].includes("s"));

  if (s.length !== 4 && s.length !== 6) {
    return false;
  } else if ([...s].includes("e")) {
    return false;
  } else {
    return !isNaN(s);
  }
}
