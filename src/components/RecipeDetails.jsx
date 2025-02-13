import { useState,useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = () => {
    const{id}=useParams();
    const[recipe,setRecipes]=useState(null)
    const nav =useNavigate()

    useEffect=(()=>{
        const fetchRecipes=async()=>{
            const res=await fetch(`https://dummyjson.com/recipes/${id}`)
            const data=await res.json()
            setRecipes(data.recipes)
        }
        fetchRecipes()
    },[id])
    if(!recipe) return <div>Loading...</div>
  return (
    <div>
      
    </div>
  )
}

export default RecipeDetails
