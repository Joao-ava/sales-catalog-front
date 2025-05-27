import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const useIsLoggedEffect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isNotLogged = !localStorage.getItem('token');
    if (isNotLogged) {
      navigate('/login')
    }
  }, [navigate]);
}

export default useIsLoggedEffect
