import COLOR from "@/styles/color";
import { Image } from "react-native";
import styled from "styled-components/native";
import StarOn from "@/assets/icons/Star_on.svg";
import StarOff from "@/assets/icons/Star_off.svg";
export default function index() {
  return (
    <Container>
      <Row16>
        <Image
          source={require("@/assets/images/example1.png")}
          style={{
            height: 140,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLOR.gray3,
            flex: 1,
          }}
          resizeMode="cover"
        />
        <Col12>
          <OrderDetailText1>삼겹덮밥</OrderDetailText1>
          <OrderDetailText2>3,500원</OrderDetailText2>
        </Col12>
      </Row16>
      <CreateSection>
        <CreateSectionTitle>식사 후기를 남겨주세요</CreateSectionTitle>
        <Stars>
          <StarOn width={36} height={36} />
          <StarOn width={36} height={36} />
          <StarOn width={36} height={36} />
          <StarOn width={36} height={36} />
          <StarOff width={36} height={36} />
        </Stars>
        <Create multiline placeholder="리뷰 내용을 작성해주세요." />
        <ButtonRow>
          <StyledButton color={COLOR.blue2}>
            <ButtonText>작성 완료</ButtonText>
          </StyledButton>
        </ButtonRow>
      </CreateSection>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  gap: 8px;
  background-color: ${COLOR.gray1};
  /* background-color: yellow;  */
`;

const Col12 = styled.View`
  flex: 1;
  gap: 20px;
`;

const OrderDetailText1 = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;
const OrderDetailText2 = styled.Text`
  font-size: 20px;
  font-weight: 400;
`;

const Row16 = styled.View`
  flex-direction: row;
  gap: 28px;
  align-items: center;
  background-color: white;
  padding: 20px 16px 28px 16px;
`;

const CreateSection = styled.View`
  gap: 16px;
  padding: 28px 16px 16px 16px;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  background-color: white;
  flex: 1;
`;

const CreateSectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;
const Stars = styled.View`
  flex-direction: row;
`;
const Create = styled.TextInput`
  height: 280px;
  padding: 16px;
  border: 1px solid ${COLOR.gray3};
  border-radius: 20px;
  width: 100%;
  text-align-vertical: top;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 12px;
  justify-content: flex-end;
  align-self: stretch;
  /* width: 100%; */
`;

const StyledButton = styled.Pressable`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 48px;
  border-radius: 12px;
  background-color: ${(props: { color: string }) => props.color};
  width: 50%;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
