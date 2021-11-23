// Tinh giá trị trung bình của 5 số thực được nhập từ bàn phím

// Các số thực được nhập từ bàn phìm thực

const number1 = parseInt(prompt("Nhập vào số thực thứ 1: "));

const number2 = parseInt(prompt("Nhập vào số thực thứ 2: "));

const number3 = parseInt(prompt("Nhập vào số thực thứ 3: "));

const number4 = parseInt(prompt("Nhập vào số thực thứ 4: "));

const number5 = parseInt(prompt("Nhập vào số thực thứ 5: "));

// Giá trị trung binh của 5 số thực, và đổi kiểu dữ liệu cho kết quả cuối
const numberTotal = parseFloat(
  (number1 + number2 + number3 + number4 + number5) / 5
);

// In ra giá trị trung bình của 5 số thực
console.log(
  `Giá trị trung bình của 5 số ${number1}, ${number2}, ${number3}, ${number4}, ${number5} là: `,
  numberTotal
);
