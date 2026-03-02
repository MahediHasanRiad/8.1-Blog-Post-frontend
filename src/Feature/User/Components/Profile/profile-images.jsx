import React from "react";
import { useSelector } from "react-redux";

function ProfileImages() {

  // const {} = useSelector((state) => )

  return (
    <section className="relative mb-16">
      {/* cover image  */}
      <div className="w-full h-48 md:h-64 overflow-hidden">
        <img
          src={"/public/cover-image.jpg"}
          alt="Cover"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* profile image */}
      <div className="absolute -bottom-20 left-8">
        <img
          src={"/public/IMG_20250604_200245.jpg"}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>
    </section>
  );
}

export default ProfileImages;
