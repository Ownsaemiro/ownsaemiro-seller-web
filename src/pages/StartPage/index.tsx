import TitleContainer from "../../components/startpage_comp/TitleContainer";
import logo from "../../assets/logo_main.svg";
import * as Styled from "./style";
import TitleRectangle from "../../components/startpage_comp/TitleRectangle";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  const handleStartButton = () => {
    navigate("/manager_loginpage");
  };

  return (
    <Styled.Container>
      <Styled.Title>
        <TitleContainer />
        <Styled.Image src={logo} alt="로고 출력 실패" />
        <TitleRectangle />
        <Styled.Button onClick={handleStartButton}>시작하기</Styled.Button>
      </Styled.Title>
    </Styled.Container>
  );
}
