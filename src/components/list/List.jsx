import ChatList from "./chatList/chatList";
import UserInfo from "./userinfo/UserInfo";
import "./list.css";

const List = () => {
    return (
        <div className="list">
           <UserInfo/>
           <ChatList/>
        </div>
    )

    
}

export default List
