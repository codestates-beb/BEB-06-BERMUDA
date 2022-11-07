import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import logger from 'redux-logger';
import { PersistGate } from "redux-persist/integration/react"; //  리덕스 스토어에 유지시키고자 하는 데이터들이 정상적으로 저장되고 불러올 수 있도록 UI의 렌더링을 지연시키는 역할을 한다. PersistGate로 루트 컴포넌트를 감싸서 사용한다.
import { persistStore } from "redux-persist"; // 정의된 store 내용에 따라 리덕스 데이터를 유지시킬 수 있는 리덕스 스토어를 생성한다.
import { Provider } from 'react-redux';
import rootReducer from './reducers/index'
import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'; // store 만들어주는 패키지

//redux-persist 리덕스에 저장된 데이터를 로컬 스토리지 또는 세션 스토리지에 저장하여 데이터를 유지시켜주는 패키지

const store = configureStore({
  reducer: rootReducer, // combineReducers로 리듀서를 묶은 리덕스 모듈 파일
  // middleware: [ReduxThunk], // 로그 찍어주는 미들웨어 logger를 주면 콘솔에서 확인 가능 
  middleware: [ReduxThunk, logger],
  devTools: true, // 기본은 true로 설정되어있다. 개발자 도구의 사용 여부를 정한다.
  // preloadedState: {
  //   loading: {
  //     loadingState: true,
  //   },
  // }, // 리덕스 스토어가 생성될 때, 초기값을 정의한다.
}); 

const persistor = persistStore(store); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
