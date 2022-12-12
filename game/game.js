import {GameRenderer} from "./gameRenderer.js"
import {GameLogic} from "./gameLogic.js"
import {Rect} from "./rect.js"  
class Game
{
    constructor()
    {
        this.logic = new GameLogic(this);
        this.renderer = new GameRenderer(this);
        this.x = 0;
        this.y = 0;
        this.rectangle=false;
        this.beam = 0;
        this.score=0;
        this.genc=0;
        this.gcount=0;
        this.death=true;
        this.boss=false;
        this.cycle1=false;
        this.end=false;
        this.control=false;
        this.wfc=0;
        this.player = new Rect(0, 0, 24, 24)
        this.enemy=new Rect(200, 50, 350, 100)
        this.sscreen=new Rect(0, 0, 800, 400)
        this.enemyBeam= new Rect (34, 40, 85, 250)
        this.s1 = new Rect(200, 250, 434, 190)
    }

    init()
    {
        this.renderer.loadImages();
    }

    startGame()
    {
        let scope = this;
        
        this.renderer.canvas.addEventListener("mousemove", function(event) 
        {
            scope.logic.mouseMoved(event)
        })
        let _this = this;

        this.renderer.canvas.addEventListener('click', canvasClicked, false);
        function canvasClicked(event) 
        {
            scope.logic.mouseClick(event);  
             
        }
        this.cycle1 = false;
        setInterval(function () {scope.doGameFrame()}, 33); 
    }

    doGameFrame()
    {
        this.gcount+=1
        this.logic.logic();
        this.renderer.render();
    }
}

let game = new Game()
game.init();