import React from 'react';
import PropTypes from 'prop-types';
import './style.css'


const Progres = ({ percent, nameUser }) => {
    return(
        <div className='Progres'>
           {nameUser('Andrii')}
        </div>
    )
};


Progres.propTypes = {
    percent: PropTypes.number.isRequired,
}

export default Progres;