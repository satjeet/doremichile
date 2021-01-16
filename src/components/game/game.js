import Phaser from 'phaser'

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: {
        init() {
          this.cameras.main.setBackgroundColor("#24252A");
        },
        create() {
          this.helloWorld = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "do re mi chile",
            { font: "40px Arial",  fill: "#ffffff" }
          );
          this.helloWorld.setOrigin(0.5);
        },
        update() {
          this.helloWorld.angle += 1;
        }
      }
  })
}

export default launch
export { launch }