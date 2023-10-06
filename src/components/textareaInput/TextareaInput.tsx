import styles from "./textareaInput.module.css"

export const TextAreaInput = ({
	label,
	placeholder,
	onChange,
	isRequired = false,
	id,
}: {
	label: string
	placeholder: string
	onChange: (e: any) => void
	isRequired?: boolean
	id: string
}) => {
	return (
		<div className={styles.inputWrapper}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<textarea
				className={styles.input}
				placeholder={placeholder}
				onChange={onChange}
				required={isRequired}
				id={id}
			/>
		</div>
	)
}
