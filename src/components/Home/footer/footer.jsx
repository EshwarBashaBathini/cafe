'use client'

import Container from '@/components/ui/Container'
import './footer.css'
// import '../chef/chef.css'
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeOpenIcon, MetaLogoIcon, XLogoIcon, PinterestLogoIcon, VideoCameraIcon } from '@phosphor-icons/react'

const Footer = () => {

    return (
        <footer className="footer-container">
            <Container>

                <div className="footer-container-3">
                    <h4 className="subscribe-news">
                        Subscribe To Our Newsletter
                    </h4>

                    <input
                        type="email"
                        className="input-email"
                        placeholder="Enter your email"
                    />

                    <div className="footer-social-btns-container">
                        <button className="chef-buttons">
                            <MetaLogoIcon size={18} color="#BC9A6C" />
                        </button>

                        <button className="chef-buttons">
                            <XLogoIcon size={18} color="#BC9A6C" />
                        </button>

                        <button className="chef-buttons">
                            <VideoCameraIcon size={18} color="#BC9A6C" />
                        </button>

                        <button className="chef-buttons">
                            <PinterestLogoIcon size={18} color="#BC9A6C" />
                        </button>
                    </div>
                </div>

               <div className='footer-container-1'>
                <div className='inner-footer-container-1'>
                    <div className='container-1-width'>
                        <p className='heading-navbar footer-head'>Food<span className='heading-span'>Tuck</span></p>
                        <p className='footer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Laoreet cursus nec duis nec facilisis quis imperdiet venenatis.
                            Platea at nunc consequat est dolor</p>
                    </div>
                    <div className='container-1-width'>
                        <p className='footer-head'>Explore</p>
                        <ul className='footer-ul-container'>
                            <li className='footer-list-item footer-para'>Home</li>
                            <li className='footer-list-item footer-para'>Blog</li>
                            <li className='footer-list-item footer-para'>About us</li>
                            <li className='footer-list-item footer-para'>Team</li>
                            <li className='footer-list-item footer-para'>Contact us</li>
                            <li className='footer-list-item footer-para'> Our Menu</li>

                        </ul>
                    </div>
                    <div className='container-1-width'>
                        <p className='footer-head'>Contact us</p>
                        <p className='list-footer'><MapPinIcon size={22} />Kolkata India , 3rd Floor, Office 45</p>
                        <p className='list-footer'><PhoneIcon size={22} />+91 9876543210</p>
                        <p className='list-footer'><EnvelopeOpenIcon size={22} />example@example.com</p>
                        <p className='list-footer'><ClockIcon size={22} />Sun - Sat / 10:00 AM - 8:00 PM</p>

                    </div>
                </div>
                <div className='footer-container-2'>
                    <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>

                </div>

            </div>

                <img
                    src="/images/leaveImage.svg"
                    className="footer-img"
                    alt="leaf"
                />

            </Container>
        </footer>
    )
}

export default Footer
