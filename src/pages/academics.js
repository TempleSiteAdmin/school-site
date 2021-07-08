import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

/***
	Academics Page
***/

export default function index() {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Academics</title>
			</Helmet>
			<Layout>Academics</Layout>
		</div>
	);
}
