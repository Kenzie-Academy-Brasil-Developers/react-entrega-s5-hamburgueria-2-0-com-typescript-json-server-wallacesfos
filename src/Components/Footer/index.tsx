import './style.css'

export default function Footer(){

    return(
        <footer className="footer">
            <h2>
                Já baixou nosso APP?
            </h2>
            <p>Peça seu delivery, veja o menu, baixe stickers, peça e pague sem Fila, encontre os restaurantes mais próximos, tenha todos os cupons e muito mais.</p>
            <button className="btn-secundary" onClick={() => window.location.href = "https://play.google.com/store/apps?hl=pt&utm_source=latam_Med&utm_medium=hasem&utm_content=Jul1520&utm_campaign=Evergreen&pcampaignid=MKT-FDR-latam-br-1002290-Med-hasem-ap-Evergreen-Jul1520-Text_Search_SKWS-53972587&gclid=CjwKCAjwoP6LBhBlEiwAvCcthGuUfs3RQhhUFt8VrV-l8i3XQdLebOrwUBEGbpBtj_nE4JXfz9MxRxoCQjoQAvD_BwE&gclsrc=aw.ds"}>Baixe Agora</button>
        </footer>
    )
}