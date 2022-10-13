import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { FormatadorService } from "../../services/FormatadorService"
import { Desricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style"

interface ListaProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void
}

const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                {props.professores.map(professor => (
                    <ItemLista key={professor.id}>
                        <Foto src={professor.foto}></Foto>
                        <Informacoes>
                            <Nome>{professor.nome}</Nome>
                            <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                            <Desricao>{FormatadorService.limitarTexto(professor.descricao, 200)}</Desricao>
                            <Button onClick={() => props.onSelect(professor)} sx={{ width: '70%' }}>Marcar Aula com {professor.nome}</Button>
                        </Informacoes>
                    </ItemLista>
    
                ))}
            </ListaStyled>
            ) : (
                <ListaVazia>Nehnum Professor encontrado</ListaVazia>
            )}
        </div>
    )
}

export default Lista