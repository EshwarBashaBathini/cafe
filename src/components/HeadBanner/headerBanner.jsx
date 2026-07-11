import NavBar from '../navbar/navbar'
import Link from 'next/link'
import './headerBanner.css'
import Container from '../ui/Container'

const HeaderBanner = (props) => {
    const { title } = props

    return (
        <div className='top-banner-header'>
            <NavBar />
            <Container className='banner-nav-container'>
                <div className='container-nav-2'>
                    <div className='bread-container'>
                        |<h2 className='nav-title'>Our {title}</h2>
                        <p className="breadcrumb">
                            <Link href="/">Home</Link>
                            <span> &gt; </span>
                            <span>{title}</span>
                        </p>
                    </div>

                </div>

            </Container>
        </div>
    )

}

export default HeaderBanner