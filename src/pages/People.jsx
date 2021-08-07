import React from 'react';
import PeopleCard from '../components/PeopleCard';
const People = () => {
    return (
        <div className='lg:flex lg:flex-wrap justify-center'>
            <PeopleCard name='Miss S. Sneha' desig='President' phone='6381484247' />
            <PeopleCard name='Miss Someone' desig='Designation' phone='1234567890' />
            <PeopleCard name='Miss Someone' desig='Designation' phone='1234567890' />
            <PeopleCard name='Miss Someone' desig='Designation' phone='1234567890' />
            <PeopleCard name='Miss Someone' desig='Designation' phone='1234567890' />
            <PeopleCard name='Miss Someone' desig='Designation' phone='1234567890' />

        </div>
    )
}

export default People
