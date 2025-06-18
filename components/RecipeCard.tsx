import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/types/recipe";
import { HiOutlineUserGroup, HiOutlineClock } from "react-icons/hi2";

type RecipeCardProps = {
    recipe: Recipe;
}

export default function RecipeCard( {recipe} : RecipeCardProps ) {
    return (
        <Link
            href={`/recipes/${recipe.id}`}
            className="relative flex flex-row p-10 rounded-xl h-[12rem] shadow bg-white border"
        >
            <div className="flex flex-col justify-center items-start">
                <h2 className="text-xl font-bold">{recipe.name}</h2>
                <p className="text-gray-500 flex flex-row justify-center items-center">
                    <HiOutlineClock className="mr-2 text-red-500 text-lg"/> {recipe.cookingTime}
                </p>
                <p className="text-gray-500 flex flex-row justify-center items-center">
                    <HiOutlineUserGroup className="mr-2"/>
                    {recipe.servings} Serving
                </p>
            </div>

            <Image
                src={recipe.image} alt={recipe.name}
                className="absolute shadow border-black right-0 top-1/2 rounded-full"
                width={150}
                height={150}
            />
        </Link>
    );
}
