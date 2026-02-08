import { useNavigate } from "react-router-dom";

export default function Teste() {
    
    const navigate = useNavigate();

    return (
        <div>
            <h1>Teste</h1>
            <button onClick={() => navigate('/')}>home page</button>
        </div>
    )
}