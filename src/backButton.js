let div = document.createElement('div');
div.className = 'backButton';
div.onclick = () => {window.history.back();}
document.body.appendChild(div);