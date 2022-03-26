import axios from 'axios'

const daybookApi = axios.create({
  baseURL:
    'https://daybook-pinia-default-rtdb.europe-west1.firebasedatabase.app',
})

export default daybookApi
