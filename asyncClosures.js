function makeFn(j){
  return function() { console.log(j); }
}

for (var i = 0; i < 3; i++) {
  var ithFn = makeFn(i)
  setTimeout( ithFn, 1000 + i);
}
