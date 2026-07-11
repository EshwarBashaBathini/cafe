import HeaderBanner from "@/components/HeadBanner/headerBanner"
import FoodList from "@/components/shop/foodList/foodList"
import Container from "@/components/ui/Container"
import ShopList from "@/components/shop/shop/shop"
import Footer from "@/components/footer/footer"

const Shop = () => {
    return (
        <>
            <HeaderBanner title='Shop' />
            <Container>
                <ShopList />
            </Container>
            <Footer />
        </>
    )
}

export default Shop