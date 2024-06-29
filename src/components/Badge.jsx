import React from 'react'

const Badge = ({text}) => {
  return (
    <span className="bg-transparent text-lGreen text-sm font-medium me-2 px-2.5 py-0.5 mb-4 rounded dark:bg-lGreen dark:text-dGreen">{text}</span>
  )
}

export default Badge