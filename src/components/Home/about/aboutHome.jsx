import Button from '@/components/ui/buttons/Button'
import './aboutHome.css'
import Category from '../category/category'
import WhyChooseUse from '../whyChooseUs/whyChooseUs'
import FaviourtMenu from '../faviourtMenu/FaviourtMenu'
import ChefHome from '../chef/chef'
import Customer from '../customer/customer'
import BlogNews from '../blog/blog'
import Partners from '../partners/partners'
import Footer from '../footer/footer'
import Container from '@/components/ui/Container'

const AboutHome = () => {

    return (
        <div className='bottom-section'>
            <Container>
                <div className='about-section'>
                    <div className='images-wrapper'>
                        <img src='/images/topCoffee.svg' className='top-Image' alt='top Coffee' />
                        <img src='/images/dotImages.svg' className='middle-Image' alt='top Coffee' />
                        <img src='/images/bottomCoffee.svg' className='bottom-Image' alt='top Coffee' />

                    </div>
                    <div className='about-content'>
                        <p className='about-title'>About</p>
                        <h3 className='about-head'>We are the best quality Coffee maker</h3>
                        <p className='about-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pelle ntesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urn a, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        <ul className='ul-items-home'>
                            <li>Experienced Chefs </li>
                            <li>Fresh & Organic </li>
                            <li>Experienced Chefs </li>
                        </ul>
                        <Button className='learn-more-btn'>
                            Learm More
                        </Button>
                    </div>
                </div>
                <Category />
                <WhyChooseUse />
                <FaviourtMenu />
                <ChefHome />
                <Customer />
                <BlogNews />
                <Partners />
            </Container>


        </div>
    )

}

export default AboutHome