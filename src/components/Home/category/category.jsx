import './category.css';
import CoffeeItem from './coffeeItem';

export const leftCards = [
  { id: 1, title: "Cappuccino", description: "A rich espresso blended with steamed milk and topped with a thick layer of velvety milk foam.", icon: "/images/coffeeItem.svg" },
  { id: 2, title: "Cafe Latte", description: "A balanced combination of freshly brewed espresso and steamed milk, creating a mild coffee.", icon: "/images/coffeeItem.svg" },
  { id: 3, title: "Dark Coffee", description: "Bold and intense black coffee with a deep roasted flavor, perfect for a strong caffeine kick.", icon: "/images/coffeeItem.svg" },
];

export const rightCards = [
  { id: 4, title: "Turkish Coffee", description: "Traditional finely ground coffee slowly brewed for a rich, aromatic experience.", icon: "/images/coffeeItem.svg" },
  { id: 5, title: "Pancakes", description: "Soft, fluffy pancakes served fresh with your favorite toppings.", icon: "/images/coffeeItem.svg" },
  { id: 6, title: "Coffee Bag", description: "Premium roasted coffee beans carefully packed to preserve freshness and aroma.", icon: "/images/coffeeItem.svg" },
];

const Category = () => {
  return (
    <section className='category-container'>
      {/* 🌟 FIX: Changed from nested category-container to clear header class */}
      <div className='category-header'>
        <h2 className='coffee-category-name'>Coffee Category</h2>
        <p className='coffee-category-title'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
      </div>

      <div className='coffee-category-content-wrapper'>
        {/* Left Cards Column */}
        <ul className='ul-coffee-items'>
          {leftCards.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeItem coffeeDetails={coffee} />
            </li>
          ))}
        </ul>

        {/* Center Hero Images Column */}
        <div className='image-wrapper-category'>
          <img src='/images/leafImage1.svg' className='leaf1' alt='Leaf structural accent' />
          <img src='/images/leafImage2.svg' className='leaf2' alt='Leaf background accent' />
          <img src='/images/coffeeImage.svg' className='coffee-image' alt='Signature hot coffee cup' />
        </div>

        {/* Right Cards Column */}
        <ul className='ul-coffee-items'>
          {rightCards.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeItem coffeeDetails={coffee} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;