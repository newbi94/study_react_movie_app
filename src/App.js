import {useEffect,useState} from 'react';
function App() {
  const[loading, setLoading] = useState(true);
  const[movies, setMovies] = useState([]);
  
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  /*useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    })
  }, []);
  then을 사용하는 대신 위에 쓰여진 async-await형태를 쓰는편이 낫다.
  */

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={[Date.now()]}>{g}</li>
                ))}
                
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );//movie.genres를 map하는 이유는 genres가 [], array로 이루어져있다.
  //map을 했기 때문에 key값도 당연히 부여해주어야 한다.그런데 genres는 별도의 id나 key가 없다
  //그래서 원래는 key={g} 즉, 그 자체를 키로 설정했는데 장르가 겹치는 영화가 있을텐데 키값이 안겹친다고?..
  //이럴때야말로 Date.now()를 쓰는게 낫지 않나. 써보니 잘 작동한다.
};
export default App;
