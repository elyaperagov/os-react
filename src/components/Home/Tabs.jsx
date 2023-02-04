import React from 'react'
import { useState } from 'react'

const tabs = [
  {
    id: 1,
    title: 'Свойства',
    description:
      '<ul><li>НОРМАЛИЗУЕТ МИНЕРАЛЬНЫЙ СОСТАВ И ПРОЧНОСТЬ КОСТНОЙ ТКАНИ.</li><li>НОРМАЛИЗУЕТ ЗДОРОВЬЕ МЫШЦ, ХРЯЩЕВЫХ И СОЕДИНИТЕЛЬНЫХ ТКАНЕЙ.</li><li>СНИЖАЕТ ДИСКОМФОРТ В СУСТАВАХ ПРИ ФИЗИЧЕСКИХ НАГРУЗКАХ.</li><li>СПОСОБСТВУЕТ СНИЖЕНИЮ РИСКА ПЕРЕЛОМОВ И ДРУГИХ ТРАВМ.</li><li>СПОСОБСТВУЕТ МЕТАБОЛИЗМУ БЕЛКА.</li></></ul>',
  },
  {
    id: 2,
    title: 'Состав',
    description:
      'ЦИНК помогает поддерЦИНК помогает поддерживать нормальный химическийЦИНК помогает поддерживать нормальный химическийЦИНК помогает поддерживать нормальный химический ЦИНК помогает поддерживать нормальный химическийЦИНК помогает поддерживать нормальный химический ЦИНК помогает поддерживать нормальный химическийЦИНК помогает поддерживать нормальный химический ЦИНК помогает поддерживать нормальный химическийЦИНК помогает поддерживать нормальный химический ЦИНК помогает поддерживать нормальный химическийЦИНК помогает поддерживать нормальный химический ЦИНК помогает поддерживать нормальный химическийЦИНК помогает поддерживать нормальный химический ЦИНК помогает поддерживать нормальный химическийЦИНК помогает поддерживать нормальный химический живать нормальный химический состав костей, способствует поддержанию нормального уровня тестостерона в крови',
  },
  {
    id: 3,
    title: 'Документы',
    description:
    'ВИТАМИН К2 способствует поддержанию нормального состава костей, способствует лечению остеопороза, помогает поддерживать прочность костей в области шейки бедра у женщин в постменопаузе',
  },
  {
    id: 4,
    title: 'Рекомендации',
    description:
      'ВИТАМИН D3 способствует поддержанию нормального состава костей, способствует нормальному содержанию кальция в сыворотке крови.',
  },
  {
    id: 5,
    title: 'Форма выпуска',
    description:
      'ВИТАМИН B6 способствует нормальному метаболизму белка',
  },
]
const Tabs = () => {
  const [actualStep, setActualStep] = useState({
    activeObject: tabs[0],
    objects: tabs,
  })

  const toggleActive = (index) => {
    setActualStep({
      ...actualStep,
      activeObject: actualStep.objects[index],
    })
  }

  function toggleActiveTexts(index) {
    if (actualStep.objects[index] === actualStep.activeObject) {
      return 'Tabs__desc-item active'
    } else {
      return 'Tabs__desc-item inactive'
    }
  }


  function toggleActiveStyles(index) {
    if (actualStep.objects[index] === actualStep.activeObject) {
      return 'Tabs__item active'
    } else {
      return 'Tabs__item inactive'
    }
  }
  return (
    <section className="Tabs">
      <div className="Container__inner">
        <div className="Tabs__items">
            {actualStep.objects.map((item, index) => (
              <div
                key={index}
                className={toggleActiveStyles(index)}
                onClick={() => {
                  toggleActive(index)
                }}
              >
                 <p className='Tabs__item-title'>{item.title}</p>
                 <p className="Tabs__item-desc" dangerouslySetInnerHTML={{ __html: item.description }} ></p>
              </div>
            ))}

        </div>
        </div>
    </section>
  )
}

export default Tabs
