import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Highlighted from "./Highlighted";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ id, title, body }) => {
  const { query } = useTypedSelector((state) => state.posts);
  return (
    <tr className="post">
      <td className="post__id">
        <span className="post__id__content">{id}</span>
      </td>
      <td className="post__title">
        <Highlighted text={title} highlight={query} className="title" />
      </td>
      <td className="post__body">
        <Highlighted text={body} highlight={query} className="body" />
      </td>
    </tr>
  );
};

export default Post;
