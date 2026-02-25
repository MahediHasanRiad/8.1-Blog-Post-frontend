import InputField from "@/Shared/Components/input";
import React from "react";
import Card from "../Components/card";

function Articles() {
  return (
    <section className="">
      {/* articles  */}
      <section className="">
        <InputField
          placeholder={"start a post .."}
          className={"rounded-3xl w-1/2"}
        />
        <Card
          authorImage={"/public/IMG_20250604_200245.jpg"}
          authorName={"Mahedi Hasan Riad"}
          title={"My 1st Blog"}
          description={
            "Every connection means shared ideas, learning moments, and growing together as developers and professionals. I’m passionate about coding, building, and continuous learning and I look forward to connecting, collaborating, and creating meaningful things with this amazing community"
          }
          articleImage={"/public/cover-image.jpg"}
        />
      </section>
    </section>
  );
}

export default Articles;
