import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

/***
	Page showing legal information.
  Data pulled from Contentful
***/

export default function WhyTBS() {
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Legal</title>
			</Helmet>
			Legal
			{/* MAKE QUERY FROM CONTENTFUL */}
		</Layout>
	);
}
