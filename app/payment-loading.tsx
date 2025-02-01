import LottieView from "lottie-react-native";
import { ActivityIndicator, View } from "react-native";
import styled from "styled-components/native";

export default function PaymentLoadingScreen() {
  return (
    <Container>
      {/* <Loading size="large" /> */}
      <LottieView
        source={require("@/assets/loading2.json")} // Lottie 파일 경로
        autoPlay
        loop
        style={{ width: 50, height: 50 }}
      />
      <View
        style={{ gap: 12, alignContent: "center", justifyContent: "center" }}
      >
        <Title>결제가 진행 중입니다.</Title>
        <Title2>잠시만 기다려주세요!</Title2>
      </View>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  gap: 26px;
  padding: 16px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
const Title2 = styled.Text`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;
