import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar";

//create your first component
const Home = () => {
	return (
		<NavBar />
	);
};


// const CardInfo = (props) => {
//   return (
//   <div className="row row-cols-1 row-cols-md-3 g-4">
//       <div className="col">
//           <div className="card h-100">
//               <img src={props.imgSrc} className="card-img-top" alt="..."/>
//                   <div className="card-body">
//                       <h5 className="card-title">{props.title}</h5>
//                       <p className="card-text">{props.text}</p>
//                   </div>
//                   <div className="card-footer">
                 
//                   </div>
//           </div>
//       </div>
     
//   </div>);

// }

// CardInfo.propTypes = {
//   imgSrc: PropType.string,
//   title: PropType.string,
//   text: PropType.string,
//   btnUrl: PropType.string,
//   btnLabel: PropType.string    
// }


// const Jumbtron = (props) => {
//   return (
//       <div className="p-5 mb-4 bg-light rounded-3">
//         <div className="container-fluid py-5">
//           <h1 className="display-5 fw-bold">{props.display}</h1>
//           <p className="col-md-8 fs-4">{props.description}</p>
//           <button className="btn btn-primary btn-lg" type="button">{props.bttnLabel}</button>
//         </div>
//       </div>
//   );
// }

// Jumbtron.propTypes = {
//   display: PropType.string,
//   description: PropType.string,
//   bttnLabel: PropType.string
// }






// export default Navbar;
// export default CardInfo;
// export default Jumbtron;



export default Home;
