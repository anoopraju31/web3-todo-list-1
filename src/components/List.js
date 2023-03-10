import React from 'react'
import TodoCard from './TodoCard'

const List = () => {
	const lists = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 2,
	]

	return (
		<section className='min-h-screen pt-[50px] body-font text-gray-600'>
			<div className='container mx-auto px-5 py-10'>
				<div className='m-4 flex flex-wrap  gap-3'>
					{lists.map((list) => (
						<TodoCard key={list} />
					))}
				</div>
			</div>
		</section>
	)
}

export default List
