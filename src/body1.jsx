import img1 from'../src/imgs/hero1.png'
function body1(){
    return(
        <>
        <div className='m1'>
        <div className='p1'>
        <h1>
        <span className='m11'>Great <span className='pc1'>software </span>is</span><br></br>
        built by great<span className='pc1'> teams</span>
        </h1>
        <p className='t1'>We help build and manage a team of world-class developers to bring your vision to life</p>
        <button className='but2'>Let get start</button>
        </div>
        <div className='p2'>
            <img src={img1}alt="hello"  className='im1'/>
        </div>
        </div>

        </>
    )
}
export default body1;