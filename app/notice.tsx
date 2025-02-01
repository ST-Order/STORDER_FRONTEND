import COLOR from "@/styles/color";
import { useEffect, useState } from "react";
import { Image, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

export default function NoticeScreen() {
  // react-query

  interface Content {
    image?: ImageSourcePropType;
    restaurant: string;
    tag: string;
    title: string;
    time: string;
    content: string;
  }

  const [content, setContent] = useState<Content>({
    image: require("@/assets/images/bunsik_menus.png"),
    restaurant: "경성카츠",
    tag: "품절",
    title: "오늘 왕돈가스 품절됐습니다 ㅠㅠ",
    time: "2025.03.20 15:32",
    content:
      "그래요 오늘은 먼저 자요그대 잠들면 나도 잘게요전화를 끊고 화려한 옷을 입고나갈 준비를 하죠아무도 모르게 whooTonight 오늘 하루만 그댈 속일게Tonight 오늘이 지나면 돌아갈게Tonight 가끔 어색하게도 느껴도알아도 좀 넘어가 주겠니Baby good night잘자요 good night간다 라다~ 잘자요 good night잘자요 good night잘자YOgood night잘자요 good night잘자요 good !!!!night잘자 good night잘자요 good night~~",
  });

  useEffect(() => {}, []);

  return (
    <Container>
      <TitleSection>
        <Row>
          <Name
            style={{
              includeFontPadding: false,
            }}
          >
            {content.restaurant}
          </Name>
          <Tag>{content.tag}</Tag>
        </Row>

        <Title>{content.title}</Title>
        <Time>{content.time}</Time>
      </TitleSection>
      <ContentSection>
        {content.image && ( // 이미지가 존재할 때만 렌더링
          <Image
            source={content.image}
            style={{
              width: 320,
              height: 320,
            }}
            resizeMode="contain"
          />
        )}
        <Contents>{content.content}</Contents>
      </ContentSection>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  gap: 12;
`;

const TitleSection = styled.View`
  gap: 12px;
  width: 100%;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: 400;
  padding: 4px 8px;
  border-radius: 40px;
  background: ${COLOR.gray2};
  vertical-align: middle;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const Tag = styled.Text`
  color: ${COLOR.noticeOutOfStockText};
  font-size: 16px;
  font-weight: 400;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const Time = styled.Text`
  font-size: 12px;
  color: ${COLOR.gray5};
  font-weight: 300;
`;

const ContentSection = styled.View`
  padding: 16px;
  border-radius: 20px;
  border: 1px solid ${COLOR.gray3};
  background: #fff;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Contents = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;
