import React from 'react'

const Skeleton = () => {
	return (
		<div className='w-full p-4 md:w-[var(--width-25)] lg:w-[calc(--width-50)] border border-gray-200 rounded shadow animate-pulse dark:border-gray-700'>
			<div class='h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2'></div>
			<div class='h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
			<div class='h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
			<div class='h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
			<div className='flex gap-2'>
				<div class='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2'></div>
				<div class='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2'></div>
			</div>
		</div>
	)
}

export default Skeleton
