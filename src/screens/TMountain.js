import { gql, useQuery } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMountain } from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Button_accent from "../components/Button/Button_accent"
import PageTitle from "../components/PageTitle"
import { FatText } from "../components/shared"
import InfoDiv from "../components/TMountain/InfoDiv"

const TMount_QUERY = gql`
  query seeTMountain($id: Int!) {
    seeTMountain(id: $id) {
      id
      latitude
      longtitude
      address
      amount
      image
      finish
      cleanCost
      dumpType
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  /* @media screen and (max-width: 1230px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1230px) {
    flex-direction: row;
  } */
`
const Avatar = styled.img`
  height: auto;
  width: auto;
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  border-radius: 10px;
  background-color: #2c2c2c;
  margin-bottom: 30px;
`
const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.lightGrey};
  width: 100%;
  padding: 50px;
`

const InforTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  div {
    font-size: 18px;
    font-weight: 900;
    height: 28px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
`

const defaultImg =
  "https://trashmap-fold.s3.ap-northeast-2.amazonaws.com/TMountain-img/defaultMountain.jpg"

function TMountain() {
  const { id } = useParams()
  // const client = useApolloClient()
  const { data } = useQuery(TMount_QUERY, {
    variables: {
      id: Number(id),
    },
    notifyOnNetworkStatusChange: true,
  })

  // console.log(data)

  return (
    <Wrapper>
      {/* <PageTitle title={loading ? "Loading..." : `${data?.seeProfile?.username}'s Profile`} /> */}
      <Header>
        <Avatar
          src={data?.seeTMountain?.image ? data?.seeTMountain?.image : defaultImg}
          maxWidth={`${window.innerWidth}px`}
          maxHeight={`${window.innerHeight / 2}px`}
        />
        <Bio>
          <InforTitle>
            <FontAwesomeIcon icon={faMountain} size="2x" color="#576574" />
            <div>???????????? ??????</div>
          </InforTitle>
          {data?.seeTMountain && <InfoDiv mountain={data?.seeTMountain} />}
        </Bio>
      </Header>
    </Wrapper>
  )
}

export default TMountain
