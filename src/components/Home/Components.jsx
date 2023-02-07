import icon1 from '../../assets/img/ca.svg'
import icon2 from '../../assets/img/zn.svg'
import icon3 from '../../assets/img/k2.svg'
import icon4 from '../../assets/img/d3.svg'
import icon5 from '../../assets/img/b.svg'
import bubbleFive from '../../assets/img/bubble-five.svg'
import semiCircle from '../../assets/img/semi-circle.svg'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Components = () => {
  const components = [
    {
      id: 1,
      title: 'ФРАНЦУЗСКОЕ КАЧЕСТВО',
      icon: icon1,
      description:
        'КАЛЬЦИЙ помогает снизить потерю минеральной плотности костей у женщин в постменопаузе. Низкая минеральная плотность костной ткани является фактором риска остеопоротических переломов.',
    },
    {
      id: 2,
      title: 'ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ',
      icon: icon2,
      description:
        'ЦИНК помогает поддерживать нормальный химический состав костей, способствует поддержанию нормального уровня тестостерона в крови',
    },
    {
      id: 3,
      title: 'НАТУРАЛЬНЫЕ КОМПОНЕНТЫ',
      icon: icon3,
      description:
      'ВИТАМИН К2 способствует поддержанию нормального состава костей, способствует лечению остеопороза, помогает поддерживать прочность костей в области шейки бедра у женщин в постменопаузе',
    },
    {
      id: 4,
      title: 'VEGAN FRIENDLY',
      icon: icon4,
      description:
        'ВИТАМИН D3 способствует поддержанию нормального состава костей, способствует нормальному содержанию кальция в сыворотке крови.',
    },
    {
      id: 5,
      title: '0% ВРЕДНЫХ КОМПОНЕНТОВ',
      icon: icon5,
      description:
        'ВИТАМИН B6 способствует нормальному метаболизму белка',
    },
  ]

  const [actualStep, setActualStep] = useState({
    activeObject: components[0],
    objects: components,
  })

  const toggleActive = (index) => {
    setActualStep({
      ...actualStep,
      activeObject: actualStep.objects[index],
    })
  }

  function toggleActiveTexts(index) {
    if (actualStep.objects[index] === actualStep.activeObject) {
      return 'Components__desc-item active'
    } else {
      return 'Components__desc-item inactive'
    }
  }

  function toggleActiveStyles(index) {
    if (actualStep.objects[index] === actualStep.activeObject) {
      return 'Components__item active'
    } else {
      return 'Components__item inactive'
    }
  }

  const isMobile = useMediaQuery({ query: `(max-width: 767px)` })

  return (
    <section className="Components" id="components">
      <div className="Container">
        {isMobile && (
          <h2 className="Components__title">
            Основные <p>компоненты</p>
          </h2>
        )}
        <div className="Components__inner">
          <img className="Components__bubble" src={bubbleFive} alt="" />
          <div className="Components__info">
            {!isMobile && (
              <h2 className="Components__title">
                Основные <p>компоненты</p>
              </h2>
            )}
            <div className="Components__desc">
              {actualStep.objects.map((item, index) => (
                <div key={index} className={toggleActiveTexts(index)}>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="Components__items">
            {actualStep.objects.map((item, index) => (
              <div
                key={index}
                className={toggleActiveStyles(index)}
                onClick={() => {
                  toggleActive(index)
                }}
              >
                <img src={item.icon} alt="" />
              </div>
            ))}
          </div>
          <div className="Components__semi-circle">
            <img src={semiCircle} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Components
