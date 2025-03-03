// models/FinancialData.js
const mongoose = require('mongoose');

const FinancialDataSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cash: {
        type: Number,
        default: 0
    },
    savings: {
        type: Number,
        default: 0
    },
    investments: {
        type: Number,
        default: 0
    },
    loan: {
        type: Number,
        default: 0
    },
    creditDebt: {
        type: Number,
        default: 0
    },
    mortgage: {
        type: Number,
        default: 0
    },
    otherDebt: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('FinancialData', FinancialDataSchema);