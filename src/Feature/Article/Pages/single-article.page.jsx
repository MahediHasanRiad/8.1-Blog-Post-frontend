import MainLayout from "@/Layout/Main-Layout";
import React from "react";

function SingleArticle() {
  return (
    <MainLayout className="p-6 space-y-4">
      {/* article title  */}
      <div>
        <h1 className="text-4xl font-semibold">
          {"My 1st official blog is here"}
        </h1>
      </div>
      {/* author info  */}
      <div className="flex items-center space-x-4">
        <img
          src={"/public/IMG_20250604_200245.jpg"}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-sm text-text-0">{"Mahedi Hasan Riad"}</span>
      </div>
      {/* article image  */}
      <img
        src={"/public/cover-image.jpg"}
        alt=""
        className="w-full rounded h-52 object-fill"
      />
      {/* article description  */}
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas
        voluptate fuga hic magnam quia nostrum vitae aspernatur unde velit
        nihil, et, provident alias, perferendis autem aut id numquam tempora
        laudantium sint ea voluptatem aliquid! Necessitatibus pariatur molestias
        rem sapiente vitae totam asperiores molestiae, magnam et assumenda non
        suscipit qui? <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolores.
        Aliquam blanditiis, a dolorem praesentium quidem nostrum? Distinctio,
        iusto asperiores. <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        aspernatur ex autem iste, natus excepturi commodi laboriosam itaque
        inventore nam magnam cum accusantium non tempore.
      </span>
    </MainLayout>
  );
}

export default SingleArticle;
