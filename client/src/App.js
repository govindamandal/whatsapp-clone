import './App.scss';
import ProfileSection from './components/ProfileSection/ProfileSection';
import SearchPeople from './components/SearchPeople/SearchPeople';
import ChatCardList from './components/ChatCardList/ChatCardList';
import ChatSection from './components/ChatSection/ChatSection';
import Login from './components/Login/Login';

function App() {
  return (
    <>
    {true ?
      <Login /> : 
      <div className="App">
      <div className="left-side">
        <ProfileSection />
        <SearchPeople />
        <ChatCardList />
      </div>
      <div className="right-side">
        <ChatSection />
      </div>
    </div>
    }
    </>
  );
}

export default App;
