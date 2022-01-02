import React  from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{props.title}</span>
                <p>{props.content}</p>
            </div>
            <div className="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
    );
}