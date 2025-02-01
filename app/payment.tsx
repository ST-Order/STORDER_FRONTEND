import KakaoImage from "@/assets/images/kakao_pay.png";
import styled from "styled-components/native";
import COLOR from "@/styles/color";
import { Link } from "expo-router";
import { Image } from "react-native";
export default function PaymentScreen() {
  return (
    <Container>
      <Title>결제 방법을 선택해주세요.</Title>
      <Link href="/payment-loading" asChild>
        <Kakao>
          <Image
            source={KakaoImage}
            style={{
              width: 82,
              height: 32,
            }}
          />
          <KakaoTitle>카카오페이</KakaoTitle>
        </Kakao>
      </Link>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  /* justify-content: center;
  align-items: center; */
  background-color: #fff;
  gap: 36px;
  padding: 16px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  padding-top: 20px;
`;
const Kakao = styled.Pressable`
  align-items: center;
  justify-content: space-between;
  padding: 24px 16px;
  border-radius: 16px;
  border: 1px solid ${COLOR.gray3};
  width: 111px;
  height: 119px;
`;
const KakaoTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
