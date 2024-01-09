import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<Detail />} />
    </Routes>
    </Router>
  );//
}//<Routes>는 한번에 하나의 Route만 render해주는 기능
//다시 말해 다른 것을 이용하면 한번에 두개이상도 render가능
//새로운 버전이 나오면서 Switch가 Routes로 바뀌면서 몇가지 더 바뀐거같은데
//니꼬의 강의에서 <Route path="/hello"><h1>hello</h1></Route>
//로 url뒤에 /hello를 붙이면 hello라는 문구만 떠있는 route로 이동했는데
//지금 저 코드 자체가 안 먹힌다.
//특정 element나 그런 것들 없이 단순히 경로 지정하고 띄우는 것은 어떻게 하려나

// /movie/:id 에서 :를 써주는 것이 useParams와 이어지는 키 포인트
// " : " 뒷부분에 나오는 것들을 변수로 하여 사용할 수가 있게된다 즉, 동적 라우팅이 가능해진다.


export default App;