import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

/**
	TODO:
	- Change style from flex to grid layout
**/

export default function ourFacultyAndStaff() {
	return <div>Faculty and Staff</div>;
}

// const facultyAndStaff = ({ data }) => {
// 	const staffData = data.allContentfulSchoolStaff.nodes;
// 	const facultyData = data.allContentfulFaculty.nodes;
// 	return (
// 		<Layout>
// 			<Helmet>
// 				<meta charSet="utf-8" />
// 				<title>Faculty and Staff</title>
// 			</Helmet>
// 			<h1 className="mx-12 mt-4 text-center text-gray-900 text-4xl font-bold">
// 				Our Faculty
// 			</h1>
// 			<p className="mx-12 mt-2 text-center text-gray-600 text-lg font-semibold">
// 				We have a warm, caring, and competent faculty. Most have masters
// 				degrees.
// 			</p>
// 			<div className="flex flex-wrap justify-center p-4 sm:m-auto">
// 				{facultyData.map((faculty) => {
// 					return (
// 						<div className="p-4">
// 							<GatsbyImage
// 								className="w-80 rounded-md "
// 								image={faculty.facultyImage.gatsbyImageData}
// 								alt={faculty.facultyFirstName}
// 							/>
// 							<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
// 								{faculty.facultyFirstName} {faculty.facultyLastName}
// 							</h3>
// 							<p class="mt-1 font-medium text-gray-600 dark:text-gray-300 text-center">
// 								{faculty.facultyRole}
// 							</p>
// 						</div>
// 					);
// 				})}
// 			</div>
// 			<h1 className="mx-12 mt-4 pt-4 text-center text-gray-900 text-4xl font-bold border-t-2">
// 				Staff
// 			</h1>
// 			<p className="mx-12 mt-2 text-center text-gray-600 text-lg font-semibold">
// 				We are especially thankful for our kind, loving, and hard-working,
// 				staff.
// 			</p>
// 			<div className="flex flex-wrap justify-center p-4 sm:m-auto">
// 				{staffData.map((staff) => {
// 					return (
// 						<div className="inline-flex flex-col flex-wrap p-4 m-auto">
// 							<GatsbyImage
// 								className="w-80 rounded-md shadow-lg"
// 								image={staff.schoolStaffImage.gatsbyImageData}
// 								alt={staff.schoolStaffFirstName}
// 							/>
// 							<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
// 								{staff.schoolStaffFirstName} {staff.schoolStaffLastName}
// 							</h3>
// 							<span class="mt-1 font-medium text-gray-600 dark:text-gray-300 text-center">
// 								{staff.schoolStaffRole}
// 							</span>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</Layout>
// 	);
// };

// export const query = graphql`
// 	{
// 		allContentfulFaculty(sort: { fields: facultyLastName }) {
// 			nodes {
// 				facultyFirstName
// 				facultyLastName
// 				facultyRole
// 				facultyImage {
// 					gatsbyImageData(placeholder: BLURRED, width: 428)
// 				}
// 			}
// 		}
// 		allContentfulSchoolStaff(sort: { fields: schoolStaffLastName }) {
// 			nodes {
// 				schoolStaffFirstName
// 				schoolStaffLastName
// 				schoolStaffRole
// 				schoolStaffImage {
// 					gatsbyImageData(placeholder: BLURRED, width: 428)
// 				}
// 			}
// 		}
// 	}
// `;

// export default facultyAndStaff;
