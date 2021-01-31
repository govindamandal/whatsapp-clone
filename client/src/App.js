import './App.scss';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import ProfileSection from './components/ProfileSection/ProfileSection';
import SearchPeople from './components/SearchPeople/SearchPeople';
import ChatCardList from './components/ChatCardList/ChatCardList';
import ChatSection from './components/ChatSection/ChatSection';
import Login from './components/Login/Login';
import { BASE_URL, LOGIN } from './utils/apiEndpoints';
import { post } from './utils/apiRequest';
import AuthContext from './context/AuthContext';
import SocketContext from './context/SocketContext';
import io from 'socket.io-client';

const socket = io.connect(`${process.env.BASE_PATH}:${process.env.PORT}`, {
  reconnection: true,
  reconnectionDelay: 500,
  reconnectionAttempt: 10
});

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['whatsappclone']);
  const [error, setError] = useState(null);
  const [userObject, setUserObject] = useState(() => {
    return cookies.user;
  });

  const handleLogin = async (userData) => {
    const formData = new FormData();
    if (userData.file) {
      formData.append('profileImg', userData.file);
    }

    formData.append('payload', JSON.stringify({name: userData.name}));

    const response = await post(`${BASE_URL}${LOGIN}` , formData);

    console.log(response);

    if (response.error) {
      setError(response.error);
    }

    setCookie('user', response);
    setUserObject(response);
    joinUser(null);
  }

  const joinUser = (userData) => {
    let initData = {
      createdAt: userData.createdAt,
      name: userData.name,
      profileImg: userData.profileImg,
      sessionId: userData.sessionId,
      updatedAt: userData.updatedAt,
      _id: userData._id
    };

    socket.emit('join-user', initData, (cbData) => {
      console.log('user joined');
    });
  }

  const handleLogout = () => {
    removeCookie('user');
    setUserObject(null);
  }

  return (
    <>
      {!(userObject && userObject.sessionId) ?
        (<Login handleLogin={handleLogin}/>) : (
          <AuthContext.Provider value={userObject}>
            <SocketContext.Provider>
              <div className="App">
                <div className="left-side">
                  <ProfileSection handleLogout={handleLogout}/>
                  <SearchPeople />
                  <ChatCardList />
                </div>
                <div className="right-side">
                  <ChatSection />
                </div>
              </div>
            </SocketContext.Provider>
          </AuthContext.Provider>
        )    
      }
    </>
  );
}

export default App;
