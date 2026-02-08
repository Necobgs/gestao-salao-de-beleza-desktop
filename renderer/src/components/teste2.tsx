import { useNavigate } from "react-router-dom";

export default function Teste2() {
    
    const navigate = useNavigate();

    return (
        <div>
            <h1>Teste 2</h1>
            <button onClick={() => navigate('/')}>home page</button>
        </div>
    )
}