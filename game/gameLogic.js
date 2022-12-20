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
                this.game.score+=1
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
            this.game.score=0
            this.game.gcount=0
            this.game.cycle1=false
            this.game.cycle2=false
        }
    }

    colcheck()
    {
        //beam#1
        if (this.game.cycle1 == true
            && this.game.player.x <= (this.game.beamx + 50))
        {
            this.game.death = true;
        }

        //beam#2
        if(this.game.cycle2 == true
            && this.game.player.x <= (this.game.beamx + 50)
            && this.game.player.x >= this.game.beamx)
        {
            this.game.death = true;
        }
    }

    logic()
    {
        if (this.game.cycle2 == true)
        {
            console.log("balls")
        }
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
        //cycle0
        if(this.game.gcount == 0)
        {
            this.game.cycle1=false
            this.game.cycle2=false
        }
        
        //cycle1
        if (this.game.gcount >= 100 && this.game.gcount <= 200)
        {
            this.game.cycle1=true;
            this.game.beamx=40;
        }
        if (this.game.gcount >= 500)
        {
            this.game.cycle1=false;
        }
        //cycle2
        if(this.game.gcount >= 300 && this.game.gcount <= 500)
        {
            this.game.cycle2 = true
            this.game.cycle1=false
            this.game.beamx = 400;
        }
        if (this.game.gcount >= 500)
        {
            this.game.cycle2 = false;
        }

        //cycloop
        if (this.game.gcount >= 800)
        {
            this.game.gcount = 0
        }
        
        if (this.game.death == true)
        {
            this.game.gcount = 0
            this.game.cycle1= false
            this.game.cycle2=false
        }
        
        //debugging
        if (this.game.death == false)
        {
            this.game.control = true;
        }
        this.colcheck()
    }

}