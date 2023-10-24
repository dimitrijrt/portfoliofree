import style from './home.scss'
import projets from '../data/projets.json'
import DropdownButton from 'react-bootstrap/Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { DiCss3, DiJsBadge, DiHtml5, DiSass, DiGithubBadge } from "react-icons/di";
import { useState } from "react";



function Home() {
    
    const [toggle, setToggle] = useState(false);
  
  return (
  
    
    
    <div className="main">
       <h1 id="skills">Mes Projets</h1>
      <Dropdown onClick={() => setToggle(!toggle)}>
      <Dropdown.Toggle className='dropdown'>
        Catégories
      </Dropdown.Toggle>

      <Dropdown.Menu className='menu'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       <div className='grid'>
       <div className='projets'>
            {projets.map((projet, index) => (
                <div className='projetTile'> 
                    <h2 className='titreProjets'>{projet.title}</h2>
                      <img className='images' src={projet.pictures[0]} alt="projets images"></img>
                        <div className='description'>
                            <p>{projet.description}</p>
                            <button ><DiGithubBadge size="26px"/>Lien github</button>
                        </div> 
                    </div>
                    
                    

            ))}
       </div>
       </div>
       
       
    </div>
    
    
      
    
      
   
    
   
   
  )
}

export default Home;