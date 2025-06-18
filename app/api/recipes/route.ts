import recipes from '@/data/recipes.json';
import {NextResponse} from 'next/server';
import { Recipe } from '@/types/recipe';

export async function GET(request: Request){
    const {searchParams} = new URL(request.url);

    const search = searchParams.get('search')?.toLowerCase() || '';
    // const filter = searchParams.get('filter')?.toLowerCase() || '';

    let filteredRecipes = recipes;

    if(search){
        filteredRecipes = filteredRecipes.filter((recipe: Recipe) =>
            recipe.name.toLowerCase().includes(search)
        );
    }
    console.log('Recipes:', filteredRecipes);

    return NextResponse.json(filteredRecipes);
}