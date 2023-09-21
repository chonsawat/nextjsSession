import ProtectRoute from "@/components/ProtectRoute";
import SettingPage from "@/components/setting/SettingPage";
import React from "react";

const index = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <ProtectRoute component={SettingPage} />
      </div>
    </>
  );
};

export default index;
