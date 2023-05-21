// nodes.js
export function generateNodes(num) {
    const nodes = [];

    for (let i = 0; i < num; i++) {
        const node = {
            id: i,
            name: `Node ${i}`,
            memeCurrency: Math.floor(Math.random() * 100),
            moneyCurrency: Math.floor(Math.random() * 100),
            socialCapital: Math.floor(Math.random() * 100),
            race: Math.random() < 0.5 ? 'human' : 'alien',
            personality: Math.random() < 0.5 ? 'introvert' : 'extrovert',
            // Generate a random set of actions
            actions: ['action1', 'action2', 'action3'].sort(() => Math.random() - 0.5).slice(0, Math.ceil(Math.random() * 3))
        };

        nodes.push(node);
    }

    return nodes;
}
