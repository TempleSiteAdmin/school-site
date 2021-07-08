import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

export default function contact() {
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Contact Us</title>
			</Helmet>
			<div>Contact Page</div>
		</Layout>
	);
}
