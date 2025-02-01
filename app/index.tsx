import React from "react";
import styled from "styled-components/native";
import { Link, Redirect } from "expo-router";
import Button from "@/components/Button";
import Logo from "@/assets/icons/logo_svg.svg";
import { View } from "react-native";

export default function HomeScreen() {
  // return (
  //   <Container>
  //     {/* <Link href="/sign-in" asChild>
  //       <Button text="식사하러 가기" color="red" />
  //     </Link> */}
  //     <Logo />
  //     <Button text="식사하러 가기" color="red" href="/sign-in" />
  //   </Container>
  // );
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  if (isLoggedIn) {
    return <Redirect href="/(tabs)/(home)" />;
  } else {
    return (
      <Container>
        <View
          style={{
            gap: 20,
            alignItems: "center",
          }}
        >
          <Title>ST 테이블의 쉽고 빠른 주문 시스템</Title>
          <Logo width={259} height={243} />
        </View>
        <Button text="식사하러 가기" color="red" href="/sign-in" />
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
