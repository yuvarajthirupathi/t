import imk from'../src/imgs/Ellipse.png'
import imc from'../src/imgs/Deco-line.png'
import imo from'../src/imgs/Video.png'
import imp from'../src/imgs/Logo-list.png'
function body3(){
    return(
        <>
        <img src={imk} alt=''className='cirle'/>
        <div className='main'>
        <div>
        <img src={imc} alt='hell'className='cirl'/>

        
        <h1 className='ti'>Leading companies trust us<br></br> to develop software</h1>
        <p>We add development capacity to tech teams. Our value isn’t <br></br>limited to building teams but is equally distributed across the <br></br>project lifecycle. We are a custom software development <br></br>company that guarantees the successful delivery of <br></br>your project.</p>
        <span className='cool'>See more Informations &rarr</span>
        </div>
        <div>
            <img src={imo} alt="" srcset="" />

        </div>

        </div>
        <img src={imc} alt='hell'className='hell'/>
        <h1 className='ki'><span > Meet the People</span><br></br>We are Working With</h1>
        <img src={imk} alt=''className='cirle1'/>
        <div>
            <img src={imp} alt="alt"  className='add'/>
        </div>
        </>
    )
}
export default body3;