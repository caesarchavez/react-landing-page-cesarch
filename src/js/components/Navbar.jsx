import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const navBar = () => {
	return (
		<div className="text-center">
			<nav class="navbar navbar-expand-lg bg-dark fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand text-light" href="#">Navigation Bar</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarText">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active text-light" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default navBar;