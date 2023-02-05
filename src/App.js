import './App.css'
import PurchaseForm from './components/forms/PurchaseForm'
import PurchasesList from './components/forms/PurchasesList'

function App () {
  return (
    <>
      <header>
        <h1>Purchases List</h1>
      </header>
      <main>
        <PurchaseForm />
        <PurchasesList />
      </main>
    </>
  )
}

export default App
