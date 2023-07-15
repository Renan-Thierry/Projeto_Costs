import styles from './Input.module.css'

function Input ({text, type, placeholder, value, name, handleOnChange}){
  return( 
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input type={type} placeholder={placeholder} name={name} id={name} value={value} onChange={handleOnChange}/>
    </div>
  )
}
export default Input;