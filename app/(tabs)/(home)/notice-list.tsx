import COLOR from "@/styles/color";
import { Image, ImageSourcePropType, View } from "react-native";
import styled from "styled-components/native";
import popular from "@/assets/images/popular_menus.png";
import bobby from "@/assets/images/bobby_menus.png";
import pho from "@/assets/images/pho_menus.png";
import bunsik from "@/assets/images/bunsik_menus.png";
import gukbab from "@/assets/images/gukbab_menus.png";
import kats from "@/assets/images/kats_menus.png";

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

interface Notice {
  image: ImageSourcePropType;
  restaurant: string;
  tag: Tag; // 핵심: tag를 Tag 타입으로 명시
  title: string;
  time: string;
}

const notices: Notice[] = [
  {
    image: bunsik,
    restaurant: "경성카츠",
    tag: "품절",
    title: "오늘 왕돈가스 품절됐습니다 ㅠㅠ",
    time: "2025.03.20 15:32",
  },
  {
    image: bunsik,
    restaurant: "51장국밥",
    tag: "운영시간 변경",
    title: "4/1부터 운영시간 변경됩니다",
    time: "2025.03.20 15:32",
  },
  {
    image: bunsik,
    restaurant: "51장국밥",
    tag: "운영시간 변경",
    title: "4/1부터 운영시간 변경됩니다",
    time: "2025.03.20 15:32",
  },
  {
    image: bunsik,
    restaurant: "51장국밥",
    tag: "운영시간 변경",
    title: "4/1부터 운영시간 변경됩니다",
    time: "2025.03.20 15:32",
  },
  {
    image: bunsik,
    restaurant: "51장국밥",
    tag: "운영시간 변경",
    title: "4/1부터 운영시간 변경됩니다",
    time: "2025.03.20 15:32",
  },
  {
    image: bunsik,
    restaurant: "51장국밥",
    tag: "운영시간 변경",
    title: "4/1부터 운영시간 변경됩니다",
    time: "2025.03.20 15:32",
  },
  {
    image: bunsik,
    restaurant: "51장국밥",
    tag: "운영시간 변경",
    title: "4/1부터 운영시간 변경됩니다",
    time: "2025.03.20 15:32",
  },
  {
    image: bunsik,
    restaurant: "51장국밥",
    tag: "운영시간 변경",
    title: "4/1부터 운영시간 변경됩니다",
    time: "2025.03.20 15:32",
  },
];

const noticeColor = {
  품절: COLOR.noticeOutOfStockText,
  "재료 소진": COLOR.noticeOutOfStockText,
  "메뉴 단종": COLOR.noticeOutOfStockText,
  "운영시간 변경": COLOR.noticeOperatingHoursText,
  "신메뉴 출시": COLOR.noticeNewMenuText,
  기타: COLOR.noticeText,
};

type Tag =
  | "품절"
  | "재료 소진"
  | "메뉴 단종"
  | "운영시간 변경"
  | "신메뉴 출시"
  | "기타";
const NoticeItem = ({
  title,
  image,
  time,
  tag,
  restaurant,
}: {
  title: string;
  image: ImageSourcePropType;
  time: string;
  tag: Tag;
  restaurant: string;
}) => (
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
        <NoticeTag color={noticeColor[tag]}>{tag}</NoticeTag>
      </NoticeRow>

      <NoticeTitle>{title}</NoticeTitle>
      <NoticeTime>{time}</NoticeTime>
    </View>
  </NoticeItemContainer>
);

const NoticeItemContainer = styled.View`
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
  color: ${(props: { color: string }) => props.color};
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

export default function NoticeListScreen() {
  return (
    <Container>
      <MainScrollView>
        <SectionTitle>공지사항</SectionTitle>
        <NoticesContainer>
          {notices.map((item, index) => (
            <NoticeItem
              key={index}
              image={item.image}
              restaurant={item.restaurant}
              tag={item.tag}
              title={item.title}
              time={item.time}
            />
          ))}
        </NoticesContainer>
      </MainScrollView>
    </Container>
  );
}

const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false, // 스크롤바를 숨깁니다
})`
  flex: 1;
  background-color: #fff;
`;

const MainScrollView = styled.View`
  flex: 1;
  padding: 16px;
  gap: 12px;
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`;

const NoticesContainer = styled.View`
  gap: 12px;
  width: 100%;
`;
