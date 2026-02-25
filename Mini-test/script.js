let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

let orderReports = [];

for (let i = 0; i < orders.length; i++) {
    let reportString = `${orders[i]} mang về ${revenues[i]} USD`;
    orderReports.push(reportString);
}
console.log(orderReports);

let totalValidRevenue = revenues.filter((revenue) => {
    return revenue > 0;
}).reduce((total, revenue) => {
    return total + revenue;
}, 0);
console.log("Tổng doanh thu hợp lệ:", totalValidRevenue);