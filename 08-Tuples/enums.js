var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PLACED"] = 0] = "PLACED";
    OrderStatus[OrderStatus["PENDING"] = 1] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 2] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 3] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 4] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var orderStatus = OrderStatus.PLACED;
function isDeliver(orderStatus) {
    return orderStatus === OrderStatus.DELIVERED;
}
console.log(isDeliver(OrderStatus.DELIVERED)); //true
console.log(isDeliver(OrderStatus.PLACED)); //false
var HttpResponseStatus;
(function (HttpResponseStatus) {
    HttpResponseStatus[HttpResponseStatus["OK"] = 200] = "OK";
    HttpResponseStatus[HttpResponseStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpResponseStatus[HttpResponseStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpResponseStatus || (HttpResponseStatus = {}));
console.log(HttpResponseStatus.NOT_FOUND);
