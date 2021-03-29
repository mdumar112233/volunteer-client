import React from 'react';

const Event = ({event}) => {
    const deleteBtn = id => {
        // console.log(id)
        // fetch(`/delete/${id}`, {
        //     method: 'DELETE'
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data){
        //         event.target.parentNode.style.display = 'none';
        //     }
        // })
    }
            
    return (
        <div style={{float: 'left', margin:'10px'}}>
            <div>
            <img style={{height: '200px', width: '200px'}} src={event.imgUrl} alt=""/>
            <h4>{event.name} </h4>
            <button onClick={() => deleteBtn(event._id)}>Delete</button>
            </div>
        </div>
    );
};

export default Event;