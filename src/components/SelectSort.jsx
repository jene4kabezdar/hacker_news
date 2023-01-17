import React from 'react';

const SelectSort = ({changeValue}) => {
	return (
		<select onChange={changeValue} className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 appearance-none">
			<option value="pass">Сортировать</option>
			<option value="score-high">По рейтингу (сначала высокий)</option>
			<option value="score-low">По рейтингу (сначала низкий)</option>
			<option value="date-new">По дате (сначала новые)</option>
			<option value="date-old">По дате (сначала старые)</option>
		</select>
	);
};

export default SelectSort;