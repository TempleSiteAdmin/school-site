import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

/***
	Page showing diversity.
  Data pulled from Contentful
***/

export default function WhyTBS() {
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Diversity</title>
			</Helmet>
			Diversity Page
			{/* MAKE QUERY FROM CONTENTFUL */}
		</Layout>
	);
}
