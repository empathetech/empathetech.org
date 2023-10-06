import styles from "./formInput.module.css"

export const FormInput = ({
	label,
	inputType = "text",
	placeholder,
	onChange,
	isRequired = false,
}: {
	label: string
	inputType?: string
	placeholder: string
	onChange: (e: any) => void
	isRequired?: boolean
}) => {
	return (
		<div className={styles.inputWrapper}>
			<label className={styles.label} htmlFor={label}>
				{label}
			</label>
			<input
				className={styles.input}
				type={inputType}
				placeholder={placeholder}
				onChange={onChange}
				required={isRequired}
			/>
		</div>
	)
}
