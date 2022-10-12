import { ApiService } from './../../services/ApiService';
import { Professor } from './../../@types/professor';
import { useEffect, useState } from "react";


export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);

    useEffect(() => {
        ApiService.get('/professores').then((resposta) => {
            setListaProfessores(resposta.data)
        })
    }, []);

      return{
        listaProfessores
      }
}