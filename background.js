class Background {
    constructor(w, h, ctx) {
      this.ctx = ctx
      this.img = new Image();
      this.img.src = "images/bg.png"
      this.h = h
      this.w = w
  
      this.x = 0;
      this.y = 0;
  
      this.dy = 1;
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      );
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y - this.h,
        this.w,
        this.h
      );
    }
  
    move() {
        this.y += this.dy;
        if (this.y > this.h) this.y = 0;
      }
  }