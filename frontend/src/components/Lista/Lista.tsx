import { Button } from "@mui/material"
import { Desricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style"

const Lista = () => {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/andersonprovox.png"></Foto>
                <Informacoes>
                    <Nome>Anderson Fonseca</Nome>
                    <Valor>R$ 120,00 por hora</Valor>
                    <Desricao>Aulas de Canto e contrabaixo</Desricao>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}

export default Lista