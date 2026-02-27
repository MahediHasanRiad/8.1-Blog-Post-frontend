import DashBoardLayout from "@/Layout/DashBoard-Layout";
import ButtonField from "@/Shared/Components/button";
import InputField from "@/Shared/Components/input";
import React, { useState } from "react";

function EditProfile() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [profile, setProfile] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const updateProfile = () => {};

  return (
    <DashBoardLayout>
      <section className="grid md:grid-cols-2 gap-4">
        <InputField
          labelText={"Email"}
          placeholder={"riad@gmail.com"}
          setInputValue={''}
          value={''}
          readOnly = {true}
          className={'border-gray-300'}
        />
        <InputField
          labelText={"Name"}
          placeholder={"Enter your name..."}
          setInputValue={setName}
          value={name}
        />
        <InputField
          labelText={"Mobile"}
          placeholder={"Enter your mobile number..."}
          setInputValue={setMobile}
          value={mobile}
        />
        <InputField
          labelText={"Profile Image"}
          type="file"
          value={profile}
          setInputValue={setProfile}
        />
        <InputField
          labelText={"Cover Image"}
          type="file"
          value={coverImage}
          setInputValue={setCoverImage}
        />
      </section>
      {/* save button  */}
        <section className="float-right">
          <ButtonField text="Save" />
        </section>

    </DashBoardLayout>
  );
}

export default EditProfile;
