import Button from "@/components/Button";
import COLOR from "@/styles/color";
import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import Email from "@/assets/icons/email.svg";
import Password from "@/assets/icons/password.svg";
import TextInputContainer from "@/components/TextInputContainer";
import Logo from "@/assets/icons/logo_vertical.svg";

export default function SigninScreen() {
  return (
    <Container>
      <View style={{ flex: 1, width: "100%" }}>
        <TitleSection>
          <Logo width={245} height={48} />
          <Title>ST 테이블의 쉽고 빠른 온라인 주문 시스템</Title>
        </TitleSection>
        <ButtonContainer>
          <TextInputContainer>
            <Email width={27} height={28} />
            <Input
              placeholder="이메일"
              placeholderTextColor={COLOR.gray5}
              keyboardType="email-address"
            />
          </TextInputContainer>
          <TextInputContainer>
            <Password width={26} height={28} />
            <Input
              placeholder="비밀번호"
              placeholderTextColor={COLOR.gray5}
              secureTextEntry
            />
          </TextInputContainer>

          <Link href="/change-pw">
            <Text
              style={{
                color: COLOR.gray5,
                fontSize: 12,
                fontWeight: "400",
                textDecorationLine: "underline",
                textAlign: "right",
              }}
            >
              비밀번호 변경
            </Text>
          </Link>
        </ButtonContainer>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "column-reverse",
        }}
      >
        <ButtonContainer>
          <Button text="로그인" color="" />
          <Link href="/term-agreement" asChild>
            <StyledButton>
              <ButtonText
                style={{
                  includeFontPadding: false,
                }}
              >
                회원가입
              </ButtonText>
            </StyledButton>
          </Link>
        </ButtonContainer>
      </View>
    </Container>
  );
}
const TitleSection = styled.View`
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
`;

const StyledButton = styled.Pressable`
  flex-direction: row;
  border: 1px solid ${COLOR.blue2};
  height: 60px;
  padding: 21px 121px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  background-color: "#fff;";
`;

const ButtonText = styled.Text`
  color: ${COLOR.blue2};
  font-size: 16px;
  font-weight: 500;
  line-height: 16px; /* 100% */
`;
const ButtonContainer = styled.View`
  width: 100%;
  gap: 12px;
`;

const Input = styled.TextInput`
  flex: 1;
`;
