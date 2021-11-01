import { ReactNode } from "react"
import { AuthProvider } from "./Auth"
import { CartProvider } from "./Cart"
import { ProductsProvider } from "./Products"

interface CartProps {
    children: ReactNode;
  }

export default function Providers({children}: CartProps){
    
    return(
        <AuthProvider>
            <ProductsProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </ProductsProvider>
        </AuthProvider>
    )
}