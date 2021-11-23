// Quy đổi tiền từ USD về Việt Nam đồng

// Nhập vào số tiền $ muốn chuyển đổi sang tiền Việt
const usdMoney = parseInt(prompt("Nhập vào số $ muốn chuyển đổi: "));

// Công thức tính số tiền khi chuyển từ $ về VND

const convertMoney = usdMoney * 23500;

// In ra số tiền sau khi chuyển đổi từ USD sang VNĐ

console.log(`Sau khi chuyển đổi ${usdMoney}$ ta nhận được: ${convertMoney}VNĐ`);
