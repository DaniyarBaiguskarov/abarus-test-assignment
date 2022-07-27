import React from "react";
import { PostItem } from "../types/post";
import PostsList from "./PostsList";
import TableHead from "./TableHead";

interface TableProps {
  items: PostItem[];
  page: number;
}

const headerData = [
  { content: "ID", className: "id" },
  { content: "Заголовок", className: "title" },
  { content: "Описание", className: "body" },
];

const Table: React.FC<TableProps> = ({ items, page }) => {
  const currentPageItems = items.slice((page - 1) * 10, (page - 1) * 10 + 10);
  return (
    <table className="table app__table">
      <TableHead data={headerData} />
      <PostsList items={currentPageItems} />
    </table>
  );
};

export default Table;
