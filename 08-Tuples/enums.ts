enum OrderStatus {
  PLACED,
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const orderStatus = OrderStatus.PLACED;

function isDeliver(orderStatus: OrderStatus) {
  return orderStatus === OrderStatus.DELIVERED;
}

console.log(isDeliver(OrderStatus.DELIVERED)); //true
console.log(isDeliver(OrderStatus.PLACED)); //false

enum HttpResponseStatus {
  OK = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

console.log(HttpResponseStatus.NOT_FOUND);
