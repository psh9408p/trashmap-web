import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button_accent from "../components/Button/Button_accent";
import PageTitle from "../components/PageTitle";
import { FatText } from "../components/shared";
import InfoDiv from "../components/TMountain/InfoDiv";

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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
`;
const Avatar = styled.img`
  height: auto;
  width: auto;
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  border-radius: 10px;
  background-color: #2c2c2c;
  margin-bottom: 30px;
`;
const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.lightGrey};
  width: 100%;
  padding: 50px;
`;
const Username = styled.h3`
  font-size: 28px;
  font-weight: 400;
`;

const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-right: 20px;
`;
const Value = styled(FatText)`
  font-size: 18px;
`;
const Name = styled(FatText)`
  font-size: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const Photo = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`;

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
`;

const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0px 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

const ProfileBtn = styled(Button_accent).attrs({
  as: "span",
})`
  margin-left: 10px;
  margin-top: 0px;
`;

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
`;
const InforGrid = styled.div`
  display: grid;
  grid-auto-rows: 80px;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 50px;
  margin-top: 50px;
`;

const defaultImg =
  "https://trashmap-fold.s3.ap-northeast-2.amazonaws.com/TMountain-img/defaultMountain.jpg";

function TMountain() {
  const { id } = useParams();
  // const client = useApolloClient()
  const { data, loading, networkStatus, error } = useQuery(TMount_QUERY, {
    variables: {
      id: Number(id),
    },
    notifyOnNetworkStatusChange: true,
  });

  console.log(data, loading, networkStatus, error);

  return (
    <Wrapper>
      {/* <PageTitle title={loading ? "Loading..." : `${data?.seeProfile?.username}'s Profile`} /> */}
      <Header>
        <Avatar
          src={
            data?.seeTMountain?.image ? data?.seeTMountain?.image : defaultImg
          }
          maxWidth={`${window.innerWidth}px`}
          maxHeight={`${window.innerHeight / 2}px`}
        />
        <Bio>
          <InforTitle>
            <FontAwesomeIcon icon={faMountain} size="2x" />
            <div>쓰레기산 정보</div>
          </InforTitle>
          {data?.seeTMountain && <InfoDiv mountain={data?.seeTMountain} />}
        </Bio>
      </Header>
      {/* <Grid>
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
      </Grid> */}
    </Wrapper>
  );
}

export default TMountain;
