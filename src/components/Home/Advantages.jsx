import Advantage from './Advantage'
import icon1 from '../../assets/img/quality-icon.svg'
import icon2 from '../../assets/img/tech-icon.svg'
import icon3 from '../../assets/img/comp-icon.svg'
import icon4 from '../../assets/img/friendly-icon.svg'
import icon5 from '../../assets/img/harmful-icon.svg'
import icon6 from '../../assets/img/package-icon.svg'
import os from '../../assets/img/os.png'

const advantages = [
  {
    id: 1,
    title: 'ФРАНЦУЗСКОЕ КАЧЕСТВО',
    icon: icon1,
    description:
      'Производство входит в десятку лидеров фармацевтической промышленности стран Евросоюза',
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
  {
    id: 6,
    title: 'ЭКСКЛЮЗИВНАЯ УПАКОВКА',
    icon: icon6,
    description:
      'Авторский дизайн, вдохновленный творчеством Ван Гога и Пабло Пикассо',
  },
]

const Advantages = () => {
  return (
    <section className="Advantages">
      <div className="Container">
        <h2 className="Advantages__title">Преимущества</h2>
        <div className="Advantages__items">
          {advantages.map((item) => (
            <Advantage item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
