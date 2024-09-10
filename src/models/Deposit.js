const mongoose = require('mongoose');

const depositSchema = new mongoose.Schema({
    blockNumber: { type: Number, required: true },
    blockTimestamp: { type: Date, required: true },
    fee: { type: Number },
    hash: { type: String, required: true },
    pubkey: { type: String }
});

const Deposit = mongoose.model('Deposit', depositSchema);

module.exports = Deposit;
