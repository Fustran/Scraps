let projList = {
    bubble: 'src/bubbleGen',
    pixiTest: 'src/PixiTest'
};

//create a link for each project
window.onload = () => {
    for (project in projList) {
        let link = document.createElement('a');
        let text = document.createTextNode(project);
        link.appendChild(text);
        link.href = `${projList[project]}/index.html`;
        link.classList.add('link');
        let container = document.getElementById('cont');
        container.appendChild(link);
    }
};