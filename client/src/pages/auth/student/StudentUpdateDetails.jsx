import React from 'react'
import { useState } from 'react'

function StudentUpdateDetails() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const updateDetails = ()=>{
    // get data from user
    //check wheather if details mathc => return
    //make api call and send the data 
    //get response
    //redirect to profile





  }
  const handleSubmit = ()=>{}
    
  return (
    <div className=" min-h-screen flex items-center justify-center w-1/2">
      <form onSubmit={handleSubmit} className=" p-6 rounded shadow-lg ">
        <div className=" p-6 rounded  ml-8">
          <h2 className="text-xl font-bold mb-4">Update Details</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            required
            className="border p-2 mb-4 w-full rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            required
            className="border p-2 mb-4 w-full rounded-lg"
          />
          <input
            type="tel"
            placeholder="number"
            value={form.phone}
            onChange={(e) =>{
              const digitsOnly = e.target.value.replace(/\D/g, "");
              setForm((prev) => ({ ...prev, phone: digitsOnly }));
            }}
            required
            className="border p-2 mb-4 w-full rounded-lg"
          />
          
          <button
             disabled={submitting}
            type="submit"
            className="bg-green-500 text-white p-2 rounded w-full"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default StudentUpdateDetails