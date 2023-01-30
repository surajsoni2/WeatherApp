import React from 'react'

const Cards = (props) => {
  return (
    <>
        <div className="card">
            <p className='propIcon'><i className={props.item.icon}></i></p>
            <p className="propValue">
                {props.item.value} <br />
                <span>{props.item.name}</span>
            </p>
        </div>
    </>
  )
}

export default Cards