
import Header from '../components/Header';  // Import the Header component

export const AboutPage = () => {
    return (
        <div className="max-w-full">
            <Header />
            <div className="container mx-auto px-4 mt-10">    <h1 className="text-xl font-bold text-center mb-4">About the Expenses Tracker App</h1>
            <p className="text-base text-gray-700 text-justify">
                This Expenses Tracker App is designed to help individuals manage their personal finances 
                more effectively. Users can track their income and expenses, visualize their financial 
                well-being, and make informed decisions about their budgeting practices. The app is built 
                using React and TailwindCSS for styling.
            </p>
            <p className="text-base text-gray-700 text-justify mt-4">
                The purpose of this app is not only to provide a functional and easy to use user experience,
                but also to demonstrate my proficiency in React development.
            </p>
            <p className="text-base text-gray-700 text-justify mt-4">
                We hope this tool assists you in achieving better financial clarity and encourages  financial dicipline.
            </p></div>
            
        
        </div>
    );
}

export default AboutPage;  // Export as default if using default import
