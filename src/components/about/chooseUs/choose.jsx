'use client';
import './choose.css'
import { chooseUs } from '../data/data'
import { StudentIcon } from '@phosphor-icons/react'

const ChooseUs = () => {
    
    return(
        <div className='why-choose-us-content'>
            <div className='choose-content-container'>
                <h2 className='title-choose-us'>Why Choose us</h2>
                <p className='para-choose-us'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.</p>
            </div>
            <img src='/images/chooseImage.svg' alt='image' className='img-choose-size' />
            <ul className='ul-choose-list'>
                {chooseUs.map((item) => (
                    <li className='choose-item'>
                       <StudentIcon size={52} />
                       <h5 className='item-title-choose'>{item.title}</h5>
                       <p className='item-para-choose'>{item.description}</p>
                    </li>
                ))}
            </ul>

        </div>
    )

}

export default ChooseUs