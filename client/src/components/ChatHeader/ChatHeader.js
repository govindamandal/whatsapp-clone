import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import './ChatHeader.scss';

const ChatHeader = () => {
    return (
        <div className="chat-header">
            <div className="img-container">
                <img src="https://www.venturebeat.com/wp-content/uploads/2018/09/ironman.jpg" alt="profile" />
            </div>
            <div className="card-detail">
                <h4 className="title">USER 1</h4>
                <p className="desc">Online</p>
            </div>
            <div className="action-items">
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
        </div>
    );
};

export default ChatHeader;