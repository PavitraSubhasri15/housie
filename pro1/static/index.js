import React from "react";
import ReactDOM from 'react-dom';
import './solo.css';
/*import Nav from './nav2';
import data from './solo2data';
import logo from './logo192.png';*/
import Navbar from '../src/Navbar';
import bgimg from './mouse-laptop-cactus-plant-eyeglasses-budget-plan-coffee-cup-blue-background.jpg';
/*import App from './app';*/
/*import person from 'man-person-people-male-asian-portrait-922334-pxhere.com.jpg';*/

        /*const page=(
            <div className='d1'>
            <Nav/>
            <Main/>
            <body>
                <p>This is body</p>
            </body>
            </div>

        )
        
        const element = (
            <div class='d1'>
                <nav className='navitems'>
                    <img src={logo}/>
                    <ul style="color:white;">
                        <li>job details</li>
                        <li>blog</li>
                    </ul>
                </nav>
            </div>
        );
        */
       /*const page=(
            <div className="d">
            <img src={person} alt="person"/>
            <p>hi</p>
            <div>
            <button id="b1">Email</button>
            <button id="b2">LinkedIn</button>
            </div>
            <h2>About</h2>
            <p>This is Pavitra.I am searching for job</p>
            <h2>Interests</h2>
            <p>I am interested in coding and travelling</p>
            </div>
       
       )
        ReactDOM.render(
            page,
            document.getElementById('root')
        );*/
        /*const page=(
            <App/>
        )
        ReactDOM.render(
            page,
            document.getElementById('root')
        );*/
       /* const page=(
            
            <div>
                <nav style={{backgroundColor:'lightblue'}}>
            <img src={logo} style={{width:'45px',height:'45px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',marginRight:'10px'}} alt="logo"/>
            <b style={{color:'blue',position:'absolute',top:'15px'}}>React</b>
        </nav>
                <Nav img={data[0].img} name={data[0].name} place={data[0].place} date={data[0].date}/>
                <Nav name={data[1].name}></Nav>
            </div>
        )
        ReactDOM.render(
            page,
            document.getElementById('root')
        );
return(
    thingsArray.map(joke=>{
        <p>joke</p>
    }
)
`Thing ${thingsArray.length+1}`*/
// ReactDOM.render(
//     <React.StrictMode>
//       <Navbar /> {/* Rendering App component */}
//       <div style={{ height: '100vh', background: 'cover', position: 'relative' }}>
//     <img src={bgimg} alt="bg" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.4', display: 'block' }} />

//     <div style={{ display: 'flex', flexDirection: 'column',position: 'absolute', top: '35%', left: '10%' }}>
//         <h3 style={{ color: 'black' }}>Jobs listed</h3>
//         <h1 style={{ color: 'black' }}>Find your Dream Job</h1>
//         <h5 style={{ color: 'black' }}>we provide online instant cash loans with quick approval that suit your term length</h5>
//         <button style={{  cursor: 'pointer', border: 'none', borderRadius: '10px', fontSize: '20px', height: 'auto', width:'250px',backgroundColor: 'green', color: 'white' }}>Upload yout resume</button>

//     </div>
//     <form style={{ display:'inline'}}>
//         <input placeholder='Search keyword'  style={{marginLeft:'350px',marginRight:'20px',background:'none'}}></input>
//         <input placeholder='Location'  style={{marginRight:'20px',background:'none'}}></input>
//         <input placeholder='Category'  style={{marginRight:'20px',background:'none'}}></input>
//         <button style={{  cursor: 'pointer', border: 'none', fontSize: '30px', height: 'auto', backgroundColor: 'greenyellow', color: 'white' }}>Find job</button>

//         </form>
// </div>


//     </React.StrictMode>,
//     document.getElementById('root')
//   );
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);