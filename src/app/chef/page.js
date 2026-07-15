import HeaderBanner from "@/components/HeadBanner/headerBanner"
import Container from "@/components/ui/Container"

import Footer from "@/components/footer/footer"
import AboutUs from "@/components/about/aboutUs/aboutUs"
import ChooseUs from "@/components/about/chooseUs/choose"
import TeamMember from "@/components/about/team/teamMember"
import ChefList from "@/components/chef/cheflist"

const Chef = () => {
    return (
        <>
            <HeaderBanner title='Chef' />
            <Container>
                <ChefList />
            </Container>
          
            <Footer />
        </>
    )
}

export default Chef