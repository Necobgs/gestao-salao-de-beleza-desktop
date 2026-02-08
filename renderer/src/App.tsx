import { Outlet, useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => navigate('/login')}>Go to Login</button>
      <button onClick={() => navigate('/test2')}>Go to Teste 2</button>
      <Outlet/>
    </div>
  );
}

export default App;
