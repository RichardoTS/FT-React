import React from "react";
import PropType from 'prop-types';

const Jumbtron = (props) => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{props.display}</h1>
                <p className="col-md-8 fs-4">{props.description}</p>
                <button className="btn btn-primary btn-lg" type="button">{props.bttnLabel}</button>
            </div>
        </div>
    );
}

Jumbtron.propTypes = {
    display: PropType.string,
    description: PropType.string,
    bttnLabel: PropType.string
}

export default Jumbtron;