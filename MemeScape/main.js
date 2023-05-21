// main.js
import { generateNodes } from './nodes.js';
import { displayNodeInfo, handleInteraction } from './interaction.js';

const nodes = generateNodes(100);
let rounds = 0;
const svg = document.getElementById('network');
const restartButton = document.getElementById('restart');

function checkGameOver() {
    const playerNode = nodes[0]; // Assuming the first node is the player's node
    if (playerNode.memeCurrency <= 0 || playerNode.moneyCurrency <= 0 || playerNode.socialCapital <= 0 || rounds >= 20) {
        if (playerNode.memeCurrency <= 0 || playerNode.moneyCurrency <= 0 || playerNode.socialCapital <= 0) {
            alert('GAME OVER');
        } else {
            alert('Congratulations Winner!');
        }
        nodes.forEach(node => node.element.removeEventListener('click', displayNodeInfo));
        restartButton.style.display = 'block';
    }
}

nodes.forEach(node => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    // ... the rest of the code
    circle.addEventListener('click', () => {
        displayNodeInfo(node);
        rounds++;
        checkGameOver();
    });
    svg.appendChild(circle);
    node.element = circle;

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', Math.random() * svg.clientWidth);
    text.setAttribute('y', Math.random() * svg.clientHeight);
    text.textContent = '';
    svg.appendChild(text);
    node.textElement = text;

    // ... the rest of the code
});

restartButton.addEventListener('click', () => {
    nodes.forEach(node => svg.removeChild(node.element));
    nodes = generateNodes(100);
    rounds = 0;
    restartButton.style.display = 'none';
    // And you need to re-draw the nodes...
});
