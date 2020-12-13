export default {
    state:{
        tab:null
    },
    mutations:{
        selectTab(state,tab){
            state.tab = tab
        }
    },
    getters:{
        tabInfo(state){
            return state.tab
        }
    }
}