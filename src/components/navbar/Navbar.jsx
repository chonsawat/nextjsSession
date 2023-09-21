import React, { useState } from "react";

import { useRouter } from "next/router";
import Button from "../button/Button";

const Navbar = () => {
  const router = useRouter();

  const onClickHandler = (event) => {
    console.log(event.target.name);
    router.push(`/${event.target.name}`);
  };

  return (
    <div className="bg-stone-800 h-16 flex justify-center space-x-5 items-center">
      <Button onClickHandler={onClickHandler} name="" text="Home"/>
      <Button onClickHandler={onClickHandler} name="login" text="Login"/>
      <Button onClickHandler={onClickHandler} name="dashboard" text="Dashboard"/>
      <Button onClickHandler={onClickHandler} name="setting" text="Setting"/>
    </div>
  );
};

export default Navbar;
