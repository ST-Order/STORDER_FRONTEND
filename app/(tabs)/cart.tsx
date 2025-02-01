import COLOR from "@/styles/color";
import styled from "styled-components/native";
import { Image, ImageSourcePropType, Pressable } from "react-native";
import { View } from "react-native";
import bobby from "@/assets/images/bobby_menus.png";
import React, { useState } from "react";
import Minus from "@/assets/icons/minus.svg";
import Plus from "@/assets/icons/plus.svg";
import ArrowUp from "@/assets/icons/arrow_up.svg";
import { Link } from "expo-router";
import EmptyImage from "@/assets/images/empty.png";

type Tag = "Best" | "Popular";
interface Rest {
  image: ImageSourcePropType;
  name: string;
  tag1?: Tag;
  tag2?: Tag;
  option: string;
  price: string;
}

const RestaurantItem = ({ image, name, tag1, tag2, option, price }: Rest) => (
  <MenuItemContainer>
    <Image
      source={image}
      style={{
        width: 84,
        height: 84,
        borderRadius: 12,
        borderColor: COLOR.gray3,
      }}
      resizeMode="contain"
    />
    <View style={{ gap: 12, flex: 1 }}>
      <MenuRow>
        <MenuName
          style={{
            includeFontPadding: false,
          }}
        >
          {name}
        </MenuName>
        {tag1 && <BestTag>{tag1}</BestTag>}
        {tag2 && <PopularTag>{tag2}</PopularTag>}
      </MenuRow>
      <MenuDescription>옵션: {option}</MenuDescription>
      <MenuRow2>
        <QuantityRow>
          <Pressable>
            <Minus width={19.6} height={19.6} />
          </Pressable>
          <QuantityText
            style={{
              includeFontPadding: false,
            }}
          >
            10
          </QuantityText>
          <Pressable>
            <Plus width={19.6} height={19.6} />
          </Pressable>
        </QuantityRow>
        <MenuPrice>{price}</MenuPrice>
      </MenuRow2>
    </View>
  </MenuItemContainer>
);

const bobbyMenus = () => {
  const restaurants: Rest[] = [
    {
      image: bobby,
      name: "삼겹덮밥",
      tag1: "Best",
      tag2: "Popular",
      option: "밥 추가 (+1,000)",
      price: "3,500원",
    },
    {
      image: bobby,
      name: "제육덮밥",
      tag1: "Best",
      tag2: "Popular",
      option: "없음",
      price: "3,500원",
    },
  ];
  return (
    <RestaurantSection>
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
      <RestaurantRow>
        <RestaurantItem
          image={restaurants[0].image}
          name={restaurants[0].name}
          tag1={restaurants[0].tag1}
          tag2={restaurants[0].tag2}
          option={restaurants[0].option}
          price={restaurants[0].price}
        />
      </RestaurantRow>
      <RestaurantRow>
        <RestaurantItem
          image={restaurants[1].image}
          name={restaurants[1].name}
          tag1={restaurants[1].tag1}
          option={restaurants[1].option}
          price={restaurants[1].price}
        />
      </RestaurantRow>
      <RestaurantRow>
        <RestaurantItem
          image={restaurants[1].image}
          name={restaurants[1].name}
          tag1={restaurants[1].tag1}
          option={restaurants[1].option}
          price={restaurants[1].price}
        />
      </RestaurantRow>
    </RestaurantSection>
  );
};

const RestaurantSection = styled.View`
  gap: 12px;
`;

const RestaurantSectionTitleRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const RestaurantSectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const MenuItemContainer = styled.View`
  flex-direction: row;
  padding: 8px;
  border-radius: 16px;
  border: 1px solid ${COLOR.gray3};
  background: #fff;
  align-items: center;
  gap: 16px;
`;

const MenuName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  height: 18px;
`;

const MenuRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const MenuTag = styled.Text`
  padding: 4px 8px;
  border-radius: 12px;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
`;

const BestTag = styled(MenuTag)`
  background-color: ${COLOR.menuBest};
`;

const PopularTag = styled(MenuTag)`
  background-color: ${COLOR.menuPopular};
`;

const MenuDescription = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;
const MenuRow2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MenuPrice = styled.Text`
  font-size: 16px;
  font-weight: 400;
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
  height: 19.6px;
  border-radius: 4px;
  border: 1px solid ${COLOR.gray3};
  background: #fff;
  text-align: center;
  vertical-align: middle;
`;

const Empty = () => {
  return (
    <EmptyCart>
      <Image
        source={EmptyImage}
        style={{
          width: 103.09,
          height: 89.7,
        }}
      />
      <EmptyCartTitle>장바구니에 상품이 존재하지 않습니다.</EmptyCartTitle>
    </EmptyCart>
  );
};
const EmptyCart = styled.View`
  justify-content: center;
  align-items: center;
  gap: 26px;
  padding-top: 40%;
`;

const EmptyCartTitle = styled.Text`
  font-size: 16px;
  /* TODO: Abel */
  font-family: Abel;
  font-weight: 400;
  color: ${COLOR.gray5};
`;
const exBoolean = false;
const existing = () => {
  return exBoolean ? <>{Empty()}</> : <MainSection>{bobbyMenus()}</MainSection>;
};
export default function CartScreen() {
  const [toggle, setToggle] = useState(false);

  const togglePrice = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      {existing()}
      <PaymentSection
        style={{
          boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.15)",
        }}
      >
        <PaymentTitleCol onPress={togglePrice}>
          <ArrowUp />
          <PaymentTitle>결제 금액</PaymentTitle>
        </PaymentTitleCol>
        {/* TODO: 애니메이션? */}
        {toggle && (
          <>
            <PaymentRow1>
              <PaymentRest>바비든든</PaymentRest>
              <PaymentRest>8,000원</PaymentRest>
            </PaymentRow1>
            <PaymentRow2>
              <PaymentRest>주문금액 </PaymentRest>
              <PaymentRest>8,000원</PaymentRest>
            </PaymentRow2>
            <PaymentRow3>
              <PaymentRest>결제 예정 금액 </PaymentRest>
              <PaymentTotalPrice>8,000원</PaymentTotalPrice>
            </PaymentRow3>
          </>
        )}
        <ButtonRow>
          <StyledButton color={COLOR.red1}>
            <ButtonText>더 담으러 가기</ButtonText>
          </StyledButton>
          <Link href="/payment" asChild>
            <StyledButton color={COLOR.blue2}>
              <ButtonText>결제하러 가기</ButtonText>
            </StyledButton>
          </Link>
        </ButtonRow>
      </PaymentSection>
    </Container>
  );
}

const PaymentSection = styled.View`
  width: 100%;
  gap: 12px;
  border-radius: 20px 20px 0px 0px;
  background: ${COLOR.gray1};
  padding: 8px 16px;
  position: absolute;
  bottom: 0;
`;

const PaymentTitleCol = styled.Pressable`
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const PaymentTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${COLOR.gray5};
`;
const PaymentRow1 = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const PaymentRest = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
const PaymentRow2 = styled(PaymentRow1)`
  border-top-width: 1;
  border-top-color: ${COLOR.gray3};
  border-style: dashed;
  padding-top: 12px;
`;
const PaymentTotalPrice = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;
const PaymentRow3 = styled(PaymentRow2)`
  border-style: normal;
`;
const Container = styled.View`
  flex: 1;
  /* justify-content: center;
  align-items: center; */
  /* padding: 16px; */
  background-color: #fff;
  /* width: 100%; */
`;

const MainSection = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { gap: 12, paddingBottom: 100 },
})`
  padding: 16px;
  padding-top: 24px;
  width: 100%;
`;

const RestaurantRow = styled.Pressable`
  gap: 8px;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  gap: 13px;
  padding: 12px 0px;
`;
const StyledButton = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 48px;
  border-radius: 12px;
  background-color: ${(props: { color: string }) => props.color};
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
