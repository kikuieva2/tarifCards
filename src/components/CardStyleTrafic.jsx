// TarifCardsList.jsx
import React, { useState } from "react";
import TarifCards from "./TarifCards";

const tarifData = [
  {
    title: "Безлимитный 300",
    price: "руб 300 / мес",
    megabaits: "до 10 Мбит/сек",
    description: "Объем включенного трафика не ограничен",
    colorClass: "blueCard",
  },
  {
    title: "Безлимитный 450",
    price: "руб 450 / мес",
    megabaits: "до 50 Мбит/сек",
    description: "Объем включенного трафика не ограничен",
    colorClass: "greenCard",
  },
  {
    title: "Безлимитный 550",
    price: "руб 550 / мес",
    megabaits: "до 100 Мбит/сек",
    description: "Объем включенного трафика не ограничен",
    isHighlighted: true,
    colorClass: "redCard",
  },
  {
    title: "Безлимитный 1000",
    price: "руб 1000 / мес",
    megabaits: "до 200 Мбит/сек",
    description: "Объем включенного трафика не ограничен",
    colorClass: "blackCard",
    isHighlighted: false,
  },
];

export default function TarifCardsList() {
  const [selectedTarif, setSelectedTarif] = useState(null);
  const handleTarifClick = (tarif) => {
    setSelectedTarif(tarif.title); 
  };

  return (
    <React.Fragment>
      {tarifData.map((tarif, index) => (
        <TarifCards
          key={index}
          {...tarif}
          isSelected={selectedTarif === tarif.title} 
          onClick={() => handleTarifClick(tarif)} 
        />
      ))}
    </React.Fragment>
  );
}
