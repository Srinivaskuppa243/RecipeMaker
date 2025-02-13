import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const [recipe, setRecipes] = useState(null)
  const nav = useNavigate()

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`)
      const data = await res.json()
      setRecipes(data)
    }
    fetchRecipes()
  }, [id])
  if (!recipe) return <div>Loading...</div>
  return (
    <div className="container">
      <div className="card p-4">
        <h1 className="text-center mb-3">{recipe.name}</h1>
        <div className="d-flex mb-3">
          <img className="recipe_img rounded" src={recipe.image} alt={recipe.name} />
          <ul>
            <h4>Ingredients</h4>
            {recipe.ingredients.map((ing) => (
              <li>{ing}</li>
            ))}
          </ul>
        </div>
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
        <div className="d-flex gap-2">
          <p><b>Difficulty:</b>{recipe.difficulty}</p>
          <p><b>Rating: </b>{recipe.rating} ⭐️</p>
          <p><b>Reviews: </b>{recipe.reviewCount}</p>
        </div> 
      </div>
      <button onClick={()=>nav(-1)} className="my-2 btn btn-primary">Back</button>
    </div>
  )
}

export default RecipeDetails
