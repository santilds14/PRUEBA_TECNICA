import React from 'react';
import jsonData from '../data/sample.json';
import  '../styles/SeriesPage.css'

function SeriesPage() {
  return (
    <div>
      <h1>Información desde JSON</h1>
      <ul>
        {jsonData.entries.map((entry, index) => (
          <li key={index}>
            <h2>{entry.title}</h2>
            <p>{entry.description}</p>
            <p>Program Type: {entry.programType}</p>
            <p>Release Year: {entry.releaseYear}</p>
            <img
              src={entry.images['Poster Art'].url}
              alt={entry.title}
              width={entry.images['Poster Art'].width}
              height={entry.images['Poster Art'].height}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SeriesPage