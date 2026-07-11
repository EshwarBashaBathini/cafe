import './foodList.css'
import { products } from '../data/data'

const FoodList = () => {

    return (
        <div >
            <ul className='food-list-ul'>
                {products.map((items) => {

                    const bold = items.isFeatured ? "food-title-bold" : ""

                    return (
                        <li key={items.id} className='list-items-food'>

                            {/* <div className={`bg-image-food`}
                               >
                            </div> */}
                            <div className='image-wrapper-food-item'>
                                <img src={items.image} className='image-size-bg' alt={items.title} />
                                {!items.isFeatured &&  <p className='sell-text'>Sell</p>}
                            </div>
                            <div>
                                <p className={`food-title ${bold}`}>{items.title}</p>
                                <div className='price-container'>
                                    <p className="food-price-style">${items.price}</p>
                                    {items.oldPrice && <p className="old-price">${items.oldPrice}</p>}
                                </div>
                            </div>

                        </li>
                    )
                })}
            </ul>

        </div>
    )

}

export default FoodList