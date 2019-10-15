import React from 'react'

export default function Card(props){
  return(
    <div className='personCard'>
      <h2 id='id-num' >{props.person.id}/25</h2>
      <h2>{props.person.name.first} {props.person.name.last}</h2>
      <h4>From: {props.person.city}, {props.person.country}</h4>
      <h4>Job Title: {props.person.title}</h4>
      <h4>Employer: {props.person.employer} </h4>
      <h4>Favorite Movies: </h4>
      <ol>
        <li>{props.person.favoriteMovies[0]} </li>
        <li>{props.person.favoriteMovies[1]} </li>
        <li>{props.person.favoriteMovies[2]} </li>
      </ol>
    </div>
  )
}