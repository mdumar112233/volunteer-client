import React from 'react';

const Event = ({event}) => {
    return (
        <div>
            <h3>This is event{event.name}</h3>
        </div>
    );
};

export default Event;