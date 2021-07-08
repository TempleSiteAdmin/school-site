import React from "react";
import { Fragment } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Logo from "../assets/TBS-Logo.svg";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

/**
	TODO:
	-Hide bottom border on mobile dropdown buttons
	-Hide nav on scroll down. Show on scroll up.
**/

const mainLinks = [
	{ name: "Academics", link: "/academics", current: false },
	{ name: "Contact", link: "/contact", current: false },
];

const grabLinks = [
	{ name: "Contact", link: "/contact/", current: false },
	{ name: "Apply", link: "/admissions/", current: false },
];

const aboutLinks = [
	{ name: "Legal", link: "/about/legal/", current: false },
	{
		name: "Our Administration",
		link: "/about/our-administration/",
		current: false,
	},
	{
		name: "Our Faculty and Staff",
		link: "/about/our-faculty-and-staff/",
		current: false,
	},
	{ name: "Our Future", link: "/about/our-future/", current: false },
	{ name: "Our History", link: "/about/our-history/", current: false },
	{ name: "Our Mission", link: "/about/our-mission/", current: false },
	{
		name: "What is the Gospel?",
		link: "/about/what-is-the-gospel/",
		current: false,
	},
	{ name: "Who We Are", link: "/about/who-we-are/", current: false },
	{ name: "Why TBS", link: "/about/why-tbs/", current: false },
];

const admissionsLinks = [
	{ name: "FAQs", link: "/admissions/faqs/", current: false },
	{ name: "Forms", link: "/admissions/forms/", current: false },
	{ name: "Diversity", link: "/admissions/diversity/", current: false },
	{ name: "The Process", link: "/admissions/the-process/", current: false },
	{
		name: "Tuition Information",
		link: "/admissions/tuition-information/",
		current: false,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								{/* TODO: brighten image on hover */}
								<div className="flex-shrink-0 flex items-center">
									<Link to="/">
										<Logo
											className="block h-auto w-9 hover:opacity-90"
											fill="white"
										/>
									</Link>
								</div>
								{/**
								================================================================
								Links:
								================================================================
								**/}
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{/* Main Links */}
										{mainLinks.map((item) => (
											<Link
												key={item.name}
												to={item.link}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"px-3 py-2 rounded-md text-sm font-medium"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</Link>
										))}
										{/**
										================================================================
										Dropdowns:
										================================================================
										**/}
										{/* About Dropdown */}
										<Menu as="div" className="relative inline-block text-left">
											{({ open }) => (
												<>
													<div>
														<Menu.Button className="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium focus:outline-none">
															About
															{open ? (
																<ChevronUpIcon
																	className="-mr-1 ml-2 h-5 w-5"
																	aria-hidden="true"
																/>
															) : (
																<ChevronDownIcon
																	className="-mr-1 ml-2 h-5 w-5"
																	aria-hidden="true"
																/>
															)}
														</Menu.Button>
													</div>

													<Transition
														show={open}
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items
															static
															className="z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
														>
															<div className="py-1">
																{aboutLinks.map((item) => (
																	<Menu.Item>
																		{({ active }) => (
																			<Link
																				to={item.link}
																				className={classNames(
																					active
																						? "bg-gray-100 text-gray-900"
																						: "text-gray-700",
																					"block px-4 py-2 text-sm"
																				)}
																			>
																				{item.name}
																			</Link>
																		)}
																	</Menu.Item>
																))}
															</div>
														</Menu.Items>
													</Transition>
												</>
											)}
										</Menu>
										{/* Admissions Dropdown */}
										<Menu as="div" className="relative inline-block text-left">
											{({ open }) => (
												<>
													<div>
														<Menu.Button className="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium focus:outline-none">
															Admissions
															{open ? (
																<ChevronUpIcon
																	className="-mr-1 ml-2 h-5 w-5"
																	aria-hidden="true"
																/>
															) : (
																<ChevronDownIcon
																	className="-mr-1 ml-2 h-5 w-5"
																	aria-hidden="true"
																/>
															)}
														</Menu.Button>
													</div>

													<Transition
														show={open}
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items
															static
															className="z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
														>
															<div className="py-1">
																{admissionsLinks.map((item) => (
																	<Menu.Item>
																		{({ active }) => (
																			<Link
																				to={item.link}
																				className={classNames(
																					active
																						? "bg-gray-100 text-gray-900"
																						: "text-gray-700",
																					"block px-4 py-2 text-sm"
																				)}
																			>
																				{item.name}
																			</Link>
																		)}
																	</Menu.Item>
																))}
															</div>
														</Menu.Items>
													</Transition>
												</>
											)}
										</Menu>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{mainLinks.map((item) => (
								<Link
									key={item.name}
									to={item.link}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Link>
							))}
							{/* Mobile About Dropdown */}
							<Menu
								as="div"
								className="rounded-md bg:gray-500 hover:bg-gray-700 hover:text-white"
							>
								{({ open }) => (
									<>
										<div>
											<Menu.Button className="inline-flex justify-left w-full rounded-md border-gray-300 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 focus:outline-none">
												About
												{open ? (
													<ChevronUpIcon
														className="-mr-1 ml-2 h-5 w-5"
														aria-hidden="true"
													/>
												) : (
													<ChevronDownIcon
														className="-mr-1 ml-2 h-5 w-5"
														aria-hidden="true"
													/>
												)}
											</Menu.Button>
										</div>

										<Transition
											show={open}
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items
												static
												className="z-20 origin-top-right right-0 mt-2 w-full focus:outline-none"
											>
												<div className="py-1">
													{aboutLinks.map((item) => (
														<Menu.Item>
															{({ active }) => (
																<Link
																	to={item.link}
																	className={classNames(
																		active
																			? "bg-gray-600 text-gray-100"
																			: "text-gray-50",
																		"block px-4 py-2 rounded-md"
																	)}
																>
																	{item.name}
																</Link>
															)}
														</Menu.Item>
													))}
												</div>
											</Menu.Items>
										</Transition>
									</>
								)}
							</Menu>
							{/* Mobile Admissions Dropdown */}
							<Menu
								as="div"
								className="rounded-md bg:gray-500 hover:bg-gray-700 hover:text-white"
							>
								{({ open }) => (
									<>
										<div>
											<Menu.Button className="inline-flex justify-left w-full rounded-md border-gray-300 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 focus:outline-none">
												Admissions
												{open ? (
													<ChevronUpIcon
														className="-mr-1 ml-2 h-5 w-5"
														aria-hidden="true"
													/>
												) : (
													<ChevronDownIcon
														className="-mr-1 ml-2 h-5 w-5"
														aria-hidden="true"
													/>
												)}
											</Menu.Button>
										</div>

										<Transition
											show={open}
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items
												static
												className="z-20 origin-top-right right-0 mt-2 w-full focus:outline-none"
											>
												<div className="py-1">
													{admissionsLinks.map((item) => (
														<Menu.Item>
															{({ active }) => (
																<Link
																	to={item.link}
																	className={classNames(
																		active
																			? "bg-gray-600 text-gray-100"
																			: "text-gray-50",
																		"block px-4 py-2 rounded-md"
																	)}
																>
																	{item.name}
																</Link>
															)}
														</Menu.Item>
													))}
												</div>
											</Menu.Items>
										</Transition>
									</>
								)}
							</Menu>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
