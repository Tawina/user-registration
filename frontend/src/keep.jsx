import { useState } from 'react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { Eye, EyeOff } from 'lucide-react'
import './App.css'

function App() {
  const [phone, setPhone] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div className="flex gap-4">
        <div className="w-1/2 bg-gray-100 p-4">Column 1</div>
        <div className="w-1/2 bg-gray-200 p-4">Column 2</div>
      </div>
      <h1 className="text-3xl font-bold underline">Registration</h1>

      <form className="pt-10">
        <div>
          <label className="text-gray-600">Name: </label>
          <input type="text" className="border rounded w-full px-2 py-1" />
        </div>

        <div className="pt-4">
          <label className="text-gray-600">Phone Number: </label>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={setPhone}
            enableSearch={true}
            inputStyle={{
              width: '100%',
              borderRadius: '0.25rem',
              border: '1px solid #d1d5db',
              paddingLeft: '48px',
              paddingRight: '0.5rem',
              textAlign: 'left',
            }}
            buttonStyle={{
              border: 'none',
              backgroundColor: 'transparent',
              paddingLeft: '8px',
            }}
            dropdownStyle={{
              textAlign: 'left',
            }}
          />
        </div>

        <div className="pt-4 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <label className="text-gray-600">Password: </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="border rounded w-full px-2 py-1 pr-10"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          

          {/* Tooltip */}
          {isHovered && (
            <div className="absolute bg-gray-700 text-white text-xs rounded px-2 py-1 mt-1 shadow-md z-10">
              Password must be at least 8 characters, include 1 number and 1 uppercase letter.
            </div>
          )}
        </div>
      </form>
    </>
  )
}

export default App