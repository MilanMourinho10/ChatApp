import { auth } from "../../lib/firebase";
import "./detail.css";

const Detail = () => {
    return (
        <div className="detail">
           <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Privacy & help </span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                             <img src="./pexel-photo.jpg" alt="" /> 
                             <img src="./pexel-photo.jpg" alt="" /> 
                             <img src="./pexel-photo.jpg" alt="" /> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
            </div>
            <button>Block User</button>
            <button className="logout" onClick={()=>auth.signOut()}>Log Out</button>



            
            

        
        
        
        
        </div>
    

    )

    
}

export default Detail
