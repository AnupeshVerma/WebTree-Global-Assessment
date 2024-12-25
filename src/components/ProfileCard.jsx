import React, { useState, useEffect } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the data from the API
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  // If no user data yet, show loading
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <p className="text-xl text-white font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 rounded-xl shadow-xl flex max-w-lg w-full p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform border-4 border-gray-700">
        {/* Profile Image */}
        <div className="w-1/3 flex justify-center items-center p-1 border-4 border-gray-700 rounded-lg">
          <img
            src={user.picture.large}
            alt="Profile"
            className="w-40 h-40 object-cover border-4 border-gray-700 shadow-xl"
          />
        </div>

        {/* Profile Details */}
        <div className="w-2/3 pl-8">
          <p className="text-3xl font-semibold text-blue-400 mb-3">
            {user.name.first} {user.name.last}
          </p>
          <p className="text-lg text-gray-300 mb-2">Gender: {user.gender}</p>
          <p className="text-lg text-gray-300 mb-3">Phone: {user.phone}</p>
          <p className="text-md text-gray-400">
            Location: {user.location.city}, {user.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;