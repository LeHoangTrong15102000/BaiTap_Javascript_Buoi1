// Mô hình 3 khối

// Dữ liệu người dùng nhập vào

// lương cơ bản của một ngày
const wageOneDay = 100000;

// cho người dùng nhập vào số ngày làm việc
const wageDay = parseInt(prompt("Nhập vào số ngày làm việc của bạn: "));

// Tổng lương sau từng đó ngày làm việc
const wageTotal = wageOneDay * wageDay;

// In ra tiền lương sau đso ngày làm việc
console.log(`Lương sau ${wageDay} ngày làm việc của bạn là: `, wageTotal);
