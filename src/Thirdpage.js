import group4pic from './images/image_4.png';
import group5pic from './images/image_5.png';


const ThirdPage=()=>{


return(


    <section className= 'pagethree'>
      <div className='container-fluid '>
        <div className='row part-1'>
          
            <div className='col-md-6 col-sm-12'><img src={group4pic} className='forimages' alt='grouppic'/></div>
            <div className='col-md-6 col-sm-12'><div className='tprightsidetxt'><h1>Discount up to</h1>
            <h1>50% ALL excursion</h1>
            <p>Lorem ipsum dolor sit amet, <br/>consectetur adipi-
scing elit, sed do eiusmod<br/> tempor incididunt ut
labore et dolore magna</p>
<button>READ MORE</button>
            </div>
            
            </div>
        </div>

       
       

        <div className='row part-2'>


        <div className='col-md-6 col-sm-12'><div className='tpleftsidetxt'>
            
        <h1>Januaryr's promo</h1>
            <h1>Buy 1 get 1 free</h1>
            <p>Lorem ipsum dolor sit amet, <br/>consectetur adipi-
scing elit, sed do eiusmod<br/> tempor incididunt ut
labore et dolore magna</p>
<button>READ MORE</button>
            </div>

            </div>
            <div className='col-md-6 col-sm-12'><img src={group5pic} className='forimages' alt='grouppic'/></div>
         
        </div>
    
        </div>

    </section>
);



}
export default ThirdPage;