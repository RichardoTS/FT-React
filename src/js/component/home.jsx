import React from "react";

//include images into your bundle

import NavBar from "./NavBar.jsx";
import Jumbtron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbtron display="A Warm Welcome!" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque mollitia amet neque beatae rerum sunt aspernatur sapiente distinctio quos, enim quas quae maxime et molestias aliquam libero harum dolor?" bttnLabel="Call to action!" />
				<div className="container-fluid">
					<div className="row row-cols-3 g-3">
						<div className="col-sm-3 com-md-3">
							<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
						</div>
						<div className="col-sm-3 com-md-3">
							<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
						</div>
						<div className="col-sm-3 com-md-3">
							<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
						</div>
						<div className="col-sm-3 com-md-3">
							<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
						</div>
					</div>
					<hr></hr>
					<div className="row row-cols-3 g-3">
						<div className="col-sm-3 com-md-3">
							<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
						</div>
						<div className="col-sm-3 com-md-3">
							<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
						</div>
						<div className="col-sm-3 com-md-3">
							<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
						</div>
						<div className="col-sm-3 com-md-3">
							<Card imgSrc="https://dummyimage.com/500x325/c7c7c7/8c8c8c" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque vel enim accusamus dolorum animi nobis maiores." btnLabel="Find Out More!" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};




export default Home;
