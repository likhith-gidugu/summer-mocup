import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import whatsapp from './images/whatsapp.png'





const Footer=()=>{



return(
<footer className='pagefooter'>
    <div className="container">
        <div className="row">
<div className="col-md-6 col-sm-12">

<h1>TITLE HERE</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna</p>
<span><img src={instagram} alt='icon'/>  <img src={ facebook} alt='icon'/>  <img src={whatsapp} alt='icon'/>  <img src={twitter} alt='icon'/> </span>
</div>
<div className='col-md-2  col-sm-12 '> 
<div className='footerplist'>
<h3>ABOUT</h3> 

<ul>
    
    <li>History</li>
    <li>Our Team</li>
    <li>BrandGuidences</li>
<li>Terms & Conditions</li>
<li>privacy policy</li>
    
    </ul> 
    </div>
    </div>



    <div className='col-md-2  col-sm-12 '> <div className='footerplist'> <h3>Services</h3> 

<ul>
    
    <li>How to order</li>
    <li>Our product</li>
    <li>Order Status</li>
<li>Promo</li>
<li>PaymentMethod</li>
    
    </ul> 
    </div>
    </div>


    <div className='col-md-2  col-sm-12 '> <div className='footerplist'> <h3>ABOUT</h3> 

<ul>
    
    <li>contact us</li>
    <li>Help</li>
    <li>Privacy</li>

    
    </ul> 
    </div>
    </div>




</div>

    </div>
</footer>


)

}
export default Footer;