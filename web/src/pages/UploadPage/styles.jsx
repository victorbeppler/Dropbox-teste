import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`

export const LeftColumn = styled.div`
  width: 15%;
  height: 100%;
  background-color: #004dc7;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: black solid 2px;
`

export const RightColumn = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  padding-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 0px;
`

export const TitleContainerLeft = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const Input = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
`
export const Button = styled.button`
  width: 50%;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin-top: 40px;
  margin-bottom: 20px;
`

export const CardContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const Card = styled.div`
  width: 250px;
  height: 100px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  /* margin-bottom: 20px; */
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`

export const ButtonAction = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 20px;
`

export const Footer = styled.div`
  width: 100%;
  /* height: 50px; */
  background-color: #004dc7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 0px;
`
export const FooterText = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  /* margin-right: 10px; */
`

export const FooterLink = styled.a`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #000;
  }
`
export const DropZone = styled.div`
  height: 200px;
  width: 800px;
  border: 2px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`
