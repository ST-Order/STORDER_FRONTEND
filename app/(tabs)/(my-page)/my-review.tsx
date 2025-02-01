import bobby from "@/assets/images/bobby_menus.png";

import example1 from "@/assets/images/example1.png";
import { Image, View } from "react-native";
import COLOR from "@/styles/color";
import Star from "@/assets/icons/Star_on.svg";
import styled from "styled-components/native";

const Review = () => (
  <Item>
    <RestaurantSectionTitleRow>
      <Image
        source={bobby}
        style={{
          width: 20,
          height: 20,
        }}
        resizeMode="contain"
      />
      <RestaurantSectionTitle>바비든든</RestaurantSectionTitle>
    </RestaurantSectionTitleRow>
    <SpaceBetween>
      <Row8>
        <Menu>삼겹덮밥</Menu>
        <View style={{ flexDirection: "row" }}>
          <Star width={16} height={16} />
          <Star width={16} height={16} />
          <Star width={16} height={16} />
        </View>
      </Row8>

      <Date>2025.03.20</Date>
    </SpaceBetween>
    <Row12>
      <Image
        source={example1}
        style={{
          width: 150,
          height: 120,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: COLOR.gray3,
        }}
        resizeMode="cover"
      />
      <ReviewBody>
        <ReviewContent>그저 그래요</ReviewContent>
      </ReviewBody>
    </Row12>
  </Item>
);

const Item = styled.View`
  width: 100%;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-color: ${COLOR.gray3};
`;

const RestaurantSectionTitleRow = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
const RestaurantSectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const SpaceBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.Text`
  font-size: 10px;
  font-weight: 400;
  padding: 4px 8px;
  border-radius: 12px;
  background-color: ${COLOR.gray2};
`;

const Row8 = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const Row12 = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  height: 120px;
`;
const ReviewBody = styled.View`
  padding: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid ${COLOR.gray2};
  border-radius: 12px;
  background-color: ${COLOR.gray1};
  height: 100%;
  flex: 1;
`;
const ReviewContent = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const Date = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;

export default function MyReviewScreen() {
  return (
    <Container>
      <MainSection>
        <ReviewNum>리뷰 4개</ReviewNum>
        {Review()}
        {Review()}
        {Review()}
        {Review()}
      </MainSection>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  align-items: center;
  /* padding: 16px; */
  background-color: #fff;
  /* gap: 16px; */
`;

const MainSection = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})`
  width: 100%;
`;

const ReviewNum = styled.Text`
  text-align: right;
  font-size: 12px;
  font-weight: 400;
`;
