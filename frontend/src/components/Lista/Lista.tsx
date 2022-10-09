import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { Desricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style"

interface ListaProps {
    professores: Professor[],
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
                            <Valor>{professor.valor_hora.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora</Valor>
                            <Desricao>{professor.descricao}</Desricao>
                            <Button sx={{ width: '70%' }}>Marcar Aula</Button>
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