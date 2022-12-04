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

        g.fillStyle = "#357CF1";
        g.fillRect(this.game.x, 10, 10, 10);
        
        if (this.game.rectangle == true) 
        { 
            this.g.fillstyle = "#357CF1"
            this.g.fillRect(this.game.x, 20, 10, 100)
            this.game.beam+=1;
            if (this.game.beam >= 10)
            {
                this.game.rectangle=false;
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