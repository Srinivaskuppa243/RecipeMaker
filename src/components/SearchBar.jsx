import { useState, useEffect } from 'react'

const SearchBar = () => {
    const [recipes, setrecipes] = useState([])
    const [searchQue, setsearchQue] = useState('')
    const [suggestion, setSuggestion] = useState([])

    // For fetching api
    useEffect(() => {
        const fetchRecipes = async () => {
            const res = await fetch('https://dummyjson.com/recipes')
            const data = await res.json()
            setrecipes(data.recipes || [])
        }
        fetchRecipes()
    }, [])
    useEffect(() => {
        if (searchQue.trim() === '') {
            setSuggestion([])
        } else {
            const filtered = recipes.filter((recipe) =>
                recipe.name?.toLowerCase().includes(searchQue.toLowerCase())
            )
            setSuggestion(filtered)
        }
    }, [searchQue, recipes])
    //filtered list for the main display

    console.log("filtered recipes: ", suggestion)
    return (
        <div className='container'>
            <h1 className='text-center'>Recipes</h1>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='col-md-6'>
                    <div className='search-container'>
                        <input
                            type='text'
                            className='rounded rounded-pill w-100 p-3 my-2'
                            placeholder='Search Recipes...'
                            value={searchQue}
                            onChange={(e) => setsearchQue(e.target.value)} />
                        {
                            suggestion.length>0 && (
                                <div className='card p-2'>
                                    {suggestion.map((recipe)=>(
                                        <div className='p-2 border-bottom'>
                                            <b>{recipe.name}</b>
                                        </div>
                                    ))}

                                </div>
                            )

                        }
                    </div>
                </div>
            </div>
            <div className='row'>
                {
                    recipes.map((recipe) => (
                        <div className='col-md-4 mb-3'>
                            <div className='card p-3'>
                                <img src={recipe.image} alt={recipe.name} className='rounded rounded-3 my-2' />
                                <h5>{recipe.name}</h5>
                                <p><b>Cuisine: </b>{recipe.cuisine}</p>
                                <div className='d-flex'>
                                    <p className='me-3'><b>Prep Time: </b>{recipe.prepTimeMinutes}</p>
                                    <p><b>Cook Time: </b>{recipe.cookTimeMinutes}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default SearchBar
