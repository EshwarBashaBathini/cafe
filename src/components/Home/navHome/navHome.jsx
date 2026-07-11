import NavBar from '@/components/navbar/navbar'
import './navHome.css'
import Button from '@/components/ui/buttons/Button'
import Container from '@/components/ui/Container'

const NavHome = () => {

    return (
        <div className='navHome-background'>
            <Container>
                <NavBar />
                <div className='navHome-container'>
                    <div className='love-container' >
                        <div className='love-cafe-container'>
                            <p className='welcome-nh'>Welcome to coffee hut </p>
                            <img src='/images/loveCofe.svg' className='m-1' alt='love cafe' />
                        </div>
                        <h2 className='love-cafe-heading1'>Heal the world with coffee</h2>
                        <p className='love-cafe-heading2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
                        <div className='love-cafe-buttons-container'>
                            <Button className='order-now-btn' >Order Now</Button>
                            <Button variant='outline' className='order-now-btn'>See Menu</Button>

                        </div>
                    </div>
                    <div className='img-container-nav'>
                        <div className="coffee-border"></div>
                        <img src='/images/coffeeNavBar.svg' className='navHome-img' alt="coffee" />
                    </div>


                </div>
            </Container>

        </div>
    )
}

export default NavHome