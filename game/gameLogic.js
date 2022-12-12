export class GameLogic
{
    constructor(game)
    {
    this.game = game;
    }

    mouseMoved(event)
    {
        this.game.player.x = event.offsetX;
        this.game.y = event.offsetY;
    }

    //mouse click inputs
    mouseClick(event)
    {
        if (this.game.control == true)
        {
            if (this.game.player.x >= 50 && this.game.player.x <= 538)
            {
                this.game.score++
            }
            this.game.rectangle=true;
            this.game.beam=0;
            console.log(this.game.score)
        }
        if (this.game.death == true)
        {
            this.game.death = false;
            this.game.cycle1=false;
            this.game.gcount = 0;
            this.game.score = 0;
        }
        if (this.game.score >= 100)
        {
            this.game.end=true;
        }
    }

    logic()
    {
        //So that beam disappears
        if (this.game.rectangle == true)
        {
            this.game.beam++
        }
        if (this.game.beam >= 20)
        {
            this.game.rectangle = false
        }
        
        //cycles
        
        //cycle1
        if (this.game.gcount >= 100 && this.game.gcount <= 200)
        {
            this.game.cycle1=true;
        }
        if (this.game.gcount >=500)
        {
            this.game.cycle1=false;
        }

        if (this.game.gcount >= 100 && this.game.player.x < 100 && this.game.score <= 100 && this.game.gcount <= 500)
        {
            this.game.death = true
        }
        if (this.game.gcount >= 800)
        {
            this.game.gcount = 0
        }
        
        //debugging
        if (this.game.death == false)
        {
            this.game.control = true;
        }
    }

}