import './ChatSection.scss';
import ChatHeader from './../ChatHeader/ChatHeader';
import Chat from './../Chat/Chat';
import ChatForm from './../ChatForm/ChatForm';

const ChatSection = () => {
    return (
        <>
        <ChatHeader />
        <Chat />
        <ChatForm />
        </>
    );
};

export default ChatSection;

