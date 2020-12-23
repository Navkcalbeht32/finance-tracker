const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    { id: 1, text: 'Food', amount: -90 },
    { id: 2, text: 'Gas', amount: -50 },
    { id: 3, text: 'Subscriptions', amount: -30 },
    { id: 4, text: 'Rent', amount: -800 },
    { id: 5, text: 'Pay', amount: 1900 }
];

let transactions = dummyTransactions;

// Add Transactions to DOM list
function addTransactionDOM(transactions) {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    //Add class
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(
            transaction.amount
            )}</span> <button class="delete-btn">x</button>
    `;

    list.appendChild(item);
}

//Init
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
}

init();