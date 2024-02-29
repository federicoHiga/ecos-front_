import React, {useState} from 'react'
import '../../../assets/styles/Nav/nav.css'
import logotipo from '../../../assets/svg/nav/logotipo.svg'
import bars from '../../../assets/svg/nav/bars.svg'
import close from '../../../assets/svg/nav/close.svg'

export default function Nav(props){
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

  return(
    <nav>
        <div>
        <button>
            {
                (open === false) ?
                <img src={bars} alt="menu" className='menu'  onClick={handleOpen}/>
                :
                <img src={close} alt="close" className='menu'  onClick={handleOpen}/>
            }
        </button>
        {
            (open === true) ? 
            <ul id='nav-items'>
               {props.links}
            </ul> : 
            <a id='none'/>
        }
        </div>
      <img src={logotipo} alt="logotipo" id="logotipo"/>
    </nav>
  )
}