import React from 'react'

export default function Issue(props){
    const { title, description, _id} = props
  return (
    <div className="issue">
        <h1>{ title }</h1>
        <h3>{ description }</h3>
        
    </div>
  )
}