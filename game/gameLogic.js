export class GameLogic
{
    constructor(game)
    {
    this.game = game;
    }

    mouseMoved(event)
    {
        this.game.x = event.offsetX;
        this.game.y = event.offsetY;
    }

    mouseClick(event)
    {
        console.log(this.game.score)
    }

    logic()
    {

    }
}