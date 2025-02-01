import Button from "@/components/Button";
import COLOR from "@/styles/color";
import { Link } from "expo-router";
import { Platform, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import Email from "@/assets/icons/email.svg";
import Name from "@/assets/icons/name.svg";
import TextInputContainer from "@/components/TextInputContainer";

export default function ChangePwScreen() {
  return (
    <Container>
      <View style={{ flex: 1, width: "100%" }}>
        <View
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              textAlign: "left",
              // fontFamily: Platform.select({
              //   android: "Inter_600SemiBold",
              //   ios: "Inter-SemiBold",
              // }),
            }}
          >
            비밀번호를 변경하기 위해 {"\n"}회원 정보를 정확히 입력해주세요
          </Text>
        </View>
        <AuthContainer>
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
          <Text
            style={{
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 400,
              color: COLOR.red2,
            }}
          >
            인증번호가 일치하지 않습니다.
          </Text>
        </AuthContainer>
      </View>

      {/* Button Section */}
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "column-reverse",
        }}
      >
        <Button text="다음" color="" href="/change-pw-confirm" />
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
const AuthContainer = styled.View`
  /* width: 100%; */
  gap: 12px;
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
