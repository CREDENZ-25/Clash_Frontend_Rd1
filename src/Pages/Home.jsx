import {Button} from 'pixel-retroui';
import React from 'react';
import { Link } from 'react-router-dom';
import ClashPixelBG from '../assets/ClashPixelBG.gif';
import 'pixel-retroui/dist/index.css';

const Home = () => {
    return (
        <div 
            className="home-container h-screen w-screen bg-cover bg-center flex flex-col
            items-center justify-center  
            font-['Pixelify_Sans',serif] font-bold" 
             style={{ backgroundImage: `url(${ClashPixelBG})`}}
        >
            <svg
               viewBox="0 24 100 128"
               xmlns="http://www.w3.org/2000/svg"
               className="w-full h-full "
            >
              
              <text
               x="50%"
               y="104%"
               dominantBaseline="baseline"
               textAnchor="middle"
               className="font-bold text-[3vw] max-lg:text-[4vh] fill-[#F6B639] 
                   stroke-[#310202] stroke-[6] [paint-order:stroke_fill] 
                   drop-shadow-[3px_2px_0px_#310202] tracking-wider"
              >
               CLASH
              </text>
              <text
               x="50%"
               y="118%"
               textAnchor="middle"
               dominantBaseline="text-after-edge"
               className="font-bold font-['Pixelify_Sans',serif] fill-[#F6B533] 
               stroke-[#310202] stroke-[1] [paint-order:stroke_fill] text-[8px] 
               drop-shadow-[0px_1px_0px_#101e34] "
              >
              INTO THE UNKNOWN
              </text>
              </svg> 
                 
              
   <div className="flex items-center justify-center h-full"> 
    <Link to="/login">
    <Button bg="#DE5027"
      
      className="w-52 h-12 px-0.5 py-0.7 rounded-md text-[9px] text-[#F6B639]  
                border-[0.5px] border-[#310202] 
                  shadow-[1px_1px_1px_#1E3445] hover:bg-[#b84716] 
               [text-shadow:1px_1px_#310202] "
      >
                       <svg
               viewBox="0 0 250 50"
               xmlns="http://www.w3.org/2000/svg"
               className="w-full h-full" 
            >  
              <text
               x="50%"
               y="50%"
               dominantBaseline="middle"
               textAnchor="middle"
               className=" font-bold text-[4vh]  fill-[#F6B639] 
             stroke-[#310202] stroke-[6] [paint-order:stroke_fill] 
             drop-shadow-[3px_2px_0px_#310202] font-['Pixelify_Sans',serif]"
              >
               PLAY
              </text>
              </svg> 
              
                  </Button>
                  </Link>

                </div>
                
            
            </div>
            
            
    );
}


export default Home;
