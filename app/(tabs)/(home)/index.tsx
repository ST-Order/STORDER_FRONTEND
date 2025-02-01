import COLOR from "@/styles/color";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import popular from "@/assets/images/popular_menus.png";
import bobby from "@/assets/images/bobby_menus.png";
import pho from "@/assets/images/pho_menus.png";
import bunsik from "@/assets/images/bunsik_menus.png";
import gukbab from "@/assets/images/gukbab_menus.png";
import kats from "@/assets/images/kats_menus.png";
import NextIcon from "@/assets/icons/다음.svg";
import { Link } from "expo-router";

const restaurants = [
  [
    { title: "인기메뉴", image: popular },
    { title: "바비든든", image: bobby },
    { title: "포포420", image: pho },
  ],
  [
    { title: "폭풍분식", image: bunsik },
    { title: "51장국밥", image: gukbab },
    { title: "경성카츠", image: kats },
  ],
];

// TODO: 중복되는 이런 것들 모아서 놓기.
interface Notice {
  image: any;
  restaurant: string;
  tag: Tag; // 핵심: tag를 Tag 타입으로 명시
  title: string;
  time: string;
}
type Tag =
  | "품절"
  | "재료 소진"
  | "메뉴 단종"
  | "운영시간 변경"
  | "신메뉴 출시"
  | "기타";

const notices: Notice[] = [
  {
    image: bunsik,
    restaurant: "경성카츠",
    tag: "품절",
    title: "오늘 왕돈가스 품절됐습니다 ㅠㅠ",
    time: "2025.03.20 15:32",
  },
];

const RestaurantsItem = ({ title, image }: { title: string; image: any }) => (
  <RestaurantsItemContainer>
    <Image
      source={image}
      style={{
        width: 55,
        height: 55,
      }}
      resizeMode="contain"
    />
    <SubSectionTitle>{title}</SubSectionTitle>
  </RestaurantsItemContainer>
);

const NoticeItem = ({
  title,
  image,
  time,
  tag,
  restaurant,
}: {
  title: string;
  image: any;
  time: string;
  tag: string;
  restaurant: string;
}) => (
  <Link href="/notice" asChild>
    <NoticeItemContainer>
      <Image
        source={image}
        style={{ width: 68, height: 68, borderRadius: 12 }}
        resizeMode="contain"
      />
      <View style={{ gap: 12 }}>
        <NoticeRow>
          <NoticeRest
            style={{
              includeFontPadding: false,
            }}
          >
            {restaurant}
          </NoticeRest>
          <NoticeTag>{tag}</NoticeTag>
        </NoticeRow>

        <NoticeTitle>{title}</NoticeTitle>
        <NoticeTime>{time}</NoticeTime>
      </View>
    </NoticeItemContainer>
  </Link>
);

const NoticeItemContainer = styled.Pressable`
  flex-direction: row;
  height: 92px;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid ${COLOR.gray3};
  background: #fff;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const NoticeRest = styled.Text`
  font-size: 10px;
  font-weight: 400;
  height: 18px;
  padding: 4px 8px;
  border-radius: 12px;
  background: ${COLOR.gray2};
`;

const NoticeRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const NoticeTag = styled.Text`
  color: ${COLOR.noticeOutOfStockText};
  font-size: 10px;
  font-weight: 400;
`;

const NoticeTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const NoticeTime = styled.Text`
  font-size: 10px;
  color: ${COLOR.gray4};
  font-weight: 400;
`;

const RestaurantsItemContainer = styled.View`
  width: 101px;
  /* height: 95px; */
  padding: 7px 11px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${COLOR.gray2};
  background: #fff;
`;

export default function HomeScreen() {
  return (
    <Container>
      <MainSection>
        {/* Greeting */}
        <GreetingRow>
          <GreetingText>
            어서오세요! <View style={{ width: 8 }} />
            오희진
          </GreetingText>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            님
          </Text>
        </GreetingRow>
        {/* 메뉴 조회 */}
        <SubSection>
          <SubSectionTitle>메뉴 조회</SubSectionTitle>
          <RestaurantsContainer>
            <RestaurantsRow>
              {restaurants[0].map((item, index) => (
                <Link
                  href={{
                    pathname: "/(tabs)/(home)/menu-inquiry",
                    params: {
                      title: item.title,
                    },
                  }}
                  key={index}
                >
                  <RestaurantsItem title={item.title} image={item.image} />
                </Link>
              ))}
            </RestaurantsRow>
            <RestaurantsRow>
              {restaurants[1].map((item, index) => (
                <RestaurantsItem
                  key={index}
                  title={item.title}
                  image={item.image}
                />
              ))}
            </RestaurantsRow>
          </RestaurantsContainer>
        </SubSection>
        {/* 공지사항 */}
        <SubSection>
          <TitleRow>
            <SubSectionTitle>공지사항</SubSectionTitle>
            <Link href="/notice-list">
              <View
                style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: 400, color: COLOR.gray5 }}
                >
                  자세히 보기
                </Text>
                <NextIcon width={13} height={13} />
              </View>
            </Link>
          </TitleRow>
          <NoticesContainer>
            {notices.map((notice, index) => (
              <NoticeItem
                key={index}
                image={notice.image}
                restaurant={notice.restaurant}
                tag={notice.tag}
                title={notice.title}
                time={notice.time}
              />
            ))}
          </NoticesContainer>
        </SubSection>
      </MainSection>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;

  align-items: center;
  padding: 36px 16px;
  background-color: #fff;
`;

const MainSection = styled.View`
  gap: 28px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GreetingRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: baseline;
`;

const GreetingText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
`;

const SubSection = styled.View`
  gap: 12px;
  width: 100%;
`;
const RestaurantsContainer = styled.View`
  padding: 12px 17px;
  border-radius: 20px;
  border: 1px solid ${COLOR.gray2};
  background: ${COLOR.gray1};
  gap: 12px;
  justify-content: center;
`;

const SubSectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`;

const RestaurantsRow = styled.View`
  flex-direction: row;
  gap: 12px;
  justify-content: center;
`;
const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NoticesContainer = styled.View`
  gap: 12px;
  width: 100%;
`;
