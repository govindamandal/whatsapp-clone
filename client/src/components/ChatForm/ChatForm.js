import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPaperclip, faMicrophone } from '@fortawesome/free-solid-svg-icons';

import './ChatForm.scss';

const ChatForm = () => {
    return (
        <div className="chat-form">
            <div className="action-button">
                <FontAwesomeIcon className="icon-block" icon={faSmile} />
                <FontAwesomeIcon className="icon-block" icon={faPaperclip} />
            </div>
            <input className="chat-input" placeholder="message"/>
            <FontAwesomeIcon className="icon-block" icon={faMicrophone} />
        </div>
    );
}

export default ChatForm;