import React from 'react'

const PrimaryButton = ({ name, setIsOpen }) => {
  return (
    <button onClick={() => setIsOpen(true)} className="Button Button--round">
      <p>{name}</p>
    </button>
  )
}

export default PrimaryButton
