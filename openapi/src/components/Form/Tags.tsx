import clsx from "clsx";
import { FC, useState } from "react";

interface TagCardsProps {
  nameTag: string[];
  onChange: (name: string, value: boolean) => void;
}

const TagCards: FC<TagCardsProps> = ({ nameTag, onChange }) => {
  const [tagValues, setTagValues] = useState<{ [key: string]: boolean }>(
    nameTag.reduce((acc, tag) => ({ ...acc, [tag]: false }), {})
  );

  const handleClick = (tag: string) => {
    const newTagValues = { ...tagValues, [tag]: !tagValues[tag] };
    setTagValues(newTagValues);
    onChange(tag, newTagValues[tag]);
    console.log(`${tag}:${newTagValues[tag]}`)
  };

  return (
    <div className="flex flex-wrap space-x-[1vw]">
      {nameTag.map(tag => (
        <div
          key={tag}
          className={clsx(
            "flex justify-center rounded-full px-[1vw] py-[0.5vh]",
            tagValues[tag] === false ? "bg-[#E8E8E8]" : "bg-green-500 text-white"
          )}
          onClick={() => handleClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagCards;
