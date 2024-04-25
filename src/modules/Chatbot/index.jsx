import React, { useState } from "react";
import "./styles.css";
import { Popover } from "@mui/material";
import ActionButton from "../../components/ChatbotComponents/ActionButton";
import { Grow } from "@mui/material";
import Chat from "../../components/ChatbotComponents/Chat";

const Chatbot = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "chatbot-chat-container" : undefined;

    return (
        <div className="chatbot-container">
            <ActionButton handleOpen={handleOpen} />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                disableScrollLock
                className="chatbot-chat-container"
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                TransitionComponent={Grow}
                TransitionProps={{ timeout: 300 }}
            >
                <Chat handleClose={handleClose} />
            </Popover>
        </div>
    );
};

export default Chatbot;
