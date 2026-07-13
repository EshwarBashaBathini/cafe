import HeaderBanner from "@/components/HeadBanner/headerBanner"
import Container from "@/components/ui/Container"

import Footer from "@/components/footer/footer"
import AboutUs from "@/components/about/aboutUs/aboutUs"
import ChooseUs from "@/components/about/chooseUs/choose"
import TeamMember from "@/components/about/team/teamMember"

const About = () => {
    return (
        <>
            <HeaderBanner title='About' />
            <Container>
                <AboutUs />
                <ChooseUs />     
            </Container>
            <TeamMember />
            <Footer />
        </>
    )
}

export default About