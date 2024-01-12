import border from './images/border_1.png';
import border2 from './images/border_2.png'

const SeventhPage=()=>{


return( 
<section >
    <div  className='pageseven'>
    
<img src={border} alt='borderpic'/>


<div className='seventhptxt'><h1>TITLE HERE</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor
incididunt ut labore et dolore magna</p>
<input type ='text' placeholder='your email'/><span><button>subscribe</button></span>
</div>
<img src={border2} alt='border' />

</div>
</section>


);



}
export default SeventhPage;