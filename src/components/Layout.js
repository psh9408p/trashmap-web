import styled from "styled-components"
import Header from "./Header"

const Content = styled.main`
  margin: 0;
  max-width: 930px;
  width: 100%;
  height: 100%;
`

function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  )
}

export default Layout
