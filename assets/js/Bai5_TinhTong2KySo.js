//  Tính tổng 2 ký số

// Kiểm tra xem dữ liệu nhập vào có phải là một số hay không

// Viết hàm kiểm tra có phải số hay không
const isNumber = function (value) {
  if (typeof value === "number" && !Array.isArray(value) && value !== null) {
    return true;
  }

  return false;
};

// console.log(isNumber());

// Viết hàm tính tổng 1 số có 2 chữ số

const total = function (number) {
  // Nếu không phải là số thì trả về là null
  if (!isNumber(number)) return null;

  // Lấy ra số hàng chục và hàng đơn vị của số có 2 chữ số

  const soHangChuc = parseInt(number / 10); // chuyển kiểu dữ liệu số hàng chục về số thực
  const soDonVi = number % 10;

  // Tính tổng 2 số hàng chục và đơn vị
  const numberTotal = soHangChuc + soDonVi;

  return numberTotal;
};

// In ra tổng của số hàng chục và hàng đơn vị của số 2 chữ số,
console.log(total(15)); //
