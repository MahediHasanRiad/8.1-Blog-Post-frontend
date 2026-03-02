import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function ArticleBody({value, onChange}) {
  const editorRef = useRef(null);

  return (
    <>
      <Editor
        apiKey="deqzw1kh9m5x1xtm2n04q5wt7g75ghlotl5uh48nx24yzrg6"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        value={value}
        onEditorChange={(content) => onChange(content)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}

export default ArticleBody;
