import './category.css'

const CoffeeItem = (props) => {
    const {coffeeDetails} = props
    const {id, title, description, icon} = coffeeDetails


    return(
        <div  className='coffee-item-container'>
            <img src={`${icon}`} alt='coffee' />
            <div className='coffee-content'>
                <h3 className='coffee-item-title'>{title}</h3>
                <p className='coffee-item-description'>{description}</p>
            </div>

        </div>
    )
}

export default CoffeeItem