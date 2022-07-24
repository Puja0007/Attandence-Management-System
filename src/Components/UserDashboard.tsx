import React from "react";
import './userdashboard.css';
function UserDashboard(){
    return(
        <div className="userdashboard">
            {/* <div className="userlogo"> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGu8dYom1k4hFKWnlHPKwB-ovs1HkA2XCAvg&usqp=CAU"/>
            {/* </div> */}
            <br></br>
            <h2>Hi! I am Puja</h2>
            <br></br>
            <div className="user-btn">
            <button type="button" className="btn" >PUNCH ATTENDANCE</button>
            <button type="button" className="btn">APPLY FOR LEAVE</button>
            <button type="button" className="btn">VIEW PREVIOUS RECORD</button>
            </div>
        </div>
    )
}

export default UserDashboard;