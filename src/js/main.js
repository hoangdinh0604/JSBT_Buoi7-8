//Nhập mảng
arrMain = [];
const renderArr = (arr) => {
  document.querySelector("#inputArr").innerHTML = ``;
  for (let index = 0; index < arr.length; index++) {
    document.querySelector("#inputArr").innerHTML += `${arr[index]}, `;
  }
};
document.querySelector("#btnInput").onclick = () => {
  let number = document.querySelector("#number1").value;
  number = parseInt(number);
  arrMain.push(number);

  renderArr(arrMain);
};
//bài tập 1
document.querySelector("#btnSumArr").onclick = () => {
  let sum = 0;
  for (let index = 0; index < arrMain.length; index++) {
    if (arrMain[index] > 0) {
      sum += arrMain[index];
    }
  }
  document.querySelector(
    "#result1"
  ).innerHTML = `Tổng các số nguyên dương trong mảng là: ${sum}`;
};
//bài tập 2
document.querySelector("#btnPCounter").onclick = () => {
  let count = 0;
  for (let index = 0; index < arrMain.length; index++) {
    if (arrMain[index] > 0) {
      count++;
    }
  }
  document.querySelector(
    "#result2"
  ).innerHTML = `Có ${count} số dương trong mảng`;
};
//Bài tập 3
document.querySelector("#btnFindMin").onclick = () => {
  let min = arrMain[0];
  for (let index = 0; index < arrMain.length; index++) {
    if (min > arrMain[index]) {
      min = arrMain[index];
    }
  }
  document.querySelector(
    "#result3"
  ).innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
};
//Bài tập 4
document.querySelector("#btnFindPosMin").onclick = () => {
  let min = arrMain[0];
  for (let index = 0; index < arrMain.length; index++) {
    if (min > arrMain[index] && arrMain[index] > 0) {
      min = arrMain[index];
    }
  }
  document.querySelector(
    "#result4"
  ).innerHTML = `Số dương nhỏ nhất trong mảng là: ${min}`;
};
