// import styles from '../Input/styles.module.scss';

// import  { useRef, useEffect } from 'react';
// import ReactInputMask, { Props as InputPropsMask } from 'react-input-mask';

// import { useField } from "@unform/core";


// interface InputProps extends InputPropsMask {
//   name: string;
//   type?: string;
//   placeholder?: string;
//   labelname: string;
//   disabled?: boolean ;
//   onBlur?: ()=> void;
// }

// export function  InputMask({name, ...rest}: InputProps) {

//   const inputRef = useRef<HTMLInputElement>(null)
//   const {fieldName, registerField,defaultValue,error} = useField(name)

  
//   useEffect(() => {
//     registerField({
//       name: fieldName,
//       ref: inputRef.current,
//       path: 'value',
//       setValue(ref: any, value: string) {
//         ref.setInputValue(value);
//       },
//       clearValue(ref: any) {
//         ref.setInputValue('');
//       },
//     });
//   }, [fieldName, registerField]);


  

//   return(
//     <div className={styles.inputField}>
//       <label htmlFor={fieldName}>{rest.labelname}</label>
//       {/* <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest}  placeholder={rest.labelname} /> */}
//       <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
//       {error && <span style={{color: "#f00", marginLeft: '0.3rem', marginTop: "0.3rem"}}>{error}</span> }
//     </div>
//   )
// }
