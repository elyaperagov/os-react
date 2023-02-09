const BurgerButton = ({ onClick, isVisible }) => {
  return <button onClick={onClick}  className={isVisible ? "Button Button--burger active" : "Button Button--burger"}></button>
}

export default BurgerButton
