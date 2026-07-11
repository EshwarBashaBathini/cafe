'use client'
import './blog.css'
import '../chef/chef.css'
import { CalendarIcon, UserIcon} from '@phosphor-icons/react'
import Button from '@/components/ui/buttons/Button'


const BlogNews = () => {

    const blog = [
        {
            "id": 1,
            "title": "Simple Coffee Recipes for Next Spring",
            "date": "10 Feb, 2022",
            "author": "Ataur",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus nec duis nec facilisis quis imperdiet venenatis. Platea at nunc consequat est dolor.",
            "image": "/images/blog1.png"
        },
        {
            "id": 2,
            "title": "Italian Famous Pasta with Meat and Cheese",
            "date": "10 Feb, 2022",
            "author": "Ataur",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus nec duis nec facilisis quis imperdiet venenatis. Platea at nunc consequat est dolor.",
            "image": "/images/blog2.png"
        },
        {
            "id": 3,
            "title": "Chocolate Truffle Cake with Honey Flavor",
            "date": "10 Feb, 2022",
            "author": "Ataur",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus nec duis nec facilisis quis imperdiet venenatis. Platea at nunc consequat est dolor.",
            "image": "/images/blog3.png"
        }
    ]
    return (
        <div className='chef-container-box'>
            <div className='chef-content-section'>
                <h2 className='chef-content-title'>Latest News & Blog</h2>
                <p className='chef-content-subtitle'>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Varius sed pharetra dictum neque massa</p>
            </div>
             <ul className='ul-chef-list'>
                {blog.map((item) => (
                    <li key={item.id} className='blog-item'>
                        <img className='img-tea-size' src='/images/teaCup.svg' alt='logo' />
                        <div className='blog-content-container'>
                            <div className='flex justify-between mb-4'>
                                <div className='flex flex-row items-center'>
                                    <CalendarIcon size={20} />
                                    <p className='regular-md'>{item.date}</p>

                                </div>
                                 <div className='flex flex-row items-center'>
                                   <UserIcon size={20} />
                                    <p className='regular-md'>{item.author}</p>

                                </div>
                            </div>
                            <h6 className='blog-title mb-5'>{item.title}</h6>
                            <p className='mb-4 blog-description'>{item.description}</p>
                            <Button variant='outline' className='blog-btn'>
                                Read more
                            </Button>

                        </div>

                    </li>
                ))}

             </ul>

        </div>
    )

}

export default BlogNews