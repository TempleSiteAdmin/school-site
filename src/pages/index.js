import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Cta from "../components/Cta";
import Hero from "../components/Hero";

/***
	Home Page
***/

export default function index() {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<meta lang="en" />
				<title>Temple Baptist School</title>
			</Helmet>
			<Layout>
				<Hero />
				<Features />
				<Cta />
			</Layout>
		</div>
	);
}
