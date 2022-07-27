import React from "react";
import { PostItem } from "../types/post";
import Post from "./Post";

interface PostsListProps {
  items: PostItem[];
}

const PostsList: React.FC<PostsListProps> = ({ items }) => {
  return (
    <tbody className="table__body">
      {items.map((item, index) => (
        <Post id={item.id} title={item.title} body={item.body} key={index} />
      ))}
    </tbody>
  );
};

export default PostsList;
