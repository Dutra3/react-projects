

import { useLocation } from "react-router-dom";
import { Message } from "../../Message";

const Projects = () => {
    const location = useLocation();
    let message = '';

    if(location.state) {
        message = location.state.message;
    }

    return (
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type="success" message={message} />}
        </div>
    );
};

export { Projects };