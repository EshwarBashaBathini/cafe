import './customer.css'

const Customer = () => {

    return (
        <div className="customer-container bg-[url('/images/coffeeCup.svg')] bg-cover bg-center bg-no-repeat">
            <div className="customer-content-box">
                <p className='test-text'>Testimonials</p>
                <h2 className='customer-say'>Our customer say</h2>
                <p className='customer-review'>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus
                    vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non.
                </p>
                <img className='profile-section' src='/images/chefImages.svg' alt='images' />
                <h5 className='profile-name' >William carry</h5>
                <p className='profile-role'>Founder & CEO</p>
            </div>

        </div>
    )

}

export default Customer

