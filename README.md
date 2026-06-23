# TodoFlow — 실시간 할 일 관리 앱 (프론트엔드 최종과제)

TypeScript + Firebase Firestore + Redux Toolkit + Next.js로 만드는 실시간 할 일 관리 앱입니다.

| 기술 | 역할 |
| --- | --- |
| **TypeScript** | Todo, Filter 등 데이터 타입 안전하게 정의 |
| **Firebase Firestore** | 할 일 CRUD + 실시간(onSnapshot) 동기화 |
| **Redux Toolkit** | 다크/라이트 테마, 필터 상태 전역 관리 |
| **Next.js** | `/` (전체 목록), `/completed` (완료 목록) 페이지 라우팅 |

## 시작하기

### 1. 클론 & 설치

```bash
git clone <이 저장소 주소>
cd todo-flow-final
npm install
```

### 2. Firebase 프로젝트 연결 (과제 2)

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트를 만들고 Firestore Database를 활성화하세요. (테스트 모드로 시작해도 됩니다)
2. 프로젝트 설정 → 내 앱 → 웹 앱 추가 → SDK 설정 및 구성 값을 확인하세요.
3. `.env.local.example`을 복사해 `.env.local`을 만들고 값을 채우세요.

```bash
cp .env.local.example .env.local
```

> `.env.local`은 `.gitignore`에 포함되어 있어 커밋되지 않습니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인하세요.

## 구현 기능 체크리스트

- [ ] **[과제 1]** `src/types/todo.ts` — `FilterType`, `ThemeType` 리터럴 타입 정의
- [ ] **[과제 2]** `src/lib/firebase.ts` — `.env.local`로 Firebase 초기화 연결
- [ ] **[과제 3]** `src/store/todoSlice.ts` — `toggleTheme`, `setFilter` reducer 완성
- [ ] **[과제 4]** `src/components/todo/TodoList.tsx` — `onSnapshot`으로 실시간 목록 구독
- [ ] **[과제 5]** `src/components/todo/TodoInput.tsx` — `addDoc`으로 할 일 추가
- [ ] **[과제 6]** `src/components/todo/TodoList.tsx` — `updateDoc`으로 완료 토글
- [ ] **[과제 7]** `src/app/completed/page.tsx` — 완료 항목만 표시 (이미 구현된 예시 참고)

**추가 과제 (선택)**

- [ ] `deleteDoc`으로 할 일 삭제 (`TodoList.tsx`)
- [ ] `ThemeWrapper.tsx`에서 `theme` 상태로 다크모드 배경/글자색 적용
- [ ] `src/hooks/useSettings.ts` 커스텀 훅 완성

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx              # 전역 레이아웃 (Providers + ThemeWrapper + Navbar)
│   ├── page.tsx                # 메인 페이지 (/) — 전체/진행 중 목록
│   └── completed/
│       └── page.tsx            # 완료 페이지 (/completed)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # 테마 토글 + 필터 버튼 + 페이지 링크
│   │   └── ThemeWrapper.tsx    # Redux theme 상태로 전체 배경색 변경
│   ├── common/
│   │   └── Providers.tsx       # Redux + Persist 설정 래퍼
│   └── todo/
│       ├── TodoInput.tsx       # 할 일 입력 폼
│       └── TodoList.tsx        # 실시간 할 일 목록
├── hooks/
│   └── useSettings.ts          # 추가 과제: theme/filter 커스텀 훅
├── store/
│   ├── index.ts                # Store 생성
│   ├── todoSlice.ts            # theme + filter 상태
│   └── storage.ts              # SSR 대응 스토리지
├── types/
│   └── todo.ts                 # TypeScript 타입 정의
└── lib/
    └── firebase.ts             # Firebase 초기화
```

## 테스트 체크리스트

- [ ] 할 일을 입력하고 추가 버튼을 누르면 목록에 표시된다
- [ ] 항목을 클릭하면 완료/미완료가 토글된다
- [ ] 페이지를 새로고침해도 목록이 유지된다 (Firestore)
- [ ] Navbar의 필터 버튼을 누르면 목록이 필터링된다 (Redux)
- [ ] `/completed` 페이지에서는 완료 항목만 보인다 (Next.js 라우팅)
- [ ] 테마 버튼을 누르면 다크/라이트 모드가 전환된다 (Redux + ThemeWrapper)
- [ ] 페이지를 새로고침해도 테마와 필터 상태가 유지된다 (redux-persist)

## 제출

- GitHub 저장소 링크 또는 실행 화면 스크린샷 제출
- 추가 과제 구현 시 별도 표시
