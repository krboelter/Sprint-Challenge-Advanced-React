import React from 'react';
import People from './People';

function PeopleList(props) {
    return (
        <>
            {props.data.map((person, index) => (
                <People key={index} data={person} />
            ))}
        </>
    )
}

export default PeopleList