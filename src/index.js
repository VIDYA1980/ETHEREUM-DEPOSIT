require('dotenv').config(); // Load environment variables from .env file
const { pollForNewDeposits } = require('./depositTracker');

// Start polling for new deposits
pollForNewDeposits()
    .then(() => {
        console.log('Deposit tracking has started.');
    })
    .catch((error) => {
        console.error('Error starting deposit tracking:', error);
    });
