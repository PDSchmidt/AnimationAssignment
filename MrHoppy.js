class MrHoppy {
    constructor (game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./mr_hop.png"), 0, 0, 126, 126, 8, .2, 3, 2);
        this.x = 0;
        this.y = 0;
        this.speed = 0;
    };
    
    update() {
        const frameCount = this.animator.currentFrame();
        switch (frameCount) {
            case 4, 5:
                this.speed = 300;
                break;
            case 3:
                this.speed = 1500;
            case 2:
                this.speed = 750;
                break;
            default:
                this.speed = 0;
        }
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) {this.x = 0;}
    };

    draw(ctx) {
        // ctx.drawImage(ASSET_MANAGER.getAsset("./mr_hop.png"), 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}