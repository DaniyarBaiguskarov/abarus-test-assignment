import React from "react";

interface PagesListProps {
  totalPages: number;
  setPostsPage(page: number): void;
  currentPage: number;
}

const PagesList: React.FC<PagesListProps> = ({
  totalPages,
  setPostsPage,
  currentPage,
}) => {
  const arr = [...Array(totalPages).fill(0)];

  const changePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const page = +(e.target as HTMLDivElement).innerHTML;
    setPostsPage(page);
  };
  return (
    <div className="pages app__pages">
      <div
        className={
          currentPage === 1 || totalPages === 0
            ? "pages__button_disabled"
            : "pages__button"
        }
        onClick={() => {
          setPostsPage(currentPage - 1);
        }}
      >
        Назад
      </div>
      <div className="pages__list">
        {arr.map((item, index) => (
          <div
            className={
              currentPage === index + 1
                ? "pages__list__page_active"
                : "pages__list__page"
            }
            onClick={changePage}
            key={index}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div
        className={
          currentPage === totalPages || totalPages === 0
            ? "pages__button_disabled"
            : "pages__button"
        }
        onClick={() => {
          setPostsPage(currentPage + 1);
        }}
      >
        Далее
      </div>
    </div>
  );
};

export default PagesList;
