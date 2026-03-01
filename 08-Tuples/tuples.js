//tuple
//fixed length & fixed type & order matters
var color = [255, 0, 255];
console.log(color);
var HTTP_OK = [200, 'OK'];
// const wrongOrder: HttpResponse = ["OK", 200]; //not allow
// const moreElements: HttpResponse = [200, "OK", true]; //not allow
var responses = [
    [200, 'OK'],
    [404, 'NOT_FOUND'],
];
console.log(responses);
