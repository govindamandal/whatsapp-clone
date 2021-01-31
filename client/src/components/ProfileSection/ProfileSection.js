import './ProfileSection.scss';
import { useContext } from 'react';
import AuthContext from './../../context/AuthContext';
const ProfileSection = ({handleLogout}) => {
    const userObject = useContext(AuthContext);
    const { profileImg, name } = userObject;
    return (
        <div className="profile-section">
            <div className="img-container">
                <img src={profileImg} alt="PROFILE"/>
            </div>
            {name}
            <div className="action-items" onClick={handleLogout}>
                Logout
            </div>
        </div>
    );
}

export default ProfileSection;