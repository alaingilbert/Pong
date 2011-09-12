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


var Item = function () {
   this.width     = 30;
   this.height    = 30;
   this.y         = Math.random() * (Game.canvas.height - this.height);
   this.x         = (Game.canvas.width - this.width ) / 2;
   this.velocity  = 200;
   this.color     = 'green';
   this.direction = Math.floor(Math.random() * 2) == 0 ? 'left' : 'right' ;
};


Item.prototype.paint = function () {
   Game.ctx.save();
   Game.ctx.fillStyle = this.color;
   Game.ctx.fillRect(this.x, this.y, this.width, this.height);
   Game.ctx.restore();
};

Item.prototype.update = function () {
   // Move the opponent.
   var deltaTime = (new Date().getTime() - Game.lastFrame.getTime()) / 1000;
   this.x += this.direction == 'left' ? -this.velocity * deltaTime : this.velocity * deltaTime;
};



var EnlargeItem = function () {
   Item.call(this);
   this.type  = 'enlarge';
};
EnlargeItem.prototype.__proto__ = Item.prototype;


var ReduceItem = function () {
   Item.call(this);
   this.color = 'red';
   this.type  = 'reduce';
};
ReduceItem.prototype.__proto__ = Item.prototype;
