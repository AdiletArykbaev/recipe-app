import './App.css';
import {useEffect,useState} from "react"
import Recipe from './Components/Recipe';


function App() {
  const [value,setValue] = useState("")
  const [query,setQuary] = useState("")
  const [recipes,setRecipe]= useState([])
  console.log(recipes)

  const getData= async()=>{
    const req = await fetch( `https://api.edamam.com/search?q=${query}&app_id=f8ad6956&app_key=774409e88e99f8033fbdde6c5746520a&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await req.json()
    setRecipe(data.hits)
  }
  
  useEffect(()=>{
    getData()
   },[query])
  return (
    <div className="App">
      <form onSubmit={
        (e)=>{
          e.preventDefault()
          setQuary(value)
        }
      } >
        <input onChange={(e)=>{
          setValue(e.target.value)
        }} placeholder="search food"/>
        <button  type="submit">
          search
        </button>
      </form>
        <div className="Recipes__wrapper">
            {recipes.map((item)=>{
              return <Recipe title={item.recipe.label} logo={item.recipe.image} text={item.recipe.ingredientLines } cuisen={item.recipe.cuisineType}/>
            })}
        </div>
    </div>
  );
}

export default App;
