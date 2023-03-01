import React from "react";
import PropType from 'prop-types';

const Card = (props) => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={props.imgSrc} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}


Card.propTypes = {
    imgSrc: PropType.string,
    title: PropType.string,
    text: PropType.string,
    btnUrl: PropType.string,
    btnLabel: PropType.string
}

export default Card;