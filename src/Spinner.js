import React from 'react';

const Spinner = (props) => {
    return (
        <div id="" className={`ui active dimmer`}>
            <div id="" className={`ui big text loader`}>
                {props.message}
            </div>
        </div>
    )
};
Spinner.defaultProps = {
    message: 'Loading...'
};
export default Spinner;