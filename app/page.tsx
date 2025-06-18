'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';
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
    <main className="h-full">
      <section className="h-screen flex flex-row bg-cover bg-center bg-[url('/images/home-bg.png')]">
        <div className='w-1/2 h-full flex justify-center items-center text-oldlace'>
          <div className='flex flex-col justify-center items-start gap-5 w-2/3 -mb-20'>
            <h1 className='shadow-text text-5xl font-playfair font-bold text-justify'>
              Savor the Moment with Bitefuls
            </h1>
            <p className='shadow-text font-lora text-lg text-justify'>
              Discover, cook, and follow your favorite recipes from
              around the world. This is your go-to app for delicious
              meals, whether you're a seasoned chef or just starting
              out in the kitchen.
            </p>
            <Link href="/recipes/1" className='bg-barnred text-oldlace px-5 py-2 rounded-full shadow-lg hover:bg-rufous transition-all duration-300 ease-in-out'>
              Explore Recipes&nbsp;&nbsp;➜ 
            </Link>
          </div>
        </div>
        <div className='w-1/2 h-full'></div>
        {/* <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-oldlace to-transparent"></div> */}
      </section>

      <section className='bg-errieblack'>
        <form className="flex justify-center my-8">
          <input
            type="text"
            placeholder="Search recipes by name..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-barnred"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-barnred text-oldlace rounded-r-lg"
          >
            Search
          </button>
        </form>
      </section>

      <section>
        <div id="overview" className='p-20 grid grid-cols-1 md:grid-cols-3 gap-10'>
          {recipes.map((recipe: Recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}
