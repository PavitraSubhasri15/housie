import React from "react";
import search from './magnifying-glass.png';
import './solo.css';

export default function Navbar(){
    return(
        <div className="Nav">
            <img src={search} alt="searchbar"/>
            <div style={{display:'flex',flexDirection:'column'}}>
            <h1 style={{ margin: 0}}>Job Board</h1>
            <h4 style={{ margin: 0}}>Find your dream job</h4>

            </div>
            <div style={{marginLeft:'50%'}}>
                <button style={{marginRight:'auto',background:'none',border: 'none',cursor:'pointer'}}>Home</button>
                <button style={{marginRight:'auto',background:'none',border: 'none',cursor:'pointer'}}>Browse Job</button>
                <button  style={{marginRight:'auto',background:'none',border: 'none',cursor:'pointer'}}>Pages</button>
                <button style={{marginRight:'auto',background:'none',border: 'none',cursor:'pointer'}}>Blog</button>
                <button style={{marginRight:'auto',background:'none',border: 'none',cursor:'pointer'}}>Contact</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' ,marginLeft: 'auto'}}>
    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Log in</button>
    <button style={{  cursor: 'pointer', border: 'none', borderRadius: '25px', fontSize: '20px', height: 'auto', backgroundColor: 'greenyellow', color: 'white' }}>Post a job</button>
</div>
        </div>
    )
}
