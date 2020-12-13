export default {
	actions: {
		getOrdersFromDB({ commit }) {
			fetch('/php/getOrdersFromDB.php?get', {
				method: 'GET'
			})
				.then((response) => response.json())
				.then((result) => {
					commit('saveOrdersFromDB', result)
				})
		},
		openModal({ dispatch, commit }, value) {
			commit('setEmails', null)
			dispatch('getEmails', value.id)
			commit('openModal', value)
		},
		getEmails({ commit }, orderId) {
			fetch('/php/getEmailsList.php', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ orderId })
			})

				.then((response) => response.json())
				.then((result) => {
					if(result){
						commit('setEmails', result)
					}

				})



		}
	},
	mutations: {
		saveOrdersFromDB(state, value) {
			state.orders = value
		},
		setEmails(state, value) {
			if(value && value.length){
				state.emails = value
			}

		},
		openModal(state, value) {
			state.totalPrice = 0
			state.itemPrices = []
			if (value.id) {
				state.dataForModal = value.item
				state.idForModal = value.id
				state.priceForModal = value.item.price
				state.openModal = !!value
			} else {
				state.openModal = value
			}

		},
		addTotalPrice(state, value) {
			state.totalPrice = value
		},
		setMonth(state, value) {
			state.numberOfMonth = value
		},
		setYear(state, value) {
			state.currentYear = value
		},
		nextMonth(state) {
			if (state.numberOfMonth >= 11) {
				state.currentYear = +state.currentYear + 1;
				state.numberOfMonth = 0;
			} else {
				state.numberOfMonth++
			}
		},
		prevMonth(state) {
			if (state.numberOfMonth == 0 && state.currentYear != 2020) {
				state.currentYear = +state.currentYear - 1;
				state.numberOfMonth = 11;
			} else if (state.numberOfMonth > 0) {
				state.numberOfMonth--
			}
		},
		currentDate(state) {
			state.numberOfMonth = new Date().getMonth()
			state.currentYear = new Date().getFullYear()
		},
		addItemPrices(state, payload) {
			state.prices.push(payload.totalItemPrice)
			if (payload.index + 1 == payload.length) {
				state.itemPrices = state.prices
			}
		}
	},
	state: {
		prices: [],
		loading: true,
		totalPrice: 0,
		itemPrices: [],
		dataForModal: null,
		idForModal: null,
		priceForModal: null,
		openModal: false,
		currentYear: 0,
		numberOfMonth: 0,
		numberOfFirstDay: 0,
		years: [2020, 2021, 2022, 2023, 2024, 2025],
		months: [{ name: 'January', id: 0 }, { name: 'February', id: 1 }, { name: 'March', id: 2 }, {
			name: 'April',
			id: 3
		}, { name: 'May', id: 4 }, { name: 'June', id: 5 }, { name: 'July', id: 6 }, {
			name: 'August',
			id: 7
		}, { name: 'September', id: 8 }, { name: 'October', id: 9 }, { name: 'November', id: 10 }, {
			name: 'December',
			id: 11
		}],
		orders: null,
		emails: null
	},
	getters: {
		getItemPrices(state) {
			return state.itemPrices
		},
		checkOpenModal(state) {
			return state.openModal
		},
		calculateItemsVolume(state) {
			let items = state.dataForModal.data.choisedItems
			let volume = 0
			for (let value in items) {
				volume += items[value].size * items[value].qty
			}
			return volume
		},
		calculateMovingPrice(state, getters) {
			let itemPricesSum = +getters.getItemPrices.reduce((sum, current) => +sum + (+current), 0).toFixed(2)

			if (state.dataForModal.data.searchParam['select-stairs-from'] > 0) {
				itemPricesSum += +((+state.dataForModal.price['chargePerFlight'] * +getters.calculateItemsVolume) * +state.dataForModal.data.searchParam['select-stairs-from']).toFixed(2)
			}
			if (state.dataForModal.data.searchParam['select-stairs-to'] > 0) {
				itemPricesSum += +((+state.dataForModal.price['chargePerFlight'] * +getters.calculateItemsVolume) * +state.dataForModal.data.searchParam['select-stairs-to']).toFixed(2)
			}
			if (state.dataForModal.data.searchParam['select-Add-pick-up'] > 0) {
				itemPricesSum += +((+state.dataForModal.price['chargePerFlight'] * +getters.calculateItemsVolume) * +state.dataForModal.data.searchParam['select-Add-pick-up']).toFixed(2)
			}
			if (state.dataForModal.data.searchParam['select-Add-drop'] > 0) {
				itemPricesSum += +((+state.dataForModal.price['chargePerFlight'] * +getters.calculateItemsVolume) * +state.dataForModal.data.searchParam['select-Add-drop']).toFixed(2)
			}
			return itemPricesSum
		},
		editedOrders(state) {
			let databaseOfEditedOrders = {}
			for (let order of state.orders) {
				let obj = JSON.parse(order[3])
				let price = JSON.parse(order[4])
				let id = order[0]
				let status = null
				let date = ''
				if (obj.searchParam) {
					date = obj.searchParam.datepicker
					status = obj.searchParam.status
				} else if (obj.entryParams) {
					date = obj.entryParams.datepickerInfo
					status = obj.entryParams.statusInfo
				} else {
					date = obj.datepicker
					status = obj.status

				}
				if (databaseOfEditedOrders[date]) {
					if (status == 'Accepted') {
						databaseOfEditedOrders[date][id] = { '№': order[1], data: obj, price,id:order[2] }
					}
				} else {
					if (status == 'Accepted') {
						databaseOfEditedOrders[date] = { [id]: { '№': order[1], data: obj, price,id:order[2] } }
					}

				}

			}
			return databaseOfEditedOrders
		},
		getNumberOfFirstDay(state) {
			let date = new Date()
			date.setFullYear(state.currentYear, state.numberOfMonth, 1)
			return date.getDay()
		},
		getAllMonths(state) {
			return state.months
		},
		getAllYears(state) {
			return state.years
		},
		daysInMonth(state) {
			return 32 - new Date(state.currentYear, state.numberOfMonth, 32).getDate();
		},
		getCurrentMonth(state) {
			return state.numberOfMonth
		},
		getCurrentYear(state) {
			return state.currentYear
		},
		getDataForModal(state) {
			return { dataForModal: state.dataForModal, idForModal: state.idForModal, priceForModal: state.priceForModal }
		},
		getTotalPrice(state) {
			return state.totalPrice
		},
		checkLoading(state) {
			return !!state.orders
		},
		emailsSend(state) {
			return state.emails
		}
	}
}
