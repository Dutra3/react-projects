import { SocialNetworks } from '../SocialNetworks';
import '../../styles/components/sidebar.sass';
import Avatar from '../../img/profile.jpeg';
import { InformationContainer } from '../InformationContainer';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="profile picture" />
            <p className="title">Desenvolvedor Full-Stack</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    );
};

export { Sidebar };