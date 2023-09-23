import React from 'react'
import Typical from 'react-typical';
import profileimg from '../../assets/ammuuu.png'
import "./Header.css";


function Header() {
  return (
    <div className="header-container" id='About'>

          {/* header content */}
          <div className="header-content">
              <h1>Hy! I Am</h1>
              <h2 className="FullName">Divyashree V</h2>
              <h2>
                  I am a {""}
                  <Typical steps={[
                      "Full stack developer 💻 ",
                      1000,

                      "Front End developer 💻 ",
                      1000,

                      "Back End developer 💻 ",
                      1000,

                      "React Developer ⚛️",
              1000,
                    
                    ]}

                      loop={Infinity} wrapper="b"
                  />
              </h2>
              <p> 👉Passionate Undergraduate Student deeply invested in Full Stack Development. Proven experience in Machine Learning and crafting impactful Web Projects. Eﬀective communicator and collaborative team player. Eager to contribute innovative solutions to the tech world's challenges.</p>
              
             
              </div>

          <div className="profile-img-container">
              <img src={profileimg} alt="" />
              <div className="circle-1"></div>
              <div className="circle-2"></div>

          </div>
      </div>
  )
}

export default Header;