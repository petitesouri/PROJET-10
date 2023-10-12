import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";
// import EventCard from "../../components/EventCard";
// import { format } from "prettier";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtB.date) > new Date(evtA.date) ? 1 : -1
  ); 

  const nextCard = () => {
    setTimeout(
      () => setIndex(index + 1 < byDateDesc?.length ? index + 1 : 0),
      5000
    );
  };

  useEffect(() => {
    nextCard();
  });

  // Fonction qui génère une clé aléatoire pour les dots
  const generateID = () => Math.random().toString(36).substr(2, 9);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
      ))}
          <div className="SlideCard__paginationContainer">            
            <div className="SlideCard__pagination">              
              {byDateDesc?.map((dot, radioIdx) => (
                <input
                  key={generateID()}
                  type="radio"
                  name="radio-button"
                  defaultChecked={index === radioIdx}
                />
              ))} 
            </div>            
          </div> 
    </div>
  );
};

export default Slider;
