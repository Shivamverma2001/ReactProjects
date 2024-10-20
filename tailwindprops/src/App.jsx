import './App.css'
import Card from './components/Card'
function App() {
  let content={
    subtitle : "Lorem ipsum dolor",
    paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta ame"
  }
  return (
    <>
       <h1 className="text-3xl font-bold underline mb-10">
      Hello world!
      </h1>
      <Card title="First Title" content={content}/>
      <Card title="Second Title" content={content}/>
    </>
  )
}

export default App
