import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, useTheme, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import './styles.css'

const ExpandedCard = ({ open, handleClose }) => {
    const theme = useTheme();
    return (
        <div className='expanded-card'>
            <Dialog onClose={handleClose} open={open} className='expanded-card-dialog' >
                <header className='expanded-card-header'>
                    <CloseIcon />
                </header>
                <DialogTitle className=''>
                    <Typography>

                    </Typography>
                </DialogTitle>
                <DialogContent>
                    contenido
                </DialogContent>
                <DialogActions>
                    actions
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ExpandedCard