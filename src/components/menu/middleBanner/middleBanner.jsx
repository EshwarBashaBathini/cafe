import './middleBanner.css'
import { bannerData } from '../data/data'
import Container from '@/components/ui/Container'

const MiddleBanner = () => {
    return(
        <div className='banner-bg-container'>
            <Container>
            <ul className='middle-banner-ul'>
                {bannerData.map((item) => (
                    <li key={item.id} className='list-items-banner'>
                        <img src={item.icon} className='w-[90px] mb-[40px]' alt={item.title} />
                        <h3 className='banner-count'>{item.count}</h3>
                        <h5 className='banner-title'>{item.title}</h5>
                    </li>
                ))}

            </ul></Container>

        </div>
    )
}

export default MiddleBanner