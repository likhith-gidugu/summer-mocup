import border1 from './images/border_1.png';
import border2 from './images/border_2.png'

const FourthPage=()=>{


    return(
        
        <section className='  pagefour'>
           <center  >
        <img src={border1}  alt='border'/>  
        
        <div className='fourpagetxt'>

   <h1>Hiking In The Mountains</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipi-
scing elit, <br/>sed do eiusmod tempor incididunt ut
labore et dolore magna</p>

        </div>
        <img src={border2} alt='border2'/>
        </center>
        
        </section>
      
    );
}
export default FourthPage;