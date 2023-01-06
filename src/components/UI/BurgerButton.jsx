import React from 'react'

const BurgerButton = ({name}) => {
   return (
      <button className="Button Button--burger">
        {name}
      </button>
   )
}

export default BurgerButton
