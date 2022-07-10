import React from 'react'

export default function Town(props) {
  return (
    <li id={props.id}><h4>{props.town.name}</h4></li>
  )
}
