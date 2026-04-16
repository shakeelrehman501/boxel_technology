import React from 'react'

interface Props {
    title: string,
    className?:string
}

function Heading({title="Title", className}:Props) {
  return (
      <div className={`text-center  ${className}`}>
          <div>
            <h1 className="text-3xl sm:text-[36px]  font-bold leading-10">{title}</h1>
          </div>
          </div>
  )
}

export default Heading
