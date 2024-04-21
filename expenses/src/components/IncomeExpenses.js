import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expenses = (amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
    <div className="flex justify-between p-4 mt-6 bg-gray-100 rounded shadow">
        <div className="text-center">
            <h4 className="font-semibold text-green-600">Income</h4>
            <p className="text-lg font-bold">${income}</p>
        </div>
        <div className="text-center">
            <h4 className="font-semibold text-red-600">Expenses</h4>
            <p className="text-lg font-bold">${expenses}</p>
        </div>
    </div>
    );
};

export default IncomeExpenses;
