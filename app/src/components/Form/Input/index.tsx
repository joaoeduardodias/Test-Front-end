
import { useField } from "@unform/core";
import { useRef } from "react";
import { useEffect } from "react";
import styles from './styles.module.scss';

interface InputProps  {
  name: string;
  type?: string;
  placeholder?: string;
  labelname: string;
  disabled?: boolean ;
  onBlur?: ()=> void;
}

export function  Input({name, ...rest}: InputProps) {

  const inputRef = useRef<HTMLInputElement>(null)
  const {fieldName, registerField,defaultValue,error} = useField(name)

  
  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
     
    })
    
  }, [fieldName, registerField])

  return(
    <div className={styles.inputField}>
      <label htmlFor={fieldName}>{rest.labelname}</label>
      <input ref={inputRef} defaultValue={defaultValue} {...rest}  placeholder={rest.labelname} />
      {error && <span style={{color: "#f00", marginLeft: '0.3rem', marginTop: "0.3rem"}}>{error}</span> }
    </div>
  )
}