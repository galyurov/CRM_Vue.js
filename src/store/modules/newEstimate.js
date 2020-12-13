export default {
    actions:{
      loadOrder({commit},orderId){
          fetch('/php/getorder.php', {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ orderId })
          })

              .then((response) => response.json())
              .then((result) => {
                  commit('setOrder', result)
              })
      }
    },
    state:{
        tab:null,
        orderName:'',
        order:null
    },
    mutations:{
        selectTab(state,tab){
            state.tab = tab
        },
        saveOrderName(state,order){
            state.orderName = order
        },
        setOrder(state,order){
            state.order = order
        }

    },
    getters:{
        tabInfo(state){
            return state.tab
        },
        orderName(state){
            return state.orderName
        },
        order(state){
            return state.order
        },
        dataOrder(state){
            return  JSON.parse(state.order.value)

        },
        estimate(state){
            if(state.order){
                let entry = JSON.parse(state.order.value)
                return entry.entryParams.estimateDate
            }
            return ''
        },
        getOrderNumber(state,getters){
            if(state.order){
                return `${getters.estimate}-${state.order.id}`
            }
            return 'loading'
        },

    }
}