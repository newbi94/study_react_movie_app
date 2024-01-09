import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  
  //useParams는 App.js에서 <Route path="/movie/:id" element={<Detail />} /> 부분중
  //: 뒷부분 즉, id부분을 변수로 받는다(?).
  //Home.js에서 id={movie.id} 와 Movie.js의 <Link to={`/movie/:${id}`}>{title}</Link>
  //그리고 App.js에서 <Route path="/movie/:id" element={<Detail />} />가 상호작용을 하는 것.
  console.log(id)
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )
    ).json();
    console.log(json);
  };
  //여기서 나온 fetch주소는 어떤 경로로 알게 된건지.
  //최초 Home.js에서 사용한 fetch주소를 통해 어떻게 어떻게 하면 알아낼 수 있는거같은데
  //왜 니꼬는 이런걸 건너띄는지 모르겠다 복잡한가
  
  //위 const getMovie~ 코드에서 에러가 난다.
  //Unexpected end of JSON input
  //SyntaxError: Unexpected end of JSON input
  //at getMovie (http://localhost:3000/main.f12bb9d151c530d918a1.hot-update.js:33:97)
  
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

  //Detail로 이끈 것은 App.js에서 <Route path="/movie/:id" element={<Detail />} />
  //부분인데 여기서 " : " 뒷부분에 쓰인 것들이 변수가 된다.
  // :ex라고 한다면 useParams을 써서 console.log해주면 ex: ~가 띄워진다.

  export default Detail;