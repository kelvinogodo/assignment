import { useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Slider from '../components/slider/Slider';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Slider />
      <div className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-blue-200 p-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-800">
          Commission Management Portal
        </h1>
        <p className="text-gray-700 max-w-xl mb-6 text-lg">
          Empowering Local Governments to manage employee records and documents securely.
        </p>

        <div className="flex gap-6 mt-4 flex-wrap justify-center">
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded flex items-center gap-2 shadow-md"
          >
            <FaUserShield className="text-xl" />
            Admin / LGA Login
          </button>
        </div>
      </div>

      <footer className="text-center p-4 text-sm text-gray-500 border-t">
        &copy; {new Date().getFullYear()} Government Commission System. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
