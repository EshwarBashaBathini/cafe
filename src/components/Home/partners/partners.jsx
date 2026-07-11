import './partners.css'
import '../chef/chef.css'

const Partners = () => {

    return (
        <div className='chef-container-box'>
            <div className='chef-content-section'>

                <p className='parteners-name'>Partners & Clients</p>
                <h2 className='chef-content-title'>We work with the best pepole</h2>
            </div>
            <div className='images-scroll'>
                <img src='/images/restaurant.svg' className='w-[100px]' alt='Images' />
                <img src='/images/restaurant.svg' className='w-[100px]'  alt='Images' />
                <img src='/images/restaurant.svg' className='w-[100px]'  alt='Images' />
                <img src='/images/restaurant.svg' className='w-[100px]'  alt='Images' />
                <img src='/images/restaurant.svg' className='w-[100px]' alt='Images' />
                <img src='/images/restaurant.svg' className='w-[100px]'  alt='Images' />
            </div>

        </div>
    )

}

export default Partners