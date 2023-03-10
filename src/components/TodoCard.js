import React from 'react'

const TodoCard = () => {
	return (
		<div className='w-full p-4 md:w-[var(--width-50)] lg:w-[var(--width-25)] border border-gray-200 rounded shadow animate-pulse dark:border-gray-700'>
			<h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
				Noteworthy technology acquisitions 2021
			</h5>
			<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
				Here are the biggest enterprise technology acquisitions of 2021 so far,
				in reverse chronological order.
			</p>
			<div className='flex gap-3'>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					02/03/23
				</p>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					02/03/23
				</p>
			</div>
		</div>
	)
}

export default TodoCard
