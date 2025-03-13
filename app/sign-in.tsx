import Button from "@/components/Button";
import COLOR from "@/styles/color";
import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import Email from "@/assets/icons/email.svg";
import Password from "@/assets/icons/password.svg";
import TextInputContainer from "@/components/TextInputContainer";
import Logo from "@/assets/icons/logo_vertical.svg";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { User } from "@/src/types";

export default function SigninScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<User> = (data) => {
    // TODO: Signin API call and navigation
    console.log(data.email);
  };

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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "이메일은 필수입니다.",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    placeholder="ID"
                    placeholderTextColor={COLOR.gray5}
                  />
                )}
              />
              <Text>@seoultech.ac.kr</Text>
            </View>
          </TextInputContainer>
          <TextInputContainer>
            <Password width={26} height={28} />
            <Controller
              control={control}
              name="password"
              rules={{ required: "비밀번호는 필수입니다." }}
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  placeholder="비밀번호"
                  placeholderTextColor={COLOR.gray5}
                  secureTextEntry
                />
              )}
            />
          </TextInputContainer>
          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
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
            <View style={{ flex: 1 }}>
              {errors.email && (
                <WarningText>{errors.email.message}</WarningText>
              )}
              {errors.password && (
                <WarningText>{errors.password.message}</WarningText>
              )}
            </View>
          </View>
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
          <Button text="로그인" color="" onPress={handleSubmit(onSubmit)} />
          <Link href="/term-agreement" asChild>
            <StyledButton>
              <Text
                style={{
                  fontSize: 16,
                  includeFontPadding: false,
                  color: COLOR.blue2,
                }}
              >
                회원가입
              </Text>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  background-color: "#fff";
`;

const ButtonContainer = styled.View`
  width: 100%;
  gap: 12px;
`;

const Input = styled.TextInput`
  flex: 1;
`;

const WarningText = styled.Text`
  font-size: 12;
  font-style: "normal";
  font-weight: 400;
  color: ${COLOR.red2};
`;
