import logo from './images/logo.png';


const Navigation=()=>{



return(

<header className='container-fluid nav-barbg'>

<nav className="navbar navbar-expand-lg">
<a href='home' className='navbar-brand'><img src={logo} alt='logo'/></a>
<button className='navbar-toggler' data-bs-target='#navigation' data-bs-toggle='collapse'><span className='navbar-toggler-icon'></span></button>

<div className='collapse navbar-collapse' id='navigation'>

<ul className='navbar-nav'>
<li className='nav-item'><a href='home' className='nav-link'>HOME</a></li>
<li className='nav-item'><a href='home' className='nav-link'>MENU</a></li>
<li className='nav-item'><a href='home' className='nav-link'>OURSTORY</a></li>
<li className='nav-item'><a href='home' className='nav-link'>CONTACTUS</a></li>
<li className='nav-item'><input className='navginput' type='text'/></li>


</ul>




</div>


</nav>



</header>




    );





}
export default Navigation;