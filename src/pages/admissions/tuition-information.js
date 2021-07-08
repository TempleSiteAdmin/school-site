import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

/***
	Page showing tuitions information.
  Data pulled from Contentful
***/

export default function WhyTBS() {
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Tuitions Information</title>
			</Helmet>
			Tuitions Information
			{/* MAKE QUERY FROM CONTENTFUL */}
		</Layout>
	);
}
