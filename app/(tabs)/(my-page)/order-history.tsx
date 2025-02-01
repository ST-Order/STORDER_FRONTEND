import COLOR from "@/styles/color";
import styled from "styled-components/native";
import Next from "@/assets/icons/Next_black.svg";
import Back from "@/assets/icons/이전.svg";
import CalendarIcon from "@/assets/icons/캘린더.svg";
import InfoIcon from "@/assets/icons/상세정보.svg";
import Bobby from "@/assets/images/bobby_menus.png";
import { Image } from "react-native";
import { Link } from "expo-router";

const Body = () => (
  <BodyContainer>
    <CalendarText>2025.03.20</CalendarText>
    {Item({
      menu: "삼겹덮밥",
      price: 8000,
      time: "2025.03.20 17:00",
      status: "픽업완료",
    })}
    {Item({
      menu: "삼겹덮밥",
      price: 8000,
      time: "2025.03.20 17:00",
      status: "픽업완료",
    })}
  </BodyContainer>
);

const BodyContainer = styled.View`
  background-color: #fff;
  gap: 12px;
  padding: 20px 16px;
  width: 100%;
`;
interface ItemProps {
  menu: string;
  price: number;
  time: string;
  status: string;
}

const Item = ({ menu, time, status, price }: ItemProps) => (
  <ItemContainer>
    <Row16>
      <Image
        source={Bobby}
        style={{ width: 68, height: 68 }}
        resizeMode="contain"
      />
      <Col12>
        <ItemText1>{menu}</ItemText1>
        <ItemText2>{price}원</ItemText2>
        <ItemText3>
          {time} | {status}
        </ItemText3>
      </Col12>
    </Row16>
    <Link href="/order-history-detail" asChild>
      <DetailCol>
        <InfoIcon width={28} height={28} />
        <DetailText>주문상세</DetailText>
      </DetailCol>
    </Link>
  </ItemContainer>
);

const ItemContainer = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 12px 20px 12px 12px;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  border: 1px solid ${COLOR.gray3};
`;

const Col12 = styled.View`
  gap: 12px;
`;

const ItemText1 = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
const ItemText2 = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const ItemText3 = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: ${COLOR.gray4};
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
export default function OrderHistoryScreen() {
  return (
    <Container>
      <TopSection>
        <SpaceBetween>
          <Row4>
            <Text10>총 주문 횟수</Text10>
            <TextNum12>2건</TextNum12>
          </Row4>
          <Row4>
            <Text10>총 금액</Text10>
            <TextNum12>28,000원</TextNum12>
          </Row4>
        </SpaceBetween>
        <MonthSection>
          <Row16>
            <Back width={14} height={14} />
            <MonthTitle>10월</MonthTitle>
            <Next width={14} height={14} />
          </Row16>
          <MonthRow>
            <CalendarButton>
              <CalendarIcon width={16} height={16} />
              <CalendarText>2025.03.01</CalendarText>
            </CalendarButton>
            <CalendarText>~</CalendarText>
            <CalendarButton>
              <CalendarIcon width={16} height={16} />
              <CalendarText>2025.03.31</CalendarText>
            </CalendarButton>
          </MonthRow>
        </MonthSection>
      </TopSection>
      {Body()}
      {Body()}
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${COLOR.gray1};
  gap: 8px;
`;

const TopSection = styled.View`
  gap: 20px;
  padding: 20px 16px;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
`;
const SpaceBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const Row4 = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

const Text10 = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: ${COLOR.gray4};
`;

const TextNum12 = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${COLOR.gray5};
`;

const MonthSection = styled.View`
  gap: 12px;
  padding: 0px 8px;
  align-items: center;
`;
const Row16 = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const MonthTitle = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;
const MonthRow = styled.View`
  flex-direction: row;
  gap: 40px;
  padding: 8px 50px;
  border-radius: 8px;
  border: 1px solid ${COLOR.gray3};
  background: ${COLOR.gray2};
`;

const CalendarButton = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const CalendarText = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;
