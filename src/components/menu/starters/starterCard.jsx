'use client'
import StarterItem from './starterItem'
import './starters.css'
import { CoffeeIcon } from '@phosphor-icons/react'

const StarterCard = (props) => {
    const {starterDetail, reverse} = props
    const {id, title, image, items={}} = starterDetail
    const reverseMethod = reverse ? 'reverse-method': ''

    return(
        <div className={`starter-card-container ${reverseMethod}`}>
            <img src={image} alt={title} className='starter-image' />
            <div className='starter-card-context-container'>
                <CoffeeIcon color="#FF9F0D" size={20} />
                <h2 className='starter-card-title' >{title}</h2>
                <ul className='starters-card-ul'>
                    {items.map((starterItem) => (
                        <StarterItem key={starterItem.name} itemDetails={starterItem} />
                    ) )}

                </ul>

            </div>

        </div>
    )
}

export default StarterCard