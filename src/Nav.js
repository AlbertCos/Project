import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './Nav.css';

function Nav() {

    //create hiddeneffect in Navbar using useEffect and eventlistener Scroll
    const [show, handleShow] = useState(false); 
    const history = useHistory()

    //IF the scrollY is more than 100 handleShow is true
    const transitionNavBar = () =>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll",transitionNavBar);
    },[])


    return (
        //Add navblack if show is true
        <div className={`nav ${show && 'nav__black'}`}>
            <div className= 'nav__contents'>
                <img onClick={()=>history.push("/")} className='nav__logo'   src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <img onClick={()=>history.push("/profile")} className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    );
}

export default Nav
