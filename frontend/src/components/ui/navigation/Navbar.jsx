import React from 'react';
import { Home,Briefcase,FilePlus,} from 'lucide-react';
import logoo from '../../../assets/logoo.png' ;
import { Link } from "react-router-dom";
// import Register from '../management/Register.jsx';



const Navbar = () => {
  return (





    // <div className="w-64 min-h-screen border-r border-gray-500 bg-white p-4">
    <div className="fixed top-0 left-0 h-screen w-64 border-r border-gray-500 bg-white p-4 z-50">
        <div className="flex justify-center">
            <img src={logoo} alt="Logoo" className="h-12 w-auto" />
        </div>

        <nav className="flex flex-col space-y-6 text-gray-800 text-md">
            <Link to='/' className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
                <Home size={20} />
                <span>Home</span>
            </Link>

            <div className="flex items-center gap-3 hover:text-purple-600 cursor pointer">
                <Briefcase size={20}/>
                <span>Service</span>
            </div>

             {/* <div className="flex items-center gap-3 hover:text-purple-600 cursor-pointer"> */}
                <Link to="/register" className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
 
                <FilePlus size={20} />
                <span>Register</span>
                </Link>
            {/* </div> */}

            <div className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
                <FilePlus size={20} />  
                <span>More...</span>
            </div>
        </nav>

    </div>
  )
}

export default Navbar