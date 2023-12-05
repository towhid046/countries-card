import { useState } from "react";
import './Post.css'


export default function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const { title, body } = post;
  const commentInputHandelar = (event) => {
    const inputValue = event.target.value;
    setComment(inputValue);
  };

  const commentSubmitHandelar = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  };

  const [a, b, c] = title.toUpperCase().split(" ")
  console.log(comments);
  return (
    <>
      <div>
        <h2>{`${a} ${b} ${c}:`}</h2>
        <p>{body}</p>
        <form action="" onSubmit={commentSubmitHandelar}>
          <input
          className="comment_box"
            onChange={commentInputHandelar}
            type="text"
            value={comment}
            placeholder="Add a comment"
          />
          <button className="comment_submit_btn" type="submit">Enter</button>
        </form>
        <ul>
          {comments.map((comment) => (
            <li>{comment}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
