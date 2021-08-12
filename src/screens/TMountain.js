import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client"
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMountain } from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Button_accent from "../components/Button/Button_accent"
import PageTitle from "../components/PageTitle"
import { FatText } from "../components/shared"

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
  /* max-width: 450px; */
  max-height: 450px;
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
const Username = styled.h3`
  font-size: 28px;
  font-weight: 400;
`
const Row = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
`
const List = styled.ul`
  display: flex;
`
const Item = styled.li`
  margin-right: 20px;
`
const Value = styled(FatText)`
  font-size: 18px;
`
const Name = styled(FatText)`
  font-size: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`

const Photo = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`

const Icons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`

const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0px 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`

const ProfileBtn = styled(Button_accent).attrs({
  as: "span",
})`
  margin-left: 10px;
  margin-top: 0px;
`

const Subtitle = styled(FatText)``
const SubContent = styled.p``

const InforTitle = styled.div``
const InforGrid = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;
`

function TMountain() {
  const { id } = useParams()
  // const client = useApolloClient()
  const { data, loading } = useQuery(TMount_QUERY, {
    variables: {
      id: Number(id),
    },
  })

  console.log(data)

  return (
    <Wrapper>
      {/* <PageTitle title={loading ? "Loading..." : `${data?.seeProfile?.username}'s Profile`} /> */}
      <Header>
        <Avatar src={data?.seeTMountain?.image} />
        <Bio>
          <InforTitle>
            <FontAwesomeIcon icon={faMountain} size="2x" /> 쓰레기산 정보
          </InforTitle>
          <InforGrid>
            <Row>
              <Subtitle>주소</Subtitle>
              <SubContent>{data?.seeTMountain?.address}</SubContent>
            </Row>
            <Row>
              <List>
                <Item>
                  <span>
                    <Value>{data?.seeProfile?.totalFollowers}</Value> followers
                  </span>
                </Item>
                <Item>
                  <span>
                    <Value>{data?.seeProfile?.totalFollowing}</Value> following
                  </span>
                </Item>
              </List>
            </Row>
            <Row>
              <Name>
                {data?.seeProfile?.firstName}
                {"  "}
                {data?.seeProfile?.lastName}
              </Name>
            </Row>
            <Row>{data?.seeProfile?.bio}</Row>
          </InforGrid>
        </Bio>
      </Header>
      <Grid>
        {data?.seeProfile?.photos.map((photo) => (
          <Photo key={photo.id} bg={photo.file}>
            <Icons>
              <Icon>
                <FontAwesomeIcon icon={faHeart} />
                {photo.likes}
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faComment} />
                {photo.commentNumber}
              </Icon>
            </Icons>
          </Photo>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default TMountain
