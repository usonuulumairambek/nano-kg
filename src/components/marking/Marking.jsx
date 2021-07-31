import React from "react";
import "./marking.css";
import p2 from "./images/p2.png";
import p3 from "./images/p3.png";
import p4 from "./images/p4.png";
import p5 from "./images/p5.png";
import p6 from "./images/p6.png";
import p7 from "./images/p7.png";
import p8 from "./images/p8.png";
import p9 from "./images/p9.png";
import p12 from "./images/p12.png";
function Marking() {
  let markingdata = [
    {
      imgname: p2,
      text: "Табак",
    },
    {
      imgname: p3,
      text: "Товары лёгкой промышленности",
    },
    {
      imgname: p4,
      text: "Молочная продукция",
    },
    {
      imgname: p5,
      text: "Упакованная вода",
    },
    {
      imgname: p6,
      text: "Фотоаппараты и лампы вспышки",
    },
    {
      imgname: p7,
      text: "Лекарства",
    },
    {
      imgname: p8,
      text: "Духи и туалетная вода",
    },
    {
      imgname: p9,
      text: "Шины и покрышки",
    },
    {
      imgname: p12,
      text: "Обувь",
    },
  ];
  return (
    <div className="marking">
      <div className="marking__container-tittle">
        <h1>Обязательная маркировка товаров</h1>
      </div>
      <div className="marking__container">
        {markingdata.map((r) => {
          return (
            <div className="marking__container-item">
              <img src={r.imgname} alt="" />
              <p>{r.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Marking;
