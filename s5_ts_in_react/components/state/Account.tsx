"use client";
import { useState } from "react";

type User = {
  name: string;
  email: string;
};

const Account = () => {
  const [user, setUser] = useState<null | User>(null);

  const handleLogin = () => {
    setUser({
      name: "mahdiyar",
      email: "test@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="border border-gray-700 p-5 rounded-lg w-fit align-middle mx-auto mt-5">
      <p>
        Name is: {user?.name} and Email is: {user?.email}
      </p>
      <button
        className="border border-gray-300 px-3 py-2 mx-1 cursor-pointer"
        onClick={() => handleLogin()}
      >
        login
      </button>
      <button
        className="border border-gray-300 px-3 py-2 mx-1 cursor-pointer"
        onClick={() => handleLogout()}
      >
        logout
      </button>
    </div>
  );
};

export default Account;
