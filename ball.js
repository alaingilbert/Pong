/**
 * Copyright 2011,2012 Alain Gilbert <alain.gilbert.15@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


var Ball = function () {
   this.x        = 400;
   this.y        = 300;
   this.radius   = 20;
   this.velocity = 450;
   this.angle    = Math.random() * 2*Math.PI;
};


Ball.prototype.update = function () {
   var deltaTime = (new Date().getTime() - Game.lastFrame.getTime()) / 1000;
   this.x += Math.sin(this.angle) * this.velocity * deltaTime;
   this.y += Math.cos(this.angle) * this.velocity * deltaTime;
};


Ball.prototype.paint = function () {
   Game.ctx.save();

   //Game.ctx.beginPath();
   //Game.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
   //Game.ctx.fill();
   //Game.ctx.closePath();
   Game.ctx.fillStyle = '#000080';
   Game.ctx.fillRect(this.x, this.y, this.radius, this.radius);

   Game.ctx.restore();
};
