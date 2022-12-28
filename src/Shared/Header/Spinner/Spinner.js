import React from 'react';

const Spinner = () => {
    return (
        <div className='w-25 m-auto'>
            <button className="btn btn-info mx-auto" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    );
};

export default Spinner;