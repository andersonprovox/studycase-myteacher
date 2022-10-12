import { Professor } from './../../@types/professor';
import { useState } from "react";


export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([
        {
          id: 1,
          nome: "Professor 1",
          foto: "https://github.com/andersonprovox.png",
          descricao: "Descricao do professor 1",
          valor_hora: 199
        }
      ])

      return{
        listaProfessores
      }
}