import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const cards = [
    { id: 1, title: "Card 1", content: "This is card 1" },
    { id: 2, title: "Card 2", content: "This is card 2" },
    { id: 3, title: "Card 3", content: "This is card 3" },
    { id: 4, title: "Card 4", content: "This is card 4" },
    { id: 5, title: "Card 5", content: "This is card 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };
  console.log(currentIndex);
  return (
    <>
      <div className="flex justify-center items-center w-6/12 p-auto m-auto gap-7">
        <div>
          <div className="bg-blue-500 w-72 h-72 flex flex-col items-center justify-center">
            <div className="py-auto font-bold text-2xl ">
              {cards[currentIndex].id} :This is Tital:{" "}
              {cards[currentIndex].title}
            </div>
            <div className="py-auto">
              This is Paragraph: {cards[currentIndex].content}
            </div>
          </div>
          <div className="bg-blue-500 w-72 h-72 flex flex-col items-center justify-center">
            <div className="py-auto font-bold text-2xl ">
              {cards[currentIndex].id} :This is Tital:{" "}
              {cards[currentIndex].title}
            </div>
            <div className="py-auto">
              This is Paragraph: {cards[currentIndex].content}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 flex justify-center m-auto p-auto">
        <button onClick={handlePrevClick} className="mr-10 bg-black">
          left
        </button>
        <button onClick={handleNextClick} className=" bg-black">
          right
        </button>
      </div>
    </>
  );
}

export default App;
