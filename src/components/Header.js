import { useReactiveVar } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import useUser from "../hooks/useUser";
import { Logo } from "./Icons";

const SHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  /* margin-top: 30px; */
`;

const Wrapper = styled.div`
  /* max-width: 930px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MarkLink = styled(Link)`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-size: 1.2em;
    font-weight: 900;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-size: 1.2em;
    font-weight: 900;
  }
`;

function Header() {
  // const isLoggedIn = useReactiveVar(isLoggedInVar)
  // const { data } = useUser()
  return (
    <SHeader>
      <Wrapper>
        <MarkLink to="/">
          <Logo />
          {/* <img src="logo.png" /> */}
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
  );
}
export default Header;
