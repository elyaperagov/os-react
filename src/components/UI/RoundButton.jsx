import React from 'react'

const PrimaryButton = ({ name }) => {
  return (
    <button className="Button Button--round">
      <p>{name}</p>
    </button>
  )
}

export default PrimaryButton
