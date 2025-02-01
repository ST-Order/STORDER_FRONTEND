import COLOR from "@/styles/color";
import { TextInput } from "react-native";
import styled from "styled-components/native";

interface TextInputProps {
  children?: React.ReactNode;
}

export default function TextInputContainer({ children }: TextInputProps) {
  return <InputContainer>{children}</InputContainer>;
}

const InputContainer = styled.View`
  flex-direction: row;
  /* width: 100%; */
  padding: 12px 16px;
  gap: 12px;
  border: 1px solid ${COLOR.gray3};
  background: ${COLOR.gray2};
  border-radius: 12px;
  align-items: center;
`;
