import React from "react";
import PropType from 'prop-types';

const Card = (props) => {
    return (
        <>
            <div className="card h-100 my-2">
                <img src={props.imgSrc} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
                <div className="card-footer" id="btn-ftr">
                    <button type="button" class="btn btn-primary ">{props.btnLabel}</button>
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