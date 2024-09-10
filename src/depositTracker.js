require('dotenv').config(); // Load environment variables from .env file
const {Web3} = require('web3');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Load the ABI for the Beacon Deposit Contract
const abiPath = path.join(__dirname, 'abi.json'); // Ensure your ABI is saved in this file
const contractABI = JSON.parse(fs.readFileSync(abiPath, 'utf8'));

// Ethereum RPC URL from environment variable
const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;

// Web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider(ALCHEMY_API_URL));

// MongoDB connection from environment variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define the schema for the deposit data
const depositSchema = new mongoose.Schema({
    blockNumber: {
      type: Number,
      required: true
    },
    blockTimestamp: {
      type: Date,
      required: true
    },
    fee: {
      type: String,
      required: true
    },
    hash: {
      type: String,
      required: true
    },
    pubkey: {
      type: String,
      required: true
    }
});
  
// Create the model for the deposit data
const Deposit = mongoose.model('Deposit', depositSchema);

// Address of the Beacon Deposit Contract
const contractAddress = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

// Initialize contract instance
const depositContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to detect new deposits
async function detectDeposits() {
    try {
        console.log("Listening for deposit events...");
        
        // Listen for the `DepositEvent` emitted by the contract
        depositContract.events.DepositEvent({
            fromBlock: 'latest'
        }, async (error, event) => {
            if (error) {
                console.error('Error fetching deposit event:', error);
                return;
            }

            // Extract necessary details from the event
            const { blockNumber, transactionHash } = event;
            const block = await web3.eth.getBlock(blockNumber);

            const depositData = {
                blockNumber: blockNumber,
                blockTimestamp: new Date(block.timestamp * 1000), // Convert to milliseconds
                fee: web3.utils.fromWei(event.returnValues.amount, 'ether'), // Replace 'amount' with the correct field name in your ABI
                hash: transactionHash,
                pubkey: event.returnValues.pubkey, // Replace 'pubkey' with the correct field name in your ABI
            };

            console.log("Deposit detected:", depositData);

            // Save deposit to MongoDB
            const newDeposit = new Deposit(depositData);
            await newDeposit.save();
            console.log('Deposit saved to database:', newDeposit);
        });
    } catch (error) {
        console.error('Error detecting deposits:', error);
    }
}

// Function to poll for new deposits and save them to MongoDB
async function pollForNewDeposits() {
    console.log('Polling for new deposits...');

    await detectDeposits(); // This will now be listening for deposit events
    // You no longer need to set an interval for polling because the event listener will listen in real-time
}

// Export the pollForNewDeposits function
module.exports = { pollForNewDeposits };
