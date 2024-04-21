import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';  // Adjust the path as necessary

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);  // Extract deleteTransaction from context

    // Determine text color based on the transaction amount
    const textColor = transaction.amount < 0 ? 'text-red-500' : 'text-green-500';

    return (
        <li className={`flex justify-between items-center p-4 bg-gray-100 my-2 rounded shadow ${textColor}`}>
           <div> <span className='text-black' >{transaction.text} - </span><span>${Math.abs(transaction.amount)}</span></div> 
            <button onClick={() => deleteTransaction(transaction.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Delete
            </button>
        </li>
    );
};

export default Transaction;
