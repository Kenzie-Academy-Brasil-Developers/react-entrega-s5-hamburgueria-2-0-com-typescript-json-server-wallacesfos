import './style.css'

interface MenuProps{
    filtro: (param: string) => void; 
}

export default function Menu_Cardapio({filtro}: MenuProps){

    function filtros(param: string){
        filtro(param)
        console.log(param)
    }
    
    return(
        <>
            

            <div className="container-menu">

                <div className="all-products item-menu--cardapio ultimo" onClick={() => filtros('todos')}>
                    <img className="img_menu--cardapio" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXWfXrM/200/200/original?country=br" alt="menu" />
                    <p className="item-menu--item">Todos Produtos</p>
                </div>

                <div className="menu-cardapio">
                    <div className="item-menu--cardapio" onClick={() => filtros('hamburguer')}>
                        <img className="img_menu--cardapio" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXWfXrM/200/200/original?country=br" alt="menu" />
                        <p className="item-menu--item">Hamburguers</p>
                    </div>
                    <div className="item-menu--cardapio" onClick={() => filtros('acompanhamento')}>
                        <img className="img_menu--cardapio" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$k8XY8Mjp/200/200/original?country=br" alt="menu" />
                        <p className="item-menu--item">Acompanhamentos</p>
                    </div>
                    <div className="item-menu--cardapio" onClick={() => filtros('sobremesa')}>
                        <img className="img_menu--cardapio" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$k7Xqd5g1/200/200/original?country=br" alt="menu" />
                        <p className="item-menu--item">Sobremesas</p>
                    </div>
                    <div className="item-menu--cardapio ultimo" onClick={() => filtros('bebida')}>
                        <img className="img_menu--cardapio" src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kUXY3lKf/200/200/original?country=br" alt="menu" />
                        <p className="item-menu--item">Bebidas</p>
                    </div>
                </div>
            </div>
        </>
    )
}