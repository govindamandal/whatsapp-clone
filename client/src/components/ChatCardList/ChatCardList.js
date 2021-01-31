import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './ChatCardList.scss';

const ChartCardList = () => {
    return (
        <div className="chat-card-list">
            <div className="card">
                <div className="img-container">
                    <img src="https://www.venturebeat.com/wp-content/uploads/2018/09/ironman.jpg" alt="profile"/>
                </div>
                <div className="card-detail">
                    <h4 className="title">
                        User1
                    </h4>
                    <p className="desc">
                        Hi, How are you?
                    </p>
                </div>
                <div className="time">
                    10:20 PM
                </div>
                <div className="action-btn">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
            

            <div className="card">
                <div className="img-container">
                    <img src="https://www.venturebeat.com/wp-content/uploads/2018/09/ironman.jpg" alt="profile"/>
                </div>
                <div className="card-detail">
                    <h4 className="title">
                        User1
                    </h4>
                    <p className="desc">
                        Hi, How are you?
                    </p>
                </div>
                <div className="time">
                    10:20 PM
                </div>
                <div className="action-btn">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </div>
    );
}

export default ChartCardList;