import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Login.scss';

const Login = ({ handleLogin }) => {

    const [user, setUser] = useState({
        name: '',
        file: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(user);
    }

    const handleNameChange = (e) => {
        setUser({...user, name: e.target.value});
    }

    const onFileChange = (e) => {
        setUser({ ...user, file: e.target.files[0]});
    }

    return (
        <div className="login-container">
            <div className="logo">
                <img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png" alt="logo" />
            </div>
            <div className="login-form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="profile-img">
                        <input type="file" className="file-upload" onChange={(e) => onFileChange(e)}/>
                        <FontAwesomeIcon icon={faUser} className="icon-block" />
                    </div>
                    <div className="profile-name">
                        <FontAwesomeIcon icon={faUser} className="icon-block" />
                        <input type="text" placeholder="Your name here" name="name" onChange={(e) => handleNameChange(e)}/>
                    </div>
                    <input type="submit" value="Join now" className="profile-submit-btn" />
                </form>
            </div>
        </div>
    );
};

export default Login;