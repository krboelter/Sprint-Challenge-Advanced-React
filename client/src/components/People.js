import React from 'react';

function People(props) {
    return (
        <div>
            <h1>Name: {props.data.name}</h1>
            <p>Country: {props.data.country}</p>
            <p>Number of Searches: {props.data.searches}</p>
        </div>
    )
}

export default People