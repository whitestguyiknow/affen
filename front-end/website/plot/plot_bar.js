function plot_bar(ctx, top, left, width, height, data, index, window, axis, color) {

   var dx = width/(window - 1);

   var lower = min(data, index, window);
   var upper = max(data, index, window);

   var stretch = Math.max(upper, -lower)*2;

   // zero line:
   ctx.beginPath();
   ctx.moveTo(left, top + height/2);
   ctx.lineTo(left + width, top + height/2);
   ctx.strokeStyle = color;
   ctx.stroke();

   // graph
   ctx.beginPath();
   for (var i = 0; i < window; ++i) {

      var x = left + i*dx;
      var y = data(i + index)/stretch*height + top + height/2;

      ctx.moveTo(x, top + height/2);
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
         ctx.fillText((stretch/2 - i/count*stretch).toExponential(1), left + 15, y + 5);
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
         ctx.font = "16px Arial";
         ctx.fillStyle = color;
         ctx.fillText((stretch/2 - i/count*stretch).toExponential(1), left + width - 60, y + 5);

      }
   }
}