import { useState } from "react";
import { useHistory } from "react-router";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [blogtext, setBlogText] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, blogtext, author };

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Author:
          <input
            type='text'
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Text:
          <textarea
            required
            rows='4'
            cols='50'
            value={blogtext}
            onChange={(e) => setBlogText(e.target.value)}
          />
        </label>
        {!isPending && <button>Add a Post</button>}
        {isPending && <button disabled>adding Post...</button>}
      </form>
    </div>
  );
};

export default CreatePost;

// 4 params

// title
// author
// text
// id
// button
