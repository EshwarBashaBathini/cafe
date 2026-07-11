'use client'
import './starters.css'
import { menuSections } from '../data/data'
import StarterCard from './starterCard'
import { useState } from 'react'
import Container from '@/components/ui/Container'
const Starters = () => {
    const [reverse, setReverse] = useState(true)

    return (
        <div className='top-container-starters-desserts'>
            <Container>
            
                {menuSections.map((starter, index) => {


                    return (
                        <StarterCard reverse={index % 2 !== 0} key={starter.id} starterDetail={starter} />
                    )

                })}

           
            </Container>
            </div>
            
    )
}

export default Starters