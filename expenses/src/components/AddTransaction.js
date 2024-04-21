import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(''); // Initialize as empty string

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: parseFloat(amount) // Ensure the amount is a number
        };

        addTransaction(newTransaction);
        setText('');
        setAmount(''); // Reset to empty string after submission
    }

    const makePositive = () => {
        setAmount(Math.abs(parseFloat(amount)).toString()); // Convert to positive
    }

    const makeNegative = () => {
        setAmount((-Math.abs(parseFloat(amount))).toString()); // Convert to negative
    }

    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Add new transaction</h3>
            <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="text" className="block font-medium">Tranasction Name</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." className="mt-1 p-2 border rounded" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="amount" className="block font-medium">Amount</label>
                    <div className="flex items-center space-x-3"><input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." className="mt-1 p-2 border rounded" />
                    <button type="button" onClick={makePositive} className="text-white bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5"></path></svg>
                    </button>
                    <button type="button" onClick={makeNegative} className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path></svg>
                    </button></div>
                    
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
