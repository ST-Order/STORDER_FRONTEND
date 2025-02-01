import Button from "@/components/Button";
import COLOR from "@/styles/color";
import { View } from "react-native";
import styled from "styled-components/native";
import Circle_No from "@/assets/icons/circle_nocheck.svg";

import Logo from "@/assets/icons/logo_vertical.svg";
export default function TermAgreementScreen() {
  return (
    <Container>
      <MainSection>
        <Logo width={245} height={48} />
        {/* Button Section */}
        <TermsSection>
          <TermsContainer>
            <Terms>약관동의</Terms>
          </TermsContainer>
          <TermsTitle>개인정보 수집 및 이용약관</TermsTitle>
          <TermsText>
            Lorem ipsum dolor sit amet consectetur. Lectus adipiscing sagittis
            fermentum egestas proin. Aliquet vel blandit curabitur sit donec
            feugiat interdum nisl. Viverra tincidunt fermentum volutpat ut
            vestibulum. Hendrerit suspendisse nulla pellentesque id massa risus
            est. Auctor condimentum risus euismod tristique ut et montes
            aliquet. Egestas consectetur aliquam purus nulla. Feugiat sit ut
            vulputate elementum odio. Urna sit ut mattis condimentum neque
            semper. Semper vitae non a felis. Eros odio fringilla egestas diam
            mi dui. Sit amet facilisis risus et natoque enim mi egestas. Justo
            mattis vitae nibh egestas maecenas nisl quam. Vitae a proin aliquam
            elementum. Morbi tempus egestas varius eget ac pulvinar felis.
          </TermsText>
          <TermsAgreementRow>
            <Circle_No width={20} height={20} />
            <TermsAgreement>동의</TermsAgreement>
          </TermsAgreementRow>
        </TermsSection>
      </MainSection>
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "column-reverse",
        }}
      >
        <Button text="다음" color="" href="/sign-up" />
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
`;
const MainSection = styled.View`
  top: 50px;
  gap: 12px;
  padding: 22px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TermsSection = styled.View`
  justify-content: center;
  width: 100%;
  padding-top: 50px;
  gap: 12px;
`;

const TermsContainer = styled.View`
  width: 100%;
  padding: 8px 0px;
  border-bottom-width: 1px;
`;

const Terms = styled.Text`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const TermsTitle = styled.Text`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;

const TermsText = styled.Text`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const TermsAgreementRow = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

const TermsAgreement = styled.Text`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${COLOR.gray5};
`;
