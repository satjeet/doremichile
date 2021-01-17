import Phaser from 'phaser'


function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: "100%",
    height: "100%",
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
        preload(){
          this.load.image('pueblo','./assets/pueblo.png');

        },
        create:create   
        ,
        update() {
          //this.helloWorld.angle += 1;

        }
      }
  })


  function create(){
    this.add.image(1000, 400, 'pueblo');


  }
}

export default launch
export { launch }


