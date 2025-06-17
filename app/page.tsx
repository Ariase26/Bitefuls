'use client';
import {useState, useEffect} from 'react';
import RecipeCard from '@/components/RecipeCard';
import { Recipe } from '@/types/recipe';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  function handleGetRecipes(){
    fetch('/api/recipes')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        console.log('Recipes:', data);
    })
  }

  useEffect(() => {
    handleGetRecipes();
  }, []);

  return (
    <>
      <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />

        ))}
      </main>
    </>
  );
}
