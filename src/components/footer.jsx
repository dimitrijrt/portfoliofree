import style from './footer.scss'
import {useNavigate} from "react-router-dom";
import { FaDev } from "react-icons/fa";
import { FiMail } from "react-icons/fi";




function Footer() {
     const navigate = useNavigate();
  
  return (
    
    <div className='Footer'>
       <a href="mailto:dimitrijacquart@gmail.com"><span className='cv' id="contact"><FiMail className='icons'/> dimitrijacquart@gmail.com</span></a>
       <p className='end'>© 2023 Dimitri JACQUART, Tous droits réservés.
						</p>
    
    </div>
    
    
    
      
    
      
   
    
  
   
  )
}

export default Footer;