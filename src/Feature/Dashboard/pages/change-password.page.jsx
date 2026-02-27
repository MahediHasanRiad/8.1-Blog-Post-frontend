import DashBoardLayout from "@/Layout/DashBoard-Layout";
import ButtonField from "@/Shared/Components/button";
import InputField from "@/Shared/Components/input";
import React, { useState } from "react";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <DashBoardLayout>
      <InputField
        labelText={"Old Password"}
        placeholder={"Enter your old password..."}
        value={oldPassword}
        setInputValue={setOldPassword}
      />
      <InputField
        labelText={"New Password"}
        placeholder={"Enter your new password..."}
        value={newPassword}
        setInputValue={setNewPassword}
      />
      <InputField
        labelText={"Confirm Password"}
        placeholder={"Enter your confirm password..."}
        value={confirmPassword}
        setInputValue={setConfirmPassword}
      />
      <ButtonField text="Save" className="float-right" />
    </DashBoardLayout>
  );
}

export default ChangePassword;
