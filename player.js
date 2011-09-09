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


var Player = function () {
   this.position = { x: 790, y: 250 };
   this.x        = 790;
   this.y        = 250;
   this.width    = 10;
   this.height   = 100;
   this.velocity = 350;
   this.move     = false;
   this.diretion = null;
   this.points   = 0;
};


Player.prototype.update = function () {
   if (this.move) {
      // Move the player.
      var deltaTime = (new Date().getTime() - Game.lastFrame.getTime()) / 1000;
      this.y += this.direction == 'up' ? -this.velocity * deltaTime : this.velocity * deltaTime;

      // Make sure the player can't leave the board !
      if (this.y + this.height > Game.canvas.height) {
         this.y = Game.canvas.height - this.height;
      } else if (this.y < 0) {
         this.y = 0;
      }
   }
};


Player.prototype.paint = function () {
   Game.ctx.save();
   Game.ctx.fillRect(this.x, this.y, this.width, this.height);
   Game.ctx.restore();
};
