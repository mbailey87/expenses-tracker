import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';  // Ensure this import points to the updated Transaction component

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3 className="text-lg font-semibold my-4">History</h3>
            <ul className="list-none">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
};

export default TransactionList;
