import COLOR from "@/styles/color";
import { Link } from "expo-router";
import React from "react";
import { Platform, PressableProps, Text } from "react-native";
import styled from "styled-components/native";

const buttonRed = COLOR.red1;
const buttonBlue = COLOR.blue2;
const buttonGray = COLOR.gray4;

// interface ButtonProps {
//   text: string;
//   onPress?: () => void;
//   color: string;
// }

// export default function Button({ text, onPress, color }: ButtonProps) {
//   return (
//     <StyledButton onPress={onPress} color={color}>
//       <ButtonText>{text}</ButtonText>
//     </StyledButton>
//   );
// }

// interface ButtonProps extends PressableProps {
//   text: string;
//   color: string;
// }

// const Button = React.forwardRef<typeof StyledButton, ButtonProps>(
//   ({ text, color, ...props }, ref) => {
//     return (
//       <StyledButton ref={ref} color={color} {...props}>
//         <ButtonText>{text}</ButtonText>
//       </StyledButton>
//     );
//   }
// );

interface ButtonProps extends PressableProps {
  text: string;
  onPress?: () => void;
  color: string;
  href?: Parameters<typeof Link>[0]["href"]; // 두 번째 방법 (추천)
}

export default function Button({
  text,
  onPress,
  color,
  href,
  ...props
}: ButtonProps) {
  const ButtonContent = (
    <StyledButton onPress={onPress} color={color} {...props}>
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          // lineHeight: 16, // 100%
          includeFontPadding: false,
          // fontFamily: Platform.select({
          //   android: "Inter_500Medium",
          //   ios: "Inter-Medium",
          // }),
        }}
      >
        {text}
      </Text>
    </StyledButton>
  );

  // href가 있으면 Link로 감싸고, 없으면 그냥 버튼 반환
  return href ? (
    <Link href={href} asChild>
      {ButtonContent}
    </Link>
  ) : (
    ButtonContent
  );
}

const StyledButton = styled.Pressable`
  flex-direction: row;
  height: 60px;
  padding: 21px 121px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* align-self: stretch; */
  width: 100%;
  /* align-self보단 width를 하는게 보편젹. */
  border-radius: 16px;
  background-color: ${(props: { color: string }) => {
    switch (props.color) {
      case "red":
        return buttonRed;
      case "gray":
        return buttonGray;
      default:
        return props.color || buttonBlue;
    }
  }};
  /* props로 안하고 color:string으로 하면 오류남. */
`;
