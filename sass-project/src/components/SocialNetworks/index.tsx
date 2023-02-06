import { FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';
import '../../styles/components/socialnetworks.sass';

const socialMedia = [
    { name: "linkedin", link: "https://www.linkedin.com/in/gabrieldutra23", icon: <FaLinkedinIn /> },
    { name: "github", link: "https://github.com/Dutra3", icon: <FaGithub />},
    { name: "instagram", link: "https://www.instagram.com/gabrieldutra3/", icon: <FaInstagram />},
];

const SocialNetworks = () => {
    return (
        <section id='social-media'>
            {socialMedia.map((media) => (
                <a href={media.link} className='social-btn' id={media.name} key={media.name} target='_blank'>
                    {media.icon}
                </a>
            ))}
        </section>
    );
};

export { SocialNetworks };