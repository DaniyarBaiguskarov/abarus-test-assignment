import React from "react";
import { useActions } from "../hooks/useActions";

interface ColumnHeadProps {
  content: string;
  className: string;
}

const ColumnHead: React.FC<ColumnHeadProps> = ({ content, className }) => {
  const { sortPosts } = useActions();
  return (
    <td
      className={`column-head-${className} column-head`}
      onClick={() => sortPosts(className)}
    >
      <div className={`column-head-${className}__content`}>
        <span className={`column-head-${className}__content__name`}>
          {content}
        </span>
        <div className={`column-head-${className}__content__icon`} />
      </div>
    </td>
  );
};

export default ColumnHead;
