// 무조건 app/page라는 이름이어야 
import Link from "next/link";

export const metadata = {
    title: 'Home',
}
  
export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    // 옛날 방식: client side. useState, useEffect 사용해서 data fetch, 이번 방식: server side. 백엔드에서 실행
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map(
                movie => 
                    <li key={movie.id}>
                        <Link href={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>)
            }
        </div>
    )
}
