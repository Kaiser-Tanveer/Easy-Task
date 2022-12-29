import React from 'react';
import { } from 'react-spinners';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Spinner = () => {
    return (
        <div className='d-flex mx-auto justify-content-center' style={{ height: "80vh", marginTop: "45vh" }}>
            <PacmanLoader color="#0dcaf0" />
        </div>
    );
};

export default Spinner;