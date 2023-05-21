// interaction.js
export function displayNodeInfo(node) {
    document.getElementById('node-name').textContent = node.name;
    document.getElementById('node-info').textContent = `
        Meme Currency: ${node.memeCurrency}
        Money Currency: ${node.moneyCurrency}
        Social Capital: ${node.socialCapital}
        Race: ${node.race}
        Personality: ${node.personality}
    `;

    const actionsDiv = document.getElementById('actions');
    actionsDiv.innerHTML = '';
    node.actions.forEach(action => {
        const button = document.createElement('button');
        button.textContent = action;
        button.addEventListener('click', () => handleInteraction(node, action));
        actionsDiv.appendChild(button);
    });
}

export function handleInteraction(node, action) {
    // Handle the action, e.g., update the node's properties
    if (action === 'action1') {
        
        node.memeCurrency -= 10;
        node.textElement.textContent = 'Meme Currency -10';
        node.element.setAttribute('r', node.memeCurrency / 10); // Update the radius
        node.element.setAttribute('fill', 'purple'); // Update the color
    } else if (action === 'action2') {
        node.moneyCurrency -= 10;
        node.textElement.textContent = 'Money Currency -10';
        node.element.setAttribute('r', node.moneyCurrency / 10); // Update the radius
        node.element.setAttribute('fill', 'yellow'); // Update the color
    } else if (action === 'action3') {
        node.socialCapital -= 10;
        node.textElement.textContent = 'Social Capital -10';
        node.element.setAttribute('r', node.socialCapital / 10); // Update the radius
        node.element.setAttribute('fill', 'blue'); // Update the color
    }

    if (node.memeCurrency <= 0 || node.moneyCurrency <= 0 || node.socialCapital <= 0) {
        node.textElement.textContent = 'Node Dead';
        setTimeout(() => node.textElement.textContent = '', 3000);
        node.element.classList.add('blink');
        setTimeout(() => node.element.remove(), 3000);
    }

    displayNodeInfo(node);
}
