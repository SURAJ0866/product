import React from 'react';
const name ="salman khan"
function Asign(props) {
 function handlepic() {
    props.name?alert("my name is salman khan"):alert("my name is hrtik rosan")
    }
 




  return (
    <div className='container'>
      <div className="card" style={{width: "18rem"}}>
  <img src="https://2.bp.blogspot.com/-TomuOSy2Mns/Wnlg20V1CQI/AAAAAAAAARA/aUwyT0wBWzMR-FkVtxSQzY4NCpGm6cyhACLcBGAs/s1600/hrithik-roshan-020817.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <div>
        <h3>Softwere Developer</h3>
    </div>
    <p className="card-text">hy,my self hritik rosn,and i m a softewere developer and having work with good proficiency.</p>
    <a href="#" className="btn btn-primary" onClick={handlepic}>clik my Bio</a>
  </div>
</div>
    </div>
  );
}

export default Asign;
