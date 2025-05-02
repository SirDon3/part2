import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchedNames, setSearchedNames] = useState(persons)

  const handleFormSubmission = (e) => {
    e.preventDefault()

    const firstName = persons.find(person => person.name === newName);
    if(firstName){
      alert(`${newName} is already added to phonebook`)
    }else{
      const nameObject = {name: newName, number: newNumber, id: persons.length + 1}
      setPersons(prev => [...prev, nameObject ])
      console.log(nameObject)
      setNewName('')
      setNewNumber('')
    }

  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const searchNames = (e) => {
    setSearchName(e.target.value)
    const filteredNames = persons.filter((person) =>  person.name.toLowerCase().includes(searchName.toLowerCase()))
    setSearchedNames(filteredNames)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
        <div>
        Filter show with <input value={searchName} onChange={searchNames}/>
        </div>
   
      <h2>Add a New Name</h2>
      <form onSubmit={handleFormSubmission}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  
   <h2>Numbers</h2>
   <ul>
    {searchedNames.map((person) => (
           <li key={person.id}>{person.name} {person.number} </li>
    ))}
   </ul>
    </div>
  )
}

export default App