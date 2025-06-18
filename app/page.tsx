'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import RecipeCard from '@/components/RecipeCard';
import { Recipe } from '@/types/recipe';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [uniqueServing, setUniqueServing] = useState<number[]>([]);
  const [uniqueCookingTime, setUniqueCookingTime] = useState<string[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServing, setSelectedServing] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  function handleGetRecipes(params: { search?: string; servings?: string; time?: string } = {}) {
    const query = new URLSearchParams();

    if(params.search){
      query.set('search', params.search);
    }

    if(params.servings){
      query.set('servings', params.servings);
    }

    if(params.time){
      query.set('time', params.time);
    }

    fetch(`/api/recipes?${query.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
    });
  }

  console.log("allrecipes:", allRecipes);

  useEffect(() => {
    fetch(`/api/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setAllRecipes(data);
    });

    const servings = new Set<number>();
    const cookingTimes = new Set<string>();

    allRecipes.forEach((recipe: Recipe) => {
      servings.add(recipe.servings);
      cookingTimes.add(recipe.cookingTime);
    });

    setUniqueServing(Array.from(servings).sort());
    setUniqueCookingTime(Array.from(cookingTimes).sort());
  }, [allRecipes]);

  function formatServings(servings: number):string{
    return servings > 1 ? `${servings} Servings` : `${servings} Serving`;
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

      <section className="bg-eerieblack bg-swirl py-16 flex flex-col items-center text-oldlace">
        <div>
          <h2 className="shadow-text text-4xl font-bold font-playfair mb-3 text-center shadow-text">
            Find Your Favorite Recipes
          </h2>
          
          <p className="text-lg text-center text-oldlace mb-8 max-w-2xl shadow-text">
            Search our growing collection of curated dishes and discover meals that match your cravings. Whether you're in the mood for sweet, savory, or spicy — we’ve got something for every palate.
          </p>

          <form className="flex flex-row shadow items-center justify-center rounded-lg border border-oldlace overflow-hidden"
            onSubmit={(e) => { e.preventDefault(); handleGetRecipes({ search: searchTerm, servings: selectedServing, time: selectedTime }); }}
          >
            <input type="text" placeholder="Search recipes by name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-oldlace text-charcoal text-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-barnred transition-all duration-300"
            />

            <button type="submit" className="text-lg px-6 py-2 bg-barnred text-oldlace font-semibold hover:bg-rufous transition-all duration-300">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="p-20 -mt-5">
        <div className="mb-10 flex justify-between items-center">
          <h1 className="shadow-text text-4xl font-playfair font-bold"> Recipes Overview </h1>

          <div className="flex flex-row gap-5">
            <div className="flex flex-col">
              <label htmlFor="servings" className="font-semibold mb-1 text-oldlace/50">Filter by Servings</label>
              <select id="servings" className="text-charcoal px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-barnred"
                value={selectedServing} onChange={(e) => { setSelectedServing(e.target.value); handleGetRecipes({ search: searchTerm, servings: e.target.value, time: selectedTime }); }}
              >
                <option value="">All</option>
                {uniqueServing.map(servings => (
                  <option key={servings} value={servings}>{formatServings(servings)}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="minutes" className="font-semibold mb-1 text-oldlace/50">Filter by Cooking Time</label>
              <select id="minutes" className="text-charcoal px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-barnred"
                value={selectedTime} onChange={(e) => { setSelectedTime(e.target.value); handleGetRecipes({ search: searchTerm, servings: selectedServing, time: e.target.value }); }}
              >
                <option value="">All</option>
                {uniqueCookingTime.map(cookTime => (
                  <option key={cookTime} value={cookTime}>{cookTime}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div id="overview" className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {recipes.length > 0 ? (
            recipes.map((recipe: Recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className="col-span-full text-center text-oldlace text-xl h-48 flex justify-center items-center">
              No recipes found matching your search or filters.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}