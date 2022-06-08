import React from 'react';

export default function Skills(){
    return(
        <div className="skillDiv" id="skill">
            <h2>Skills</h2>
            <div className="card-deck mx-auto skillDeck">
                <div className="card align-items-center skillCard ">
                    <img className="card-img-top skillImg" src="./Images/html.png" alt="HTML"/>
                    <div className="card-body">
                        <strong style={{fontSize: "14px"}}>HTML 5</strong>
                    </div>
                </div>
                <div className="card align-items-center skillCard">
                    <img className="card-img-top skillImg" src="./Images/css-3.png" alt="CSS"/>
                    <div className="card-body">
                        <strong style={{fontSize: "14px"}}>CSS 3</strong>
                    </div>
                </div>
                <div className="card align-items-center skillCard">
                    <img className="card-img-top skillImg" src="./Images/bootstrap.png" alt="Bootstrap"/>
                    <div className="card-body">
                        <strong style={{fontSize: "14px"}}>Bootstrap</strong>
                    </div>
                </div>
                <div className="card align-items-center skillCard">
                    <img className="card-img-top skillImg" src="./Images/java-script.png" alt="Java Script"/>
                    <div className="card-body">
                        <strong style={{fontSize: "14px"}}>Java Script</strong>
                    </div>
                </div>
            </div>
        
            <div className="card-deck mx-auto skillDeck">
                <div className="card align-items-center skillCard">
                    <img className="card-img-top skillImg" src="./Images/android.png" alt="Android Studio"/>
                    <div className="card-body">
                        <strong style={{fontSize: "14px"}}>Android Studio</strong>
                    </div>
                </div>
                <div className="card align-items-center skillCard">
                    <img className="card-img-top skillImg" src="./Images/java.png" alt="Java"/>
                    <div className="card-body">
                        <strong style={{fontSize: "14px"}}>Java</strong>
                    </div>
                </div>
                <div className="card align-items-center skillCard">
                    <img className="card-img-top skillImg" src="./Images/mysql.png" alt="MySQL"/>
                    <div className="card-body">
                        <strong style={{fontSize: "14px"}}>MySQL</strong>
                    </div>
                </div>
                <div className="card align-items-center skillCard">
                    <img className="card-img-top skillImg" src="./Images/python.png" alt="Python"/>
                    <div className="card-body">
                       <strong style={{fontSize: "14px"}}>Python</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}