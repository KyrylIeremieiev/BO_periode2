# BO_periode2

Navigatie

Wierframe ready.xd = wireframe
Bo2 Game Omschrijving.pdf = game concept file

De code moet vanuit index.nl.html gerunt worden.


Als je de game alleen wilt runnen moet de code aangepast worden:
in gameRenderer.js:
verander loadImages loadImages() naar:

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


Voor hele website in loadImages:

    loadImages()
    {
        let sources = ["game/img/space_enemy.png", "game/img/player.png", "game/img/StartScreen.png",
        "game/img/beam.png", "game/img/score1.png", "game/img/score2.png", "game/img/endscreen.png"];
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

Je moet het ook dan runnen vanuit game/index.html als je alleen de game wil hebben