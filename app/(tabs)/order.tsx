import COLOR from "@/styles/color";
import styled from "styled-components/native";
import { Animated, Image } from "react-native";
import { View } from "react-native";
import bobby from "@/assets/images/bobby_menus.png";
import React, { useEffect, useRef, useState } from "react";
import ArrowUp from "@/assets/icons/arrow_up_black.svg";
import ArrowDown from "@/assets/icons/arrow_down.svg";
import { Link } from "expo-router";

interface OrderDetailProps {
  number: number;
  orderQuantity: number;
  menu: string;
  option: string;
  quantity: number;
  price: number;
  status: number;
}
interface OrderStatus {
  payed: boolean;
  cooking: boolean;
  ready: boolean;
}
const bobbyMenus = ({
  number,
  orderQuantity,
  menu,
  option,
  quantity,
  price,
  status,
}: OrderDetailProps) => {
  const [toggle, setToggle] = useState(false);
  const [progress, setProgress] = useState(0); // 서버에서 받은 진행률 (0, 50, 100)
  const [focus, setFocus] = useState<OrderStatus>({
    payed: true,
    cooking: false,
    ready: false,
  }); // 초기값 설정

  // const animValue = new Animated.Value(0);
  const animValue = useRef(new Animated.Value(0)).current; // useRef를 사용하여 animValue 유지
  // TODO: 이렇게 하면 컴포넌트가 리렌더링될 때도 animValue가 유지됩니다.

  useEffect(() => {
    // focus 상태 업데이트
    setFocus({
      payed: status === 0, // status가 0이면 payed만 true
      cooking: status === 50, // status가 50이면 cooking만 true
      ready: status === 100, // status가 100이면 ready만 true
    });
    setProgress(status);
  }, [status]);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <RestaurantSection>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <RestaurantSectionTitleRow>
          <Image
            source={bobby}
            style={{
              width: 32,
              height: 32,
            }}
            resizeMode="contain"
          />
          <RestaurantSectionTitle>바비든든</RestaurantSectionTitle>
        </RestaurantSectionTitleRow>
        <OrderNumRow>
          <OrderNumText>주문번호</OrderNumText>
          <OrderNum>{number}번</OrderNum>
        </OrderNumRow>
      </View>
      <RestaurantRow>
        <Col8>
          <TitleText>주문을 확인하고 있습니다.</TitleText>
          <TitleText2>
            주문 상황에 따라 준비가 늦어질 수 있습니다.{"\n"}잠시만
            기다려주세요.
          </TitleText2>
        </Col8>
        <Col8>
          <ProgressBar progress={progress} animValue={animValue} />
          <SpaceBetweenRow>
            <ProgressText focus={focus.payed}>결제 완료</ProgressText>
            <ProgressText focus={focus.cooking}>준비 중</ProgressText>
            <ProgressText focus={focus.ready}>준비 완료</ProgressText>
          </SpaceBetweenRow>
        </Col8>
      </RestaurantRow>
      <DetailArrowRow onPress={onToggle}>
        <DetailArrowText>주문 상세보기</DetailArrowText>
        {toggle ? <ArrowUp /> : <ArrowDown />}
      </DetailArrowRow>
      {toggle && (
        <Col12>
          <OrderDetailTitle>주문내역 ({orderQuantity})</OrderDetailTitle>
          <SpaceBetweenRow>
            <Row16>
              <Image
                source={require("@/assets/images/example1.png")}
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: COLOR.gray3,
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
            {focus.ready ? (
              <Link href="/review-create" asChild>
                <StyledButton ready={focus.ready}>
                  <ButtonText>리뷰 작성</ButtonText>
                </StyledButton>
              </Link>
            ) : (
              <StyledButton ready={focus.ready} disabled>
                <ButtonText>리뷰 작성</ButtonText>
              </StyledButton>
            )}
          </SpaceBetweenRow>
        </Col12>
      )}
    </RestaurantSection>
  );
};

const Col12 = styled.View`
  gap: 12px;
`;
const OrderDetailTitle = styled.Text`
  font-size: 12px;
  font-weight: 400;
  padding: 0 8px;
  color: ${COLOR.gray5};
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

const Row16 = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;
const DetailArrowRow = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  padding: 0 8px;
`;
const DetailArrowText = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const RestaurantSection = styled.View`
  gap: 12px;
  padding: 16px;
  background-color: white;
`;

const RestaurantSectionTitleRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const RestaurantSectionTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const OrderNumRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const OrderNumText = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
const OrderNum = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${COLOR.blue2};
`;
const Col8 = styled.View`
  gap: 8px;
  width: 100%;
`;
const TitleText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
const TitleText2 = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;

const SpaceBetweenRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProgressText = styled.Text`
  font-size: 12px;
  font-weight: ${(props: { focus: boolean }) => (props.focus ? "600" : "400")};
  color: ${(props: { focus: boolean }) =>
    props.focus ? COLOR.blue2 : COLOR.gray5};
`;

const RestaurantRow = styled.View`
  padding: 20px;
  border-radius: 16px;
  border: 1px solid ${COLOR.gray3};
  gap: 12px;
`;

const ProgressBar = ({
  progress,
  animValue,
}: {
  progress: number;
  animValue: Animated.Value;
}) => {
  useEffect(() => {
    Animated.spring(animValue, {
      toValue: progress,
      friction: 8, // 스프링 효과 강도
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <ProgressContainer>
      <Progress
        style={{
          width: animValue.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
        }}
      />
      <Indicator
        style={{
          left: animValue.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
          transform: [
            {
              translateX: animValue.interpolate({
                inputRange: [0, 100],
                outputRange: [-10, -10], // 인디케이터 중앙 정렬
              }),
            },
          ],
        }}
      />
    </ProgressContainer>
  );
};
const ProgressContainer = styled.View`
  width: 100%;
  height: 12px;
  border-radius: 40px;
  background-color: ${COLOR.gray2};
  overflow: visible;
  position: relative;
`;

const Progress = styled(Animated.View)`
  height: 100%;
  border-radius: 40px;
  /* width: 162px; */
  background-color: ${COLOR.blue1};
`;
const Indicator = styled(Animated.View)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: white;
  border: 4px solid ${COLOR.blue2};
  position: absolute;
  top: -4;
  z-index: 1;
`;

export default function OrderScreen() {
  return (
    <Container>
      <MainSection>
        {bobbyMenus({
          number: 443,
          orderQuantity: 1,
          menu: "삼겹덮밥",
          option: "밥 추가",
          quantity: 1,
          price: 8000,
          status: 50,
        })}
        {bobbyMenus({
          number: 442,
          orderQuantity: 1,
          menu: "바비든든",
          option: "밥 추가",
          quantity: 1,
          price: 8000,
          status: 0,
        })}
        {bobbyMenus({
          number: 442,
          orderQuantity: 1,
          menu: "바비든든",
          option: "밥 추가",
          quantity: 1,
          price: 8000,
          status: 100,
        })}
      </MainSection>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* padding: 16px; */
  background-color: ${COLOR.gray1};
  /* width: 100%; */
`;

const MainSection = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { gap: 8, paddingBottom: 16 },
})`
  padding-top: 8px;
  width: 100%;
`;

const StyledButton = styled.Pressable`
  padding: 12px 16px;
  border-radius: 12px;
  background-color: ${(props: { ready: boolean }) =>
    props.ready ? COLOR.red1 : COLOR.gray4};
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
