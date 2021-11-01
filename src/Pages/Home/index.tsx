import CardHome from "../../Components/CardHome";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import NavbarMobile from "../../Components/NavbarMobile";
import './style.css'

export default function Home(){

    return(
        <>
            <NavbarMobile />
            <Navbar />
            <div className="image-container">
                <img className="image-fome" src="https://brabussp.hamburgueriabrabus.com.br/wp-content/uploads/2020/08/banner-min.jpg" alt="Fome de Hamburuger" />
            </div>
            <section className="cards-container">
               <div className="line">
                    <CardHome title='Cardápio' description="São vários lanches baratos para você aproiveitar muito pagando pouco" button="Cardápio" image="https://img.elo7.com.br/product/zoom/263338F/lanches-hamburguer-fritas-adesivo-parede-adesivo-decorativo-parede.jpg" clique="/cardapio" />
                    <CardHome title='Carrinho' description="Veja seu carrinho com seus os melhores lanches do Brasil!" button="Carrinho" image="https://thumbs.dreamstime.com/b/desenho-do-vetor-caminh%C3%A3o-fast-food-esbo%C3%A7o-com-o-hamburger-no-telhado-logotipo-alimento-cami-gr%C3%A1fico-de-projetar-140572909.jpg" clique="/cart"/>

               </div>
               <div className="line">
                    <CardHome title='Faça parte do time' description="Faça parte de nosso time, cozinheiros, atendentes e desenvolvedores " button="Cadastrar" image="https://ints.org.br/wp-content/uploads/2019/05/nosso-time.jpg" clique="/linkedin"/>
                    <CardHome title='Feedback' description="Passe Feedbacks diretamente para o dono para que nós possamos evoluir!" button="Feedback" image="https://fia.com.br/blog/wp-content/uploads/2018/09/feedback-positivo-o-que-e-importancia-como-fazer-guia-completo.jpg" clique="/feedback"/>
               </div>
            </section>

            <Footer />
            <svg xmlns="http://www.w3.org/2000/svg" width="1047" height="53" viewBox="0 0 1047 53" className="mcd-svg-drops-desktop is-hidden-touch"><g fill="#FFBC0D" fill-rule="evenodd"><path d="M783 0h8.898c27.346 1.109 41.205 29.39 70.124 24.947 10.435-1.602 19.12-7.673 30.019-7.762 26.084-.21 38.888 29.7 63.222 34.884 7.298 1.555 14.958 1.35 21.71-2.062 5.922-2.992 10.522-7.947 14.51-13.13 6.888-8.958 13.024-18.669 21.26-26.511 4.48-4.262 9.887-8.221 16.028-9.521 2.384-.506 4.793-.72 7.207-.845H1046M0 0c95.445 0 125.033 46.115 167.984 46.115C219.525 46.115 251.974 0 325.469 0c53.687 0 70.33 25.94 94.489 25.94C448.951 25.94 467.205 0 508.544 0" transform="translate(.32)"></path></g></svg>
        </>
    )
}