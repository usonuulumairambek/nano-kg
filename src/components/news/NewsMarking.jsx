import React from "react";
import "./news.css";

function NewsMarking() {
  return (
    <div>
      <div className="newsMarking">
        <div className="marking__container-tittle">
          <h1>Новости маркировки</h1>
        </div>
        <div className="">В процессе разработки</div>
      </div>
      <div className="purpose">
        <h1>В чём цель цифровой маркировки товара?</h1>
        <p>
          Главный принцип системы маркировки - это честность перед
          потребителями, прозрачность всех процессов (от производства и
          логистики до отслеживания продаж). <br /> <br /> Система маркировки
          имеет несколько преимуществ: <br /> <br />
          <ul>
            <li>
              {" "}
              Объединение двух компонентов – цифрового решения маркировки и
              инструмента общественного контроля.{" "}
            </li>
            <li>
              Работа со всеми товарами, а не отдельными группами. В перечень
              товаров подлежащих маркировке c 2019 года уже входят: табачная
              продукция, меховые изделия, лекарственные препараты, одежда и
              обувь, постельное бельё, фотокамеры, духи и шины. В дальнейшем
              система распространится на большинство товаров от молока до
              велосипедов.
            </li>
            <li>
              Наличие онлайн-касс, которые синхронизируют данные системы
              маркировки, не допуская к продаже нелегальный товар.
            </li>
            <li>
              Содействие потребителя. Любой человек, у которого на смартфоне
              установлено приложение, сможет проверить легальность товара.
            </li>
            <li>
              Простота использования. Достаточно отсканировать цифровой код Data
              Matrix в приложении, и результаты будут доступны моментально.
            </li>
            <li>
              Надёжность. Благодаря криптографическим технологиям код Data
              Matrix крайне сложно подделать, а информация о контрафакте будет
              храниться в системе.
            </li>
          </ul>
        </p>{" "}
      </div>
    </div>
  );
}

export default NewsMarking;