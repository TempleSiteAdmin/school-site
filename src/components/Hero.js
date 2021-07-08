/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

/**
	TODO:
	- Change style of picture to be behind tagline on sm and md screens
**/

const navigation = [
	{ name: "Product", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

export default function Hero() {
	return (
		<div className="relative bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<svg
						className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<Popover>
						{({ open }) => (
							<>
								<div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

								<Transition
									show={open}
									as={Fragment}
									enter="duration-150 ease-out"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="duration-100 ease-in"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Popover.Panel
										focus
										static
										className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
									>
										<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
											<div className="px-5 pt-4 flex items-center justify-between">
												<div className="-mr-2">
													<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
														<span className="sr-only">Close main menu</span>
														<XIcon className="h-6 w-6" aria-hidden="true" />
													</Popover.Button>
												</div>
											</div>
											<div className="px-2 pt-2 pb-3 space-y-1">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</a>
												))}
											</div>
											<a
												href="#"
												className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
											>
												Log in
											</a>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>

					<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="text-center lg:text-left">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
								<span className="block xl:inline">
									This is where we put a very cool and catchy
								</span>
								<span class="animate-pulse-slow block bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-gray-500 pb-2 ">
									Tagline
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
								lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
								fugiat aliqua.
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<Link
										to="/admissions/"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 md:py-4 md:text-lg md:px-10 active:bg-green-600"
									>
										Apply
									</Link>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<Link
										to="/contact"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-500 bg-blue-100 hover:bg-blue-200 hover:text-indigo-600 md:py-4 md:text-lg md:px-10"
									>
										Contact Us
									</Link>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				{/* Main Photo */}
				<StaticImage
					src="../images/hero-image.jpg"
					alt="Students working in class"
					className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					placeholder="blurred"
				/>
			</div>
		</div>
	);
}
