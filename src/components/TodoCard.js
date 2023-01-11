import React from "react";

const TodoCard = ({
  title,
  description,
  createdDate,
  timestamp,
  priority,
  status,
  lastUpdate,
}) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <p> {status} </p>
      <p>{new Date(Number(timestamp) * 1000).toLocaleString()}</p>
      <p> {priority} </p>
      <p> {new Date(Number(createdDate) * 1000).toLocaleString()} </p>
      <p> {new Date(Number(lastUpdate) * 1000).toLocaleString()} </p>
    </div>
  );
};

export default TodoCard;
