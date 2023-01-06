import * as React from 'react'
import { sendMail } from '../../api'

const Contact = () => {
  const nameRef = React.useRef()
  const emailRef = React.useRef()
  const textRef = React.useRef()

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" ref={emailRef} />
      </div>
      <textarea id="textarea" type="text" ref={textRef}></textarea>
      <button>Submit</button>
    </form>
  )

  // function showMessage() {
  //   this.formSuccess = true
  //   setTimeout(() => {
  //     this.formSuccess = false
  //   }, 4000)
  // };
  async function onSubmit(e) {
    e.preventDefault()

    let form = {
      name: {
        value: nameRef.current.value,
        label: 'Name',
        type: 'text',
        error: '',
      },
      email: {
        value: emailRef.current.value,
        label: 'Phone number or e-mail',
        type: 'text',
        error: '',
      },
      message: {
        value: textRef.current.value,
        label: 'Comment',
        type: 'text',
        error: '',
      },
    }
    // if (!this.$validate(this.form)) {
    //   return
    // }
    // this.preloader = true

    const formData = new FormData()
    for (const key in form) {
      if (typeof form[key].value !== 'undefined') {
        formData.append(key, form[key].value)
      }
    }

    const response = await sendMail(formData)

    if (response.status === 200) {
      console.log('success')
      //   this.showMessage()

      //   this.$showNotification(this.$notify, {
      //     text: 'Your message was sent successfully, Thanks!',
      //     type: 'success'
    }

    setTimeout(() => {
      for (const key in form) {
        if (typeof form[key].value !== 'undefined') {
          form[key].value = ''
        }
      }
    }, 3000)
    // } else {
    //   this.$showNotification(this.$notify, {
    //     text: 'An error occurred. Please try again later.',
    //     type: 'error'
    //   })
    console.log('error')
  }

  // this.preloader = false

  // };
}

export default Contact
