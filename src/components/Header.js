import { useReactiveVar } from "@apollo/client"
// import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faCompass } from "@fortawesome/free-regular-svg-icons"
import { faHome, faMountain } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { isLoggedInVar } from "../apollo"
import useUser from "../hooks/useUser"
import routes from "../routes"
import Avatar from "./Avatar"
import { FatText } from "./shared"

const SHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  /* max-width: 930px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MarkLink = styled(Link)`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-size: 1.2em;
    font-weight: 900;
  }
`

const Column = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-size: 1.2em;
    font-weight: 900;
  }
`

const Icon = styled.span`
  margin-left: 15px;
`

const Button = styled.span`
  background-color: ${(props) => props.theme.accent};
  border-radius: 4px;
  padding: 4px 15px;
  color: white;
  font-weight: 600;
`

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

function Header() {
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  const { data } = useUser()
  return (
    <SHeader>
      <Wrapper>
        <MarkLink to="/">
          <FontAwesomeIcon icon={faMountain} size="2x" />
          <span>K-트래쉬맵</span>
        </MarkLink>
        <Column>
          {/* {isLoggedIn ? (
            <IconsContainer>
              <Icon>
                <Link to={routes.home}>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </Link>
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faCompass} size="lg" />
              </Icon>
              <Icon>
                <Link to={`/users/${data?.me?.username}`}>
                  <Avatar url={data?.me?.avatar} />
                </Link>
              </Icon>
            </IconsContainer>
          ) : (
            <Link to={routes.home}>
              <Button>Login</Button>
            </Link>
          )} */}
        </Column>
      </Wrapper>
    </SHeader>
  )
}
export default Header
