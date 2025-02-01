import COLOR from "@/styles/color";
import styled from "styled-components/native";

import Circle_No from "@/assets/icons/circle_nocheck.svg";
import Circle_Yes from "@/assets/icons/check_circle_blue.svg";

import Minus from "@/assets/icons/minus.svg";
import Plus from "@/assets/icons/plus.svg";
import Next from "@/assets/icons/다음.svg";
import Star from "@/assets/icons/Star_on.svg";
import { Image, ImageSourcePropType, Pressable } from "react-native";
import example1 from "@/assets/images/example1.png";

export default function MenuDetailInquiryScreen() {
  const restaurantReviews = [
    {
      image: example1,
      name: "홍길동",
      star: 5,
      description: "정말 맛있었어요! 서비스도 훌륭했습니다.",
      date: "2023.01.15",
    },
    {
      image: example1,
      name: "김영희",
      star: 4,
      description: "전반적으로 괜찮았지만, 대기 시간이 좀 길었어요.",
      date: "2023.02.10",
    },
    {
      image: example1,
      name: "이철수",
      star: 3,
      description: "맛은 있지만 가격이 좀 비쌉니다.",
      date: "2023.03.05",
    },
    {
      image: example1,
      name: "박지수",
      star: 5,
      description: "진짜 최고의 식사 경험이었습니다!",
      date: "2023.04.20",
    },
    {
      image: example1,
      name: "최민수",
      star: 4,
      description: "분위기가 좋아서 데이트하기에 딱입니다.",
      date: "2023.05.12",
    },
    {
      image: example1,
      name: "최민수",
      star: 4,
      description: "분위기가 좋아서 데이트하기에 딱입니다.",
      date: "2023.05.12",
    },
    {
      image: example1,
      name: "최민수",
      star: 4,
      description: "분위기가 좋아서 데이트하기에 딱입니다.",
      date: "2023.05.12",
    },
    {
      image: example1,
      name: "최민수",
      star: 4,
      description: "분위기가 좋아서 데이트하기에 딱입니다.",
      date: "2023.05.12",
    },
  ];

  const ReviewItem = ({
    image,
    name,
    star,
    description,
    date,
  }: {
    image: ImageSourcePropType;
    name: string;
    star: number;
    description: string;
    date: string;
  }) => (
    <ReviewItemContainer>
      <ReviewImage source={image} resizeMode="cover" />
      <ReviewCol>
        <ReviewRate>
          <ReviewName>{name}</ReviewName>
          <StarRow>
            {Array.from({ length: star }).map((_, index) => (
              <Star width={16} height={16} key={index} />
            ))}
          </StarRow>
        </ReviewRate>
        <ReviewText>{description}</ReviewText>

        <ReviewDate>{date}</ReviewDate>
      </ReviewCol>
    </ReviewItemContainer>
  );

  // 각 컴포넌트를 styled-components로 정의
  const ReviewItemContainer = styled.View`
    flex-direction: row;
    gap: 12px;
    padding-bottom: 12px;
    border-bottom-width: 1px;
    border-bottom-color: ${COLOR.gray2};
    align-items: center;
  `;

  const ReviewImage = styled(Image)`
    width: 96px;
    height: 78px;
    border-radius: 12px;
    border: 1px solid ${COLOR.gray3};
  `;

  const ReviewCol = styled.View`
    flex: 1;
    gap: 8px;
  `;

  const ReviewName = styled.Text`
    font-size: 12px;
    font-weight: 600;
  `;

  const ReviewRate = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
  `;
  const StarRow = styled.View`
    flex-direction: row;
  `;
  const ReviewText = styled.Text`
    font-size: 16px;
    font-weight: 400;
  `;

  const ReviewDate = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: ${COLOR.gray4};
  `;

  return (
    <Container>
      <MainSection>
        <MenuRow>
          <StyledImage source={example1} resizeMode="cover" />
          <MenuCol>
            <MenuNameText>삼겹덮밥</MenuNameText>
            <MenuPrice>3,500원</MenuPrice>
          </MenuCol>
        </MenuRow>

        <ReviewSection>
          <ReviewRow>
            <Row4>
              <RowTitle>리뷰</RowTitle>
              <RateRow>
                <Star width={20} height={20} />
                <RateText>4.8</RateText>
              </RateRow>
            </Row4>
            <RecentFirst>최신 순</RecentFirst>
          </ReviewRow>
          <Reviews>
            {restaurantReviews.map((review, index) => (
              <ReviewItem
                key={index}
                image={review.image}
                description={review.description}
                name={review.name}
                star={review.star}
                date={review.date}
              />
            ))}
          </Reviews>
        </ReviewSection>
      </MainSection>
    </Container>
  );
}

const StyledImage = styled.Image`
  flex: 1;
  height: 140px;
  border-radius: 16px;
  border: 1px solid ${COLOR.gray3};
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
`;

const MainSection = styled.View`
  flex: 1;
  width: 100%;
  gap: 20px;
`;

const MenuRow = styled.View`
  flex-direction: row;
  gap: 28px;
  align-items: center;
`;
const Row4 = styled.View`
  flex-direction: row;
  gap: 4px;
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

const ReviewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RecentFirst = styled.Text`
  font-size: 10px;
  font-weight: 500;
`;

const MenuCol = styled.View`
  gap: 20px;
  flex: 1;
`;

const MenuNameText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const MenuPrice = styled.Text`
  font-size: 20px;
  font-weight: 400;
`;
const ReviewSection = styled.View`
  flex: 1;
  gap: 12px;
`;
const RowTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Reviews = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { gap: 12, paddingBottom: 12 },
})`
  flex: 1;
  border-radius: 20px;
  padding: 12px;
  border: 1px solid ${COLOR.gray2};
  background: ${COLOR.gray1};
`;
