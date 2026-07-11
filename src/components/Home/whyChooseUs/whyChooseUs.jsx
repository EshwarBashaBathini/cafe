import FeatureCard from './featureCard';
import './whyChooseUse.css'

const WhyChooseUse = () => {


    const features = [
        {
            id: 1,
            title: "High Quality Coffee",
            description:
                "Enjoy freshly brewed premium coffee made from carefully selected beans, delivering a rich aroma and exceptional taste in every cup.",
            icon: "/images/chefFeature.svg",
        },
        {
            id: 2,
            title: "Best Chef & Team",
            description:
                "Our experienced chefs and dedicated team ensure every beverage and meal is prepared with passion, quality, and consistency.",
            icon: "/images/chefFeature.svg",
        },
        {
            id: 3,
            title: "Promo & Deal",
            description:
                "Take advantage of our exclusive offers, seasonal promotions, and special discounts designed for coffee lovers.",
            icon: "/images/chefFeature.svg",
        },
    ];


    return (
        <div className='why-choose-us-container'>
            <div className='image-wrapper'>
                <img src='/images/whyChooseUs.svg' className='choose-img' alt='us' />
                <div className='text-container-img'>
                    <p className='img-text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa turpis pulvinar interdum in imperdiet pellentesque. At duis dolor massa elit consequat</p>
                    <p>Alen Barg</p>
                </div>




            </div>
            <div className='why-choose-content'>
                <p className='why-choose-text'>Why Choose us</p>
                <h2 className='why-choose-head'>Best quality food and coffee maker</h2>
                <p className='why-choose-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi,</p>
                <ul className='flex-1'>
                    {features.map((feature) => (
                        <li className='feature-list' key={feature.id}>
                            <FeatureCard features= {feature}/>
                        </li>
                    ))}

                </ul>
            
            </div>

        </div>
    )

}

export default WhyChooseUse