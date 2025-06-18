import recipes from '@/data/recipes.json';
import {NextResponse} from 'next/server';
import { Recipe } from '@/types/recipe';

export async function GET(request: Request){
    const {searchParams} = new URL(request.url);

    const search = searchParams.get('search')?.toLowerCase() || '';
    const filterServing = searchParams.get('servings') || '';
    const filterTime = searchParams.get('time') || '';

    let filteredRecipes = recipes;

    if(search){
        filteredRecipes = filteredRecipes.filter((recipe: Recipe) =>
            recipe.name.toLowerCase().includes(search)
        );
    }

    if (filterServing) {
        filteredRecipes = filteredRecipes.filter((recipe: Recipe) =>
            recipe.servings === Number(filterServing)
        );
    }

    if (filterTime) {
        filteredRecipes = filteredRecipes.filter((recipe: Recipe) =>
            recipe.cookingTime === filterTime
        );
    }
    
    console.log('Recipes:', filteredRecipes);

    return NextResponse.json(filteredRecipes);
}