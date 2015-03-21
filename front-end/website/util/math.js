function min(data, index, window) {
   var min = Infinity;
   for (var i = 0; i < window; ++i) {
      if (min > data(i + index)) {
         min = data(i + index);
      }
   }
   return min;
}

function max(data, index, window) {
   var max = -Infinity;
   for (var i = 0; i < window; ++i) {
      if (max < data(i + index)) {
         max = data(i + index);
      }
   }
   return max;
}

function normalize(x, min, max) {
   return (x - min)/(max - min);
}
