import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

/***
	Layout for all pages
***/

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
			{/* <Footer /> */}
		</div>
	);
}
