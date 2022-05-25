import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Check = ({ isCompleted }) => {
   return (
      <div
         style={{
            width: '20px', height: '20px', border: 'solid 2px #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', marginRight: '20px',
            backgroundColor: `${isCompleted ? 'rgb(97, 97, 97)' : ''}`,
            borderColor: `${isCompleted ? 'rgb(212, 41, 147)' : ''}`,
            transition: 'all 0.3s ease'
         }}
      >
         {isCompleted && <BsCheck />}

      </div>
   )
}

export default Check