import React, { Fragment, useState } from 'react'

export const Tabs = ({ values }: any) => {
	const [select, setSelect] = useState(0)
	return (
		<>
			<div className='flex sm:inline-flex justify-center items-center select-none rounded-[20px] px-2 h-9 mx-1'>
				{values?.map(({ label }: any, i: any) => {
					return (
						<Fragment key={i}>
							<div
								className='inline-flex items-center select-none h-7 px-2 mx-1 border-2 border-gray-200 rounded-[20px] cursor-pointer'
								style={{
									background: i === select ? 'blueviolet' : '',
									color: i === select ? '#fff' : '',
								}}
								onClick={() => setSelect(i)}
							>
								{label}
							</div>
						</Fragment>
					)
				})}
			</div>
			{values?.map(({ component }: any, i: any) => {
				return <Fragment key={i}>{select === i && component}</Fragment>
			})}
		</>
	)
}
