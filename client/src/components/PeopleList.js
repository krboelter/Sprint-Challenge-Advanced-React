import React from 'react';
import People from './People';

function PeopleList(props) {
    return (
        <div className="list-container">
            {props.data.map((person, index) => (
                <People key={index} data={person} />
            ))}
        </div>
    )
}

export default PeopleList