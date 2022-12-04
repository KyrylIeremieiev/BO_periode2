import {GameRenderer} from "./gameRenderer.js"
import {GameLogic} from "./gameLogic.js"

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
            _this.rectangle=true;
            _this.beam=0;
            scope.logic.mouseClick(event);   
        }
        setInterval(function () {scope.doGameFrame()}, 33); 
    }

    doGameFrame()
    {
        this.logic.logic();
        this.renderer.render();
    }
}

let game = new Game()
game.init();