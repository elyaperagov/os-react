import React from "react";

const Tabs = () => {
  return (
    <section className="Tabs">
      <div className="Container__inner">
        <div className="Tabs__items">
          <div className="Tabs__item">
            <a href="#first" id="first" className="Tabs__item-title">
              Свойства
            </a>
            <a href="#first" className="Tabs__item-info">
              Свойства
            </a>
            <div className="Tabs__item-desc">
              <div className="Tabs__item-desc-inner">
                <ul>
                  <li>
                    Нормализует минеральный состав и прочность костной ткани;
                  </li>
                  <li>
                    Улучшает здоровье мышц, хрящевых и соединительных тканей;
                  </li>
                  <li>
                    Борется с дискомфортом в суставах при физических нагрузках;
                  </li>
                  <li>Снижает риск переломов и других травм;</li>
                  <li>Улучшает метаболизм белка.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Tabs__item">
            <a href="#second" id="second" className="Tabs__item-title">
              Состав
            </a>
            <a href="#second" className="Tabs__item-info">
              Состав
            </a>
            <div className="Tabs__item-desc">
              <div className="Tabs__item-desc-inner">
                <p className="Tabs__item-composition">
                  Ингредиенты, которые содержатся в одной капсуле:
                </p>
                <div className="Composition">
                  <div className="Composition__row">
                    <div className="Composition__text">
                      Морские минералы из цельных известковых морских водорослей
                      (Lithothamnium sp.).
                    </div>
                    <div className="Composition__value">834 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      в том числе кальций
                    </div>
                    <div className="Composition__value">250 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">Сульфат цинка</div>
                    <div className="Composition__value">27,47 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      в том числе цинк
                    </div>
                    <div className="Composition__value">10 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      Бамбуковый экссудат
                    </div>
                    <div className="Composition__value">20 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      в том числе кремний
                    </div>
                    <div className="Composition__value">15 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      Магниевые соли жирных кислот
                    </div>
                    <div className="Composition__value">10 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">Менахинон 7</div>
                    <div className="Composition__value">7 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      в том числе витамин К2
                    </div>
                    <div className="Composition__value">11,25 мкг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">Цианокобаламин</div>
                    <div className="Composition__value">3,5 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      в том числе витамин B12
                    </div>
                    <div className="Composition__value">2,8 мкг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      Пиридоксина гидрохлорид
                    </div>
                    <div className="Composition__value">2,98 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      в том числе витамин B6
                    </div>
                    <div className="Composition__value">2 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">Холекальциферол</div>
                    <div className="Composition__value">2,5 мг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      в том числе витамин D3
                    </div>
                    <div className="Composition__value">5 мкг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      Фолиевая кислота
                    </div>
                    <div className="Composition__value">360 мкг</div>
                  </div>
                  <div className="Composition__row">
                    <div className="Composition__text">
                      в том числе витамин B9
                    </div>
                    <div className="Composition__value">250 мкг</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Tabs__item">
            <a href="#third" id="third" className="Tabs__item-title">
              Документы
            </a>
            <a href="#third" className="Tabs__item-info">
              Документы
            </a>
            <div className="Tabs__item-desc">
              <div className="Tabs__item-desc-inner">
                <a
                  href="https://projectvint.ru/storage/store/catalog/161/os-ru.pdf?v=1624041185"
                  target="_blank"
                >
                  Сертификат
                </a>
              </div>
            </div>
          </div>
          <div className="Tabs__item">
            <a href="#fourth" id="fourth" className="Tabs__item-title">
              Рекомендации
            </a>
            <a href="#fourth" className="Tabs__item-info">
              Рекомендации
            </a>
            <div className="Tabs__item-desc">
              <div className="Tabs__item-desc-inner">
              Рекомендуется в качестве биологически активной добавки к пище — источника кальция, цинка и витаминов групп D, B и K.                            
              </div>
            </div>
          </div>
          <div className="Tabs__item">
            <a href="#fifth" id="fifth" className="Tabs__item-title">
              Форма выпуска
            </a>
            <a href="#fifth" className="Tabs__item-info">
              Форма выпуска
            </a>
            <div className="Tabs__item-desc">
              <div className="Tabs__item-desc-inner">
                30 капсул
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
