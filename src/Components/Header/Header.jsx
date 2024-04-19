import { useState } from "react"
import logo from "../../assets/logo.png"
import *  as S from "../Styles/header_styled"

export default function Header() {

  return (
    <S.Header>
        <S.BoxNavegation>
        <S.Figure>
          <img src={logo} alt="Logo do desenho Ricky and Morty" />
        </S.Figure>
      <S.Navegation>
          <li>Alive</li>
          <li>Dead</li>
          <li>Unknown</li>
      </S.Navegation>
      </S.BoxNavegation>
    </S.Header>
  )
}
