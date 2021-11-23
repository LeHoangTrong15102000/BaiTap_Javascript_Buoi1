// Tính diện tích và chu vi hình chữ nhật hình chữ nhật

// Cho người dùng nhập vào chiều dài hình chữ nhật

const lengthRect = parseInt(
  prompt("Người dùng nhập vào chiều dài hình chữ nhật: ")
);

// Cho người dùng nhập vào chiều rộng hình chữ nhật
const widthRect = parseInt(
  prompt("Người dùng nhập vào chiều rộng hình chữ nhật: ")
);

// Chu vi hình chữ nhật

const perRect = (lengthRect + widthRect) * 2;

// Diện tích hình chữ nhật là

const squareRect = lengthRect * widthRect;

// In ra màn hình Diện tích và chu vi

console.log(
  `Vậy hình chữ nhật có chu vi là ${perRect}m, diện tích là ${squareRect}m^2`
);
