import Button from "@/components/Button";
import COLOR from "@/styles/color";
import { Platform, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import Email from "@/assets/icons/email.svg";
import Name from "@/assets/icons/name.svg";
import TextInputContainer from "@/components/TextInputContainer";
import Password from "@/assets/icons/password.svg";
import Eye_Open from "@/assets/icons/eyes_open.svg";
import Eye_Closed from "@/assets/icons/eyes_closed.svg";
import Logo from "@/assets/icons/logo_vertical.svg";

export default function SignUpScreen() {
  return (
    <Container>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 30,
        }}
      >
        <Logo width={245} height={48} />
      </View>
      <AuthSection>
        {/* 회원정보 */}
        <AuthContainer>
          <AuthTitle>회원정보</AuthTitle>
          <TextInputContainer>
            <Name width={27} height={28} />
            <Input placeholder="이름" placeholderTextColor={COLOR.gray5} />
          </TextInputContainer>
          <AuthInputRow>
            <InputContainer1>
              <Email width={27} height={28} />
              <Input
                placeholder="이메일"
                placeholderTextColor={COLOR.gray5}
                keyboardType="email-address"
              />
            </InputContainer1>
            <StyledButton>
              <ButtonText>인증번호{"\n"}발송</ButtonText>
            </StyledButton>
          </AuthInputRow>
          <AuthInputRow>
            <InputContainer2>
              <Input
                placeholder="인증번호를 입력해주세요"
                placeholderTextColor={COLOR.gray5}
                keyboardType="numeric"
              />
            </InputContainer2>

            <StyledButton>
              <ButtonText>인증번호{"\n"}확인</ButtonText>
            </StyledButton>
          </AuthInputRow>
          <WarningText>인증번호가 일치하지 않습니다.</WarningText>
        </AuthContainer>
        {/* 비밀번호 */}
        <AuthContainer>
          <AuthTitle>비밀번호</AuthTitle>
          <TextInputContainer>
            <Password width={27} height={28} />
            <Input
              placeholder="비밀번호"
              placeholderTextColor={COLOR.gray5}
              secureTextEntry
            />
            <Eye_Open width={20} height={20} />
          </TextInputContainer>
          <WarningText>
            비밀번호는 영문 4~16자, 특수문자를 1개 이상 포함해야 합니다.
          </WarningText>
          <TextInputContainer>
            <Password width={27} height={28} />
            <Input
              placeholder="비밀번호 확인"
              placeholderTextColor={COLOR.gray5}
              secureTextEntry
            />
            <Eye_Closed width={20} height={20} />
          </TextInputContainer>

          <WarningText>비밀번호가 일치하지 않습니다.</WarningText>
        </AuthContainer>
      </AuthSection>
      {/* Button Section */}
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "column-reverse",
        }}
      >
        <Button text="가입하기" color="gray" href="/change-pw-confirm" />
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
`;

const StyledButton = styled.Pressable`
  flex-direction: row;
  padding: 0 9px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${COLOR.red1};
`;

const ButtonText = styled.Text`
  font-size: 16px; /* 폰트 크기 설정 */
  text-align: center; /* 텍스트 중앙 정렬 */
  color: white; /* 텍스트 색상 설정 */
  font-weight: 400; /* 폰트 두께 설정 */
`;

const AuthSection = styled.View`
  gap: 44px;
  width: 100%;
`;
const AuthContainer = styled.View`
  /* width: 100%; */
  gap: 12px;
`;

const AuthTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`;

const Input = styled.TextInput`
  /* width: 100%; */
  flex: 1;
`;

const AuthInputRow = styled.View`
  flex-direction: row;
  gap: 2px;
`;

const InputContainer1 = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 12px 16px;
  gap: 12px;
  border: 1px solid ${COLOR.gray3};
  background: ${COLOR.gray2};
  border-radius: 12px;
  align-items: center;
`;

const InputContainer2 = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 12px 16px;
  gap: 12px;
  border: 1px solid ${COLOR.gray3};
  background: white;
  border-radius: 12px;
  align-items: center;
`;

const WarningText = styled.Text`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${COLOR.red2};
`;
