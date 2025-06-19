'use client'
import { useState } from "react";
import { Recipe } from "@/types/recipe";
import { FaCarrot } from "react-icons/fa";
import { MdMenuBook, MdNavigateNext, MdNavigateBefore, MdAccessTime } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";

type RecipeDetailsProps = {
    recipes: Recipe[];
    recipeIndex: number;
};

export default function RecipeDetails({ recipes, recipeIndex }: RecipeDetailsProps) {
    const [currIndex, setCurrIndex] = useState(recipeIndex);
    const recipe = recipes[currIndex];
    const [tab, setTab] = useState<"ingredients" | "instructions">("ingredients");

    const handleNext = () => {
        setCurrIndex((prev) => (prev + 1) % recipes.length);
        setTab("ingredients");
    };

    const handleBack = () => {
        setCurrIndex((prev) => (prev - 1 + recipes.length) % recipes.length);
        setTab("ingredients");
    };

    function formatServing(servings: number): string {
        return servings > 1 ? `${servings} Servings` : `${servings} Serving`;
    }

    return (
        <section className="min-h-screen flex flex-col items-start justify-center bg-cover bg-center bg-no-repeat relative">
            <div className="absolute w-full h-full bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${recipe.background})`, filter: "brightness(0.8)"}} aria-hidden="true"
            />

            <div className="h-full relative z-10 bg-charcoal/60 flex justify-center flex-col py-28 px-10 lg:px-16 w-full lg:w-[58%] bg-repeat bg-swirl lg:border-r-8 lg:border-r-satinsheengold">
                <div className="flex flex-col gap-2 lg:gap-10 lg:flex-row">
                    <div className="flex justify-center items-center">
                        <img src={recipe.image} alt={recipe.name}
                            className="w-[200px] lg:w-[110px] object-cover transition-all duration-700 border-2 border-satinsheengold rounded-full shadow-[0_0_30px_rgb(198,150,43,1)]"
                        />
                    </div>

                    <h1 className="shadow-text text-4xl lg:text-left text-center font-bold text-white drop-shadow mb-2 flex flex-col justify-between py-1">
                        {recipe.name}
                        <div className="text-sm flex mt-4 lg:mt-0 gap-5 lg:justify-start justify-center">
                            <span className="flex justify-center items-center border rounded-full px-4 lg:px-3 py-0 lg:py-1 bg-oldlace/20">
                                <MdAccessTime className="mr-3"/> {recipe.cookingTime}
                            </span>
                            
                            <span className="flex justify-center items-center border rounded-full px-3 py-0 lg:py-1 bg-oldlace/20">
                                <PiUsersThreeFill className="mr-3"/> {formatServing(recipe.servings)}
                            </span>
                        </div>
                    </h1>
                </div>

                <p className="bg-oldlace rounded-lg p-6 text-charcoaltwo mb-10 mt-4 flex flex-col justify-start items-center text-justify">
                    {recipe.description}
                </p>

                <div className="flex gap-0 justify-between lg:justify-start lg:gap-4">
                    <button className={`flex flex-col lg:flex-row justify-center items-center px-7 py-2 rounded-t-lg font-semibold transition-all duration-300
                        ${tab === "ingredients" ? "bg-oldlace text-barnred shadow" : "bg-barnred text-oldlace hover:bg-rufous"}`}
                        onClick={() => setTab("ingredients")}
                    >
                        <FaCarrot className="mt-2 lg:mt-0 mr-0 mb-1 lg:mb-0 lg:mr-3"/> Ingredients
                    </button>
                    <button className={`flex flex-col lg:flex-row justify-center items-center px-7 py-2 rounded-t-lg font-semibold transition-all duration-300
                        ${tab === "instructions" ? "bg-oldlace text-barnred shadow" : "bg-barnred text-oldlace hover:bg-rufous"}`}
                        onClick={() => setTab("instructions")}
                    >
                        <MdMenuBook className="mt-2 lg:mt-0 mr-0 mb-1 lg:mb-0 lg:mr-3"/> Instructions
                    </button>
                </div>

                <div className="bg-oldlace/20 rounded-b-lg rounded-tr-none lg:rounded-tr-lg shadow-lg p-6 transition-all duration-500 mb-6">
                    {tab === "ingredients" ? (
                        <ul className="list-disc list-inside space-y-2 animate-fade-in">
                            {recipe.ingredients.map((item, index) => (
                                <li key={index} className="text-oldlace rounded-lg bg-barnred/80 py-2 px-5">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <ol className="list-decimal list-inside space-y-2 animate-fade-in">
                            {recipe.instructions.map((step, index) => (
                                <li key={index} className="text-oldlace rounded-lg bg-barnred/80 py-2 px-5">{step}</li>
                            ))}
                        </ol>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 bg-barnred w-full flex justify-between">
                    <button onClick={handleBack} className="flex flex-row justify-center items-center text-lg px-8 py-6 text-oldlace font-semibold hover:bg-rufous transition">
                        <MdNavigateBefore className="mr-2"/> Back
                        <span className="hidden lg:flex border border-oldlace rounded-full px-4 py-1 ml-7 text-sm text-oldlace/80">
                            {recipes[(currIndex - 1 + recipes.length) % recipes.length].name}
                        </span>
                    </button>

                    <button onClick={handleNext} className="flex flex-row justify-center items-center text-lg px-8 py-6 text-oldlace font-semibold hover:bg-rufous transition">
                        <span className="hidden lg:flex border border-oldlace rounded-full px-4 py-1 mr-7 text-sm text-oldlace/80">
                            {recipes[(currIndex + 1) % recipes.length].name}
                        </span>
                        Next <MdNavigateNext className="ml-2"/>
                    </button>
                </div>
            </div>
        </section>
    );
}