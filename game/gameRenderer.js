export class GameRenderer{
    constructor(game)
    {
        this. game = game
        this. canvas = document.getElementById("canvas");
        this. g = canvas.getContext("2d");
        this.images = []
    }

    loadImages()
    {
        let sources = ["enemy.png", "player.png"];
        for (let i = 0; i < sources.length; i++)
        {
            let loaded = 0
            let img = new Image;
            let scope = this

            img.onload = function()
            {   
                //#1 here
                loaded++;
                scope.game.startGame()

            };
            img.src = sources[i];

            this.images.push(img)
        }
    }


    render()
    {
        let g = this.g
        g.fillStyle = "#000000";
        g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

        if (this.game.death == false)
        {
            g.fillStyle = "#357CF1";
            g.fillRect(this.game.x, 150, 10, 10);
            
            if (this.game.rectangle == true) 
            { 
                this.g.fillstyle = "#357CF1"
                this.g.fillRect(this.game.x, 45, 10, 100)
                this.game.beam+=1;
                if (this.game.beam >= 25)
                {
                    this.game.rectangle=false;
                }
            }

            if (this.game.score <= 10)
            {
                
                g.fillStyle = "#008000";
                g.fillRect(0, 0, 200, 75);
            }
            this.game.gcount += 1
            console.log(this.game.gcount)
            if (this.game.gcount >= 100 && this.game.score <= 10)
            {
                g.fillStyle = "#008000";
                g.fillRect(100, 100, 200, 75);

                if (this.game.x >= 100)
                {
                    this.game.death=true;
                }
                else if (this.game.death==true)
                {
                    g.fillStyle = "#000000";
                    g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
        
                }
            }
        }
    }


}

//#1
//{      
//    if (loaded == sources.length)
//      {
//      scope.game.startGame()
//      }
//}