import React from 'react';
import Event from './Event';

const events = [
    {
        name: 'animal shelter',
        image: 'https://i.postimg.cc/j2Q177WG/animal-Shelter.png'
    },
    {
        name: 'animal',
        image: 'https://i.postimg.cc/j2Q177WG/animal-https://i.postimg.cc/HkjSpK2G/babySit.png'
    },
    {
        name: 'Bird-House',
        image: 'https://i.postimg.cc/SKCfRpYP/bird-House.png'
    },
    {
        name: 'Child-Support',
        image: 'https://i.postimg.cc/nrHkNwzP/child-Support.png'
    },
    {
        name: 'Clean-Water',
        image: 'https://i.postimg.cc/d1R6HKqC/clean-Water.png'
    },
    {
        name: 'Clearn-Park',
        image: 'https://i.postimg.cc/sDHc0mRT/clearn-Park.png'
    },
    {
        name: 'Cloth-Swap',
        image: 'https://i.postimg.cc/SNxdr5HX/cloth-Swap.png'
    },
    {
        name: 'Drive-Safety',
        image: 'https://i.postimg.cc/g0ZNhZQN/drive-Safety.png'
    },
    {
        name: 'Extra-volunteer',
        image: 'https://i.postimg.cc/kgZTDc12/extra-Volunteer.png'
    },
    {
        name: 'Food-Charity',
        image: 'https://i.postimg.cc/50WpStM1/food-Charity.png'
    },
    {
        name: 'Goog-Education',
        image: 'https://i.postimg.cc/kgVcrSJq/good-Education.png'
    },
    {
        name: 'I Help',
        image: 'https://i.postimg.cc/XN8x931S/ITHelp.png'
    },
    {
        name: 'Library-Books',
        image: 'https://i.postimg.cc/9QvBcf0T/library-Books.png'
    },
    {
        name: 'Music',
        image: 'https://i.postimg.cc/2y8Q0b9p/music-Lessons.png'
    }
    
]
const Home = () => {
    // const findName = events.filter(img => )
    return (
        <div>
            <h3>This is home{events.name}</h3>
            {
                events.map(event => <Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;