//tuple
//fixed length & fixed type & order matters
const color: [number, number, number] = [255, 0, 255];
console.log(color);

//type with tuple
type HttpResponse = [number, string];
const HTTP_OK: HttpResponse = [200, 'OK'];
// const wrongOrder: HttpResponse = ["OK", 200]; //not allow
// const moreElements: HttpResponse = [200, "OK", true]; //not allow

const responses: HttpResponse[] = [
  [200, 'OK'],
  [404, 'NOT_FOUND'],
];

console.log(responses);
