'use client'
import './filter.css'
import { categories, priceFilter, latestProducts, productTags} from '../data/data'
import { Slider } from '@/components/ui/slider'
import { useState } from 'react';
import Rating from '@/components/ui/rating';


const Filter = () => {

    const [priceRange, setPriceRange] = useState([0, 8000]);


    return (
        <div className='filter-box-container'>
            <div className='input-container-shop'>
                <input type='search' className='search-product-1' placeholder='Search Product' />
            </div>
            <div className='input-container-shop' >
                <h6 className='category-heading'>Category</h6>
                <div>
                    {categories.map((item) => (
                        <label
                            key={item.id}
                            className="flex items-center gap-2 mb-3 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                className="w-4 h-4 accent-orange-500"
                            />
                            <span className='span-categoires-name'>{item.name}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className='input-container-shop'>
                <h6 className='category-heading'>Filter by Price</h6>

                <div>
                    <Slider
                        className="slider-style"
                        value={priceRange}
                        min={0}
                        max={8000}
                        step={50}
                        onValueChange={(value) => {
                            setPriceRange(value);
                        }}
                    />

                </div>
                <div className='price-filter-row'>
                    <p className='price-filter-row'>From ${priceRange[0]} to ${priceRange[1]}</p>
                    <p className='price-filter-row'>Filter</p>
                </div>


            </div>
            <div className='input-container-shop'>
                 <h6 className='category-heading'>Latest Products</h6>
                 <ul className='latest-products-ul-shop'>
                    {latestProducts.map((product) => {
                        console.log(product)
                        console.log("***")
                        return(
                            <li key={product.id} className="latest-product-item">
                                <img src='/images/productImage.svg' className='latest-product-image' alt={product.title} />
                                <div className='latest-product-content'>
                                    <p className='product-title'>{product.title}</p>
                                    <p className='latest-product-rating'><Rating rating={product.rating} /></p>
                                    <p className='latest-product-price'>${product.price}</p>
                                </div>
                            </li>
                        )
                    })}
                 </ul>
            </div>
             <div className='input-container-shop'>
                 <h6 className='category-heading'>Latest Products</h6>
                 <ul className='latest-products-ul-shop'>
                    {productTags.map((tag) => {
                        console.log("ESHWARAAAA")
                        
                        return(
                            <li key={tag} className="latest-product-item">
                                <p className='tags-name'>{tag}</p>                               
                            </li>
                        )
                    })}
                 </ul>
            </div>

        </div>
    )

}

export default Filter
