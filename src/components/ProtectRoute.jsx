"use client";

import React, { useState } from "react";

const ProtectRoute = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);

  return (
    <>
      <div>
        <p>this is protected with role: {user ? "Admin" : "User"}</p>
        {children}
      </div>
    </>
  );
};

export default ProtectRoute;
