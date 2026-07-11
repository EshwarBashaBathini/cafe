import Button from '../ui/buttons/Button'
import Container from '../ui/Container' // 1. Import your new container component
import './footer.css'
import { PostData } from '../menu/data/data'

const Footer = () => {
    return (
        <footer className='footer-container-menu'>
            <div className='footer-container-box'>

               
                <Container className='footer-container-11'>
                    <div className='footer-top-container'>
                        <div className='container-1-footer'>
                            <h4 className='support-head-title'><span className='span-head-title'>St</span>ill You Need Our Support ?</h4>
                            <p className='support-head-description'>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                        </div>
                        <div className='input-container'>
                            <input type='email' className='input-email-footer' placeholder='Enter Your Email' aria-placeholder='eshwar' />
                            <Button className='subscribe-now'>Subscribe Now</Button>
                        </div>
                    </div>

                    <div className='footer-bottom-container'>
                        <div className='container-size-bottom'>
                            <h6 className='title-content'>About Us</h6>
                            <p className='description-content'>orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
                            <div className='post-list-items'>
                                <img src='/images/main-course.svg' className='w-[50px]' alt="Main Course" />
                                <div className='post-content'>
                                    <p className='post-title'>Opening Houres</p>
                                    <p className='post-date'>Mon-Sat(8.00-6.00)</p>
                                    <p className='post-date'>Sunday Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className='container-size-bottom'>
                            <h6 className='title-content'>Usefull Links</h6>
                            <ul>
                                <li className='description-content'>About</li>
                                <li className='description-content'>News</li>
                                <li className='description-content'>Patners</li>
                                <li className='description-content'>Team</li>
                                <li className='description-content'>Menu</li>
                                <li className='description-content'>Contact</li>
                            </ul>
                        </div>

                        <div className='container-size-bottom'>
                            <h6 className='title-content'>Help?</h6>
                            <ul>
                                <li className='description-content'>FAQ</li>
                                <li className='description-content'>Terms & Condition</li>
                                <li className='description-content'>Reporting</li>
                                <li className='description-content'>Documentation</li>
                                <li className='description-content'>Support Policy</li>
                                <li className='description-content'>privacy</li>
                            </ul>
                        </div>

                        <div className='container-size-bottom'>
                            <h6 className='title-content'>Recent Post</h6>
                            <ul>
                                {PostData.map((item) => (
                                    <li key={item.id} className='post-list-items'>
                                        <img src='/images/main-course.svg' className='w-[50px]' alt="" />
                                        <div className='post-content'>
                                            <p className='post-title'>{item.title}</p>
                                            <p className='post-date'>{item.date}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>

                {/* 3. Wrap the copyright bar separately so its alignment matches perfectly */}
                <div className='footer-copyright-row'> {/* Full-width wrapper if you want a top border line */}
                    <Container className='footer-container-21'>
                        <div>
                            <p className='copy-right'>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                        </div>
                    </Container>
                </div>

            </div>
        </footer>
    )
}

export default Footer