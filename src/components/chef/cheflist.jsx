import './cheflist.css'
import { teamMembers } from './data';

const ChefList = () => {

    return(
        <div className='container-list-chef'>
            <ul className='ul-list-chef'>
                {teamMembers.map((item) => (
                    <li key={item.id} className='list-item-chef'>
                        <img src='/images/chefImages.svg' className='chef-image' alt='images' />
                        <div className='div-role'>
                            <h6 className='chef-name'>{item.name}</h6>
                            <p>{item.role}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ChefList;