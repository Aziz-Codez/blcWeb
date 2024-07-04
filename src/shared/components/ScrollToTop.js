import React, {useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from '@mui/material';
import './ScrollButton.css';

const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 250){
        setVisible(true)
      } 
      else if (scrolled <= 250){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button className='scrollButton' style={{ display: visible ? 'inline' : 'none'}}>
     <ArrowUpwardIcon className='scrollIcon' onClick={scrollToTop}/>
    </Button>
  );
}
  
export default ScrollButton;