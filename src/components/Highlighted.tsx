import React from "react";

interface HighlightedProps {
  text: string;
  highlight: string;
  className: string;
}

const Highlighted: React.FC<HighlightedProps> = ({
  text,
  highlight,
  className,
}) => {
  if (!highlight.trim()) {
    return <span className={`post__${className}__content`}>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return (
    <span className={`post__${className}__content`}>
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? (
          <mark key={i}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};

export default Highlighted;
