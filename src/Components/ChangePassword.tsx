import React from 'react';
import './changepassword.css';


function ChangePassword(){
    return(
        <>
        <div className="form-holder">
            <div className="form">
                <h1>Change Password</h1>
                <input className="form-control" type="password" placeholder="Old Password"/>
                <input className="form-control" type="password" placeholder="New Password"/>
                <a>Error!Pincode doesn't match</a>
                 <div className="form-button">
                    <button type="submit" className="btn">Cancel</button>
                    <button type="submit" className="btn">Save</button>
                 </div>
                </div>
        </div>
        </>
    )
}

export default ChangePassword;