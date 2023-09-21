"use client";

import React, { useState } from "react";

const ProtectRoute = (props) => {
  const { component: SettingPage } = props;
  const [user, setUser] = useState(null);

  return (
    <>
      <div>
        <p>this is protected with role: {user ? "Admin" : "User"}</p>
        {user ? (
          <>
            <SettingPage />
          </>
        ) : (
          <h2 className="text-2xl text-red-500 animate-pulse font-bold">
            Your are not Admin
          </h2>
        )}
      </div>
    </>
  );
};

export default ProtectRoute;
