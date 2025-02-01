import COLOR from "@/styles/color";
import styled, { ThemeProvider } from "styled-components/native";
import ArrowUp from "@/assets/icons/드롭다운_위.svg";
import ArrowDown from "@/assets/icons/드롭다운_아래.svg";
import { Image, ImageSourcePropType, Platform } from "react-native";
import { View } from "react-native";
import bobby from "@/assets/images/bobby_menus.png";
import { useEffect, useState } from "react";
import Animated from "react-native-reanimated";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

type Tag = "Best" | "Popular";
interface Rest {
  available: boolean;
  image: ImageSourcePropType;
  name: string;
  tag1?: Tag;
  tag2?: Tag;
  soldout: boolean;
  description: string;
  price: string;
}

interface Theme {
  BestColor: string;
  popularColor: string;
  textColor: string;
}
const availableTheme = (isAvailable: boolean): Theme => ({
  BestColor: isAvailable ? COLOR.menuBest : COLOR.gray5,
  popularColor: isAvailable ? COLOR.menuPopular : COLOR.gray5,
  textColor: isAvailable ? "black" : COLOR.gray5,
});

const RestaurantItem = ({
  available,
  image,
  name,
  tag1,
  tag2,
  soldout,
  description,
  price,
}: Rest) => (
  <ThemeProvider theme={availableTheme(available)}>
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
      <View style={{ gap: 12 }}>
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
        <MenuDescription>{description}</MenuDescription>
        <MenuRow>
          <MenuPrice>{price}</MenuPrice>
          {soldout && (
            <SoldOut
              style={{
                includeFontPadding: false,
              }}
            >
              Sold out{" "}
            </SoldOut>
          )}
        </MenuRow>
      </View>
    </MenuItemContainer>
  </ThemeProvider>
);

const PopularMenus = () => {
  const restaurants: Rest[] = [
    {
      available: true,
      image: bobby,
      name: "삼겹덮밥",
      tag1: "Best",
      tag2: "Popular",
      description: "맛난 삼겹살과 쌈장으로 만든 덮밥",
      soldout: false,
      price: "3,500원",
    },
    {
      available: false,
      image: bobby,
      name: "제육덮밥",
      tag1: "Best",
      tag2: "Popular",
      description: "맛난 삼겹살과 쌈장으로 만든 덮밥",
      soldout: true,
      price: "3,500원",
    },
  ];
  return (
    <>
      <Link href="/(tabs)/(home)/menu-detail-inquiry" asChild>
        <RestaurantRow>
          <RestaurantTitle>바비든든</RestaurantTitle>
          <RestaurantItem
            available={restaurants[0].available}
            image={restaurants[0].image}
            name={restaurants[0].name}
            tag1={restaurants[0].tag1}
            tag2={restaurants[0].tag2}
            description={restaurants[0].description}
            price={restaurants[0].price}
            soldout={restaurants[0].soldout}
          />
        </RestaurantRow>
      </Link>
      <RestaurantRow>
        <RestaurantTitle>바비든든</RestaurantTitle>
        <RestaurantItem
          available={restaurants[1].available}
          image={restaurants[1].image}
          name={restaurants[1].name}
          tag1={restaurants[1].tag1}
          description={restaurants[1].description}
          price={restaurants[1].price}
          soldout={restaurants[1].soldout}
        />
      </RestaurantRow>
      <RestaurantRow>
        <RestaurantTitle>바비든든</RestaurantTitle>
        <RestaurantItem
          available={restaurants[1].available}
          image={restaurants[1].image}
          name={restaurants[1].name}
          tag1={restaurants[1].tag1}
          description={restaurants[1].description}
          price={restaurants[1].price}
          soldout={restaurants[1].soldout}
        />
      </RestaurantRow>
      <RestaurantRow>
        <RestaurantTitle>바비든든</RestaurantTitle>
        <RestaurantItem
          available={restaurants[1].available}
          image={restaurants[0].image}
          name={restaurants[0].name}
          tag1={restaurants[0].tag1}
          tag2={restaurants[0].tag2}
          description={restaurants[0].description}
          price={restaurants[0].price}
          soldout={restaurants[0].soldout}
        />
      </RestaurantRow>
      <RestaurantRow>
        <RestaurantTitle>바비든든</RestaurantTitle>
        <RestaurantItem
          available={restaurants[0].available}
          image={restaurants[0].image}
          name={restaurants[0].name}
          tag1={restaurants[0].tag1}
          tag2={restaurants[0].tag2}
          description={restaurants[0].description}
          price={restaurants[0].price}
          soldout={restaurants[0].soldout}
        />
      </RestaurantRow>
    </>
  );
};

const BobbyMenus = () => {
  const restaurants: Rest[] = [
    {
      available: true,
      image: bobby,
      name: "삼겹덮밥",
      tag1: "Best",
      tag2: "Popular",
      description: "맛난 삼겹살과 쌈장으로 만든 덮밥",
      soldout: false,
      price: "3,500원",
    },
    {
      available: false,
      image: bobby,
      name: "제육덮밥",
      tag1: "Best",
      tag2: "Popular",
      description: "맛난 삼겹살과 쌈장으로 만든 덮밥",
      soldout: true,
      price: "3,500원",
    },
  ];
  return (
    <>
      {/* <Link href="/(tabs)/(home)/menu-detail-inquiry" asChild> */}
      <RestaurantRow>
        <RestaurantItem
          available={restaurants[0].available}
          image={restaurants[0].image}
          name={restaurants[0].name}
          tag1={restaurants[0].tag1}
          tag2={restaurants[0].tag2}
          description={restaurants[0].description}
          price={restaurants[0].price}
          soldout={restaurants[0].soldout}
        />
      </RestaurantRow>
      {/* </Link> */}
      <RestaurantRow>
        <RestaurantItem
          available={restaurants[1].available}
          image={restaurants[1].image}
          name={restaurants[1].name}
          tag1={restaurants[1].tag1}
          description={restaurants[1].description}
          price={restaurants[1].price}
          soldout={restaurants[1].soldout}
        />
      </RestaurantRow>
      <RestaurantRow>
        <RestaurantItem
          available={restaurants[1].available}
          image={restaurants[1].image}
          name={restaurants[1].name}
          tag1={restaurants[1].tag1}
          description={restaurants[1].description}
          price={restaurants[1].price}
          soldout={restaurants[1].soldout}
        />
      </RestaurantRow>
      <RestaurantRow>
        <RestaurantItem
          available={restaurants[0].available}
          image={restaurants[0].image}
          name={restaurants[0].name}
          tag1={restaurants[0].tag1}
          tag2={restaurants[0].tag2}
          description={restaurants[0].description}
          price={restaurants[0].price}
          soldout={restaurants[0].soldout}
        />
      </RestaurantRow>
      <RestaurantRow>
        <RestaurantItem
          available={restaurants[0].available}
          image={restaurants[0].image}
          name={restaurants[0].name}
          tag1={restaurants[0].tag1}
          tag2={restaurants[0].tag2}
          description={restaurants[0].description}
          price={restaurants[0].price}
          soldout={restaurants[0].soldout}
        />
      </RestaurantRow>
    </>
  );
};

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
  color: ${({ theme }: { theme: Theme }) => theme.textColor};
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
  background-color: ${({ theme }: { theme: Theme }) => theme.BestColor};
`;

const PopularTag = styled(MenuTag)`
  background-color: ${({ theme }: { theme: Theme }) => theme.popularColor};
`;

const MenuDescription = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${COLOR.gray5};
`;

const MenuPrice = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }: { theme: Theme }) => theme.textColor};
`;

export default function MenuInquiryScreen() {
  const params = useLocalSearchParams<{ title: string }>();

  const [isToggle, setIsToggle] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<string>("인기메뉴");

  useEffect(() => {
    setSelectedRestaurant(params.title);
  }, []);

  useEffect(() => {
    console.log(selectedRestaurant);
  }, [selectedRestaurant]);
  const onToggle = () => setIsToggle(!isToggle);
  const onRestaurantSelect = (restaurant: string) => {
    setIsToggle(false);
    setSelectedRestaurant(restaurant);
  };

  const showMenus = () => {
    switch (selectedRestaurant) {
      case "바비든든":
        return <BobbyMenus />;
      case "인기메뉴":
        return <PopularMenus />;
      default:
        return <PopularMenus />;
    }
  };
  const showMenusTitle = () => {
    switch (selectedRestaurant) {
      case "바비든든":
        return (
          <MenusTitle>
            <MenusTitleTag color={COLOR.storeOpen}>영업 중</MenusTitleTag>
            <MenusTitleName>바비든든</MenusTitleName>
          </MenusTitle>
        );
      case "인기메뉴":
        return <DropdownTitle>인기메뉴</DropdownTitle>;
      default:
        return <DropdownTitle>인기메뉴</DropdownTitle>;
    }
  };

  const MenusTitle = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `;
  const MenusTitleTag = styled.Text`
    background-color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: 400;
    color: ${(props: { color: string }) => props.color};
  `;
  const MenusTitleName = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: white;
  `;
  return (
    <Container>
      <RestaurantDropdown>
        <DropdownToggle onPress={onToggle}>
          {showMenusTitle()}
          {isToggle ? (
            <ArrowUp width={14} height={14} />
          ) : (
            <ArrowDown width={14} height={14} />
          )}
        </DropdownToggle>
        {isToggle && (
          <DropdownMenus>
            <DropdownRow
              onPress={() => {
                console.log("인기");
                onRestaurantSelect("인기메뉴");
              }}
            >
              <DropdownItem>인기메뉴</DropdownItem>
            </DropdownRow>
            <DropdownRow
              onPress={() => {
                console.log("바비");
                onRestaurantSelect("바비든든");
              }}
            >
              <DropdownTag>영업 중</DropdownTag>
              <DropdownItem>바비든든</DropdownItem>
            </DropdownRow>
            <DropdownRow>
              <DropdownTag>영업 중</DropdownTag>
              <DropdownItem>포포420</DropdownItem>
            </DropdownRow>
            <DropdownRow>
              <DropdownTag>영업 중</DropdownTag>
              <DropdownItem>바비든든</DropdownItem>
            </DropdownRow>
            <DropdownRow>
              <DropdownTag>영업 중</DropdownTag>
              <DropdownItem>바비든든</DropdownItem>
            </DropdownRow>
          </DropdownMenus>
        )}
      </RestaurantDropdown>
      <MainSection>{showMenus()}</MainSection>

      <StyledButton>
        <ButtonPrice>0원</ButtonPrice>
        <ButtonText>장바구니 보러가기</ButtonText>
      </StyledButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  /* width: 100%; */
`;

const RestaurantDropdown = styled.View`
  width: 100%;
  gap: 4px;
  position: relative;
  z-index: 999;
  /* TODO: 이거 claude에서 찾아서 설명 적어놓기 */
`;
const DropdownToggle = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  padding: 8px 50px;
  border-radius: 8px;
  background: ${COLOR.blue2};
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

const DropdownTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

const DropdownMenus = styled(Animated.View)`
  border-radius: 8px;
  width: 100%;
  padding: 12px 12px 0 12px;
  border: 1px solid ${COLOR.blue2};
  background: ${COLOR.gray1};
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 44px;
  z-index: 9999;
`;
const DropdownRow = styled.Pressable`
  flex-direction: row;
  gap: 8px;
  padding-bottom: 12px;
  border-bottom-color: ${COLOR.gray2};
  border-bottom-width: 1px;
  align-self: stretch;
  justify-content: center;
`;

const DropdownTag = styled.Text`
  border-radius: 12px;
  background: ${COLOR.gray2};
  text-align: center;
  padding: 4px 8px;
  color: ${COLOR.storeOpen};
  font-size: 10px;
  font-weight: 400;
`;
const DropdownItem = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const MainSection = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { gap: 12, paddingBottom: 100 },
})`
  padding-top: 20px;
  width: 100%;
`;

const RestaurantTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const RestaurantRow = styled.Pressable`
  gap: 8px;
`;

const StyledButton = styled.Pressable`
  flex-direction: row;
  padding: 18px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  border-radius: 16px;
  /* TODO: 값 담기면 blue2 */
  background-color: ${COLOR.gray4};
  position: absolute;
  bottom: 16px;
  /* notion에 floating 버튼 방법 정리 */
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 0px;
      shadow-opacity: 0.15;
      shadow-radius: 8px;
    `,
    android: `
      elevation: 5;
    `,
  })}
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

const SoldOut = styled.Text`
  font-size: 10px;
  font-weight: 600;
  color: ${COLOR.menuSoldOut};
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid ${COLOR.menuSoldOut};
  text-align: center;
`;
