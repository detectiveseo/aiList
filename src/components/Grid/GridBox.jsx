import React from 'react';

const GridBox = ({children}) => {
    const {id, name, description, image, published_in, features} = children;
    console.log(children)
    return (
        <div>
                <div className="card w-full h-full glass">
                    <figure>
                        <img src={image} alt="car!"/>
                    </figure>
                    <div className="card-body h-70">
                        <h2 className="card-title">{name}</h2>
                        <p>{description? description : <h6>404 error</h6>}</p>
                        <p>{features.map((feature, index) => <p>{index + 1}. {feature}</p>)}</p>
                        <p>{published_in}</p>
                        <div className="card-actions justify-end">
                           <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default GridBox;