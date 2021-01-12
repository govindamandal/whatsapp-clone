import './ProfileSection.scss';

const ProfileSection = () => {
    return (
        <div className="profile-section">
            <div className="img-container">
                <img src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg" alt="PROFILE"/>
            </div>
            Akshay
            <div className="action-items">
                Logout
            </div>
        </div>
    );
}

export default ProfileSection;