/* eslint-disable react/prop-types */
import React from 'react'
import './styles.css'
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar } from '@mui/material';

const ChatMessage = ({ user }) => {
    return (
        <div className={user ? "message-wrapper user" : "message-wrapper"}>
            <section className="message-inner-container">
                <div className={user ? "message-avatar-container user" : "message-avatar-container"}>
                    {user ? (
                        <Avatar sx={{ width: 30, height: 30 }} className="message-avatar user">
                            <PersonIcon sx={{ fontSize: "1.15rem" }} className="message-avatar-icon" />
                        </Avatar>
                    ) : (
                        <Avatar sx={{ width: 30, height: 30 }} className="message-avatar">
                            <SmartToyIcon sx={{ fontSize: "1.15rem" }} className="message-avatar-icon" />
                        </Avatar>
                    )}
                </div>
                <div className={user ? "message-content-container user" : "message-content-container"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente laudantium quis
                    beatae rerum assumenda aperiam maiores blanditiis dolores modi reiciendis esse
                    necessitatibus aut temporibus perferendis, saepe recusandae, consequuntur nesciunt
                    quos!
                </div>
            </section>
        </div>
    );
}

export default ChatMessage