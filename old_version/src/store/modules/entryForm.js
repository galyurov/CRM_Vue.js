export default {
    actions:{

    },
    mutations:{
        setInfo(state,payload){
            state[payload.type] = payload.info
        },
        clearStore(state){
            Object.keys(state).forEach(value => {
                if(state[value] && state[value]!='Not Booked' && state[value]!='Residential'){
                    state[value] = null
                }
            })
        }
    },
    state: {
        inventory:null,
        status: 'New',
        nameFrom: "",
        addressFrom: "",
        locationFrom: null,
        levelFrom: null,
        floorFrom: "",
        aptFrom: "",
        phoneFrom: "",
        phoneFrom2: "",
        email: "",

        nameTo: "",
        addressTo: "",
        stateTo:'',
        locationTo: null,
        levelTo: null,
        floorTo: "",
        aptTo: "",
        phoneTo: "",
        fax: "",
        information: null,
        datepicker: null,
        rooms: null,
        arrivalTime: null,
        typeOfMove: 'Residential',
        extraAddress: null,
        volume: null,
        range: null,
        vansLabor: 0,
        workersLabor: 0,
        perHrsLabor: 0,
        hrsLabor: 0,
        vansTravel: 0,
        workersTravel: 0,
        perHrsTravel: 0,
        hrsTravel: 0,
        fuelMile: null,
        liable: null,
        infoPrice: null,
        infoPrice2: null,
        infoPrice3: null,
        liablePrice: null,
        discount: null,
        discountPrice: null,
        infoText: null,
        subTotalPrice: null,
        binding: null
    },
    getters:{
        nameFromInfo(state){
            return state.nameFrom
        },
        addressFromInfo(state){
            return state.addressFrom
        },
        locationFromInfo(state){
            return state.locationFrom
        },
        levelFromInfo(state){
            return state.levelFrom
        },
        floorFromInfo(state){
            return state.floorFrom
        },
        aptFromInfo(state){
            return state.aptFrom
        },
        phoneFromInfo(state){
            return state.phoneFrom
        },
        phoneFrom2Info(state){
            return state.phoneFrom2
        },
        emailInfo(state){
            return state.email
        },
        nameToInfo(state){
            return state.nameTo
        },
        addressToInfo(state){
            return state.addressTo
        },
        locationToInfo(state){
            return state.locationTo
        },
        levelToInfo(state){
            return state.levelTo
        },
        floorToInfo(state){
            return state.floorTo
        },
        aptToInfo(state){
            return state.aptTo
        },
        phoneToInfo(state){
            return state.phoneTo
        },
        faxInfo(state){
            return state.fax
        },
        datepickerInfo(state){
            return state.datepicker
        },
        informationInfo(state){
            return state.information
        },
        roomsInfo(state){
            return state.rooms
        },
        arrivalTimeInfo(state){
            return state.arrivalTime
        },
        typeOfMoveInfo(state){
            return state.typeOfMove
        },
        extraAddressInfo(state){
            return state.extraAddress
        },
        volumeInfo(state){
            return state.volume
        },
        rangeInfo(state){
            return state.range
        },
        vansLaborInfo(state){
            return state.vansLabor
        },
        workersLaborInfo(state){
            return state.workersLabor
        },
        perHrsLaborInfo(state){
            return state.perHrsLabor
        },
        hrsLaborInfo(state){
            return state.hrsLabor
        },
        vansTravelInfo(state){
            return state.vansTravel
        },
        workersTravelInfo(state){
            return state.workersTravel
        },
        perHrsTravelInfo(state){
            return state.perHrsTravel
        },
        hrsTravelInfo(state){
            return state.hrsTravel
        },
        fuelMileInfo(state){
            return state.fuelMile
        },
        statusInfo(state){
            return state.status
        },
        liableInfo(state){
            return state.liable
        },
        liablePriceInfo(state){
            return state.liablePrice
        },
        discountInfo(state){
            return state.discount
        },
        discountPriceInfo(state){
            return state.discountPrice
        },
       infoPriceInfo(state){
            return state.infoPrice
        },
        infoPrice2Info(state){
            return state.infoPrice2
        },
        infoPrice3Info(state){
            return state.infoPrice3
        },
        infoTextInfo(state){
            return state.infoText
        },
        subTotalPriceInfo(state){
            return state.subTotalPrice
        },
        stateToInfo(state){
            return state.stateTo
        },
        inventoryInfo(state){
            return state.inventory
        },
        bindingInfo(state){
            return state.binding
        }
    }

}