import COLOR from "@/styles/color";
import styled from "styled-components/native";

import Circle_No from "@/assets/icons/circle_nocheck.svg";
import Circle_Yes from "@/assets/icons/check_circle_blue.svg";

import Minus from "@/assets/icons/minus.svg";
import Plus from "@/assets/icons/plus.svg";
import Next from "@/assets/icons/다음.svg";
import Star from "@/assets/icons/Star_on.svg";
import { Pressable } from "react-native";
import example1 from "@/assets/images/example1.png";
import { Link } from "expo-router";

export default function MenuDetailInquiryScreen() {
  const tagColor = {
    Best: COLOR.menuBest,
    Popular: COLOR.menuPopular,
  };

  return (
    <Container>
      <MainSection>
        <MenuSection>
          <StyledImage source={example1} resizeMode="cover" />
          <Row8>
            <RateRow>
              <Star width={20} height={20} />
              <RateText>4.8</RateText>
            </RateRow>
            <Review>
              <Link href="/(tabs)/(home)/review">
                <ReviewText>리뷰 보기</ReviewText>
                <Next width={6} height={10} />
              </Link>
            </Review>
          </Row8>
          <MenuRow>
            <Row8>
              <MenuNameText>삼겹덮밥</MenuNameText>
              <MenuTag
                style={{
                  includeFontPadding: false,
                }}
                color={tagColor["Best"]}
              >
                Best
              </MenuTag>
              <MenuTag color={tagColor["Popular"]}>Popular</MenuTag>
            </Row8>
            <MenuPrice>3,500원</MenuPrice>
          </MenuRow>
          <MenuDescription>맛난 삼겹살과 쌈장으로 만든 덮밥</MenuDescription>
        </MenuSection>
        <OptionSection>
          <RowTitle>메뉴 옵션</RowTitle>
          <OptionRow>
            <OptionItem>
              <Circle_Yes width={20} height={20} />
              <OptionText>곱배기(+1,000)</OptionText>
            </OptionItem>
            <OptionItem>
              <Circle_Yes width={20} height={20} />
              <OptionText>밥 추가(+1,000)</OptionText>
            </OptionItem>
            <OptionItem>
              <Circle_No width={20} height={20} />
              <OptionText>면 추가(+1,000)</OptionText>
            </OptionItem>
          </OptionRow>
        </OptionSection>
        <QuantitySection>
          <RowTitle>수량</RowTitle>
          <QuantityRow>
            <Pressable>
              <Minus width={28} height={28} />
            </Pressable>
            <QuantityText
              style={{
                includeFontPadding: false,
              }}
            >
              10
            </QuantityText>
            <Pressable>
              <Plus width={28} height={28} />
            </Pressable>
          </QuantityRow>
        </QuantitySection>
      </MainSection>

      <StyledButton>
        <ButtonPrice>5,000원</ButtonPrice>
        <ButtonText>장바구니 담기</ButtonText>
      </StyledButton>
    </Container>
  );
}

const StyledImage = styled.Image`
  width: 100%;
  height: 280px;
  border-radius: 20px;
  border: 1px solid ${COLOR.gray3};
`;

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  gap: 24px;
`;

const MainSection = styled.View`
  width: 100%;
  gap: 20px;
`;

const MenuSection = styled.View`
  gap: 12px;
`;
const Row8 = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const RateRow = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
const RateText = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const Review = styled.Pressable`
  flex-direction: row;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 40px;
  background-color: ${COLOR.gray2};
  align-items: center;
`;

const ReviewText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${COLOR.gray5};
`;

const MenuRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const MenuNameText = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;
const MenuTag = styled.Text`
  background-color: ${(props: { color: string }) => props.color};
  padding: 4px 8px;
  border-radius: 12px;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
`;

const MenuPrice = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
const MenuDescription = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;
const OptionSection = styled.View`
  gap: 12px;
`;
const RowTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
const OptionRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;
const OptionItem = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
const OptionText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
const QuantitySection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const QuantityRow = styled.View`
  flex-direction: row;
  gap: 4px;
`;
const QuantityText = styled.Text`
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 400;
  padding: 0px 9px;
  /* padding: 5px 10px; */
  /* width: 28px; */
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${COLOR.gray3};
  background: #fff;
  text-align: center;
  vertical-align: middle;
`;

const StyledButton = styled.Pressable`
  flex-direction: row;
  padding: 18px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  border-radius: 16px;
  background-color: ${COLOR.blue2};
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const ButtonPrice = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;
