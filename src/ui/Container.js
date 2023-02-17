import React from 'react';

const Container = ({children}) => {
    return (
        <div>
            <div className='container mx-auto px-10'>{children}</div>
        </div>
    );
};

export default Container;