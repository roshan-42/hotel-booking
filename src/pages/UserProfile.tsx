import React, { useEffect, useState } from "react";
import api from "../utils/api";

const UserProfile: React.FC = () => {
  // Dummy user data
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    address: "123 Main St, Apt 4B",
    country: "USA",
    city: "New York",
    gender: "Male",
  };
  const [userData, setUserData] = useState();

  // Generate initials
  const initials = userData?.first_name.charAt(0).toUpperCase();
  const getUserData = async () => {
    try {
      const response = await api.get("/accounts/api/user/profile/");
      console.log("Check user profile response", response?.data?.data);
      setUserData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center space-x-6 mb-6">
          {/* Profile Picture Placeholder */}
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-500 text-white text-4xl font-bold">
            {initials}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              {userData?.first_name} {userData?.last_name}
            </h2>
            <p className="text-gray-500 text-lg">{userData?.email}</p>
          </div>
        </div>
        <div className="text-gray-700 text-lg space-y-2">
          <p>
            <span className="font-semibold">Address:</span> {userData?.address}
          </p>
          <p>
            <span className="font-semibold">City:</span> {userData?.city}
          </p>
          <p>
            <span className="font-semibold">Country:</span> {userData?.country}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {userData?.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
