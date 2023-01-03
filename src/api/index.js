import axios from 'axios'

const apiUrl = '/api'

export const sendMail = formData => {
  const baseUrl = `${apiUrl}/sendmail`
  return axios.post(baseUrl, formData)
}

