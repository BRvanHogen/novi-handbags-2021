import React from 'react';

function Button ({buttonText, isDisabled}) {
    if (!isDisabled) {
        return (
            <button type="button" onClick={() => console.log({buttonText})}>
                {buttonText}
            </button>);
    } else {
        return (<button disabled type="button">
            {buttonText}
        </button>);
    }
}

export default Button;