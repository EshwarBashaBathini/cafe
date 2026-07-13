'use client';
import Container from "@/components/ui/Container";
import "./teamMember.css";
import { MetaLogoIcon, XLogoIcon, PinterestLogoIcon, VideoCameraIcon } from '@phosphor-icons/react';
import '../../Home/chef/chef.css'

const TeamMember = () => {

     const chefsList = [
        {
            "id": 1,
            "name": "Bulbul Hassan",
            "role": "Chef",
            "image": "/images/team1.png"
        },
        {
            "id": 2,
            "name": "Jorina Begum",
            "role": "Founder",
            "image": "/images/team2.png"
        },
        {
            "id": 3,
            "name": "M. Mohammad Nur",
            "role": "Specialist",
            "image": "/images/team3.png"
        },
        {
            "id": 4,
            "name": "Munna Kathy",
            "role": "Owner",
            "image": "/images/team4.png"
        }
    ]


  return (
    <section className="team-member-section">
      <div className="team-member-overlay">
        <Container>
          <div className="team-member-header">
            <h2>Team Member</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue.
            </p>
          </div>
        </Container>
      </div>

      {/* Team Cards */}
      <Container>
        <div className="team-cards">
           <ul className='ul-chef-list'>
                {chefsList.map((items) => (
                    <li key={(items.id)} className='chef-list-items-1'>
                        <div className='image-wrapper-chef-1'>
                            <img className='chef-images' src='/images/chefImages.svg' alt='images' />
                            <div className='chef-social-btns-container'>
                                <button className='chef-buttons'><MetaLogoIcon size={18} color='#BC9A6C' /></button>
                                <button className='chef-buttons'><XLogoIcon size={18} color='#BC9A6C' /></button>
                                <button className='chef-buttons'><VideoCameraIcon size={18} color='#BC9A6C' /></button>
                                <button className='chef-buttons'><PinterestLogoIcon size={18} color='#BC9A6C' /></button>
                            </div>

                        </div>
                        <h6 className='chef-title'>{items.name}</h6>
                        <p>{items.role}</p>


                    </li>
                ))}
            </ul>
        </div>
      </Container>
    </section>
  );
};

export default TeamMember;