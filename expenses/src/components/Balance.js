import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    // Determine background color based on the balance value
    const balanceColor = total >= 0 ? 'bg-green-100' : 'bg-red-100';

    return (
        <div className={`my-4 p-5 ${balanceColor} rounded-md shadow`}>
            <h4 className="text-lg font-semibold">Your Balance</h4>
            <h1 className="text-2xl font-bold">${total}</h1>
        </div>
    );
};

