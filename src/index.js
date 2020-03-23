
exports.min = function min (array) {
    if(arguments.length == 0 || array.length == 0){
        return 0;
    }
    if(Array.isArray(array))
      array.sort(function(a, b) {
          return b - a;
});
      return array[(array.length-1)];
}

exports.max = function max (array) {
    if(arguments.length == 0 || array.length == 0){
        return 0;
    }
      if(Array.isArray(array))
        array.sort(function(a, b) {
            return a - b;
  });
        return array[(array.length-1)];
  }

exports.avg = function avg (array) {
    if(arguments.length == 0 || array.length == 0){
        return 0;
    }
   if(Array.isArray(array))
        return array.reduce((a, b) => (a + b)) / array.length;

}
