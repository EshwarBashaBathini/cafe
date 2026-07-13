import './navbar.css'
import { MagnifyingGlassIcon, UserIcon, BasketIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import Container from '../ui/Container'

const NavBar = () => {

    return (
        <header className='nav-bg-container'>
            <Container>

            <nav >
                <p className='heading-navbar'>Food<span className='heading-span'>Tuck</span></p>
                <ul className='flex flex-row ul-nav '>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/menu'>Menu</Link></li>
                    <li>Blog</li>
                    <li>Pages</li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/shop'>Shop</Link></li>
                    <li>Contact</li>
                </ul>
                <div className='icons-container-nav'>
                    <MagnifyingGlassIcon size={22} /><UserIcon size={22} />
                    <BasketIcon size={22} />
                </div>
            </nav>
            </Container>
        </header>
    )
}

export default NavBar