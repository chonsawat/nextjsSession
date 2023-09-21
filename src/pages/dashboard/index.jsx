import ProtectRoute from "@/components/ProtectRoute";
import DashBoard from "@/components/dashboard/DashBoard";
import React from "react";

const index = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <ProtectRoute>
          <DashBoard />
        </ProtectRoute>
      </div>
    </>
  );
};

export default index;
