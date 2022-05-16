import { ampFirstEntryNamesMap } from "next/dist/build/webpack/plugins/next-drop-client-page-plugin";

export default function Algorithm() {
  let num = 6;
  let answer = 0;

  for (let i = 0; i <= 500; i++) {
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
