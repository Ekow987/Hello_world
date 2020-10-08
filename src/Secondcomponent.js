import React from 'react';

function Secondcomponent() {
    return (
        <div className="mama">
           <div>
               <h1 style={{color:"white" ,marginLeft:"50px"}}>Names of Students</h1>
    <h2 style={{color:"white",textAlign:"center",marginRight:"500px"}}>Groups</h2>
    <table>
      <tr>
        <th style={{color:"white"}}>Group1</th>
        <th style={{color:"white"}}>Group2</th>
        <th style={{color:"white"}}>Group3</th>
      </tr>
      <tr>
        <td style={{color:"white"}}>Albert Ansah</td>
        <td style={{color:"white"}}>Emmanuel Appiedu</td>
        <td style={{color:"white"}}>Josuah Mensah</td>
      </tr>
      <tr>
        <td style={{color:"white"}} >Nana Scriptures</td>
        <td style={{color:"white"}}>Bismark Kumah</td>
        <td style={{color:"white"}}>Johnson Badu</td>
      </tr>
      <tr>
        <td style={{color:"white"}}>Nana Adwoa</td>
        <td style={{color:"white"}}>Kilo colman</td>
        <td style={{color:"white"}}>Bella Mundi</td>
      </tr>
    </table>
           </div>
        </div>
    )
}

export default Secondcomponent;
