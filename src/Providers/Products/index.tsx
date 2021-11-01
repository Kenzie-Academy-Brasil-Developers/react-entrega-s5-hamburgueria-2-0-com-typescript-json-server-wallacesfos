import { createContext,ReactNode,useEffect,useState } from "react";
import axios from "axios";


interface AuthProps {
    children: ReactNode;
}

interface Produtos{
    name: string;
    description: string;
    price: number;
    image: string;
    category: string
}

interface ProductsProviderData{
    products: Produtos[];
}

export const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData);



export const ProductsProvider = ({ children }: AuthProps) => {

    const [products, setProducts] = useState<Produtos[]>([])
    

    useEffect(() => {
       !products[0] &&  axios.get('https://hamburgueria-api-kenzie-academ.herokuapp.com/products')
       .then((res) => {
           setProducts(res.data)
       })
    })

    return (
        <ProductsContext.Provider value={{ products }}>
          {children}
        </ProductsContext.Provider>
    );
}