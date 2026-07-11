import Footer from "@/components/footer/footer"
import HeaderBanner from "@/components/HeadBanner/headerBanner"
import Desserts from "@/components/menu/dessert/dessert"
import MiddleBanner from "@/components/menu/middleBanner/middleBanner"
import Starters from "@/components/menu/starters/starters"


const Dashboard = () => {
    return(
        <>
        <HeaderBanner title="Menu" />
        <Starters />
        <MiddleBanner />
        <Desserts />
        <Footer />
        </>
    )

}

export default Dashboard