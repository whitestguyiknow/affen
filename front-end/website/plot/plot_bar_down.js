function plot_bar_down(ctx, top, left, width, height, data, index, window, axis, color) {

   var dx = width/(window - 1);

   var lower = min(data, index, window);
   var upper = max(data, index, window);

   var stretch = Math.max(upper, -lower)*2;

   // zero line:
   ctx.beginPath();
   ctx.moveTo(left, top);
   ctx.lineTo(left + width, top);
   ctx.strokeStyle = color;
   ctx.stroke();

   // axis
   var count = 10;
   var step = height/count;

   // graph
   ctx.beginPath();

   for (var i = 0; i < window; ++i) {

      var x = left + i*dx;
      var y = top + step*Math.max(- ((Math.log(data(i + index))/Math.log(10))),0);

      ctx.moveTo(x, top);
      ctx.lineTo(x, y);

   }
   ctx.strokeStyle = color;
   ctx.stroke();



var tickLabels = [";","10%","1%","0.1%","1e-3","1e-4","1e-5","1e-6","1e-7","1e-8","1e-9"];

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
         ctx.font = "10px Arial";
         ctx.fillStyle = color;
         //ctx.fillText((i/count).toFixed(4), left + 15, y + 5);
         ctx.fillText(tickLabels[i], left + 15, y + 5);
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
         ctx.moveTo(left + width, y);
         ctx.lineTo(left + width - 10, y);
         ctx.strokeStyle = color;
         ctx.stroke();

         // unit
         ctx.font = "10px Arial";
         ctx.fillStyle = color;
         ctx.fillText((i/count).toFixed(3), left + width - 60, y + 5);

      }
   }
}
