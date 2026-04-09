# QuickTab

현재 레포는 Figma에서 생성된 React/TSX UI를 기반으로 하며, 기존 UI 코드를 유지한 상태에서 웹 실행 + Electron 데스크톱 실행/빌드가 가능하도록 구성되어 있습니다.

## 1) 웹 앱 실행

```bash
npm install
npm run dev
```

- 기본 개발 서버: `http://127.0.0.1:4173`
- 엔트리 파일: `src/main.tsx`
- 렌더링 루트: `src/app/App.tsx` -> `src/app/routes.tsx` -> `Root`

## 2) Electron 개발 실행

```bash
npm run electron:dev
```

- Vite 개발 서버를 올린 뒤 Electron이 해당 URL을 로드합니다.
- 메인 프로세스 진입점: `electron/main.cjs`
- 프리로드 스크립트: `electron/preload.cjs`

## 3) 웹 빌드

```bash
npm run build:web
```

- 결과물: `dist/`

## 4) Windows 실행 파일 빌드

```bash
npm run electron:build:win
```

- `electron-builder`를 통해 Windows 타깃(`portable`, `nsis`) 빌드를 수행합니다.
- 결과물 출력 경로: `release/`
