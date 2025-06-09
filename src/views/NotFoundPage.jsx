import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return(
        <div className="relative min-h-screen w-full overflow-hidden grid place-items-center">
            <h1 className="text-(--chartreuse-yellow) text-4xl goldman-regular prevent-select">Page Not Found</h1>
            <img src="/src/assets/PageNotFound.gif" className="-m-50"></img>
            <Link to={"/HomePage"}>
             <button className=" cursor-pointer bg-[var(--meteorite)] hover:bg-[var(--chartreuse-yellow)] text-white hover:text-black rounded-lg p-2 px-9 w-full mt-3 transition duration-400 ease-in-out">Go Back</button>
            </Link>
        </div>
    )
}