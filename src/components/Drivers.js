import React from 'react';
import './Drivers.css'

const Form = ({driversList}) => {
    return(
        <div className='tc'>
            <ul>
                <li className='mainLi'>
                    <span className='name white'>Name</span>
                    <span className='rate white'>Rate</span>
                    <span className='dist white'>distance</span>
                </li>
                {driversList}
            </ul>
        </div>
    )
}

export default Form;