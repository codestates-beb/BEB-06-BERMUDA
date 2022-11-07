import  { section , userData , login }  from "./reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 로컬 session 모듈 선택 storage

const persistConfig = {
    key: "root",   // 스토리지에 저장할 때의 키값을 지정한다.
    storage, // 세션, 로컬 스토리지 중에서 저장할 스토리지를 지정한다.
    // whitelist: ['reducer']
    // reducer localstorage에 저장합니다.
  };

// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
const rootReducer = combineReducers({  section : section , userData : userData , login : login  });

export default persistReducer(persistConfig, rootReducer);
