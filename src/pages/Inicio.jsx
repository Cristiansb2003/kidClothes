function Inicio(){
      // State para el usuario
  const [user, setUser] = useState('');
  // State para la constraseña
  const [pass, setPass] = useState('');

  // Función para obtener el valor del usuario
  const getUser = () => {
    return localStorage.getItem('user');
  }
  // Función para obtener el valor de la contraseña
  const getPass = () => {
    return localStorage.getItem('password');
  }

  // A través de los siguientes useEffect es para llamar a los states
  useEffect ( () => {
    setUser(getUser())
  }, []);
  useEffect ( () => {
    setPass(getPass())
  }, []);


  return (
    <div>
      <h2>User {user} <br /> Password {pass}</h2>
    </div>
  )
}

export default Inicio