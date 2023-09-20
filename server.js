const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

app.post('/register', (req, res) => {
    const userData = req.body;

    let existingData = [];

    try {
        const rawData = fs.readFileSync('userData.json');
        existingData = JSON.parse(rawData);

    } catch (error){
        console.error('Error reading userData.json:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }

    const isEmailTaken = existingData.some(user => user.email === userData.email);

    if (isEmailTaken) {
        res.status(400).json({ error: 'Email already exists' });
    } else {
        existingData.push(userData);

        try {
            fs.writeFileSync('userData.json', JSON.stringify(existingData, null, 2));
            res.status(200).json({ message: 'User data saved successfully' });
        } catch (error) {
            console.error('Error writing to userData.json:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
