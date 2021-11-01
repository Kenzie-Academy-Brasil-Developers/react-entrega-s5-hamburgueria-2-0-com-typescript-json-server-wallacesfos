import { createContext, ReactNode, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';


interface AuthProps {
  children: ReactNode;
}

interface Person{
  email: string;
  password: string;
}

interface register{
  email: string;
  password: string;
  name: string;
  type: string;
}

interface AuthProviderData{
  signIn: (userData: Person) => void;
  signUp: (userData: register) => void;
  Logout: () => void;
  authToken: string;
}

export const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
    const history = useHistory();
    
    // Dessa forma adicionamos ao state o token caso ele exista no localStorage
    const [authToken, setAuthToken] = useState(
      () => localStorage.getItem("token") || ""
    );

    // Função para logar na aplicação, recebe os dados pegos do form de login
    const signIn = (userData: Person) => {
      axios
        .post("https://hamburgueria-api-kenzie-academ.herokuapp.com/login", userData)
        .then((response) => {
          localStorage.setItem("@token_burguer", response.data.accessToken);
          localStorage.setItem("@name_burguer", response.data.user.name);
          localStorage.setItem("@type_burguer", response.data.user.type);
          localStorage.setItem("@id_burguer", response.data.user.id);
          setAuthToken(response.data.token);
          // redirecionamos para a página logado
          history.push('/')
        })
        .catch(() => {
          toast.error("Conta não existe")
        });
    };


    const signUp = (userData: register) => {
      axios.post('https://hamburgueria-api-kenzie-academ.herokuapp.com/register', userData)
      .then((response) => {
        history.push('/login')
        toast.success("Conta criada com sucesso!")
      })
      .catch(() => {
        toast.error("Conta já existe")
      })
    }

    // Função para deslogar da aplicação
    const Logout = () => {
      // limpando o localStorage
      localStorage.clear();
      // limpando o state
      setAuthToken("");
      // redirecionando para login
      history.push("/");
    };

    return (
      <AuthContext.Provider value={{ authToken, Logout, signIn, signUp }}>
        {children}
      </AuthContext.Provider>
    );
};