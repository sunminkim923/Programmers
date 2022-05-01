export default function Algorithm() {
  //행렬의 덧셈
  // const array1 = [
  //   [1, 2],
  //   [2, 3],
  // ];
  // const array2 = [
  //   [3, 4],
  //   [5, 6],
  // ];

  const array1 = [[1], [2]];
  const array2 = [[3], [4]];

  console.log(
    array1.map((data) =>
      data.map((data2) =>
        array2.map((data3) => data3.map((data4) => data2 + data4))
      )
    )
  );

  const newArray1 = array1.map((data, index) =>
    array2.map((data2) => console.log(data[index]))
  );

  // 2번 항목에 대해서는 통과 함
  //   const newArray1 = array1.map((data) => data[array1.length - 1]);
  //
  //   const newArray2 = array2.map((data) => data[array1.length - 1]);
  //
  //   console.log(newArray1.map((data, index) => data + newArray2[index]));
  //
  //   const sumArray = newArray1.map((data, index) => data + newArray2[index]);
  //
  //   const answer = sumArray.map((data) => [data]);
}
