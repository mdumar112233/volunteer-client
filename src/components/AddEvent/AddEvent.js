import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imgUrl: imageUrl
        }
        if(imageUrl){
            fetch('https://mysterious-oasis-81971.herokuapp.com//addEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('response successfully'))
        }
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '0bbd94d120064c98ef673307396657da');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="new event" ref={register} />
                <br/>
                <input name="exampleRequired" type='file' onChange={handleImageUpload}  />
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;