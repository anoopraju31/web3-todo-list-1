import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	return (
		<nav className='w-full fixed z-20 px-2 pt-2 pb-4 md:pt-0 md:pb-0 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
			<div className='container px-6 flex flex-wrap items-center justify-between mx-auto'>
				<a href='/' className='flex items-center'>
					<span className='self-center text-lg md:text-xl font-semibold whitespace-nowrap dark:text-white'>
						Todo List
					</span>
				</a>
				<button
					type='button'
					onClick={() => setToggle((prev) => !prev)}
					className='inline-flex items-center p-2 ml-3 text-sm round_border md:hidden text-white hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
					{toggle ? (
						<GiHamburgerMenu size={18} color='#fff' />
					) : (
						<IoClose size={20} color='#fff' />
					)}
				</button>
				<div
					className={`${
						!toggle ? 'inline' : 'hidden'
					}  w-full md:block md:w-auto`}>
					<ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700'>
						<li>
							<div className='block text-center cursor-pointer py-2 pl-3 pr-4 leading-8  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:px-2 md:dark:text-white md:border-2 md:border-transparent md:dark:hover:border-gray-100 dark:bg-blue-600 md:dark:bg-transparent'>
								Add Todo
							</div>
						</li>
						<li>
							<button
								type='button'
								class='block py-2 pl-3 pr-4 w-full mt-4 md:mt-0 text-white bg-blue-700 rounded  md:text-blue-700  md:dark:text-white dark:bg-blue-600 '>
								{!toggle ? '0x3dc...9446' : ' Connect '}
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
