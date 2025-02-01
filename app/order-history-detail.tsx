import COLOR from "@/styles/color";
import styled from "styled-components/native";
import ReviewIcon from "@/assets/icons/리뷰작성.svg";
import { Image } from "react-native";
import example1 from "@/assets/images/example1.png";
import ArrowDown from "@/assets/icons/arrow_down_gray5.svg";
import ArrowUp from "@/assets/icons/arrow_up.svg";
import { useState } from "react";
import React from "react";
import { Link } from "expo-router";

interface ItemProps {
  menu: string;
  option: string;
  quantity: number;
  price: number;
}
const Item = ({ menu, option, quantity, price }: ItemProps) => {
  return (
    <ItemContainer>
      <Row16>
        <Image
          source={example1}
          style={{
            width: 84,
            height: 84,
            borderRadius: 12,
            borderColor: COLOR.gray3,
            borderWidth: 1,
          }}
          resizeMode="cover"
        />
        <Col12>
          <OrderDetailText1>{menu}</OrderDetailText1>
          <OrderDetailText2>
            {option} | {quantity}개
          </OrderDetailText2>
          <OrderDetailText3>{price}원</OrderDetailText3>
        </Col12>
      </Row16>
      <Link href="/review-create" asChild>
        <DetailCol>
          <ReviewIcon width={28} height={28} />
          <DetailText>리뷰 쓰기</DetailText>
        </DetailCol>
      </Link>
    </ItemContainer>
  );
};

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  padding: 0px 16px;
`;
const Row16 = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const Col12 = styled.View`
  gap: 12px;
`;
const OrderDetailText1 = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
const OrderDetailText2 = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;
const OrderDetailText3 = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
const DetailCol = styled.Pressable`
  gap: 8px;
  align-items: center;
`;
const DetailText = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;
export default function index() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <MainSection>
        <Col16>
          <SpaceBetween>
            <OrderNumRow>
              <Text16400>주문번호</Text16400>
              <OrderNum>443번</OrderNum>
            </OrderNumRow>
            <Time>2025.03.20 17:00:36</Time>
          </SpaceBetween>
          <Col8>
            <RestName>경성카츠 서울과기대점</RestName>
            <ServiceName>서울과학기술대학교 ST:order</ServiceName>
          </Col8>
        </Col16>
        <Body>
          <Text16400>주문 메뉴</Text16400>
          <ItemBox>
            {Item({
              menu: "삼겹덮밥",
              option: "매운 소스",
              quantity: 2,
              price: 8000,
            })}
            {Item({
              menu: "삼겹덮밥",
              option: "매운 소스",
              quantity: 2,
              price: 8000,
            })}
            {toggle && (
              <>
                {Item({
                  menu: "삼겹덮밥",
                  option: "매운 소스",
                  quantity: 2,
                  price: 8000,
                })}
                {Item({
                  menu: "삼겹덮밥",
                  option: "매운 소스",
                  quantity: 2,
                  price: 8000,
                })}
              </>
            )}
            <MoreDetails onPress={onToggle}>
              <MoreDetailsText>{!toggle ? "자세히" : "간략히"}</MoreDetailsText>
              {!toggle ? (
                <ArrowDown width={14} height={14} />
              ) : (
                <ArrowUp width={14} height={14} />
              )}
            </MoreDetails>
          </ItemBox>
        </Body>
        <Payment>
          <Text16400>결제 정보</Text16400>
          <PaymentSection>
            <SpaceBetween>
              <PaymentRest>총 결제 금액</PaymentRest>
              <PaymentRest>8,000원</PaymentRest>
            </SpaceBetween>
            <PaymentRow2>
              <PaymentRest>결제수단 </PaymentRest>
              <PaymentRest>카카오페이</PaymentRest>
            </PaymentRow2>
            <PaymentRow3>
              <PaymentTotalPrice>결제 완료</PaymentTotalPrice>
              <PaymentTotalPrice>2025.03.20 17:00:36</PaymentTotalPrice>
            </PaymentRow3>
          </PaymentSection>
        </Payment>
      </MainSection>
    </Container>
  );
}
const Payment = styled.View`
  gap: 12px;
`;
const MoreDetails = styled.Pressable`
  border-top-width: 1;
  border-color: ${COLOR.gray2};
  border-style: solid;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  align-self: stretch;
  padding: 12px 0px 0 0;
`;

const MoreDetailsText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;

const ItemBox = styled.View`
  width: 100%;
  padding: 12px 0;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${COLOR.gray3};
  gap: 12px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  /* gap: 28px; */
`;

const MainSection = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    gap: 28,
    alignItems: " center",
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 16,
    paddingRight: 16,
  },
})`
  /* padding: 36px 16px; */
  width: 100%;
`;

const SpaceBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OrderNumRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const Text16400 = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
const OrderNum = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${COLOR.blue2};
`;
const Time = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const Col8 = styled.View`
  gap: 8px;
`;
const Col16 = styled.View`
  gap: 16px;
`;
const Body = styled.View`
  gap: 12px;
  width: 100%;
`;

const RestName = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;

const PaymentSection = styled.View`
  width: 100%;
  gap: 12px;
  border-radius: 16px;
  border: 1px solid ${COLOR.gray2};
  background: ${COLOR.gray1};
  padding: 16px;
`;

const PaymentRest = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
const PaymentRow2 = styled(SpaceBetween)`
  border-top-width: 1;
  border-top-color: ${COLOR.gray3};
  border-style: dashed;
  padding-top: 12px;
`;
const PaymentTotalPrice = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
const PaymentRow3 = styled(PaymentRow2)`
  border-style: normal;
`;
