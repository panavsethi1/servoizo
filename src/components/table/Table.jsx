import React from 'react';
import { useTable } from 'react-table';

function Table({ height }) {
	const longData = React.useMemo(
		() => [
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
		],
		[]
	);

	const shortData = React.useMemo(
		() => [
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
			{
				id: '#A12',
				name: 'Antra Gupta',
				date: 'Aug 29, 2021',
				devices: ['Samsung Washing Machine - M98FDG', 'LG TV - G65A5'],
				status: true,
			},
		],
		[]
	);

	let data = height === 'long' ? longData : shortData;

	const columns = React.useMemo(
		() => [
			{ Header: 'ID', accessor: 'id' },
			{ Header: 'Name', accessor: 'name' },
			{ Header: 'Date', accessor: 'date' },
			{
				Header: 'Device Added',
				id: 'devices',
				accessor: (data) => {
					let output = [];
					data.devices.forEach((device) => {
						output.push(device);
					});
					return output.join(', ');
				},
			},
			{ Header: 'Account Status', accessor: 'status' },
		],
		[]
	);

	const tableInstance = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;

	return (
		<div className='data-table'>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>
											{cell.column.Header ===
											'Device Added' ? (
												<div className='data-table__devices'>
													{cell.value
														.split(', ')
														.map((device, idx) => {
															return (
																<p
																	key={idx}
																	className='data-table__devices__item'>
																	{device}
																</p>
															);
														})}
												</div>
											) : cell.column.Header ===
											  'Account Status' ? (
												<div className='toggle'>
													<label className='switch'>
														<input
															type='checkbox'
															checked={cell.value}
														/>
														<span className='slider round'></span>
													</label>
												</div>
											) : (
												cell.render('Cell')
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
