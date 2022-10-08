import { CabecalhoContainer, Logo } from "./cabecalho.style";

const Cabecalho = () => {
    return(

        <CabecalhoContainer>
            <div>
                <Logo src="/imagens/myteacher.png" />
            </div>

            <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
    ) 
}

export default Cabecalho;