const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/control', (req, res) => {
    const action = req.body.action;
    console.log('Received action:', action);

    // Handle the action here
    switch (action) {
        case 'volumeUp':
            // Code to increase volume
            break;
        case 'volumeDown':
            // Code to decrease volume
            break;
        case 'power':
            // Code to toggle power
            break;
        default:
            console.log('Unknown action');
    }

    res.json({ status: 'success' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
