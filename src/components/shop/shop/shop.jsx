import FoodList from "../foodList/foodList";
import Filter from "@/components/shop/filter/filter"


const ShopList = () => {

    return(
        <div className="flex flex-row mt-[120px] mb-[120px]">
            <FoodList />
            <Filter />
        </div>
    )

}

export default ShopList