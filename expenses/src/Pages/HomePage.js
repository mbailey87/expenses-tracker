
import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';


export const HomePage = () => {
    return (
        <div className="container mx-auto px-4">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </div>
    );
};

export default HomePage;