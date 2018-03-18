let app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x063E4D});
document.body.appendChild(app.view);

let grav = 0.3;

let particles = [];
function loop() {
    for (i = particles.length; i < 20; i++) {
        let particle = new PIXI.Sprite(PIXI.Texture.fromImage('http://i.imgur.com/uLX8bVx.png'));
        particle.anchor.set(0.5);

        let randSize = ((Math.random() * 0.3) + 0.1) * 2;
        particle.scale.x = randSize;
        particle.scale.y = randSize;
        particle.x = app.renderer.width / 2;
        particle.y = app.renderer.height / 3;
        particle.velx = (Math.random() * 2 - 1) * 30;
        particle.vely = (Math.random() * 2 - 1) * 20;

        particle.lifetime = (Math.random() * 30) + 50;
        particle.currentLife = 0;
        particle.rot = (Math.random() * 2 - 1) / 5;

        app.ticker.add((delta) => {
            particle.velx = particle.velx * 0.95;
            particle.vely = (particle.vely * 0.95) + grav;
            particle.x = particle.x + particle.velx;
            particle.y = particle.y + particle.vely;
            particle.rotation = particle.rotation + particle.rot;
            particle.alpha = 1 - (particle.currentLife / particle.lifetime);
            particle.currentLife++;
    });

        app.stage.addChild(particle);
        particles.push(particle);
    }

    for (i=0; i < particles.length; i++) { 
        if (particles[i].currentLife > particles[i].lifetime) {
            app.stage.removeChild(particles[i]);
            particles.splice(i, 1);
        }
    }
}
setInterval(loop, 33);