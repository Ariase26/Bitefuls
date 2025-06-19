import Link from "next/link";
import Image from "next/image";
import {Recipe} from "@/types/recipe";
import {HiOutlineUserGroup, HiOutlineClock, HiOutlineArrowRight} from "react-icons/hi2";

type RecipeCardProps = {
    recipe: Recipe;
}

type CardInfo = {
    icon: React.ReactNode;
    text: string;
};

export default function RecipeCard( {recipe} : RecipeCardProps ) {
    function formatDescription(description: string): string {
        return description.substring(0, 115) + (description.length > 115 ? '...' : '');
    }

    function formatServing(servings: number): string {
        return servings > 1 ? `${servings} Servings` : `${servings} Serving`;
    }

    const cardInfo: CardInfo[] = [
        {
            icon: <HiOutlineClock className="mr-2 text-satinsheengold text-lg" />,
            text: recipe.cookingTime,
        },
        {
            icon: <HiOutlineUserGroup className="mr-2 text-satinsheengold text-lg" />,
            text: formatServing(recipe.servings),
        }
    ];

    return (
        <Link href={`/recipes/${recipe.id}`}
            className="relative flex flex-col rounded-lg h-96 bg-oldlace bg-repeat hover:scale-105 transition-all ease-in-out duration-300"
        >
            <div className="rounded-t-lg overflow-hidden h-full w-full">
                <Image src={recipe.background} alt={recipe.name}
                    className="w-full h-full object-cover transition-all duration-700"
                    width={500} height={500}
                />
            </div>            

            <div className="relative flex flex-col justify-center items-center w-full h-3/4 p-7">
                <h2 className="ribbon text-xl font-bold -top-[15%]">
                    <div className="px-3">{recipe.name}</div>
                </h2>

                <div className="h-full w-full flex flex-col justify-center items-start -mb-4">
                    <p className="text-charcoaltwo flex flex-row justify-center items-center text-justify mb-2 leading-tight">
                        {formatDescription(recipe.description)}
                    </p>

                    <div className="flex flex-row justify-between w-full items-center mt-3 mb-3 lg:mt-1 lg:mb-0">
                        <div className="flex flex-col lg:flex-row gap-2 w-full">
                            {cardInfo.map((item, idx) => (
                                <p key={idx} className='text-charcoaltwo h-7 text-sm flex flex-row justify-start lg:justify-center items-center border border-satinsheengold rounded-full px-2 py-1 bg-white'>
                                    {item.icon}
                                    <span className="w-full">{item.text}</span>
                                </p>
                            ))}
                        </div>
                        
                        <div className="ml-5 lg:ml-0 lg:-mr-1 flex justify-end items-center">
                            <button type="button" className="w-12 h-12 flex justify-center items-center rounded-full bg-barnred hover:bg-rufous transition-all duration-300 ease-in-out"> ► </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* <Image src={recipe.image} alt={recipe.name}
                className="absolute top-1/2 -translate-y-1/2 -right-20 shadow-[0_0_20px_rgb(198,150,43,1)] border-1 border-satinsheengold rounded-full transition-all duration-700 group-hover:animate-spin-once"
                width={150} height={150}
            /> */}
        </Link>
    );
}
