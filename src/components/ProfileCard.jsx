import React from "react";
import { IoReload } from "react-icons/io5";
import Indictor from "./Indicator";
import './profilecard.css';

export default function ProfileCard({name,position}){
    return(
        <div className="profile-card">
            <div className="top">
                <h2>Profile</h2>
                <IoReload size={20}/>
            </div>
            <div className="mid">
                <div className="profile-back">
                    <div className="profile-top">
                        <div className="profile-pic">
                        <img src="https://24365withblinks.com/images/about/profile_jisoo.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="profile-info">
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
            <div className="bottom">
                <Indictor icon={<span>❤️</span>} num={6}/>
                <Indictor icon={<span>👍</span>} num={21}/>
                <Indictor icon={<span>🔥</span>} num={89}/>
            </div>
        </div>
    );
}