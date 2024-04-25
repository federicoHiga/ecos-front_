/* eslint-disable react/prop-types */
import React from 'react'
import './styles.css'
import ChatMessage from '../Message';
import { Avatar, IconButton, Stack, Typography, useTheme } from '@mui/material';
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CancelIcon from "@mui/icons-material/Cancel";

const Chat = ({ handleClose }) => {
    const theme = useTheme();
    const handleClick = () => {
        handleClose();
    }

    return (
        <div className='chat-section'>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'stretch'} spacing={0} className='chat-layout'>
                <section className='chat-header'>
                    <div className='chat-title'>
                        <Avatar sx={{ backgroundColor: 'rgba(0,0,0,0)', border: '1px solid white' }}>
                            <SmartToyIcon sx={{ fontSize: '1.5rem', color: theme.palette.blanco.main }} />
                        </Avatar>
                        <Typography variant='subtitulos' sx={{ color: theme.palette.blanco.main, fontWeight: 400, ml: 1.5 }}>
                            ECO-bot
                        </Typography>
                    </div>
                    <div className='chat-close'>
                        <IconButton aria-label='chat-close' onClick={handleClick}>
                            <CancelIcon sx={{ color: theme.palette.blanco.main, fontSize: '1.5rem' }} />
                        </IconButton>
                    </div>
                </section>
                <section className='chat-content'>
                    <ChatMessage />
                    <ChatMessage user={'user'} />
                    <ChatMessage />
                    <ChatMessage user={'user'} />
                    <ChatMessage />
                    <ChatMessage user={'user'} />
                </section>
            </Stack>
        </div>
    )
}

export default Chat