import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";

const PostPage = (props: any) => {
  const slug = props.params.slug;

  const getPostContent = () => {
    const folder = "app/posts/";
    const file = `${folder}${slug}.md`;
    const filePath = path.join(process.cwd(), file); // Get the absolute file path

    try {
      const content = fs.readFileSync(filePath, "utf8");
      return content; // Return the content to use it in your component
    } catch (error) {
      console.error("Error reading post content:", error);
      return ""; // Return an empty string or handle the error accordingly
    }
  };

  const postContent = getPostContent();

  return (
    <div>
      <h1>This is a post {slug}</h1>

      <article className="prose lg:prose-x1">
        <Markdown>{postContent}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
