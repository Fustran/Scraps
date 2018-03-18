let projList = [
    {name: 'bubbleGen', desc: 'created bubbles slowly grow until they pop. This was created as a means to try out the p5.js rendering library.', src: 'bubbleGen/index.html'},
    {name: 'pixiTest', desc: 'A simplistic experement with the PIXI.js rendering library. Images are created and strewn much like a simple partice emitter system.', src: 'pixiTest/index.html'}
];

//create a link for each project
window.onload = () => {
    for (project of projList) {
        let link = document.createElement('a');
        let text = document.createTextNode(project.name);
        link.appendChild(text);
        link.desc = project.desc;
        link.href = project.src;
        link.classList.add('link');
        let container = document.getElementById('cont');
        container.appendChild(link);
        link.onmouseenter = () => {showInfo(link.desc)}
        link.onmouseleave = () => {wipeInfo()}
    }
};

let showInfo = (desc) => {
    let info = document.getElementById('info');
    info.innerHTML = '';
    let newDesc = document.createTextNode(desc);
    info.appendChild(newDesc);
    info.classList.add('fadeIn');
}

let wipeInfo = () => {
    let info = document.getElementById('info');
    info.innerHTML = '';
    info.classList.remove('fadeIn');
}