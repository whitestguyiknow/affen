function plot_line(ctx, top, left, width, height, data, index, window, axis, color) {

   var x_offset = 100;
   var dx = (width-x_offset)/(window - 1);

   var lower = min(data, index, window);
   var upper = max(data, index, window);

   ctx.beginPath();

   var y = top + (1 - normalize(data(index), lower, upper))*height;
   var x = left+x_offset;
   ctx.moveTo(x, y);

   // graph
   for (var i = 1; i < window; ++i) {

      var x = left + (i)*dx+x_offset;
      var y = top + (1 - normalize(data(i + index), lower, upper))*height;

      ctx.lineTo(x, y);

   }
   ctx.strokeStyle = color;
   ctx.stroke();

   // axis
   var step = 30.0;
   var count = height/step;

   for (var i = 1; i < count; ++i) {
      var y = top + i*step;

      if (axis) {
         // true = left

         // grid
         ctx.globalAlpha = 0.1;
         ctx.beginPath();
         ctx.moveTo(left, y);
         ctx.lineTo(left + width, y);
         ctx.strokeStyle = color;
         ctx.stroke();
         ctx.globalAlpha = 1.0;

         // marker
         ctx.beginPath();
         ctx.moveTo(left, y);
         ctx.lineTo(left + 10, y);
         ctx.strokeStyle = color;
         ctx.stroke();

         // unit
         ctx.font = "16px Arial";
         ctx.fillStyle = color;
         ctx.fillText((upper - i*(upper - lower)/count).toExponential(1), left + 15, y + 5);
      } else {
         // false = right

         // grid
         ctx.globalAlpha = 0.1;
         ctx.beginPath();
         ctx.moveTo(left, y);
         ctx.lineTo(left + width, y);
         ctx.strokeStyle = color;
         ctx.stroke();
         ctx.globalAlpha = 1.0;

         // marker
         ctx.beginPath();
         ctx.moveTo(left, y);
         ctx.lineTo(left + 10, y);
         ctx.strokeStyle = color;
         ctx.stroke();

         // unit
         ctx.font = "16px Arial";
         ctx.fillStyle = color;
         ctx.fillText((upper - i*(upper - lower)/count).toExponential(1), left + 10, y + 5);

      }
   }
}
