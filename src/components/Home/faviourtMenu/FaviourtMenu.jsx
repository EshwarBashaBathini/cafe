'use client';
import Button from '@/components/ui/buttons/Button'
import './faviourtMenu.css'
import { BasketIcon, EyeIcon, HeartIcon, StarIcon} from '@phosphor-icons/react'

const FaviourtMenu = () => {

    const faviourtItems = [
        {
            "id": 1,
            "title": "Americano",
            "icon": "Coffee"
        },
        {
            "id": 2,
            "title": "Espresso",
            "icon": "CoffeeBean"
        },
        {
            "id": 3,
            "title": "Arabica",
            "icon": "Package"
        },
        {
            "id": 4,
            "title": "Coffee Steamy",
            "icon": "Coffee"
        },
        {
            "id": 5,
            "title": "Organic Pack",
            "icon": "ShoppingBag"
        }
    ]

    const products = [
        {
            "id": 1,
            "title": "Coffee Beans",
            "price": 43.78,
            "rating": 5,
            "image": "/images/product1.png"
        },
        {
            "id": 2,
            "title": "Hot Espresso",
            "price": 43.78,
            "rating": 5,
            "image": "/images/product2.png"
        },
        {
            "id": 3,
            "title": "Cafe Latte",
            "price": 43.78,
            "rating": 5,
            "image": "/images/product3.png"
        },
        {
            "id": 4,
            "title": "Classic Cappuccino",
            "price": 43.78,
            "rating": 5,
            "image": "/images/product4.png"
        },
        {
            "id": 5,
            "title": "Premium Coffee Beans",
            "price": 43.78,
            "rating": 5,
            "image": "/images/product5.png"
        },
        {
            "id": 6,
            "title": "Iced Coffee",
            "price": 43.78,
            "rating": 5,
            "image": "/images/product6.png"
        }
    ]

    return (
        <div className='faviourt-menu-container'>
            <div className='faviourt-content-container'>
                <h2 className='faviourt-title'>Our Favorites Menu</h2>
                <p className='faviourt-sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque </p>

            </div>
            <div className='faviourt-content-container-2'>
                <ul className='faviourt-menu-list'>
                    {faviourtItems.map((items) => (
                        <li key={items.id} className='faviourt-menu-item'>
                            <img src="/images/faviourtItem.svg" alt='cafe' />
                            <h3 className='items-title'>{items.title}</h3>

                        </li>
                    ))}
                </ul>
                <ul className='ul-items-faviourts'>
                    {products.map((items) => (
                        <li key={items.id} className='list-items-faviourts'>
                        <div className='list-img-wrapper'>
                            <img src='/images/faviourtMenuItem.svg' className='img-size-menu' alt='faviourt Item' />
                            
                            <div className='btns-container-menu'>
                                <button className='faviourt-btn'><BasketIcon size={22} /></button>
                                <button className='faviourt-btn'><HeartIcon size={22} /></button>
                                <button className='faviourt-btn'><EyeIcon size={22} /></button>
                            </div>
                        </div>
                        <div className='text-content-menu'>
                            <h6 className='coffee-name'>{items.title}</h6>
                            <p className='coffee-rating'><StarIcon size={22} color="#BC9A6C" weight="fill" />{items.rating}</p>
                        </div>
                        <p>${items.price}</p>
                    </li>
                    ))}
                </ul>
            </div>

        </div>
    )


}

export default FaviourtMenu;