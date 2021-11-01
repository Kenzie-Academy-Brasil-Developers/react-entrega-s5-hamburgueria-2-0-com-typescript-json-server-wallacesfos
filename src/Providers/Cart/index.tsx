import {createContext, ReactNode, useState} from 'react'

interface CartProps{
    children: ReactNode;
}

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface CartProviderData {
    // cart é um array de produtos
    cart: Product[];
    // addProduct recebe um produto e não tem retorno
    addProduct: (product: Product) => void;
   // deleteProducts recebe um produto e não tem retorno
    deleteProduct: (product: Product) => void;
}

export const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({children}: CartProps) => {

    const [cart, setCart] = useState<Product[]>([])


    const addProduct = (product: Product) => {
        setCart([...cart, product]);
    };

    const deleteProduct = (product: Product) => {
        setCart(cart.filter((item) => item.id !== product.id))
    };
        
    return(
        <CartContext.Provider value={{cart, addProduct, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
} 