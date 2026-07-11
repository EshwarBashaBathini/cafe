import '../starters/starters.css'
import { menuSectionsDesserts } from '../data/data'
import StarterCard from '../starters/starterCard'
import './dessert.css'
import Container from '@/components/ui/Container'

const Desserts = () => {
    return (
        <div className='top-container-starters-desserts'>
            <Container className='starter-main-container' >

                {menuSectionsDesserts.map((starter, index) => (

                    <StarterCard reverse={index % 2 !== 0} key={starter.id} starterDetail={starter} />

                ))}
                <div className='partners-containers'>
                    <div className='content-section-menu'>

                        <p className='parteners-name-menu'>Partners & Clients</p>
                        <h2 className='content-title-menu'>We work with the best pepole</h2>
                    </div>
                    <div className='images-scroll-menu'>
                        <img src='/images/restaurant.svg' className='w-[100px]' alt='Images' />
                        <img src='/images/restaurant.svg' className='w-[100px]' alt='Images' />
                        <img src='/images/restaurant.svg' className='w-[100px]' alt='Images' />
                        <img src='/images/restaurant.svg' className='w-[100px]' alt='Images' />
                        <img src='/images/restaurant.svg' className='w-[100px]' alt='Images' />
                        <img src='/images/restaurant.svg' className='w-[100px]' alt='Images' />
                    </div>

                </div>



            </Container>
        </div>
    )

}

export default Desserts