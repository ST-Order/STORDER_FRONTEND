작업 영역 정보 수집# 프로젝트 구조 분석

## 1. 기술 스택

- React Native + Expo 기반 모바일 앱 프로젝트
- TypeScript 사용
- Expo Router를 활용한 라우팅 시스템

## 2. 주요 디렉토리 구조

### 📱 app/

메인 라우팅 및 화면 구성

- `_layout.tsx`: 앱의 기본 레이아웃
- `index.tsx`: 메인 화면
- 인증 관련:
  - `sign-in.tsx`
  - `sign-up.tsx`
  - `change-pw.tsx`
- 결제 관련:
  - `payment.tsx`
  - `payment-loading.tsx`
- 기타 화면:
  - `notice.tsx`
  - `review-create.tsx`
  - `order-history-detail.tsx`

### 🎨 components/

재사용 가능한 UI 컴포넌트

- `Button.tsx` 등 공통 컴포넌트 포함

### 🖼 assets/

정적 리소스 관리

- `fonts/`: 폰트 파일
- `icons/`: 아이콘 리소스
- `images/`: 이미지 파일
- `loading.json`, `loading2.json`: Lottie 애니메이션 파일로 추정

### ⚙️ 설정 파일

- app.json: Expo 설정
- tsconfig.json: TypeScript 설정
- metro.config.js: Metro 번들러 설정
- package.json: 프로젝트 의존성 관리

## 3. 특징

- Expo Router를 사용한 파일 기반 라우팅
- TypeScript를 통한 타입 안정성 확보
- 모달 및 탭 기반 네비게이션 구현
- 결제, 리뷰, 주문 이력 등 커머스 관련 기능 포함

## 4. 주요 기능

- 사용자 인증 (로그인/회원가입)
- 결제 프로세스
- 주문 이력 관리
- 리뷰 시스템
- 공지사항
- 약관 동의

---

# TypeScript 타입 파일 구성 추천

## 📁 권장 디렉토리 구조

```
src/
└── types/
    ├── index.ts        # 타입 재출력(re-export)
    ├── api.ts          # API 관련 타입
    ├── auth.ts         # 인증 관련 타입
    ├── payment.ts      # 결제 관련 타입
    ├── order.ts        # 주문 관련 타입
    ├── review.ts       # 리뷰 관련 타입
    ├── user.ts         # 사용자 관련 타입
    └── common.ts       # 공통 타입
```

## 💡 타입 파일 구현 예시

```typescript
export * from "./api";
export * from "./auth";
export * from "./payment";
export * from "./order";
export * from "./review";
export * from "./user";
export * from "./common";
```

```typescript
export interface User {
  id: number;
  email: string;
  name: string;
  phone?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpForm extends LoginCredentials {
  name: string;
  phone: string;
  termsAccepted: boolean;
}
```

## 🔑 주요 특징

1. **모듈화**

   - 도메인별로 타입 파일 분리
   - 관리 및 유지보수 용이

2. **중앙 집중식 관리**

   - `types/index.ts`를 통한 타입 재출력
   - 타입 임포트 경로 단순화

3. **확장성**
   - 새로운 기능 추가 시 관련 타입 파일만 추가
   - 기존 타입 수정 시 영향도 파악 용이

## 💪 권장 사항

- 타입 파일은 `.ts` 확장자 사용 (`.d.ts` 아님)
- 관련 있는 타입들끼리 그룹화
- 명확한 네이밍 컨벤션 적용
- 문서화 주석(JSDoc) 적극 활용

---

# 현재 프로젝트 구조

```
STorder/
├── app/                    # Expo Router 기반 화면
│   ├── _layout.tsx        # 앱 레이아웃
│   ├── index.tsx          # 메인 화면
│   ├── sign-in.tsx        # 로그인
│   ├── sign-up.tsx        # 회원가입
│   ├── change-pw.tsx      # 비밀번호 변경
│   ├── payment.tsx        # 결제
│   ├── payment-loading.tsx # 결제 로딩
│   ├── notice.tsx         # 공지사항
│   ├── review-create.tsx  # 리뷰 작성
│   └── order-history-detail.tsx # 주문 상세
│
├── assets/                 # 정적 리소스
│   ├── fonts/             # 폰트 파일
│   ├── icons/             # 아이콘
│   ├── images/            # 이미지
│   ├── loading.json       # 로딩 애니메이션
│   └── loading2.json      # 로딩 애니메이션2
│
├── components/             # 재사용 컴포넌트
│   ├── Button.tsx         # 버튼 컴포넌트
│   └── ...                # 기타 컴포넌트
│
├── app.json               # Expo 설정
├── tsconfig.json          # TypeScript 설정
├── metro.config.js        # Metro 번들러 설정
└── package.json           # 프로젝트 의존성
```

# 필요한 디렉토리 추가 제안

```
STorder/
├── ...기존 구조...
│
├── src/                   # 소스 코드 루트
│   ├── types/            # TypeScript 타입 정의
│   │   ├── index.ts      # 타입 재출력
│   │   ├── api.ts        # API 타입
│   │   ├── auth.ts       # 인증 타입
│   │   ├── payment.ts    # 결제 타입
│   │   ├── order.ts      # 주문 타입
│   │   ├── review.ts     # 리뷰 타입
│   │   ├── user.ts       # 사용자 타입
│   │   └── common.ts     # 공통 타입
│   │
│   ├── services/         # API 서비스
│   ├── hooks/            # 커스텀 훅
│   └── utils/            # 유틸리티 함수
│
└── ...기존 구조...
```

위와 같이 `src` 디렉토리를 추가하여 타입 정의와 비즈니스 로직을 분리하는 것을 추천드립니다.
