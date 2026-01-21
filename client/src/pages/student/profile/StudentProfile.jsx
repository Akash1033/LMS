import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useAuth } from "../../../context/AuthContext";

function StudentProfile() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  

  if (loading) return <div><Loading/></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Profile Image */}
        <div className="flex flex-col items-center justify-center border-r md:col-span-1">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src={user.avatar || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F439%2F863%2Foriginal%2Fvector-users-icon.jpg&f=1&nofb=1&ipt=81bcaa7d2338b862392452a136b859b8becd204da62ec2b0c4782db7b0dace4c"}
              alt="user.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-4 text-lg font-semibold text-gray-800">
            {user.name}
          </p>
          <p className="text-sm text-gray-500">Student</p>
        </div>

        {/* Right: Student Details */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ProfileField label="Full Name" value={user?.name} />
          <ProfileField label="Email" value={user?.email} />
          <ProfileField label="Department" value={user?.department} />
          <ProfileField label="Phone" value={user?.phone} />
        </div>
      </div>
      <div></div>
    </div>
  );
}

const ProfileField = ({ label, value }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border">
      <p className="text-xs text-gray-500 uppercase">{label}</p>
      <p className="text-gray-800 font-medium mt-1">{value || "—"}</p>
    </div>
  );
};

export default StudentProfile;
