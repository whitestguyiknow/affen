function plot_line(ctx, top, left, width, height, data, index, window, axis, color) {

   var dx = width/window;

   var lower = min(data, index, window);
   var upper = max(data, index, window);

   ctx.beginPath();

   // draw
   for (var i = 1; i < window; ++i) {

      var y1 = top + normalize(data(i + index - 1), lower, upper)*height;
      var y2 = top + normalize(data(i + index), lower, upper)*height;
      var x1 = left + (i - 1)*dx;
      var x2 = left + (i)*dx;

      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);

      ctx.strokeStyle = color;
      ctx.stroke();
   }

   // TODO: axis
}
