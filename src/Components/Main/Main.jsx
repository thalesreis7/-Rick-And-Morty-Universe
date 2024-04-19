import axios from "axios"
import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import * as S from "../Styles/main_styled"

export default function Main() {

  const[characters, setCharacters] = useState(`character`)

  const [search, setSearch] = useState("")

  const [item, setItem] = useState([])

  const API = async ()=>{
    const Dados = await axios.get(`https://rickandmortyapi.com/api/${characters}`)
    console.log(Dados)
    try{
      setItem(Dados.data.results)
    }catch(error){
      alert(`houve algum erro ${error}`)
    }
  }

  useEffect(()=>{
    API()
  },[characters]);

  const filter = item.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
  return (
    <S.Main>
      <S.SecondSection>
        <a>
          <FaSearch/>
        </a>
        <input
          type="text" 
          placeholder="Busque pelo nome do personagem"
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.SecondSection>
      <S.BoxCharacters>
       {filter.map((item)=>(
        <S.Figure>
            <img src={item.image} alt="" />
          <S.BoxDescription>
            <h2>{item.name}</h2>
            <S.Li>{item.type}{item.status}-{item.species}</S.Li>
            <S.Description>Last known location:</S.Description>
            <S.P>{item.origin.name}</S.P>
            <S.Description>First seen in:</S.Description>
            <S.P>{item.location.name}</S.P>
          </S.BoxDescription>
        </S.Figure>
       ))}
      </S.BoxCharacters>
    </S.Main>
  )
}
