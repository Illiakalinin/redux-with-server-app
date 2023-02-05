import axios from 'axios'

// 1 'https://ullhgy.sse.codesandbox.io/'
// 2 get 'https://ullhgy.sse.codesandbox.io/contacts'
//   post 'https://ullhgy.sse.codesandbox.io/contacts' {}
//   patch 'https://ullhgy.sse.codesandbox.io/contacts/10' {}
//   delete 'https://ullhgy.sse.codesandbox.io/contacts/20'

const httpClient = axios.create({
  baseURL: 'https://ullhgy.sse.codesandbox.io/'
})

// const result = httpClient
//   .get('/contacts')
//   .then(data => console.log('data :>> ', data.data))
//   .catch(e => console.log('e :>> ', e))

// httpClient
//   .post('/contacts', { name: 'Test007' })
//   .then(data => console.log('data :>> ', data.data))
//   .catch(e => console.log('e :>> ', e))

export const getPurchases = () => httpClient.get('/contacts')

export const createNewPurchase = values => httpClient.post('/contacts', values)

// httpClient
//   .patch('/contacts/c0482243-ea82-4edc-a156-1093b3b904f8', { name: 'NewTest' })
//   .then(data => console.log('data :>> ', data.data))
//   .catch(e => console.log('e :>> ', e))

// httpClient
//   .delete('/contacts/1e4eac0b-d7f0-429c-9b31-fabca3bbc0a1')
//   .then(data => console.log('data :>> ', data.data))
//   .catch(e => console.log('e :>> ', e))

export const deletePurchase = id => httpClient.delete(`/contacts/${id}`)
