
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-xl font-bold text-center">Expenses Tracker</h1>
            <nav className="mt-2 text-center">
                <Link to="/" className="text-white px-4 hover:text-blue-300">Home</Link>
                <Link to="/about" className="text-white px-4 hover:text-blue-300">About</Link>
            </nav>
        </header>
    );
};

export default Header; 
