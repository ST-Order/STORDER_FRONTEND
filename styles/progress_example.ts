// import React, { useState, useEffect } from "react";
// import { Animated } from "react-native";
// import styled from "styled-components/native";

// export default function ProgressBarWithIndicator() {
//   const [progress, setProgress] = useState(0); // 서버에서 받은 진행률 (0, 50, 100)
//   const animatedValue = new Animated.Value(0); // 애니메이션 값

//   // 서버 값에 따라 애니메이션 값 업데이트
//   useEffect(() => {
//     Animated.timing(animatedValue, {
//       toValue: progress,
//       duration: 500, // 0.5초 동안 부드럽게 변경
//       useNativeDriver: false,
//     }).start();
//   }, [progress]);

//   // 프로그레스 바 너비
//   const animatedWidth = animatedValue.interpolate({
//     inputRange: [0, 100],
//     outputRange: ["0%", "100%"],
//   });

//   // 인디케이터 위치 계산
//   const indicatorPosition = animatedValue.interpolate({
//     inputRange: [0, 100],
//     outputRange: ["0%", "100%"],
//   });

//   return (
//     <Container>
//       <ProgressWrapper>
//         <ProgressContainer>
//           {/* Progress Bar */}
//           <ProgressBar style={{ width: animatedWidth }} />
//         </ProgressContainer>

//         {/* Indicator (Progress Bar 외부) */}
//         <IndicatorContainer style={{ left: indicatorPosition }}>
//           <Indicator />
//         </IndicatorContainer>
//       </ProgressWrapper>
//       <ProgressLabel>{progress}%</ProgressLabel>

//       {/* 진행률 변경 버튼 */}
//       <ButtonContainer>
//         <ProgressButton onPress={() => setProgress(0)}>
//           <ButtonText>0%</ButtonText>
//         </ProgressButton>
//         <ProgressButton onPress={() => setProgress(50)}>
//           <ButtonText>50%</ButtonText>
//         </ProgressButton>
//         <ProgressButton onPress={() => setProgress(100)}>
//           <ButtonText>100%</ButtonText>
//         </ProgressButton>
//       </ButtonContainer>
//     </Container>
//   );
// }

// const Container = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
//   background-color: #f5f5f5;
// `;

// const ProgressWrapper = styled.View`
//   width: 100%;
//   position: relative;
//   margin-bottom: 10px;
// `;

// const ProgressContainer = styled.View`
//   width: 100%;
//   height: 20px;
//   background-color: #e0e0e0;
//   border-radius: 10px;
// `;

// const ProgressBar = styled(Animated.View)`
//   height: 100%;
//   background-color: #6200ee;
//   border-radius: 10px;
// `;

// const IndicatorContainer = styled(Animated.View)`
//   position: absolute;
//   top: 0px;

//   width: 20px;
//   height: 20px;
//   align-items: center;
// `;

// const Indicator = styled.View`
//   width: 20px;
//   height: 20px;
//   border-radius: 10px;
//   background-color: #6200ee;
// `;

// const ProgressLabel = styled.Text`
//   margin-top: 10px;
//   font-size: 16px;
//   font-weight: bold;
//   color: #333;
// `;

// const ButtonContainer = styled.View`
//   flex-direction: row;
//   margin-top: 20px;
// `;

// const ProgressButton = styled.TouchableOpacity`
//   margin-horizontal: 10px;
//   padding: 10px 20px;
//   background-color: #6200ee;
//   border-radius: 5px;
// `;

// const ButtonText = styled.Text`
//   color: #fff;
//   font-size: 16px;
//   font-weight: bold;
// `;

// 2

// const EnhancedProgressBar = ({ progress }: { progress: 0 | 50 | 100 }) => {
//   const animValue = useRef(new Animated.Value(0)).current;

//   // 애니메이션 트리거
//   useEffect(() => {
//     Animated.spring(animValue, {
//       toValue: progress,
//       friction: 8, // 스프링 효과 강도
//       useNativeDriver: false,
//     }).start();
//   }, [progress]);

//   return (
//     <View style={styles.container1}>
//       {/* 진행 바 */}
//       <Animated.View
//         style={[
//           styles.fill,
//           {
//             width: animValue.interpolate({
//               inputRange: [0, 100],
//               outputRange: ["0%", "100%"],
//             }),
//           },
//         ]}
//       />

//       {/* 움직이는 동그라미 인디케이터 */}
//       <Animated.View
//         style={[
//           styles.circleIndicator,
//           {
//             left: animValue.interpolate({
//               inputRange: [0, 100],
//               outputRange: ["0%", "100%"],
//             }),
//             transform: [
//               {
//                 translateX: animValue.interpolate({
//                   inputRange: [0, 100],
//                   outputRange: [-10, -10], // 인디케이터 중앙 정렬
//                 }),
//               },
//             ],
//           },
//         ]}
//       >
//         <Text style={styles.indicatorText}>{progress}%</Text>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       padding: 20,
//       backgroundColor: "#fff",
//     },
//     slider: {
//       marginTop: 30,
//     },
//     progressTextContainer: {
//       marginTop: 20,
//       alignItems: "center",
//     },
//     progressText: {
//       fontSize: 18,
//       fontWeight: "bold",
//       color: "#333",
//     },
//     container1: {
//       height: 20,
//       backgroundColor: "#f0f0f0",
//       borderRadius: 10,
//       overflow: "visible",
//       position: "relative",
//     },
//     fill: {
//       height: "100%",
//       backgroundColor: "#2ecc71",
//       borderRadius: 10,
//     },
//     circleIndicator: {
//       position: "absolute",
//       top: -10, // 프로그레스바 위로 올림
//       width: 40,
//       height: 40,
//       borderRadius: 20, // 원형으로 만들기
//       backgroundColor: "#2ecc71",
//       justifyContent: "center",
//       alignItems: "center",
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.3,
//       shadowRadius: 3,
//       elevation: 5, // 안드로이드 그림자
//     },
//     indicatorText: {
//       fontWeight: "bold",
//       color: "#fff",
//       fontSize: 14,
//     },
//   });

//   export default App;
