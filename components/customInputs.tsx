interface InputProps {
	label?: string
	placeholder?: string
	name?: string
	type?: string
	value?: string
	onChange?: any
	options?: any
	error?: any
	className?: string
}

const inputStyle =
	'bg-slate-100 shadow-sm outline-none p-2 rounded-lg border-[1px] border-slate-300 focus:border-sky-400'

export const Input = ({
	label,
	placeholder,
	name,
	value,
	type,
	onChange,
	error,
	className,
}: InputProps) => {
	return (
		<>
			<div className={`flex flex-col ${className}`}>
				<label className='my-1 text-sm'>{label}</label>
				<input
					type={type}
					name={name}
					value={value}
					placeholder={placeholder || label}
					onChange={onChange}
					className={inputStyle}
				/>
			</div>
			<p className='text-red-600 text-[13px]'>{error?.toString()}</p>
		</>
	)
}

export const Select = ({
	label,
	placeholder,
	name,
	value,
	options,
	onChange,
	error,
	className,
}: InputProps) => {
	return (
		<>
			<div className={`flex flex-col ${className}`}>
				<label className='my-1 text-sm'>{label}</label>
				<select
					name={name}
					value={value}
					placeholder={placeholder || label}
					onChange={onChange}
					className={inputStyle}
				>
					{options?.map(({ id, value }: any) => (
						<option key={id} value={id}>
							{value}
						</option>
					))}
				</select>
			</div>
			<p className='text-red-600 text-[13px]'>{error?.toString()}</p>
		</>
	)
}

export const Btn = ({ onClick, style, className, disabled, children }: any) => {
	return (
		<button
			style={{ ...style, background: disabled ? '#ccc' : null }}
			className={`text-white border-none rounded-md py-[6px] px-2 cursor-pointer bg-[#fc2a2adf] hover:bg-[#fc2a2a] ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
