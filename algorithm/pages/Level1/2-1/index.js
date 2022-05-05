export default function Algorithm() {
  //행렬의 덧셈
  const array1 = [
    [1, 2],
    [2, 3],
  ];
  const array2 = [
    [3, 4],
    [5, 6],
  ];

  array1.map((data, index) =>
    data.map((data2, index2) => array2[index][index2] + data2)
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
