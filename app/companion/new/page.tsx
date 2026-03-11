import { auth } from "@clerk/nextjs/server";
import Compationform from "@/components/compationform";
import { redirect } from "next/navigation";


const NewCompanionPage = async () => {
    const { userId } = await auth();
    if (!userId) {
        return redirect("/sign-in");
    }
    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            <article className="w-full gap-4 flex flex-col">
                <h1>Create Your Companion</h1>

                <Compationform />
            </article>
        </main>
    );
}