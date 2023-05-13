import React from 'react'
import './Style.css'

const ListOfUsers = ({user})=>{
return(
    <div>
    <div className="card">
    <div className="cardtitle"> Name:{user.name} <br/>
    UserName:{user.username}  </div>
<div className="cardbody">
<div className="email"/><h2>Email:{user.email}</h2></div>
<div className="adress">
<p>Street :</p>

<p>City</p>
<p>ZipCode</p>
<h3>GEo-Lat:</h3>
<h3>GEO-Lng</h3>
</div>
<div className="card__footer">
<div className='"info"'>
<h4>Phone</h4>
<h4>Website</h4>
<h5>company: {user.company} </h5>
<h5>CatchPhrase</h5>
<h5>Bs:</h5>
</div>
</div>
    </div>
    </div>
)
}
export default ListOfUsers