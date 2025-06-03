import React from 'react'
import { Home,Briefcase,FilePlus,} from 'lucide-react'
import logoo from './assets/logoo.png' 


const Navbar = () => {
  return (
    
    <div className="fixed top-0 left-0 h-screen w-[10%] border-r border-gray-300 bg-white p-4 z-50">

        <div className="flex justify-center">
            <img src={logoo} alt="Logoo" className="h-12 w-auto" />
        </div>

        <nav className="flex flex-col space-y-6 text-gray-800 text-md">
            <div className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
                <Home size={20} />
                <span>Home</span>
            </div>

            <div className="flex items-center gap-3 hover:text-purple-600 cursor pointer">
                <Briefcase size={20}/>
                <span>Service</span>
            </div>

             <div className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
                <FilePlus size={20} />
                <span>Register</span>
            </div>

            <div className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
                <FilePlus size={20} />  
                <span>More...</span>
            </div>
        </nav>

    </div>
  )
}

export default Navbar