import './Chat.scss';

const Chat = () => {
    return (
        <div className="chat-section">
            <div className="chat you">
                <span className="name">Akshay</span>
                <p className="msg">
                    This is a message
                </p>
                <span className="time">10:50 PM</span>
            </div>
            <div className="chat me">
                <span className="name">Me</span>
                <p className="msg">
                    This is a message
                </p>
                <span className="time">10:50 PM</span>
            </div>
        </div>
    );
};

export default Chat;