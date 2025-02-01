import Button from "@/components/Button";
import COLOR from "@/styles/color";
import { Platform, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import Password from "@/assets/icons/password.svg";
import Eye_Open from "@/assets/icons/eyes_open.svg";
import Eye_Closed from "@/assets/icons/eyes_closed.svg";
import TextInputContainer from "@/components/TextInputContainer";

export default function ChangePwConfirmScreen() {
  return (
    <Container>
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
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
            변경할 비밀번호를 정확히 입력 후 {"\n"}한 번 더 확인해주세요
          </Text>
        </View>
        <AuthContainer>
          <TextInputContainer>
            <Password width={27} height={28} />
            <Input
              placeholder="비밀번호"
              placeholderTextColor={COLOR.gray5}
              secureTextEntry
            />
            <Eye_Open width={20} height={20} />
          </TextInputContainer>
          <TextInputContainer>
            <Password width={27} height={28} />
            <Input
              placeholder="비밀번호 확인"
              placeholderTextColor={COLOR.gray5}
              secureTextEntry
            />
            <Eye_Closed width={20} height={20} />
          </TextInputContainer>

          <Text
            style={{
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 400,
              color: COLOR.red2,
            }}
          >
            비밀번호가 일치하지 않습니다.
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
        <Button text="비밀번호 변경하기" color="" />
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

const AuthContainer = styled.View`
  /* width: 100%; */
  gap: 12px;
`;

const Input = styled.TextInput`
  flex: 1;
`;
