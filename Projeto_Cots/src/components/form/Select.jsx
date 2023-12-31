import styles from './Select.module.css'

function Select({text,value, options, name, handleOnChange}){
  return( 
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
        <option>Selecione a categoria</option>
        {Array.isArray(options) && options.map((option) => {
          return (
            <option value={option.id} key={option.id}> {option.name} </option>
          );
         })}
      </select>
    </div>
  )
}
export default Select;