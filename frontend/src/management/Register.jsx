import React, { Component } from 'react';
import Navbar from '../components/ui/navigation/Navbar';
// import Navbar from '../Navbar';

const Register =() => {
   
       
           

//     const [formData, setFormData] = useState({
//     grade: "",
//     studentName: "",
//     mailingAddress: "",
//     homeAddress: "",
//     parentName: "",
//     age: "",
//     dob: "",
//     phone: "",
//     healthConcerns: "",
//     lectures: [],
//   });

//   const [error, setError] = useState("");

//   const classOptions = [
//     "Science - Chemistry",
//     "Social - Geography",
//     "English Literature",
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleLectureChange = (value) => {
//     const current = formData.lectures;
//     if (current.includes(value)) {
//       setFormData({ ...formData, lectures: current.filter((item) => item !== value) });
//       setError("");
//     } else {
//       if (current.length >= 3) {
//         setError("You can only select up to 3 lectures.");
//       } else {
//         setFormData({ ...formData, lectures: [...current, value] });
//         setError("");
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Registration submitted successfully!");
//   };

  return (
    <>
      <Navbar />

    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center">Student Registration</h2>
      <form 
    //   onSubmit={handleSubmit} 
      className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          className="input-style"
        //   onChange={handleChange}
        />
        <input
          type="text"
          name="studentName"
          placeholder="Student's Name"
          className="input-style"
        //   onChange={handleChange}
        />
        <input
          type="text"
          name="mailingAddress"
          placeholder="Mailing Address"
          className="input-style"
        //   onChange={handleChange}
        />
        <input
          type="text"
          name="homeAddress"
          placeholder="Home Address"
          className="input-style"
        //   onChange={handleChange}
        />
        <input
          type="text"
          name="parentName"
          placeholder="Name of Parents"
          className="input-style"
        //   onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="input-style"
        //   onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          className="input-style"
        //   onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="input-style"
        //   onChange={handleChange}
        />
        <input
          type="text"
          name="healthConcerns"
          placeholder="Health Concerns"
          className="input-style md:col-span-2"
        //   onChange={handleChange}
        />

        <div className="md:col-span-2">
          <label className="block font-medium text-gray-700 mb-2">Class Lectures (max 3):</label>
          <div className="flex flex-col md:flex-row gap-4">
            {/* {classOptions.map((lecture) => (
              <label key={lecture} className="flex items-center">
                <input
                  type="checkbox"
                  value={lecture}
                  checked={formData.lectures.includes(lecture)}
                  onChange={() => handleLectureChange(lecture)}
                  className="mr-2"
                />
                {lecture}
              </label>
            ))} */}
          </div>
          {/* {error && <p className="text-red-500 mt-2">{error}</p>} */}
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Submit Registration
        </button>
      </form>
    </div>
    
    </>
    







        );
    
}

export default Register;
  
