import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

/***
	Supply List Page
***/

export default function index() {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Supply Lists</title>
			</Helmet>
			<Layout>Supply Lists</Layout>
		</div>
	);
}
