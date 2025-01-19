import React from 'react';

const Button = ({ text = 'Book Now', bg = 'bg-orange-500', color = 'text-white' }) => {
    return (
        <div>
            <button className={`${bg} ${color} rounded-full button`}>
                {text}
            </button>
        </div>
    );
}

export default Button;
