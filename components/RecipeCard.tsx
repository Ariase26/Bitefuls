import Link from "next/link";
import { Recipe } from "@/types/recipe";

type RecipeCardProps = {
    recipe: Recipe;
}

export default function RecipeCard( {recipe} : RecipeCardProps ) {
    return (
        <Link
            href={`/recipes/${recipe.id}`}
            className="block p-4 rounded-lg shadow hover:bg-gray-50 transition border border-black"
        >
            <img
                src={recipe.image} alt={recipe.name}
                className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-2 text-xl font-bold">{recipe.name}</h2>
            <p className="text-gray-600">{recipe.cookingTime} | Serves {recipe.servings}</p>
        </Link>
    );
}
