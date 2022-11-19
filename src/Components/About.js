import React,{useState, useSyncExternalStore} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [btnText,setBtnText]=useState("Enable Dark Mode");
   const toggleColor=()=>{
        if(myStyle.color ==='black'){
            setMyStyle({
                
                    color: 'white',
                    backgroundColor: 'black',
                    border: '1px solid white'
                        })
                        setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                
                color: 'black',
                backgroundColor: 'white'
                    }) 
                    setBtnText("Enable Dark Mode")
        }
    }
    
  
  return (
    <div className="container" style={myStyle}>
        <h2 className="my-3">About WordPlay App</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About Wordplay
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <strong>WordPlay is simply a set of utility functions to do operations on String objects.</strong> It's a web application that is used all the time to format text however you want for business purposes or any other text formatting purpose
                    </div>
                </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    About Developer
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <strong>Amisha Anshu</strong> is final year student of computer science and engineering.Aims to work hard and build a home for her parents.
                    </div>
                </div>
                </div>
              
        </div>
        <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleColor}>{btnText}</button>
        </div>
        
  </div>
  )
}
