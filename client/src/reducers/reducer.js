const initalState = {
    userData: {},
    section: "main",
    login: false,
};

 function userData(state = initalState, action) {
    switch (action.type) {
        case "add" : 
            return {
                userData: action.data,
            }
        case "delete":
            return {
                userData: {},
            }
        default:
            return state;
        }
  }


const changeSection = 'section/change';

export const onChangeSection = (section) => ({ type: changeSection, section });

 function section(state = initalState, action) {
    switch (action.type) {
        case "change" : 
            return {
                section: action.section,
            }
        default:
            return state;
        }
  }


  function login(state = initalState, action) {
    switch (action.type) {
        case "login" : 
            return {
                login: true,
            }
        case "logout":
            return {
                login: false,
            }
        default:
            return state;
        }
  }



  export { section , userData , login } 