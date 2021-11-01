import Menu_Cardapio from "../../Components/Menu_Cardapio";
import Navbar from "../../Components/Navbar";
import NavbarMobile from "../../Components/NavbarMobile";
import { useContext, useEffect, useState } from 'react';
import {ProductsContext} from '../../Providers/Products'
import CardCardapio from "../../Components/CardCardapio";
import './style.css'


export default function Cardapio(){
    const {products} = useContext(ProductsContext)
    const [produtos, SetProdutos] = useState(products);

    useEffect(() => {
        SetProdutos(products)
    }, [products])

    function filter(param: string){
        let filtros = []
        if(param === 'todos'){
            filtros = products
        }else{
            filtros = products.filter((item) => {
                return item.category === param
            })
        }

        SetProdutos(filtros)
    }

    return(
        <>  
            <Navbar />
            <NavbarMobile />
            <div className="container-cardapio">
                <div className="Menu-Cardapio">
                    <Menu_Cardapio filtro={filter}/>
                </div>
                <div className="container-cardapio-produtos">
                    {produtos.map((item) => {
                        return <CardCardapio name={item.name} image={item.image} description={item.description} price={item.price}/>
                    })}
                </div>
            </div>
        </>
    )
}