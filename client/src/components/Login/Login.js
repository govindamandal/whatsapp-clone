import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Login.scss';

const Login = () => {
    return (
        <div className="login-container">
            <div className="logo">
                <img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png" alt="logo" />
            </div>
            <div className="login-form">
                <form>
                    <div className="profile-img">
                        <input type="file" className="file-upload" />
                        <FontAwesomeIcon icon={faUser} className="icon-block" />
                    </div>
                    <div className="profile-name">
                        <FontAwesomeIcon icon={faUser} className="icon-block" />
                        <input type="text" placeholder="Your name here" name="name" />
                    </div>
                    <input type="submit" value="Join now" className="profile-submit-btn" />
                </form>
            </div>
        </div>
    );
};

export default Login;