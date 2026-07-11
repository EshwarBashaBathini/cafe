import './whyChooseUse.css'

const FeatureCard = (props) => {
    const { features } = props
    const { id, title, description, icon } = features

    return (
        <div className='feature-container'>
            <div className='icon-container'>
                <img src={icon} className='feature-img' alt='icon'/>
            </div>
            <div className='feature-content'>
                <h3 className='feature-title'>{title}</h3>
                <p className='feature-para'>{description}</p>
            </div>

        </div>
    )
}

export default FeatureCard;