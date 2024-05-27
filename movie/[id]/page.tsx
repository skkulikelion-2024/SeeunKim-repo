import { URL } from "../../../(home)/page";
import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// W9 -- parallel requests
async function getMovie(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${URL}/${id}`);

    return response.json();
}

async function getVideos(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    throw new Error("Something broke...");
    const response = await fetch(`${URL}/${id}`);
    return response.json();
}

// W9 update -- Suspense
export default async function MovieDetail({
    params: {id}
}: {
    params: {id: string };
}) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return (
        <div>
            <h3>Movie detail page</h3>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}
