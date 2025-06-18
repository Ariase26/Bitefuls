import recipes from "@/data/recipes.json";
import RecipeDetail from "@/components/RecipeDetail";

type Params = {
    params: { id: string };
};

export default async function RecipePage({ params }: Params) {
    const initialIndex = recipes.findIndex((r) => r.id === params.id);

    return (
        <RecipeDetail recipes={recipes} recipeIndex={initialIndex} />
    );
}