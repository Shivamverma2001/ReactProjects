import React from 'react'

const Card = ({title, content}) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              {title}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{content.subtitle+1}</h2>
          </div>
          <p className="text-gray-300">
            {content.paragraph+2}
          </p>
    </div>
  )
}

export default Card
