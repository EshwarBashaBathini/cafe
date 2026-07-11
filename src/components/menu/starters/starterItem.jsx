import './starters.css'

const StarterItem = (props) => {
    const {itemDetails} = props
    const {name, description, price, calories} = itemDetails

    return(
        <li className='starter-item-container' >
            <div className='starter-item-title-container'>
                <h5 className='starter-item-title'>{name}</h5>
                <h5 className='starter-item-price'>{price}$</h5>

            </div>
            <p className='starter-item-description'>{description}</p>
            <p className='starter-item-calories'>{calories}</p>

        </li>
    )

}

export default StarterItem