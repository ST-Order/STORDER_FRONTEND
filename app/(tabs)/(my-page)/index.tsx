import COLOR from "@/styles/color";
import { Image } from "react-native";
import styled from "styled-components/native";
import Bill from "@/assets/images/bill.png";
import Plate from "@/assets/images/plate.png";
import Review from "@/assets/images/review.png";
import { View } from "react-native";
import LogoutIcon from "@/assets/icons/로그아웃.svg";
import { Link } from "expo-router";

export default function MyPageScreen() {
  return (
    <Container>
      <MainSection>
        <TitleCol>
          <WelcomeRow>
            <WelcomeText>어서오세요!</WelcomeText>
            <WelcomeText>오희진</WelcomeText>
            <WelcomeText2>님</WelcomeText2>
          </WelcomeRow>
          <WelcomeText3>
            최근 6개월 동안 구매금액은 <WelcomeText4>19,000원</WelcomeText4>
            입니다.
          </WelcomeText3>
        </TitleCol>
        <Row16>
          <Item>
            <Image
              source={Plate}
              style={{ width: 55, height: 55 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "row", gap: 4 }}>
              <ItemText>주문 횟수</ItemText>
              <OrderNumber>3</OrderNumber>
            </View>
          </Item>
          <Link href="/(tabs)/(my-page)/order-history" asChild>
            <Item>
              <Image
                source={Bill}
                style={{ width: 55, height: 55 }}
                resizeMode="contain"
              />
              <View style={{ flexDirection: "row", gap: 4 }}>
                <ItemText>주문 내역</ItemText>
              </View>
            </Item>
          </Link>
          <Link href="/(tabs)/(my-page)/my-review" asChild>
            <Item>
              <Image
                source={Review}
                style={{ width: 55, height: 55 }}
                resizeMode="contain"
              />
              <View style={{ flexDirection: "row", gap: 4 }}>
                <ItemText>내가 남긴 리뷰</ItemText>
              </View>
            </Item>
          </Link>
        </Row16>
      </MainSection>

      <StyledButton>
        <LogoutIcon width={20} height={20} />
        <ButtonText>로그아웃</ButtonText>
      </StyledButton>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 36px 16px;
  background-color: #fff;
  gap: 24px;
`;

const MainSection = styled.View`
  gap: 24px;
  padding: 20px 22px;
  border-radius: 20px;
  border: 1px solid ${COLOR.gray2};
  background-color: ${COLOR.gray1};
  width: 100%;
`;
const TitleCol = styled.View`
  gap: 12px;
`;

const WelcomeRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const WelcomeText = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;
const WelcomeText2 = styled.Text`
  font-size: 20px;
  font-weight: 400;
`;
const WelcomeText3 = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;
const WelcomeText4 = styled(WelcomeText3)`
  color: black;
`;

const Row16 = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
  /* justify-content: space-between; */
`;

const Item = styled.Pressable`
  gap: 12px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${COLOR.gray2};
  background-color: white;
  flex: 1;
  /* height: 99px; */
  /* width: 110px; */
`;

const ItemText = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;
const OrderNumber = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${COLOR.blue3};
`;

const StyledButton = styled.Pressable`
  flex-direction: row;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  border-radius: 12px;
  background-color: ${COLOR.gray2};
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 500;
`;
