import icon1 from '../../assets/img/ca.svg'
import icon2 from '../../assets/img/zn.svg'
import icon3 from '../../assets/img/k2.svg'
import icon4 from '../../assets/img/d3.svg'
import icon5 from '../../assets/img/b.svg'
import bubbleThree from '../../assets/img/bubble-three.svg'
import semiCircle from '../../assets/img/semi-circle.svg'
import { useState } from 'react'

const Components = () => {
  const components = [
    {
      id: 1,
      title: 'ФРАНЦУЗСКОЕ КАЧЕСТВО',
      icon: icon1,
      description:
        'Кальций помогает снизить потерю минеральной плотности костей у женщин в постменопаузе. Низкая минеральная плотность костной ткани является фактором риска остеопоротических переломов.',
    },
    {
      id: 2,
      title: 'ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ',
      icon: icon2,
      description:
        'Криодробление при t −198 C позволяет сохранить максимум полезных веществ в готовом продукте',
    },
    {
      id: 3,
      title: 'НАТУРАЛЬНЫЕ КОМПОНЕНТЫ',
      icon: icon3,
      description:
        'Эффективность которых доказана, в том числе клиническими исследованиями',
    },
    {
      id: 4,
      title: 'VEGAN FRIENDLY',
      icon: icon4,
      description:
        'В 95% продуктов используются капсулы из растительных материалов.',
    },
    {
      id: 5,
      title: '0% ВРЕДНЫХ КОМПОНЕНТОВ',
      icon: icon5,
      description:
        'Не содержат стеаратов, парафинового масла, консервантов, сахара',
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
  return (
    <section className="Components">
      <div className="Container">
        <div className="Components__inner">
          <img className="Components__bubble" src={bubbleThree} alt="" />
          <div className="Components__info">
            <h2 className="Components__title">
              Основные <p>компоненты</p>
            </h2>
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
