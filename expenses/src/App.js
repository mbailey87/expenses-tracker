import React from 'react';
import AppRoutes from './Routes/AppRoutes'; // Adjust path as needed
import { GlobalProvider } from './Context/GlobalState'; // Adjust path as needed

function App() {
    return (
        <GlobalProvider>
            <div className="App">
                <AppRoutes />
            </div>
        </GlobalProvider>
    );
}

export default App;
