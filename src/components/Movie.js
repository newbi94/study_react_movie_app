import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/:${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}//<Link>는 기존에 html에서 하던 <a href=""~ 와 다르게
//리액트의 장점을 살려 Link를 사용하면 페이지 이동 시에 페이지 전체를 새로고침하지 않는다.
//그리고 {genres.map~ 부분에 key값을 예전에 배운거 써먹는다고 Date.now()
//를 썼다가 콘솔 창에 잔뜩 오류가 발생했는데, 한번에 불러오기 때문에 아무리
//현재까지의 밀리초라고 해도 한순간에 찍히는거라 key값이 유니크할 수가 없는 거같다.
//해서 일단 g로 하는게 의심스러웠지만 다시 g로 바꿔놓자 에러는 없어졌다.
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  //arrayOf()는 array로써 받을 인자들을 설정하는 것.
};

export default Movie;