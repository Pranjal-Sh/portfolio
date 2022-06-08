import React from 'react';

export default function Education(){
    return(
        <div id="education">
            <img className="eduImg" src='./Images/profile3.png'/>
            <div className="eduImgBefore"></div>
            <div className="eduTable">
                <h2>Eduction</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Class</th>
                            <th scope="col">Board</th>
                            <th scope="col">Insitution</th>
                            <th scope="col">CGPA/Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">2016</th>
                            <td>10th</td>
                            <td>CBSE</td>
                            <td>St. Francis School, Indirapuram, UP, India</td>
                            <td>9.2 CGPA</td>
                        </tr>
                        <tr>
                            <th scope="row">2018</th>
                            <td>12th</td>
                            <td>CBSE</td>
                            <td>St. Francis School, Indirapuram, UP, India</td>
                            <td>90%</td>
                        </tr>
                        <tr>
                            <th scope="row">2021</th>
                            <td>BCA</td>
                            <td>-</td>
                            <td>Amity University, Noida, UP, India</td>
                            <td>9.26 CGPA</td>
                        </tr>
                    <tr>
                        <th scope="row">2023</th>
                        <td>MCA</td>
                        <td>-</td>
                        <td>Amity University, Noida, UP, India</td>
                        <td>9.28 CGPA(7th sem)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}