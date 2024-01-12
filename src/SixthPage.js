import dotspic from './images/image_4-04.png'

const SixthPage=()=>{


return(
<section className='container'>
<div className="row">
    <div className="col-md-4 col-SM-12">
        <div className="content">
            <h3>LOREM IPSUM</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>

    </div>


    <div className="col-md-4 col-sm-12">
        <div className="content">
            <h3>LOREM IPSUM</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>

    </div>



    <div className="col-md-4 col-sm-12">
        <div className="content">
            <h3>LOREM IPSUM</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>

    </div>


    


</div>


<div className='dotpic'><span><img src={dotspic} alt='dot'/></span>&nbsp;<span><img src={dotspic} alt='dot'/></span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna</p>
<p>LOREM IPSUM</p>
</div>
</section>




);

}
export default SixthPage;