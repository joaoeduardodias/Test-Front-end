import Head from 'next/head'
import Link from 'next/link';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import { Input } from '../components/Form/Input';
import styles from '../styles/register.module.scss';
import { FaArrowLeft } from 'react-icons/fa'
import { Footer } from '../components/Footer';
import { useRef } from 'react';
import * as Yup from 'yup'
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { HelloModal } from '../components/HelloModal';
// import { InputMask } from '../components/Form/InputMask';

export default function Register() {

  const [isHelloModalOpen, setIsHelloModalOpen] = useState(false)
  

  function handleOpenHelloModal() {
    setIsHelloModalOpen(true)
  }

  function handleCloseHelloModal () {
    setIsHelloModalOpen(false)
  }

  const [cep, setCep] = useState<number>()
  const formRef = useRef(null)

  async function handleSubmit(data: FormData, { reset }) {

    try {
      const schema = Yup.object().shape({

        name: Yup.string().required("Name is required !"),
        dateBirth: Yup.string().required("Date Birthday is required !"),
        cpf: Yup.string().required("Cpf is required !"),
        address: Yup.object().shape({
          cep: Yup.string().required("Zip code is required !"),
          number: Yup.number().typeError('Number must be a type number').required("Number is required !"),
          street: Yup.string().required("Street is required !"),
          neighborhood: Yup.string().required("Neighborhood is required !"),
          city: Yup.string().min(3, "City must contain at least 3 characters").required("City is required !"),
          state: Yup.string().required("State is required !"),
        })
      })
      await schema.validate(data, {
        abortEarly: false,
      })

      localStorage.setItem('@healthyFood:User',JSON.stringify(data))
      Cookies.set("User", JSON.stringify(data))

      reset()
      formRef.current.setErrors({})

      handleOpenHelloModal()


    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })
        formRef.current.setErrors(errorMessages)
      }
    }


  }

 

  async function handleCompletedAddress() {
    let value = formRef.current.getFieldValue('address.cep')
    let verifyCep = value.replace(/\D/g, '')
    verifyCep = Number(verifyCep)
    if (verifyCep != 0) {
      setCep(verifyCep)

    }

  }

  useEffect(() => {


    async function addressAPI() {

      try {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => response.json())
          .then(data => {
            formRef.current.setData({

              address: {
                street: data.logradouro,
                neighborhood: data.bairro,
                city: data.localidade,
                state: data.uf
              }

            })
          })
      } catch (error) {
        console.log(error)
      }

    }

    if (cep) {
      addressAPI()
    }

  }, [cep])

  return (
    <>
      <Head>
        <title>Register | Healthy Food</title>
      </Head>

      <div className={styles.registerContainer}>

       <HelloModal isOpen={isHelloModalOpen} onRequestClose={handleCloseHelloModal} />


        <button type="button" className={styles.homeButton}>
          <Link href="/" >
            <a><FaArrowLeft /></a>
          </Link>
        </button>


        <img src="/bloco_final_image.svg" alt="fruit" />

        <div className={styles.formRegisterContainer}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" labelname="Name"  />
            <Input name="dateBirth" labelname="Date Birthday"  />
            <Input name="cpf" labelname="Cpf" />

            <Scope path="address">
              <Input name="cep" labelname="Zip code" onBlur={handleCompletedAddress}  />
              {
                cep ?
                  <>
                    <Input type="number" name="number" labelname="Number"  />
                    <Input name="street" labelname="Street"  />
                    <Input name="neighborhood" labelname="Neighborhood" />
                    <Input name="city" labelname="City"  />
                    <Input name="state" labelname="State"  />
                  </>
                  :
                  <>
                    <Input type="number" name="number" labelname="Number" disabled={true} />
                    <Input name="street" labelname="Street" disabled={true}  />
                    <Input name="neighborhood" labelname="Neighborhood" disabled={true}  />
                    <Input name="city" labelname="City" disabled={true}  />
                    <Input name="state" labelname="State" disabled={true}  />
                  </>

              }
            </Scope>
            <button type="submit">Register</button>
          </Form>
        </div>
      </div>
      <Footer />
    </>


  )
}