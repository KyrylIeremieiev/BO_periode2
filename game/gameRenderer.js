import { Rect } from "./rect.js";

export class GameRenderer{
    constructor(game)
    {
        this. game = game
        this. canvas = document.getElementById("canvas");
        this. g = canvas.getContext("2d");
        this.images = []
        this.playerSprite = new Rect(87, 17, 175, 109);
        this.enemySprite = new Rect(24, 25, 129, 57);
        this.StartScreen = new Rect(0, 0, 800, 400);
        this.enemybeam= new Rect (40, 0, 85, 187)
        this.score1_ = new Rect(0, 0, 434, 190)
        
    }

    loadImages()
    {
        let sources = ["img/space_enemy.png", "img/player.png", "img/StartScreen.png",
        "img/beam.png", "img/score1.png", "img/score2.png", "img/endscreen.png"];
        for (let i = 0; i < sources.length; i++)
        {
            let loaded = 0
            let img = new Image;
            let scope = this

            img.onload = function()
            {   
                if (this.loaded == sources.length)
                {
                scope.game.startGame()
                }
                this.loaded++;
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

        if (this.game.death == true)
        {
            g.fillStyle = "#000000";
            let sscreen = this.game.sscreen;
            let clip2 = this.StartScreen;
            g.drawImage(this.images[2], 
                clip2.x, clip2.y, clip2.w, clip2.h, 
                sscreen.x, sscreen.y, sscreen.w, sscreen.h)
            
                        
        }
        if (this.game.death == false)
        {
            //score
            if (this.game.score <= 100)
            {
                g.fillStyle = "#008000";
                let sb = this.game.s1;
                let clipS = this.score1_;
                g.drawImage(this.images[4], 
                    clipS.x, clipS.y, clipS.w, clipS.h, 
                    sb.x, sb.y, sb.w, sb.h)
            }
            else if (this.game.score >= 100)
            {
                g.fillStyle = "#008000";
                let sb = this.game.s1;
                let clipS = this.score1_;
                g.drawImage(this.images[5], 
                    clipS.x, clipS.y, clipS.w, clipS.h, 
                    sb.x, sb.y, sb.w, sb.h)
            }
            
            
            //boss
            if (this.game.score <= 100)
            {
                g.fillStyle = "#008000";
                let enemy = this.game.enemy;
                let clip1 = this.enemySprite;
                g.drawImage(this.images[0], 
                    clip1.x, clip1.y, clip1.w, clip1.h, 
                    enemy.x, 20, enemy.w, enemy.h)
                
            }

            //player beam attack
            if (this.game.rectangle == true) 
            { 
                this.g.fillstyle = "#357CF1"
                this.g.fillRect(this.game.player.x, 200, 10, 100)

            }

            //boss beam
            if(this.game.cycle1 == true && this.game.score <= 100 && this.game.gcount <= 500)
            {
                g.fillStyle = "#008000";
                let beam = this.game.enemyBeam;
                let clip3 = this.enemybeam;
                g.drawImage(this.images[3], 
                    clip3.x, clip3.y, clip3.w, clip3.h, 
                    beam.x, beam.y, beam.w, beam.h)
            }

            //player
            g.fillStyle = "#357CF1";
            let player = this.game.player;
            let clip = this.playerSprite;
            g.drawImage(this.images[1], 
                clip.x, clip.y, clip.w, clip.h, 
                player.x, 275, player.w, player.h)

            //end screen
            if (this.game.end == true)
            {
                g.fillStyle = "#000000";
                console.log("end is nigh")
                let sscreen = this.game.sscreen;
                let clip2 = this.StartScreen;
                g.drawImage(this.images[6], 
                clip2.x, clip2.y, clip2.w, clip2.h, 
                sscreen.x, sscreen.y, sscreen.w, sscreen.h)
            }
        }
    }


}

//#1
//{      
