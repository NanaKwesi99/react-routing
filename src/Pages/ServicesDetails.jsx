import React from 'react';

const ServicesDetails = (props) => {
    return (
        <div>
            <h1>Services Details: {props.match.params.id} </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde magnam nisi. Est, obcaecati odio? Sit facere aliquam impedit magni eaque doloribus nulla cum aut. Amet, iure! Rerum, tempore quam.</p>
        </div>
    );
}

export default ServicesDetails;
