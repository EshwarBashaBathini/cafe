import './aboutUs.css'

const AboutUs = () => {

    return (
        <div className='aboutus-section-about'>
            <div className='images-container'>
                <div className='left-image'>
                    <img src='/images/aboutImage1.svg' alt='images' className='about-images1' />

                </div>
                <div className='right-images'>
                    <img src='/images/aboutImage2.svg' alt='images' className='about-images2' />
                    <img src='/images/aboutImage3.svg' alt='images' className='about-images3' />
                </div>

            </div>
            <div className='about-us-container'>
                <p className='about-us-title'>About us ___</p>
                <h2 className='about-heading-us'>Food is an important part Of a balanced Diet</h2>
                <p className='about-para-us'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>
        </div>
    )
}

export default AboutUs