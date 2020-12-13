export default {
    actions: {
        downloadPricesFromDB({commit}) {
            fetch('/php/getPricesinDB.php?get', {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((result) => {
                    commit('savePricesFromDB', result)
                })
        }
    },
    mutations: {
        savePricesFromDB(state, result) {
            state.prices = result
        },
        saveInventoryInfo(state, payload) {
            state[payload.type] = payload.info
        },
        saveOrderItems(state,inventory){
            for(const [room,items] of Object.entries(inventory)){
                if(room =='Custom Elements'){
                    for(let item in items){
                        if(!state.database[room]){
                            state.database[room] = {}
                        }
                        state.database[room][item] = items[item]
                    }

                } else {
                    for(let item in items){
                        for (let elem in state.database) {
                            for(let subelem in state.database[elem]) {
                                if (state.database[elem][subelem][item] && state.database[elem][subelem][item].id == items[item].id) {
                                    state.database[elem][subelem][item] = items[item]
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    state: {
        prices: {},
        room: '',
        subCategory: '',
        currentRoom: '',
        customName: '',
        customHeight: null,
        customWidth: null,
        customDepth: null,
        database: {
            'Living Room': {
                'Packing Boxes': {
                    "817888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 817888,
                        "qty": 0
                    },
                    "817889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 817889,
                        "qty": 0
                    },
                    "817890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 817890,
                        "qty": 0
                    },
                    "817891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 817891,
                        "qty": 0
                    },
                    "817892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 817892,
                        "qty": 0
                    },
                    "817893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 817893,
                        "qty": 0
                    },
                    "817894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 817894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "417888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 417888,
                        "qty": 0
                    },
                    "417889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 417889,
                        "qty": 0
                    },
                    "417890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 417890,
                        "qty": 0
                    },
                    "417891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 417891,
                        "qty": 0
                    },
                    "417892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 417892,
                        "qty": 0
                    },
                    "417893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 417893,
                        "qty": 0
                    },
                    "417894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 417894,
                        "qty": 0
                    }
                },
                'Sofas and Couches': {
                    '418517': {
                        'cat': 'Futon Mattress,Single',
                        'name': 'Futon and Mattress',
                        'subname': 'Single',
                        "size": 30,
                        "class": 'Futon',
                        "id": 418517,
                        "qty": 0
                    },
                    '418518': {
                        'cat': 'Futon Mattress,Full',
                        'name': 'Futon and Mattress',
                        'subname': 'Full',
                        "size": 40,
                        "class": 'Futon',
                        "id": 418518,
                        "qty": 0
                    },
                    '418519': {
                        'cat': 'Futon Mattress,Queen',
                        'name': 'Futon and Mattress',
                        'subname': 'Queen',
                        "size": 50,
                        "class": 'Futon',
                        "id": 418519,
                        "qty": 0
                    },
                    '418520': {
                        'cat': 'Futon Mattress,King',
                        'name': 'Futon and Mattress',
                        'subname': 'King',
                        "size": 60,
                        "class": 'Futon',
                        "id": 418520,
                        "qty": 0
                    },
                    '418521': {
                        'cat': 'Ottoman,approx 18',
                        'name': 'Ottoman',
                        'subname': 'approx 18" x 18" x 18"',
                        "size": 5,
                        "class": 'Small_Ottoman',
                        "id": 418521,
                        "qty": 0
                    },
                    "418522": {
                        'cat': 'Ottoman,approx 2',
                        'name': 'Ottoman',
                        'subname': "approx 2' x 2' x 2'",
                        "size": 10,
                        "class": 'Medium_Ottoman',
                        "id": 418522,
                        "qty": 0
                    },
                    "418523": {
                        'cat': 'Ottoman,bigger than 2',
                        'name': 'Ottoman',
                        'subname': 'bigger than 2\' x 2\' x 2\'',
                        "size": 15,
                        "class": 'Large_Ottoman',
                        "id": 418523,
                        "qty": 0
                    },
                    '418524': {
                        'cat': 'Sofa,Loveseat',
                        'name': 'Sofa',
                        'subname': 'Loveseat',
                        "size": 35,
                        "class": 'Love_Seat',
                        "id": 418524,
                        "qty": 0
                    },
                    '418525': {
                        'cat': 'Sofa,3 Seater',
                        'name': 'Sofa',
                        'subname': '3 Seater',
                        "size": 60,
                        "class": 'Seater_Sofa_3',
                        "id": 418525,
                        "qty": 0
                    },
                    '418526': {
                        'cat': 'Sofa,4 Seater',
                        'name': 'Sofa',
                        'subname': '4 Seater',
                        "size": 70,
                        "class": 'Seater_Sofa_4',
                        "id": 418526,
                        "qty": 0
                    },
                    '418527': {
                        'cat': 'Sofa,4 Seater Sectional',
                        'name': 'Sofa',
                        'subname': '4 Seater Sectional',
                        "size": 80,
                        "class": 'Seater_Sofa_4',
                        "id": 418527,
                        "qty": 0
                    },
                    '418528': {
                        'cat': 'Sofa,8 Seater Sectional',
                        'name': 'Sofa',
                        'subname': '8 Seater Sectional',
                        "size": 123,
                        "class": 'Sofa_Large_Sectional',
                        "id": 418528,
                        "qty": 0
                    },
                    '418529': {
                        'cat': 'Sofa,Sofa Bed',
                        'name': 'Sofa',
                        "size": 60,
                        'subname': 'Sofa Bed',
                        "class": 'Sofa_Bed',
                        "id": 418529,
                        "qty": 0
                    }
                },
                'Chairs': {
                    '418530': {
                        'cat': 'Chairs,Arm Chair',
                        'name': 'Arm Chair',
                        "size": 12,
                        "class": 'Arm_Chair',
                        "id": 418530,
                        "qty": 0
                    },
                    '418531': {
                        'cat': 'Chairs,Bean Bag',
                        'name': 'Bean Bag',
                        "size": 7,
                        "class": 'Bean_Bag_Chair',
                        "id": 418531,
                        "qty": 0
                    },
                    '418532': {
                        'cat': 'Chairs,Chaise Lounge',
                        'name': 'Chaise Lounge',
                        "size": 30,
                        "class": 'Chaise_Lounge',
                        "id": 418532,
                        "qty": 0
                    },
                    '418533': {
                        'cat': 'Chairs,Club Chair',
                        'name': 'Club Chair',
                        "size": 20,
                        "class": 'Club_Chair',
                        "id": 418533,
                        "qty": 0
                    },
                    '418534': {
                        'cat': 'Chairs,Glider Chair',
                        'name': 'Glider Chair',
                        "size": 15,
                        "class": 'Glider_Chair',
                        "id": 418534,
                        "qty": 0
                    },
                    '418535': {
                        'cat': 'Chairs,Overstuffed Chair',
                        'name': 'Overstuffed Chair',
                        "size": 30,
                        "class": 'Overstuffed_Chair',
                        "id": 418535,
                        "qty": 0
                    },
                    '418536': {
                        'cat': 'Chairs,Papasan Chair',
                        'name': 'Papasan Chair',
                        "size": 25,
                        "class": 'Papason_Chair',
                        "id": 418536,
                        "qty": 0
                    },
                    '418537': {
                        'cat': 'Chairs,Recliner Chair',
                        'name': 'Recliner Chair',
                        "size": 25,
                        "class": 'Recliner_Chair',
                        "id": 418537,
                        "qty": 0
                    },
                    '418538': {
                        'cat': 'Chairs,Rocking Chair',
                        'name': 'Rocking Chair',
                        "size": 20,
                        "class": 'Rocking_Chair',
                        "id": 418538,
                        "qty": 0
                    }
                },
                'Tables': {
                    "418539": {
                        'cat': 'Coffee Table,approx 3',
                        'name': 'Coffee Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Small_Coffee_Table',
                        "id": 418539,
                        "qty": 0
                    },
                    "418540": {
                        'cat': 'Coffee Table,approx 4',
                        'name': 'Coffee Table',
                        'subname': 'approx 4\' x 2\'',
                        "size": 12,
                        "class": 'Small_Coffee_Table',
                        "id": 418540,
                        "qty": 0
                    },
                    "418541": {
                        'cat': 'Coffee Table,5or larger',
                        'name': 'Coffee Table',
                        'subname': '5\' x 3\' or larger',
                        "size": 15,
                        "class": 'Large_Coffee_Table',
                        "id": 418541,
                        "qty": 0
                    },
                    "418542": {
                        'cat': 'End Table,approx 1',
                        'name': 'End Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 418542,
                        "qty": 0
                    },
                    "418543": {
                        'cat': 'End Table,approx 2',
                        'name': 'End Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 418543,
                        "qty": 0
                    },
                    "418544": {
                        'cat': 'End Table,approx 3',
                        'name': 'End Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 418544,
                        "qty": 0
                    },
                    '418545': {
                        'cat': 'Tables,Foyer Table',
                        'name': 'Foyer Table',
                        "size": 22,
                        "class": 'Foyer_Table',
                        "id": 418545,
                        "qty": 0
                    },
                    '418546': {
                        'cat': 'Tables,Nesting Table',
                        'name': 'Nesting Table',
                        "size": 10,
                        "class": 'Nesting_Table',
                        "id": 418546,
                        "qty": 0
                    },
                    "418547": {
                        'cat': 'Side Table,approx 1',
                        'name': 'Side Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 5,
                        "class": 'Large_Side_Table',
                        "id": 418547,
                        "qty": 0
                    },
                    "418548": {
                        'cat': 'Side Table,approx 2',
                        'name': 'Side Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 8,
                        "class": 'Large_Side_Table',
                        "id": 418548,
                        "qty": 0
                    },
                    "418549": {
                        'cat': 'Side Table,approx 3',
                        'name': 'Side Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 418549,
                        "qty": 0
                    },
                    '418550': {
                        'cat': 'Tables,TV Dinner Folding Table',
                        'name': 'TV Dinner Folding Table',
                        "size": 6,
                        "class": 'TV_Dinner_Table',
                        "id": 418550,
                        "qty": 0
                    }
                },
                'Glass Tables': {
                    "418560": {
                        'cat': 'Glass Coffee Table,approx 3',
                        'name': 'Glass Coffee Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Small_Coffee_Table',
                        "id": 418560,
                        "qty": 0
                    },
                    "418561": {
                        'cat': 'Glass Coffee Table,approx 4',
                        'name': 'Glass Coffee Table',
                        'subname': 'approx 4\' x 2\'',
                        "size": 12,
                        "class": 'Small_Coffee_Table',
                        "id": 418561,
                        "qty": 0
                    },
                    "418562": {
                        'cat': 'Glass Coffee Table,5 or larger',
                        'name': 'Glass Coffee Table',
                        'subname': '5\' x 3\' or larger',
                        "size": 15,
                        "class": 'Large_Coffee_Table',
                        "id": 418562,
                        "qty": 0
                    },
                    "418563": {
                        'cat': 'Glass End Table,approx 1',
                        'name': 'Glass End Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 418563,
                        "qty": 0
                    },
                    "418564": {
                        'cat': 'Glass End Table,approx 2',
                        'name': 'Glass End Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 418564,
                        "qty": 0
                    },
                    "418565": {
                        'cat': 'Glass End Table,approx 3',
                        'name': 'Glass End Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 418565,
                        "qty": 0
                    },
                    '418566': {
                        'cat': 'Glass Tables,Glass Nesting Table',
                        'name': 'Glass Nesting Table',
                        "size": 10,
                        "class": 'Nesting_Table',
                        "id": 418566,
                        "qty": 0
                    },
                    "418567": {
                        'cat': 'Glass Side Table,approx 1',
                        'name': 'Glass Side Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 418567,
                        "qty": 0
                    },
                    "418568": {
                        'cat': 'Glass Side Table,approx 2',
                        'name': 'Glass Side Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 15,
                        "class": 'Large_Side_Table',
                        "id": 418568,
                        "qty": 0
                    },
                    "418569": {
                        'cat': 'Glass Side Table,approx 3',
                        'name': 'Glass Side Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 20,
                        "class": 'Large_Side_Table',
                        "id": 418569,
                        "qty": 0
                    },
                },
                'TVs': {
                    '418570': {
                        'cat': 'DLP TV,Under 40 Inch',
                        'name': 'DLP TV',
                        'subname': 'Under 40 Inch',
                        "size": 25,
                        "class": 'TV_DLP_UNDER_40',
                        "id": 418570,
                        "qty": 0
                    },
                    '418571': {
                        'cat': 'DLP TV,40 To 60 Inch',
                        'name': 'DLP TV',
                        'subname': '40 To 60 Inch',
                        "size": 35,
                        "class": 'TV_DLP_41-60',
                        "id": 418571,
                        "qty": 0
                    },
                    '418572': {
                        'cat': 'Flat Panel TV,Under 32 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Under 32 Inch',
                        "size": 10,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 418572,
                        "qty": 0
                    },
                    '418573': {
                        'cat': 'Flat Panel TV,32 To 45 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '32 To 45 Inch',
                        "size": 15,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 418573,
                        "qty": 0
                    },
                    '418574': {
                        'cat': 'Flat Panel TV,46 To 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '46 To 55 Inch',
                        "size": 20,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 418574,
                        "qty": 0
                    },
                    '418575': {
                        'cat': 'Flat Panel TV,Over 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Over 55 Inch',
                        "size": 25,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 418575,
                        "qty": 0
                    },
                    '418576': {
                        'cat': 'Tube TV,Under 20 Inch',
                        'name': 'Tube TV',
                        'subname': 'Under 20 Inch',
                        "size": 5,
                        "class": 'TV_TUBE_UNDER_20',
                        "id": 418576,
                        "qty": 0
                    },
                    '418577': {
                        'cat': 'Tube TV,21 To 27 Inch',
                        'name': 'Tube TV',
                        'subname': '21 To 27 Inch',
                        "size": 10,
                        "class": 'TV_TUBE_21-27',
                        "id": 418577,
                        "qty": 0
                    },
                    '418578': {
                        'cat': 'Tube TV,28 To 36 Inch',
                        'name': 'Tube TV',
                        'subname': '28 To 36 Inch',
                        "size": 20,
                        "class": 'TV_TUBE_28-36',
                        "id": 418578,
                        "qty": 0
                    },
                    "418579": {
                        'cat': 'TV Stand,approx 3 long',
                        'name': 'TV Stand',
                        'subname': 'approx 3\' long',
                        "size": 10,
                        "class": 'Small_TV_Stand',
                        "id": 418579,
                        "qty": 0
                    },
                    "418580": {
                        'cat': 'TV Stand,approx 4 long',
                        'name': 'TV Stand',
                        'subname': 'approx 4\' long',
                        "size": 15,
                        "class": 'Small_TV_Stand',
                        "id": 418580,
                        "qty": 0
                    },
                    "418581": {
                        'cat': 'TV Stand,6 or longer',
                        'name': 'TV Stand',
                        'subname': '6\' or longer',
                        "size": 20,
                        "class": 'Large_TV_Stand',
                        "id": 418581,
                        "qty": 0
                    }
                },
                'Stereo': {
                    "418582": {
                        'cat': 'Speaker,less than 1 tall',
                        'name': 'Speaker',
                        'subname': 'less than 1\' tall',
                        "size": 3,
                        "class": 'Shelf_Speaker',
                        "id": 418582,
                        "qty": 0
                    },
                    "418583": {
                        'cat': 'Speaker,1 - 2 tall',
                        'name': 'Speaker',
                        'subname': '1\' - 2\' tall',
                        "size": 5,
                        "class": 'Shelf_Speaker',
                        "id": 418583,
                        "qty": 0
                    },
                    "418584": {
                        'cat': 'Speaker,2 or taller',
                        'name': 'Speaker',
                        'subname': '2\' or taller',
                        "size": 8,
                        "class": 'Floor_Speakers',
                        "id": 418584,
                        "qty": 0
                    },
                    '418585': {
                        'cat': 'Stereo,Stereo Or Video Component',
                        'name': 'Stereo Or Video Component',
                        "size": 2,
                        "class": 'Stereo_or_Video_Component',
                        "id": 418585,
                        "qty": 0
                    }
                },
                'Cabinets': {
                    "418586": {
                        'cat': 'Armoire,approx 3 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 418586,
                        "qty": 0
                    },
                    "418587": {
                        'cat': 'Armoire,approx 4 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 418587,
                        "qty": 0
                    },
                    "418588": {
                        'cat': 'Armoire,approx 4 x 8',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 418588,
                        "qty": 0
                    },
                    "412098588": {
                        'cat': 'Bar',
                        'name': 'Bar',
                        "size": 20,
                        "class": 'Bar',
                        "id": 412098588,
                        "qty": 0
                    },
                    '418589': {
                        'cat': 'Cubby,3 ft',
                        'name': 'Cubby',
                        'subname': '3 ft',
                        "size": 3,
                        "class": 'Cubby_Small',
                        "id": 418589,
                        "qty": 0
                    },
                    '418590': {
                        'cat': 'Cubby,9 ft',
                        'name': 'Cubby',
                        'subname': '9 ft',
                        "size": 9,
                        "class": 'Cubby_Medium',
                        "id": 418590,
                        "qty": 0
                    },
                    '418591': {
                        'cat': 'Cubby,12 ft',
                        'name': 'Cubby',
                        'subname': '12 ft',
                        "size": 12,
                        "class": 'Cubby_Large',
                        "id": 418591,
                        "qty": 0
                    },
                    '418592': {
                        'cat': 'Cabinets,Display Case',
                        'name': 'Display Case',
                        "size": 19,
                        "class": 'Glass_Cabinet',
                        "id": 418592,
                        "qty": 0
                    },
                    "418593": {
                        'cat': 'Entertainment Center,approx 4 long',
                        'name': 'Entertainment Center',
                        'subname': 'approx 4\' long',
                        "size": 60,
                        "class": 'Entertainment_Center',
                        "id": 418593,
                        "qty": 0
                    },
                    "418594": {
                        'cat': 'Entertainment Center,approx 5 long',
                        'name': 'Entertainment Center',
                        'subname': 'approx 5\' long',
                        "size": 80,
                        "class": 'Entertainment_Center',
                        "id": 418594,
                        "qty": 0
                    },
                    "418595": {
                        'cat': 'Entertainment Center,6 or longer',
                        'name': 'Entertainment Center',
                        'subname': '6\' or longer',
                        "size": 120,
                        "class": 'Entertainment_Center',
                        "id": 418595,
                        "qty": 0
                    },
                    "418596": {
                        'cat': 'Glass Armoire,approx 3 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 418596,
                        "qty": 0
                    },
                    "418597": {
                        'cat': 'Glass Armoire,approx 4 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 418597,
                        "qty": 0
                    },
                    "418598": {
                        'cat': 'Glass Armoire,approx 4 x 8',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 418598,
                        "qty": 0
                    },
                    "418599": {
                        'cat': 'Glass Entertainment Center,approx 4 long',
                        'name': 'Glass Entertainment Center',
                        'subname': 'approx 4\' long',
                        "size": 60,
                        "class": 'Entertainment_Center',
                        "id": 418599,
                        "qty": 0
                    },
                    "418600": {
                        'cat': 'Glass Entertainment Center,approx 5 long',
                        'name': 'Glass Entertainment Center',
                        'subname': 'approx 5\' long',
                        "size": 80,
                        "class": 'Entertainment_Center',
                        "id": 418600,
                        "qty": 0
                    },
                    "418601": {
                        'cat': 'Glass Entertainment Center,6 or longer',
                        'name': 'Glass Entertainment Center',
                        'subname': '6\' or longer',
                        "size": 120,
                        "class": 'Entertainment_Center',
                        "id": 418601,
                        "qty": 0
                    },
                },
                'Lamps': {
                    "418602": {
                        'cat': 'Floor Lamp,less than 5 tall',
                        'name': 'Floor Lamp',
                        'subname': 'less than 5\' tall',
                        "size": 5,
                        "class": 'Floor_Lamp',
                        "id": 418602,
                        "qty": 0
                    },
                    "418603": {
                        'cat': 'Floor Lamp,approx 7 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 7\' tall',
                        "size": 10,
                        "class": 'Floor_Lamp',
                        "id": 418603,
                        "qty": 0
                    },
                    "418604": {
                        'cat': 'Floor Lamp,approx 9 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 9\' tall',
                        "size": 15,
                        "class": 'Floor_Lamp',
                        "id": 418604,
                        "qty": 0
                    },
                    "418605": {
                        'cat': 'Table Lamp,1 x 1 or smaller',
                        'name': 'Table Lamp',
                        'subname': '1\' x 1\' x 1\' or smaller',
                        "size": 3,
                        "class": 'Table_Lamp',
                        "id": 418605,
                        "qty": 0
                    },
                    "418606": {
                        'cat': 'Table Lamp,approx 2 x 2',
                        'name': 'Table Lamp',
                        'subname': 'approx 2\' x 2\' x 2\'',
                        "size": 4,
                        "class": 'Table_Lamp',
                        "id": 418606,
                        "qty": 0
                    },
                    "418607": {
                        'cat': 'Table Lamp,2.5 x 2.5 x 2.5 or larger',
                        'name': 'Table Lamp',
                        'subname': '2.5\' x 2.5\' x 2.5\' or larger',
                        "size": 5,
                        "class": 'Table_Lamp',
                        "id": 418607,
                        "qty": 0
                    },
                    '418608': {
                        'cat': 'Lamps,Tri-Head Lamp',
                        'name': 'Tri-Head Lamp',
                        "size": 27,
                        "class": 'Tri_Head_Lamp',
                        "id": 418608,
                        "qty": 0
                    }
                },
                'Bookcases': {
                    "418609": {
                        'cat': 'Bookcase,approx 3 x 3',
                        'name': 'Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 418609,
                        "qty": 0
                    },
                    "418610": {
                        'cat': 'Bookcase,approx 4 x 6',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 418610,
                        "qty": 0
                    },
                    "418611": {
                        'cat': 'Bookcase,approx 4 x 8',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 418611,
                        "qty": 0
                    },
                    "418612": {
                        'cat': 'Glass Front Bookcase,approx 3 x 3',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 418612,
                        "qty": 0
                    },
                    "418613": {
                        'cat': 'Glass Front Bookcase,approx 4 x 6',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 418613,
                        "qty": 0
                    },
                    "418614": {
                        'cat': 'Glass Front Bookcase,approx 4 x 8',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 418614,
                        "qty": 0
                    },
                },
                'Pianos': {
                    '418615': {
                        'cat': 'Pianos,Baby Grand Piano',
                        'name': 'Baby Grand Piano',
                        "size": 80,
                        "class": 'Baby_Grand_Piano',
                        "id": 418615,
                        "qty": 0
                    },
                    '418616': {
                        'cat': 'Pianos,Console Piano',
                        'name': 'Console Piano',
                        "size": 55,
                        "class": 'Console_Piano',
                        "id": 418616,
                        "qty": 0
                    },
                    '418617': {
                        'cat': 'Pianos,Grand Piano',
                        'name': 'Grand Piano',
                        "size": 90,
                        "class": 'Grand_Piano',
                        "id": 418617,
                        "qty": 0
                    },
                    '418618': {
                        'cat': 'Pianos,Piano Bench',
                        'name': 'Piano Bench',
                        "size": 7,
                        "class": 'Piano_Bench',
                        "id": 418618,
                        "qty": 0
                    },
                    '418619': {
                        'cat': 'Pianos,Spinet Piano',
                        'name': 'Spinet Piano',
                        "size": 50,
                        "class": 'Spinet_Piano',
                        "id": 418619,
                        "qty": 0
                    },
                    '418620': {
                        'cat': 'Pianos,Upright Piano',
                        'name': 'Upright Piano',
                        "size": 60,
                        "class": 'Upright_Piano',
                        "id": 418620,
                        "qty": 0
                    },
                },
                'Mirrors': {
                    "418621": {
                        'cat': 'Mirror,approx 2 x 3',
                        'name': 'Mirror',
                        'subname': 'approx 2\' x 3\'',
                        "size": 5,
                        "class": 'Small_Mirror',
                        "id": 418621,
                        "qty": 0
                    },
                    "418622": {
                        'cat': 'Mirror,approx 2.5 x 5',
                        'name': 'Mirror',
                        'subname': 'approx 2.5\' x 5\'',
                        "size": 8,
                        "class": 'Small_Mirror',
                        "id": 418622,
                        "qty": 0
                    },
                    "418623": {
                        'cat': 'Mirror,approx 4 x 8',
                        'name': 'Mirror',
                        'subname': 'approx 4\' x 8\'',
                        "size": 10,
                        "class": 'Large_Mirror',
                        "id": 418623,
                        "qty": 0
                    },
                },
                'Paintings & Pictures': {
                    "418624": {
                        'cat': 'Painting,approx 1.5 x 2',
                        'name': 'Painting',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Painting',
                        "id": 418624,
                        "qty": 0
                    },
                    "418625": {
                        'cat': 'Painting,approx 2.5 x 4',
                        'name': 'Painting',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Painting',
                        "id": 418625,
                        "qty": 0
                    },
                    "418626": {
                        'cat': 'Painting,approx 4 x 6',
                        'name': 'Painting',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Painting',
                        "id": 418626,
                        "qty": 0
                    },
                    "418627": {
                        'cat': 'Picture,approx 1.5 x 2',
                        'name': 'Picture',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Picture_with_Frame',
                        "id": 418627,
                        "qty": 0
                    },
                    "418628": {
                        'cat': 'Picture,approx 2.5 x 4',
                        'name': 'Picture',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Picture_with_Frame',
                        "id": 418628,
                        "qty": 0
                    },
                    "418629": {
                        'cat': 'Picture,approx 4 x 6',
                        'name': 'Picture',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Picture_with_Frame',
                        "id": 418629,
                        "qty": 0
                    },
                    '418630': {
                        'cat': 'Picture Crate',
                        'name': 'Picture Crate',
                        "size": 16,
                        "class": 'Picture_Crate',
                        "id": 418630,
                        "qty": 0
                    }
                },
                'Odds & Ends': {
                    '418631': {
                        'cat': 'CD Rack',
                        'name': 'CD Rack',
                        "size": 7,
                        "class": 'CD_Rack',
                        "id": 418631,
                        "qty": 0
                    },
                    '418632': {
                        'cat': 'Fan,Table',
                        'name': 'Fan',
                        'subname': 'Table',
                        "size": 3,
                        "class": 'Fan',
                        "id": 418632,
                        "qty": 0
                    },
                    '418633': {
                        'cat': 'Fan,Standing',
                        'name': 'Fan',
                        'subname': 'Standing',
                        "size": 12,
                        "class": 'Standing_Fan',
                        "id": 418633,
                        "qty": 0
                    },
                    '418634': {
                        'cat': 'Fireplace Equipment',
                        'name': 'Fireplace Equipment',
                        "size": 5,
                        "class": 'Fireplace_Equipment',
                        "id": 418634,
                        "qty": 0
                    },
                    '418635': {
                        'cat': 'Grandfather Clock',
                        'name': 'Grandfather Clock',
                        "size": 43,
                        "class": 'Grandfather_Clock',
                        "id": 418635,
                        "qty": 0
                    },
                    '418636': {
                        'cat': 'Rug,Runner',
                        'name': 'Rug',
                        'subname': 'Runner',
                        "size": 3,
                        "class": 'Runner_Rug',
                        "id": 418636,
                        "qty": 0
                    },
                    "418637": {
                        'cat': 'Rug,4 long rolled',
                        'name': 'Rug',
                        'subname': '4\' long rolled',
                        "size": 5,
                        "class": 'Small_rug',
                        "id": 418637,
                        "qty": 0
                    },
                    "418638": {
                        'cat': 'Rug,7 long rolled',
                        'name': 'Rug',
                        'subname': '7\' long rolled',
                        "size": 10,
                        "class": 'Medium_Rug',
                        "id": 418638,
                        "qty": 0
                    },
                    "418639": {
                        'cat': 'Rug,9 long rolled',
                        'name': 'Rug',
                        'subname': '9\' long rolled',
                        "size": 15,
                        "class": 'Large_Rug',
                        "id": 418639,
                        "qty": 0
                    }
                }
            },
            'Family Room': {
                'Packing Boxes': {
                    "67817888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 67817888,
                        "qty": 0
                    },
                    "67817889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 67817889,
                        "qty": 0
                    },
                    "67817890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 67817890,
                        "qty": 0
                    },
                    "67817891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 67817891,
                        "qty": 0
                    },
                    "67817892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 67817892,
                        "qty": 0
                    },
                    "67817893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 67817893,
                        "qty": 0
                    },
                    "67817894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 67817894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "617888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 617888,
                        "qty": 0
                    },
                    "617889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 617889,
                        "qty": 0
                    },
                    "617890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 617890,
                        "qty": 0
                    },
                    "617891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 617891,
                        "qty": 0
                    },
                    "617892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 617892,
                        "qty": 0
                    },
                    "617893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 617893,
                        "qty": 0
                    },
                    "617894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 617894,
                        "qty": 0
                    }
                },
                'Sofas and Couches': {
                    '618517': {
                        'cat': 'Futon Mattress,Single',
                        'name': 'Futon and Mattress',
                        'subname': 'Single',
                        "size": 30,
                        "class": 'Futon',
                        "id": 618517,
                        "qty": 0
                    },
                    '618518': {
                        'cat': 'Futon Mattress,Full',
                        'name': 'Futon and Mattress',
                        'subname': 'Full',
                        "size": 40,
                        "class": 'Futon',
                        "id": 618518,
                        "qty": 0
                    },
                    '618519': {
                        'cat': 'Futon Mattress,Queen',
                        'name': 'Futon and Mattress',
                        'subname': 'Queen',
                        "size": 50,
                        "class": 'Futon',
                        "id": 618519,
                        "qty": 0
                    },
                    '618520': {
                        'cat': 'Futon Mattress,King',
                        'name': 'Futon and Mattress',
                        'subname': 'King',
                        "size": 60,
                        "class": 'Futon',
                        "id": 618520,
                        "qty": 0
                    },
                    '618521': {
                        'cat': 'Ottoman,approx 18',
                        'name': 'Ottoman',
                        'subname': 'approx 18" x 18" x 18"',
                        "size": 5,
                        "class": 'Small_Ottoman',
                        "id": 618521,
                        "qty": 0
                    },
                    "618522": {
                        'cat': 'Ottoman,approx 2',
                        'name': 'Ottoman',
                        'subname': "approx 2' x 2' x 2'",
                        "size": 10,
                        "class": 'Medium_Ottoman',
                        "id": 618522,
                        "qty": 0
                    },
                    "618523": {
                        'cat': 'Ottoman,bigger than 2',
                        'name': 'Ottoman',
                        'subname': 'bigger than 2\' x 2\' x 2\'',
                        "size": 15,
                        "class": 'Large_Ottoman',
                        "id": 618523,
                        "qty": 0
                    },
                    '618524': {
                        'cat': 'Sofa,Loveseat',
                        'name': 'Sofa',
                        'subname': 'Loveseat',
                        "size": 35,
                        "class": 'Love_Seat',
                        "id": 618524,
                        "qty": 0
                    },
                    '618525': {
                        'cat': 'Sofa,3 Seater',
                        'name': 'Sofa',
                        'subname': '3 Seater',
                        "size": 60,
                        "class": 'Seater_Sofa_3',
                        "id": 618525,
                        "qty": 0
                    },
                    '618526': {
                        'cat': 'Sofa,4 Seater',
                        'name': 'Sofa',
                        'subname': '4 Seater',
                        "size": 70,
                        "class": 'Seater_Sofa_4',
                        "id": 618526,
                        "qty": 0
                    },
                    '618527': {
                        'cat': 'Sofa,4 Seater Sectional',
                        'name': 'Sofa',
                        'subname': '4 Seater Sectional',
                        "size": 80,
                        "class": 'Seater_Sofa_4',
                        "id": 618527,
                        "qty": 0
                    },
                    '618528': {
                        'cat': 'Sofa,8 Seater Sectional',
                        'name': 'Sofa',
                        'subname': '8 Seater Sectional',
                        "size": 123,
                        "class": 'Sofa_Large_Sectional',
                        "id": 618528,
                        "qty": 0
                    },
                    '618529': {
                        'cat': 'Sofa,Sofa Bed',
                        'name': 'Sofa',
                        "size": 60,
                        'subname': 'Sofa Bed',
                        "class": 'Sofa_Bed',
                        "id": 618529,
                        "qty": 0
                    }
                },
                'Chairs': {
                    '618530': {
                        'cat': 'Chairs,Arm Chair',
                        'name': 'Arm Chair',
                        "size": 12,
                        "class": 'Arm_Chair',
                        "id": 618530,
                        "qty": 0
                    },
                    '618531': {
                        'cat': 'Chairs,Bean Bag',
                        'name': 'Bean Bag',
                        "size": 7,
                        "class": 'Bean_Bag_Chair',
                        "id": 618531,
                        "qty": 0
                    },
                    '618532': {
                        'cat': 'Chairs,Chaise Lounge',
                        'name': 'Chaise Lounge',
                        "size": 30,
                        "class": 'Chaise_Lounge',
                        "id": 618532,
                        "qty": 0
                    },
                    '618533': {
                        'cat': 'Chairs,Club Chair',
                        'name': 'Club Chair',
                        "size": 20,
                        "class": 'Club_Chair',
                        "id": 618533,
                        "qty": 0
                    },
                    '618534': {
                        'cat': 'Chairs,Glider Chair',
                        'name': 'Glider Chair',
                        "size": 15,
                        "class": 'Glider_Chair',
                        "id": 618534,
                        "qty": 0
                    },
                    '618535': {
                        'cat': 'Chairs,Overstuffed Chair',
                        'name': 'Overstuffed Chair',
                        "size": 30,
                        "class": 'Overstuffed_Chair',
                        "id": 618535,
                        "qty": 0
                    },
                    '618536': {
                        'cat': 'Chairs,Papasan Chair',
                        'name': 'Papasan Chair',
                        "size": 25,
                        "class": 'Papason_Chair',
                        "id": 618536,
                        "qty": 0
                    },
                    '618537': {
                        'cat': 'Chairs,Recliner Chair',
                        'name': 'Recliner Chair',
                        "size": 25,
                        "class": 'Recliner_Chair',
                        "id": 618537,
                        "qty": 0
                    },
                    '618538': {
                        'cat': 'Chairs,Rocking Chair',
                        'name': 'Rocking Chair',
                        "size": 20,
                        "class": 'Rocking_Chair',
                        "id": 618538,
                        "qty": 0
                    }
                },
                'Tables': {
                    "618539": {
                        'cat': 'Coffee Table,approx 3',
                        'name': 'Coffee Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Small_Coffee_Table',
                        "id": 618539,
                        "qty": 0
                    },
                    "618540": {
                        'cat': 'Coffee Table,approx 4',
                        'name': 'Coffee Table',
                        'subname': 'approx 4\' x 2\'',
                        "size": 12,
                        "class": 'Small_Coffee_Table',
                        "id": 618540,
                        "qty": 0
                    },
                    "618541": {
                        'cat': 'Coffee Table,5or larger',
                        'name': 'Coffee Table',
                        'subname': '5\' x 3\' or larger',
                        "size": 15,
                        "class": 'Large_Coffee_Table',
                        "id": 618541,
                        "qty": 0
                    },
                    "618542": {
                        'cat': 'End Table,approx 1',
                        'name': 'End Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 618542,
                        "qty": 0
                    },
                    "618543": {
                        'cat': 'End Table,approx 2',
                        'name': 'End Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 618543,
                        "qty": 0
                    },
                    "618544": {
                        'cat': 'End Table,approx 3',
                        'name': 'End Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 618544,
                        "qty": 0
                    },
                    '618545': {
                        'cat': 'Tables,Foyer Table',
                        'name': 'Foyer Table',
                        "size": 22,
                        "class": 'Foyer_Table',
                        "id": 618545,
                        "qty": 0
                    },
                    '618546': {
                        'cat': 'Tables,Nesting Table',
                        'name': 'Nesting Table',
                        "size": 10,
                        "class": 'Nesting_Table',
                        "id": 618546,
                        "qty": 0
                    },
                    "618547": {
                        'cat': 'Side Table,approx 1',
                        'name': 'Side Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 5,
                        "class": 'Large_Side_Table',
                        "id": 618547,
                        "qty": 0
                    },
                    "618548": {
                        'cat': 'Side Table,approx 2',
                        'name': 'Side Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 8,
                        "class": 'Large_Side_Table',
                        "id": 618548,
                        "qty": 0
                    },
                    "618549": {
                        'cat': 'Side Table,approx 3',
                        'name': 'Side Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 618549,
                        "qty": 0
                    },
                    '618550': {
                        'cat': 'Tables,TV Dinner Folding Table',
                        'name': 'TV Dinner Folding Table',
                        "size": 6,
                        "class": 'TV_Dinner_Table',
                        "id": 618550,
                        "qty": 0
                    }
                },
                'Glass Tables': {
                    "618560": {
                        'cat': 'Glass Coffee Table,approx 3',
                        'name': 'Glass Coffee Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Small_Coffee_Table',
                        "id": 618560,
                        "qty": 0
                    },
                    "618561": {
                        'cat': 'Glass Coffee Table,approx 4',
                        'name': 'Glass Coffee Table',
                        'subname': 'approx 4\' x 2\'',
                        "size": 12,
                        "class": 'Small_Coffee_Table',
                        "id": 618561,
                        "qty": 0
                    },
                    "618562": {
                        'cat': 'Glass Coffee Table,5 or larger',
                        'name': 'Glass Coffee Table',
                        'subname': '5\' x 3\' or larger',
                        "size": 15,
                        "class": 'Large_Coffee_Table',
                        "id": 618562,
                        "qty": 0
                    },
                    "618563": {
                        'cat': 'Glass End Table,approx 1',
                        'name': 'Glass End Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 618563,
                        "qty": 0
                    },
                    "618564": {
                        'cat': 'Glass End Table,approx 2',
                        'name': 'Glass End Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 618564,
                        "qty": 0
                    },
                    "618565": {
                        'cat': 'Glass End Table,approx 3',
                        'name': 'Glass End Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 618565,
                        "qty": 0
                    },
                    '618566': {
                        'cat': 'Glass Tables,Glass Nesting Table',
                        'name': 'Glass Nesting Table',
                        "size": 10,
                        "class": 'Nesting_Table',
                        "id": 618566,
                        "qty": 0
                    },
                    "618567": {
                        'cat': 'Glass Side Table,approx 1',
                        'name': 'Glass Side Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 618567,
                        "qty": 0
                    },
                    "618568": {
                        'cat': 'Glass Side Table,approx 2',
                        'name': 'Glass Side Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 15,
                        "class": 'Large_Side_Table',
                        "id": 618568,
                        "qty": 0
                    },
                    "618569": {
                        'cat': 'Glass Side Table,approx 3',
                        'name': 'Glass Side Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 20,
                        "class": 'Large_Side_Table',
                        "id": 618569,
                        "qty": 0
                    },
                },
                'TVs': {
                    '618570': {
                        'cat': 'DLP TV,Under 40 Inch',
                        'name': 'DLP TV',
                        'subname': 'Under 40 Inch',
                        "size": 25,
                        "class": 'TV_DLP_UNDER_40',
                        "id": 618570,
                        "qty": 0
                    },
                    '618571': {
                        'cat': 'DLP TV,40 To 60 Inch',
                        'name': 'DLP TV',
                        'subname': '40 To 60 Inch',
                        "size": 35,
                        "class": 'TV_DLP_41-60',
                        "id": 618571,
                        "qty": 0
                    },
                    '618572': {
                        'cat': 'Flat Panel TV,Under 32 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Under 32 Inch',
                        "size": 10,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 618572,
                        "qty": 0
                    },
                    '618573': {
                        'cat': 'Flat Panel TV,32 To 45 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '32 To 45 Inch',
                        "size": 15,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 618573,
                        "qty": 0
                    },
                    '618574': {
                        'cat': 'Flat Panel TV,46 To 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '46 To 55 Inch',
                        "size": 20,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 618574,
                        "qty": 0
                    },
                    '618575': {
                        'cat': 'Flat Panel TV,Over 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Over 55 Inch',
                        "size": 25,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 618575,
                        "qty": 0
                    },
                    '618576': {
                        'cat': 'Tube TV,Under 20 Inch',
                        'name': 'Tube TV',
                        'subname': 'Under 20 Inch',
                        "size": 5,
                        "class": 'TV_TUBE_UNDER_20',
                        "id": 618576,
                        "qty": 0
                    },
                    '618577': {
                        'cat': 'Tube TV,21 To 27 Inch',
                        'name': 'Tube TV',
                        'subname': '21 To 27 Inch',
                        "size": 10,
                        "class": 'TV_TUBE_21-27',
                        "id": 618577,
                        "qty": 0
                    },
                    '618578': {
                        'cat': 'Tube TV,28 To 36 Inch',
                        'name': 'Tube TV',
                        'subname': '28 To 36 Inch',
                        "size": 20,
                        "class": 'TV_TUBE_28-36',
                        "id": 618578,
                        "qty": 0
                    },
                    "618579": {
                        'cat': 'TV Stand,approx 3 long',
                        'name': 'TV Stand',
                        'subname': 'approx 3\' long',
                        "size": 10,
                        "class": 'Small_TV_Stand',
                        "id": 618579,
                        "qty": 0
                    },
                    "618580": {
                        'cat': 'TV Stand,approx 4 long',
                        'name': 'TV Stand',
                        'subname': 'approx 4\' long',
                        "size": 15,
                        "class": 'Small_TV_Stand',
                        "id": 618580,
                        "qty": 0
                    },
                    "618581": {
                        'cat': 'TV Stand,6 or longer',
                        'name': 'TV Stand',
                        'subname': '6\' or longer',
                        "size": 20,
                        "class": 'Large_TV_Stand',
                        "id": 618581,
                        "qty": 0
                    }
                },
                'Stereo': {
                    "618582": {
                        'cat': 'Speaker,less than 1 tall',
                        'name': 'Speaker',
                        'subname': 'less than 1\' tall',
                        "size": 3,
                        "class": 'Shelf_Speaker',
                        "id": 618582,
                        "qty": 0
                    },
                    "618583": {
                        'cat': 'Speaker,1 - 2 tall',
                        'name': 'Speaker',
                        'subname': '1\' - 2\' tall',
                        "size": 5,
                        "class": 'Shelf_Speaker',
                        "id": 618583,
                        "qty": 0
                    },
                    "618584": {
                        'cat': 'Speaker,2 or taller',
                        'name': 'Speaker',
                        'subname': '2\' or taller',
                        "size": 8,
                        "class": 'Floor_Speakers',
                        "id": 618584,
                        "qty": 0
                    },
                    '618585': {
                        'cat': 'Stereo,Stereo Or Video Component',
                        'name': 'Stereo Or Video Component',
                        "size": 2,
                        "class": 'Stereo_or_Video_Component',
                        "id": 618585,
                        "qty": 0
                    }
                },
                'Cabinets': {
                    "618586": {
                        'cat': 'Armoire,approx 3 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 618586,
                        "qty": 0
                    },
                    "618587": {
                        'cat': 'Armoire,approx 4 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 618587,
                        "qty": 0
                    },
                    "618588": {
                        'cat': 'Armoire,approx 4 x 8',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 418588,
                        "qty": 0
                    },
                    '618589': {
                        'cat': 'Cubby,3 ft',
                        'name': 'Cubby',
                        'subname': '3 ft',
                        "size": 3,
                        "class": 'Cubby_Small',
                        "id": 618589,
                        "qty": 0
                    },
                    '618590': {
                        'cat': 'Cubby,9 ft',
                        'name': 'Cubby',
                        'subname': '9 ft',
                        "size": 9,
                        "class": 'Cubby_Medium',
                        "id": 618590,
                        "qty": 0
                    },
                    '618591': {
                        'cat': 'Cubby,12 ft',
                        'name': 'Cubby',
                        'subname': '12 ft',
                        "size": 12,
                        "class": 'Cubby_Large',
                        "id": 618591,
                        "qty": 0
                    },
                    '618592': {
                        'cat': 'Cabinets,Display Case',
                        'name': 'Display Case',
                        "size": 19,
                        "class": 'Glass_Cabinet',
                        "id": 618592,
                        "qty": 0
                    },
                    "618593": {
                        'cat': 'Entertainment Center,approx 4 long',
                        'name': 'Entertainment Center',
                        'subname': 'approx 4\' long',
                        "size": 60,
                        "class": 'Entertainment_Center',
                        "id": 618593,
                        "qty": 0
                    },
                    "618594": {
                        'cat': 'Entertainment Center,approx 5 long',
                        'name': 'Entertainment Center',
                        'subname': 'approx 5\' long',
                        "size": 80,
                        "class": 'Entertainment_Center',
                        "id": 618594,
                        "qty": 0
                    },
                    "618595": {
                        'cat': 'Entertainment Center,6 or longer',
                        'name': 'Entertainment Center',
                        'subname': '6\' or longer',
                        "size": 120,
                        "class": 'Entertainment_Center',
                        "id": 618595,
                        "qty": 0
                    },
                    "618596": {
                        'cat': 'Glass Armoire,approx 3 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 618596,
                        "qty": 0
                    },
                    "618597": {
                        'cat': 'Glass Armoire,approx 4 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 618597,
                        "qty": 0
                    },
                    "618598": {
                        'cat': 'Glass Armoire,approx 4 x 8',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 618598,
                        "qty": 0
                    },
                    "618599": {
                        'cat': 'Glass Entertainment Center,approx 4 long',
                        'name': 'Glass Entertainment Center',
                        'subname': 'approx 4\' long',
                        "size": 60,
                        "class": 'Entertainment_Center',
                        "id": 618599,
                        "qty": 0
                    },
                    "618600": {
                        'cat': 'Glass Entertainment Center,approx 5 long',
                        'name': 'Glass Entertainment Center',
                        'subname': 'approx 5\' long',
                        "size": 80,
                        "class": 'Entertainment_Center',
                        "id": 618600,
                        "qty": 0
                    },
                    "618601": {
                        'cat': 'Glass Entertainment Center,6 or longer',
                        'name': 'Glass Entertainment Center',
                        'subname': '6\' or longer',
                        "size": 120,
                        "class": 'Entertainment_Center',
                        "id": 618601,
                        "qty": 0
                    },
                },
                'Lamps': {
                    "618602": {
                        'cat': 'Floor Lamp,less than 5 tall',
                        'name': 'Floor Lamp',
                        'subname': 'less than 5\' tall',
                        "size": 5,
                        "class": 'Floor_Lamp',
                        "id": 618602,
                        "qty": 0
                    },
                    "618603": {
                        'cat': 'Floor Lamp,approx 7 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 7\' tall',
                        "size": 10,
                        "class": 'Floor_Lamp',
                        "id": 618603,
                        "qty": 0
                    },
                    "618604": {
                        'cat': 'Floor Lamp,approx 9 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 9\' tall',
                        "size": 15,
                        "class": 'Floor_Lamp',
                        "id": 618604,
                        "qty": 0
                    },
                    "618605": {
                        'cat': 'Table Lamp,1 x 1 or smaller',
                        'name': 'Table Lamp',
                        'subname': '1\' x 1\' x 1\' or smaller',
                        "size": 3,
                        "class": 'Table_Lamp',
                        "id": 618605,
                        "qty": 0
                    },
                    "618606": {
                        'cat': 'Table Lamp,approx 2 x 2',
                        'name': 'Table Lamp',
                        'subname': 'approx 2\' x 2\' x 2\'',
                        "size": 4,
                        "class": 'Table_Lamp',
                        "id": 618606,
                        "qty": 0
                    },
                    "618607": {
                        'cat': 'Table Lamp,2.5 x 2.5 x 2.5 or larger',
                        'name': 'Table Lamp',
                        'subname': '2.5\' x 2.5\' x 2.5\' or larger',
                        "size": 5,
                        "class": 'Table_Lamp',
                        "id": 618607,
                        "qty": 0
                    },
                    '618608': {
                        'cat': 'Lamps,Tri-Head Lamp',
                        'name': 'Tri-Head Lamp',
                        "size": 27,
                        "class": 'Tri_Head_Lamp',
                        "id": 618608,
                        "qty": 0
                    }
                },
                'Bookcases': {
                    "618609": {
                        'cat': 'Bookcase,approx 3 x 3',
                        'name': 'Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 618609,
                        "qty": 0
                    },
                    "618610": {
                        'cat': 'Bookcase,approx 4 x 6',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 618610,
                        "qty": 0
                    },
                    "618611": {
                        'cat': 'Bookcase,approx 4 x 8',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 618611,
                        "qty": 0
                    },
                    "618612": {
                        'cat': 'Glass Front Bookcase,approx 3 x 3',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 618612,
                        "qty": 0
                    },
                    "618613": {
                        'cat': 'Glass Front Bookcase,approx 4 x 6',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 618613,
                        "qty": 0
                    },
                    "618614": {
                        'cat': 'Glass Front Bookcase,approx 4 x 8',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 618614,
                        "qty": 0
                    },
                },
                'Pianos': {
                    '618615': {
                        'cat': 'Pianos,Baby Grand Piano',
                        'name': 'Baby Grand Piano',
                        "size": 80,
                        "class": 'Baby_Grand_Piano',
                        "id": 618615,
                        "qty": 0
                    },
                    '618616': {
                        'cat': 'Pianos,Console Piano',
                        'name': 'Console Piano',
                        "size": 55,
                        "class": 'Console_Piano',
                        "id": 618616,
                        "qty": 0
                    },
                    '618617': {
                        'cat': 'Pianos,Grand Piano',
                        'name': 'Grand Piano',
                        "size": 90,
                        "class": 'Grand_Piano',
                        "id": 618617,
                        "qty": 0
                    },
                    '618618': {
                        'cat': 'Pianos,Piano Bench',
                        'name': 'Piano Bench',
                        "size": 7,
                        "class": 'Piano_Bench',
                        "id": 618618,
                        "qty": 0
                    },
                    '618619': {
                        'cat': 'Pianos,Spinet Piano',
                        'name': 'Spinet Piano',
                        "size": 50,
                        "class": 'Spinet_Piano',
                        "id": 618619,
                        "qty": 0
                    },
                    '618620': {
                        'cat': 'Pianos,Upright Piano',
                        'name': 'Upright Piano',
                        "size": 60,
                        "class": 'Upright_Piano',
                        "id": 618620,
                        "qty": 0
                    },
                },
                'Mirrors': {
                    "618621": {
                        'cat': 'Mirror,approx 2 x 3',
                        'name': 'Mirror',
                        'subname': 'approx 2\' x 3\'',
                        "size": 5,
                        "class": 'Small_Mirror',
                        "id": 618621,
                        "qty": 0
                    },
                    "618622": {
                        'cat': 'Mirror,approx 2.5 x 5',
                        'name': 'Mirror',
                        'subname': 'approx 2.5\' x 5\'',
                        "size": 8,
                        "class": 'Small_Mirror',
                        "id": 618622,
                        "qty": 0
                    },
                    "618623": {
                        'cat': 'Mirror,approx 4 x 8',
                        'name': 'Mirror',
                        'subname': 'approx 4\' x 8\'',
                        "size": 10,
                        "class": 'Large_Mirror',
                        "id": 618623,
                        "qty": 0
                    },
                },
                'Paintings & Pictures': {
                    "618624": {
                        'cat': 'Painting,approx 1.5 x 2',
                        'name': 'Painting',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Painting',
                        "id": 618624,
                        "qty": 0
                    },
                    "618625": {
                        'cat': 'Painting,approx 2.5 x 4',
                        'name': 'Painting',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Painting',
                        "id": 618625,
                        "qty": 0
                    },
                    "618626": {
                        'cat': 'Painting,approx 4 x 6',
                        'name': 'Painting',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Painting',
                        "id": 618626,
                        "qty": 0
                    },
                    "618627": {
                        'cat': 'Picture,approx 1.5 x 2',
                        'name': 'Picture',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Picture_with_Frame',
                        "id": 618627,
                        "qty": 0
                    },
                    "618628": {
                        'cat': 'Picture,approx 2.5 x 4',
                        'name': 'Picture',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Picture_with_Frame',
                        "id": 618628,
                        "qty": 0
                    },
                    "618629": {
                        'cat': 'Picture,approx 4 x 6',
                        'name': 'Picture',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Picture_with_Frame',
                        "id": 618629,
                        "qty": 0
                    },
                    '618630': {
                        'cat': 'Picture Crate',
                        'name': 'Picture Crate',
                        "size": 16,
                        "class": 'Picture_Crate',
                        "id": 618630,
                        "qty": 0
                    }
                },
                'Odds & Ends': {
                    '618631': {
                        'cat': 'CD Rack',
                        'name': 'CD Rack',
                        "size": 7,
                        "class": 'CD_Rack',
                        "id": 618631,
                        "qty": 0
                    },
                    '618632': {
                        'cat': 'Fan,Table',
                        'name': 'Fan',
                        'subname': 'Table',
                        "size": 3,
                        "class": 'Fan',
                        "id": 618632,
                        "qty": 0
                    },
                    '618633': {
                        'cat': 'Fan,Standing',
                        'name': 'Fan',
                        'subname': 'Standing',
                        "size": 12,
                        "class": 'Standing_Fan',
                        "id": 618633,
                        "qty": 0
                    },
                    '618634': {
                        'cat': 'Fireplace Equipment',
                        'name': 'Fireplace Equipment',
                        "size": 5,
                        "class": 'Fireplace_Equipment',
                        "id": 618634,
                        "qty": 0
                    },
                    '618635': {
                        'cat': 'Grandfather Clock',
                        'name': 'Grandfather Clock',
                        "size": 43,
                        "class": 'Grandfather_Clock',
                        "id": 618635,
                        "qty": 0
                    },
                    '618636': {
                        'cat': 'Rug,Runner',
                        'name': 'Rug',
                        'subname': 'Runner',
                        "size": 3,
                        "class": 'Runner_Rug',
                        "id": 618636,
                        "qty": 0
                    },
                    "618637": {
                        'cat': 'Rug,4 long rolled',
                        'name': 'Rug',
                        'subname': '4\' long rolled',
                        "size": 5,
                        "class": 'Small_rug',
                        "id": 618637,
                        "qty": 0
                    },
                    "618638": {
                        'cat': 'Rug,7 long rolled',
                        'name': 'Rug',
                        'subname': '7\' long rolled',
                        "size": 10,
                        "class": 'Medium_Rug',
                        "id": 618638,
                        "qty": 0
                    },
                    "618639": {
                        'cat': 'Rug,9 long rolled',
                        'name': 'Rug',
                        'subname': '9\' long rolled',
                        "size": 15,
                        "class": 'Large_Rug',
                        "id": 618639,
                        "qty": 0
                    }
                }
            },
            'Master Bedroom': {
                'Packing Boxes': {
                    "117888": {
                        'pack': true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 117888,
                        "qty": 0
                    },
                    "117889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 117889,
                        "qty": 0
                    },
                    "117890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 117890,
                        "qty": 0
                    },
                    "117891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 117891,
                        "qty": 0
                    },
                    "117892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 117892,
                        "qty": 0
                    },
                    "117893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 117893,
                        "qty": 0
                    },
                    "117894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 117894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "217888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 217888,
                        "qty": 0
                    },
                    "217889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 217889,
                        "qty": 0
                    },
                    "217890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 217890,
                        "qty": 0
                    },
                    "217891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 217891,
                        "qty": 0
                    },
                    "217892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 217892,
                        "qty": 0
                    },
                    "217893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 217893,
                        "qty": 0
                    },
                    "217894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 217894,
                        "qty": 0
                    }
                },
                'Beds': {
                    '418640': {
                        'cat': 'Beds,Captains Bed',
                        'name': 'Captains Bed',
                        "size": 40,
                        "class": 'Captains_Bed',
                        "id": 418640,
                        "qty": 0
                    },
                    '418641': {
                        'cat': 'Beds,Daybed',
                        'name': 'Daybed',
                        "size": 50,
                        "class": 'Daybed',
                        "id": 418641,
                        "qty": 0
                    },
                    '418642': {
                        'cat': 'Beds,Folding Cots',
                        'name': 'Folding Cots',
                        "size": 6,
                        "class": 'Folding_Cots',
                        "id": 418642,
                        "qty": 0
                    },
                    '418643': {
                        'cat': 'Beds,Footboard',
                        'name': 'Footboard',
                        "size": 8,
                        "class": 'Footboard_1',
                        "id": 418643,
                        "qty": 0
                    },
                    '418644': {
                        'cat': 'Beds,Headboard',
                        'name': 'Headboard',
                        "size": 8,
                        "class": 'Headboard_1',
                        "id": 418644,
                        "qty": 0
                    },
                    '418645': {
                        'cat': 'Mattress and Box Spring,Single',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Single',
                        "size": 40,
                        "class": 'Box_Matress',
                        "id": 418645,
                        "qty": 0
                    },
                    '418646': {
                        'cat': 'Mattress and Box Spring,Full',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Full',
                        "size": 50,
                        "class": 'Box_Matress',
                        "id": 418646,
                        "qty": 0
                    },
                    '418647': {
                        'cat': 'Mattress and Box Spring,Queen',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Queen',
                        "size": 60,
                        "class": 'Box_Matress',
                        "id": 418647,
                        "qty": 0
                    },
                    '418648': {
                        'cat': 'Mattress and Box Spring,King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'King',
                        "size": 70,
                        "class": 'Box_Matress',
                        "id": 418648,
                        "qty": 0
                    },
                    '418649': {
                        'cat': 'Mattress and Box Spring,California King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'California King',
                        "size": 80,
                        "class": 'Box_Matress',
                        "id": 418649,
                        "qty": 0
                    },
                    '418650': {
                        'cat': 'Metal Bed Frame,Collapsible',
                        'name': 'Metal Bed Frame',
                        'subname': 'Collapsible',
                        "size": 8,
                        "class": 'Collapsable_Metal_bed',
                        "id": 418650,
                        "qty": 0
                    },
                    '418651': {
                        'cat': 'Beds,Murphy Bed',
                        'name': 'Murphy Bed',
                        "size": 120,
                        "class": 'Murphy_Bed',
                        "id": 418651,
                        "qty": 0
                    },
                    '418652': {
                        'cat': 'Beds,Trundle',
                        'name': 'Trundle',
                        "size": 50,
                        "class": 'Trundle_Bed',
                        "id": 418652,
                        "qty": 0
                    },
                    '418653': {
                        'cat': 'Beds,Wood Bed Frame',
                        'name': 'Wood Bed Frame',
                        "size": 30,
                        "class": 'Wood_Bed_Frame',
                        "id": 418653,
                        "qty": 0
                    },
                },
                'Mattress Only': {
                    '418654': {
                        'cat': 'Futon Mattress,Single',
                        'name': 'Futon Mattress',
                        'subname': 'Single',
                        "size": 15,
                        "class": 'California_King_Mattress',
                        "id": 418654,
                        "qty": 0
                    },
                    '418655': {
                        'cat': 'Futon Mattress,Full',
                        'name': 'Futon Mattress',
                        'subname': 'Full',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 418655,
                        "qty": 0
                    },
                    '418656': {
                        'cat': 'Futon Mattress,Queen',
                        'name': 'Futon Mattress',
                        'subname': 'Queen',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 418656,
                        "qty": 0
                    },
                    '418657': {
                        'cat': 'Futon Mattress,King',
                        'name': 'Futon Mattress',
                        'subname': 'King',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 418657,
                        "qty": 0
                    },
                    '418658': {
                        'cat': 'Mattress,Single',
                        'name': 'Mattress',
                        'subname': 'Single "size"',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 418658,
                        "qty": 0
                    },
                    '418659': {
                        'cat': 'Mattress,Full',
                        'name': 'Mattress',
                        'subname': 'Full "size"',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 418659,
                        "qty": 0
                    },
                    '418660': {
                        'cat': 'Mattress,Queen',
                        'name': 'Mattress',
                        'subname': 'Queen "size"',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 418660,
                        "qty": 0
                    },
                    '418661': {
                        'cat': 'Mattress,King',
                        'name': 'Mattress',
                        'subname': 'King "size"',
                        "size": 35,
                        "class": 'California_King_Mattress',
                        "id": 418661,
                        "qty": 0
                    },
                    '418662': {
                        'cat': 'Mattress,California King',
                        'name': 'Mattress',
                        'subname': 'California King',
                        "size": 40,
                        "class": 'California_King_Mattress',
                        "id": 418662,
                        "qty": 0
                    },
                },
                'Cabinets': {
                    "418663": {
                        'cat': 'Armoire,approx 3 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 418663,
                        "qty": 0
                    },
                    "418664": {
                        'cat': 'Armoire,approx 4 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 418664,
                        "qty": 0
                    },
                    "418665": {
                        'cat': 'Armoire,approx 4 x 8',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 418665,
                        "qty": 0
                    },
                    "418666": {
                        'cat': 'Dresser,approx 2 x 4',
                        'name': 'Dresser',
                        'subname': 'approx 2\' x 4\'',
                        "size": 20,
                        "class": 'Small_Dresser',
                        "id": 418666,
                        "qty": 0
                    },
                    "418667": {
                        'cat': 'Dresser,approx 3 x 5',
                        'name': 'Dresser',
                        'subname': 'approx 3\' x 5\'',
                        "size": 30,
                        "class": 'Medium_Dresser',
                        "id": 418667,
                        "qty": 0
                    },
                    "418668": {
                        'cat': 'Dresser,approx 5 x 5',
                        'name': 'Dresser',
                        'subname': 'approx 5\' x 5\'',
                        "size": 45,
                        "class": 'Large_Dresser',
                        "id": 418668,
                        "qty": 0
                    },
                    "418669": {
                        'cat': 'Glass Armoire,approx 3 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 418669,
                        "qty": 0
                    },
                    "418670": {
                        'cat': 'Glass Armoire,approx 4 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 418670,
                        "qty": 0
                    },
                    "418671": {
                        'cat': 'Glass Armoire,approx 4 x 8',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 418671,
                        "qty": 0
                    },
                    '418672': {
                        'cat': 'Cabinets,Lingerie Chest',
                        'name': 'Lingerie Chest',
                        "size": 10,
                        "class": 'Lingerie_Chest',
                        "id": 418672,
                        "qty": 0
                    },
                    '418673': {
                        'cat': 'Cabinets,Vanity',
                        'name': 'Vanity',
                        "size": 15,
                        "class": 'Vanity',
                        "id": 418673,
                        "qty": 0
                    },
                    '418674': {
                        'cat': 'Cabinets,Wardrobe Closet',
                        'name': 'Wardrobe Closet',
                        "size": 60,
                        "class": 'Wardrobe_Closet',
                        "id": 418674,
                        "qty": 0
                    },
                    '418675': {
                        'cat': 'Cabinets,Wardrobe Closet with Mirrors',
                        'name': 'Wardrobe Closet with Mirrors',
                        "size": 60,
                        "class": 'Wardrobe_Closet_Mirrors',
                        "id": 418675,
                        "qty": 0
                    },
                },
                'TVs': {
                    '418676': {
                        'cat': 'DLP TV,Under 40 Inch',
                        'name': 'DLP TV',
                        'subname': 'Under 40 Inch',
                        "size": 25,
                        "class": 'TV_DLP_UNDER_40',
                        "id": 418676,
                        "qty": 0
                    },
                    '418677': {
                        'cat': 'DLP TV,40 To 60 Inch',
                        'name': 'DLP TV',
                        'subname': '40 To 60 Inch',
                        "size": 35,
                        "class": 'TV_DLP_41-60',
                        "id": 418677,
                        "qty": 0
                    },
                    '418678': {
                        'cat': 'Flat Panel TV,Under 32 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Under 32 Inch',
                        "size": 10,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 418678,
                        "qty": 0
                    },
                    '418679': {
                        'cat': 'Flat Panel TV,32 To 45 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '32 To 45 Inch',
                        "size": 15,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 418679,
                        "qty": 0
                    },
                    '418680': {
                        'cat': 'Flat Panel TV,46 To 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '46 To 55 Inch',
                        "size": 20,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 418680,
                        "qty": 0
                    },
                    '418681': {
                        'cat': 'Flat Panel TV,Over 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Over 55 Inch',
                        "size": 25,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 418681,
                        "qty": 0
                    },
                    '418682': {
                        'cat': 'Tube TV,Under 20 Inch',
                        'name': 'Tube TV',
                        'subname': 'Under 20 Inch',
                        "size": 5,
                        "class": 'TV_TUBE_UNDER_20',
                        "id": 418682,
                        "qty": 0
                    },
                    '418683': {
                        'cat': 'Tube TV,21 To 27 Inch',
                        'name': 'Tube TV',
                        'subname': '21 To 27 Inch',
                        "size": 10,
                        "class": 'TV_TUBE_21-27',
                        "id": 418683,
                        "qty": 0
                    },
                    '418684': {
                        'cat': 'Tube TV,28 To 36 Inch',
                        'name': 'Tube TV',
                        'subname': '28 To 36 Inch',
                        "size": 20,
                        "class": 'TV_TUBE_28-36',
                        "id": 418684,
                        "qty": 0
                    },
                    "418685": {
                        'cat': 'TV Stand,approx 3 long',
                        'name': 'TV Stand',
                        'subname': 'approx 3\' long',
                        "size": 10,
                        "class": 'Small_TV_Stand',
                        "id": 418685,
                        "qty": 0
                    },
                    "418686": {
                        'cat': 'TV Stand,approx 4 long',
                        'name': 'TV Stand',
                        'subname': 'approx 4\' long',
                        "size": 15,
                        "class": 'Small_TV_Stand',
                        "id": 418686,
                        "qty": 0
                    },
                    "418687": {
                        'cat': 'TV Stand,6 or longer',
                        'name': 'TV Stand',
                        'subname': '6\' or longer',
                        "size": 20,
                        "class": 'Large_TV_Stand',
                        "id": 418687,
                        "qty": 0
                    }
                },
                'Stereo': {
                    "418688": {
                        'cat': 'Speaker,less than 1 tall',
                        'name': 'Speaker',
                        'subname': 'less than 1\' tall',
                        "size": 3,
                        "class": 'Shelf_Speaker',
                        "id": 418688,
                        "qty": 0
                    },
                    "418689": {
                        'cat': 'Speaker,1 - 2 tall',
                        'name': 'Speaker',
                        'subname': '1\' - 2\' tall',
                        "size": 5,
                        "class": 'Shelf_Speaker',
                        "id": 418689,
                        "qty": 0
                    },
                    "418690": {
                        'cat': 'Speaker,2 or taller',
                        'name': 'Speaker',
                        'subname': '2\' or taller',
                        "size": 8,
                        "class": 'Floor_Speakers',
                        "id": 418690,
                        "qty": 0
                    },
                    '418691': {
                        'cat': 'Stereo,Stereo Or Video Component',
                        'name': 'Stereo Or Video Component',
                        "size": 2,
                        "class": 'Stereo_or_Video_Component',
                        "id": 418691,
                        "qty": 0
                    }
                },
                'Lamps': {
                    "418692": {
                        'cat': 'Floor Lamp,less than 5 tall',
                        'name': 'Floor Lamp',
                        'subname': 'less than 5\' tall',
                        "size": 5,
                        "class": 'Floor_Lamp',
                        "id": 418692,
                        "qty": 0
                    },
                    "418693": {
                        'cat': 'Floor Lamp,approx 7 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 7\' tall',
                        "size": 10,
                        "class": 'Floor_Lamp',
                        "id": 418693,
                        "qty": 0
                    },
                    "418694": {
                        'cat': 'Floor Lamp,approx 9 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 9\' tall',
                        "size": 15,
                        "class": 'Floor_Lamp',
                        "id": 418694,
                        "qty": 0
                    },
                    "418695": {
                        'cat': 'Table Lamp,1 x 1 or smaller',
                        'name': 'Table Lamp',
                        'subname': '1\' x 1\' x 1\' or smaller',
                        "size": 3,
                        "class": 'Table_Lamp',
                        "id": 418695,
                        "qty": 0
                    },
                    "418696": {
                        'cat': 'Table Lamp,approx 2 x 2',
                        'name': 'Table Lamp',
                        'subname': 'approx 2\' x 2\' x 2\'',
                        "size": 4,
                        "class": 'Table_Lamp',
                        "id": 418696,
                        "qty": 0
                    },
                    "418697": {
                        'cat': 'Table Lamp,2.5 x 2.5 x 2.5 or larger',
                        'name': 'Table Lamp',
                        'subname': '2.5\' x 2.5\' x 2.5\' or larger',
                        "size": 5,
                        "class": 'Table_Lamp',
                        "id": 418697,
                        "qty": 0
                    },
                    '418698': {
                        'cat': 'Lamps,Tri-Head Lamp',
                        'name': 'Tri-Head Lamp',
                        "size": 27,
                        "class": 'Tri_Head_Lamp',
                        "id": 418698,
                        "qty": 0
                    }
                },
                'Tables': {
                    "418699": {
                        'cat': 'End Table,approx 1',
                        'name': 'End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 418699,
                        "qty": 0
                    },
                    "418700": {
                        'cat': 'End Table,approx 2',
                        'name': 'End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 418700,
                        "qty": 0
                    },
                    "418701": {
                        'cat': 'End Table,approx 3',
                        'name': 'End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 418701,
                        "qty": 0
                    },
                    "418702": {
                        'cat': 'Glass End Table,approx 1',
                        'name': 'Glass End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 418702,
                        "qty": 0
                    },
                    "418703": {
                        'cat': 'Glass End Table,approx 2',
                        'name': 'Glass End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 418703,
                        "qty": 0
                    },
                    "418704": {
                        'cat': 'Glass End Table,approx 3',
                        'name': 'Glass End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 418704,
                        "qty": 0
                    },
                    "418705": {
                        'cat': 'Glass Side Table,approx 1',
                        'name': 'Glass Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 418705,
                        "qty": 0
                    },
                    "418706": {
                        'cat': 'Glass Side Table,approx 2',
                        'name': 'Glass Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 15,
                        "class": 'Large_Side_Table',
                        "id": 418706,
                        "qty": 0
                    },
                    "418707": {
                        'cat': 'Glass Side Table,approx 3',
                        'name': 'Glass Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 20,
                        "class": 'Large_Side_Table',
                        "id": 418707,
                        "qty": 0
                    },
                    '418708': {
                        'cat': 'Tables,Night Table',
                        'name': 'Night Table',
                        "size": 5,
                        "class": 'Night_Table',
                        "id": 418708,
                        "qty": 0
                    },
                    '418709': {
                        'cat': 'Tables,Nightstand',
                        'name': 'Nightstand',
                        "size": 13,
                        "class": 'Nightstand',
                        "id": 418709,
                        "qty": 0
                    },
                    "418710": {
                        'cat': 'Side Table,approx 1',
                        'name': 'Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'Large_Side_Table',
                        "id": 418710,
                        "qty": 0
                    },
                    "418711": {
                        'cat': 'Side Table,approx 2',
                        'name': 'Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'Large_Side_Table',
                        "id": 418711,
                        "qty": 0
                    },
                    "418712": {
                        'cat': 'Side Table,approx 3',
                        'name': 'Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 418712,
                        "qty": 0
                    },
                },
                'Chairs': {
                    '418713': {
                        'cat': 'Chairs,Arm Chair',
                        'name': 'Arm Chair',
                        "size": 12,
                        "class": 'Arm_Chair',
                        "id": 418713,
                        "qty": 0
                    },
                    '418714': {
                        'cat': 'Chairs,Club Chair',
                        'name': 'Club Chair',
                        "size": 20,
                        "class": 'Club_Chair',
                        "id": 418714,
                        "qty": 0
                    },
                },
                'Mirrors': {
                    "418715": {
                        'cat': 'Mirror,approx 2 x 3',
                        'name': 'Mirror',
                        'subname': 'approx 2\' x 3\'',
                        "size": 5,
                        "class": 'Small_Mirror',
                        "id": 418715,
                        "qty": 0
                    },
                    "418716": {
                        'cat': 'Mirror,approx 2.5 x 5',
                        'name': 'Mirror',
                        'subname': 'approx 2.5\' x 5\'',
                        "size": 8,
                        "class": 'Small_Mirror',
                        "id": 418716,
                        "qty": 0
                    },
                    "418717": {
                        'cat': 'Mirror,approx 4 x 8',
                        'name': 'Mirror',
                        'subname': 'approx 4\' x 8\'',
                        "size": 10,
                        "class": 'Large_Mirror',
                        "id": 418717,
                        "qty": 0
                    },
                },
                'Bookcases': {
                    "418718": {
                        'cat': 'Bookcase,approx 3 x 3',
                        'name': 'Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 418718,
                        "qty": 0
                    },
                    "418719": {
                        'cat': 'Bookcase,approx 4 x 6',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 418719,
                        "qty": 0
                    },
                    "418720": {
                        'cat': 'Bookcase,approx 4 x 8',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 418720,
                        "qty": 0
                    },
                    "418721": {
                        'cat': 'Glass Front Bookcase,approx 3 x 3',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 418721,
                        "qty": 0
                    },
                    "418722": {
                        'cat': 'Glass Front Bookcase,approx 4 x 6',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 418722,
                        "qty": 0
                    },
                    "418723": {
                        'cat': 'Glass Front Bookcase,approx 4 x 8',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 418723,
                        "qty": 0
                    },
                },
                'Paintings & Pictures': {
                    "418724": {
                        'cat': 'Painting,approx 1.5 x 2',
                        'name': 'Painting',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Painting',
                        "id": 418724,
                        "qty": 0
                    },
                    "418725": {
                        'cat': 'Painting,approx 2.5 x 4',
                        'name': 'Painting',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Painting',
                        "id": 418725,
                        "qty": 0
                    },
                    "418726": {
                        'cat': 'Painting,approx 4 x 6',
                        'name': 'Painting',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Painting',
                        "id": 418726,
                        "qty": 0
                    },
                    "418727": {
                        'cat': 'Picture,approx 1.5 x 2',
                        'name': 'Picture',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Picture_with_Frame',
                        "id": 418727,
                        "qty": 0
                    },
                    "418728": {
                        'cat': 'Picture,approx 2.5 x 4',
                        'name': 'Picture',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Picture_with_Frame',
                        "id": 418728,
                        "qty": 0
                    },
                    "418729": {
                        'cat': 'Picture,approx 4 x 6',
                        'name': 'Picture',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Picture_with_Frame',
                        "id": 418729,
                        "qty": 0
                    },
                    '418730': {
                        'cat': 'Picture Crate',
                        'name': 'Picture Crate',
                        "size": 16,
                        "class": 'Picture_Crate',
                        "id": 418730,
                        "qty": 0
                    }
                },
                'Odds & Ends': {
                    '418731': {
                        'cat': 'CD Rack',
                        'name': 'CD Rack',
                        "size": 7,
                        "class": 'CD_Rack',
                        "id": 418731,
                        "qty": 0
                    },
                    '418732': {
                        'cat': 'Clothes Steamer',
                        'name': 'Clothes Steamer',
                        "size": 3,
                        "class": 'Clothes_Steamer',
                        "id": 418732,
                        "qty": 0
                    },
                    '418733': {
                        'cat': 'Clothing Rack',
                        'name': 'Clothing Rack',
                        "size": 15,
                        "class": 'Clothes_Rack',
                        "id": 418733,
                        "qty": 0
                    },
                    '418734': {
                        'cat': 'Fan,Table',
                        'name': 'Fan',
                        'subname': 'Table',
                        "size": 3,
                        "class": 'Fan',
                        "id": 418734,
                        "qty": 0
                    },
                    '418735': {
                        'cat': 'Fan,Standing',
                        'name': 'Fan',
                        'subname': 'Standing',
                        "size": 12,
                        "class": 'Standing_Fan',
                        "id": 418735,
                        "qty": 0
                    },
                    '418736': {
                        'cat': 'Garbage Pail',
                        'name': 'Garbage Pail',
                        "size": 3,
                        "class": 'Garbage_Pail',
                        "id": 418736,
                        "qty": 0
                    },
                    '418737': {
                        'cat': 'Hamper',
                        'name': 'Hamper',
                        "size": 5,
                        "class": 'Hamper',
                        "id": 418737,
                        "qty": 0
                    },
                    '418738': {
                        'cat': 'Rug,Runner',
                        'name': 'Rug',
                        'subname': 'Runner',
                        "size": 3,
                        "class": 'Runner_Rug',
                        "id": 418738,
                        "qty": 0
                    },
                    "418739": {
                        'cat': 'Rug,4 long rolled',
                        'name': 'Rug',
                        'subname': '4\' long rolled',
                        "size": 5,
                        "class": 'Small_rug',
                        "id": 418739,
                        "qty": 0
                    },
                    "418740": {
                        'cat': 'Rug,7 long rolled',
                        'name': 'Rug',
                        'subname': '7\' long rolled',
                        "size": 10,
                        "class": 'Medium_Rug',
                        "id": 418740,
                        "qty": 0
                    },
                    "418741": {
                        'cat': 'Rug,9 long rolled',
                        'name': 'Rug',
                        'subname': '9\' long rolled',
                        "size": 15,
                        "class": 'Large_Rug',
                        "id": 418741,
                        "qty": 0
                    },
                    '418742': {
                        'cat': 'Shoe Rack',
                        'name': 'Shoe Rack',
                        "size": 10,
                        "class": 'Shoe_Rack',
                        "id": 418742,
                        "qty": 0
                    },
                    '418743': {
                        'cat': 'Suitcase',
                        'name': 'Suitcase',
                        "size": 5,
                        "class": 'Suitcase',
                        "id": 418743,
                        "qty": 0
                    }
                }
            },
            'Bedroom 2': {
                'Packing Boxes': {
                    "11721888": {
                        'pack': true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 11721888,
                        "qty": 0
                    },
                    "11721889": {
                        'pack': true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 11721889,
                        "qty": 0
                    },
                    "11721890": {
                        'pack': true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 11721890,
                        "qty": 0
                    },
                    "11721891": {
                        'pack': true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 11721891,
                        "qty": 0
                    },
                    "11721892": {
                        'pack': true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 11721892,
                        "qty": 0
                    },
                    "11721893": {
                        'pack': true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 11721893,
                        "qty": 0
                    },
                    "11721894": {
                        'pack': true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 11721894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "21745888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 21745888,
                        "qty": 0
                    },
                    "21745889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 21745889,
                        "qty": 0
                    },
                    "21745890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 21745890,
                        "qty": 0
                    },
                    "21745891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 21745891,
                        "qty": 0
                    },
                    "21745892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 21745892,
                        "qty": 0
                    },
                    "21745893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 21745893,
                        "qty": 0
                    },
                    "21745894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 21745894,
                        "qty": 0
                    }
                },
                'Beds': {
                    '41845640': {
                        'cat': 'Beds,Captains Bed',
                        'name': 'Captains Bed',
                        "size": 40,
                        "class": 'Captains_Bed',
                        "id": 41845640,
                        "qty": 0
                    },
                    '41845641': {
                        'cat': 'Beds,Daybed',
                        'name': 'Daybed',
                        "size": 50,
                        "class": 'Daybed',
                        "id": 41845641,
                        "qty": 0
                    },
                    '41845642': {
                        'cat': 'Beds,Folding Cots',
                        'name': 'Folding Cots',
                        "size": 6,
                        "class": 'Folding_Cots',
                        "id": 41845642,
                        "qty": 0
                    },
                    '41845643': {
                        'cat': 'Beds,Footboard',
                        'name': 'Footboard',
                        "size": 8,
                        "class": 'Footboard_1',
                        "id": 41845643,
                        "qty": 0
                    },
                    '41845644': {
                        'cat': 'Beds,Headboard',
                        'name': 'Headboard',
                        "size": 8,
                        "class": 'Headboard_1',
                        "id": 41845644,
                        "qty": 0
                    },
                    '41845645': {
                        'cat': 'Mattress and Box Spring,Single',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Single',
                        "size": 40,
                        "class": 'Box_Matress',
                        "id": 41845645,
                        "qty": 0
                    },
                    '41845646': {
                        'cat': 'Mattress and Box Spring,Full',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Full',
                        "size": 50,
                        "class": 'Box_Matress',
                        "id": 41845646,
                        "qty": 0
                    },
                    '41845647': {
                        'cat': 'Mattress and Box Spring,Queen',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Queen',
                        "size": 60,
                        "class": 'Box_Matress',
                        "id": 41845647,
                        "qty": 0
                    },
                    '41845648': {
                        'cat': 'Mattress and Box Spring,King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'King',
                        "size": 70,
                        "class": 'Box_Matress',
                        "id": 41845648,
                        "qty": 0
                    },
                    '41845649': {
                        'cat': 'Mattress and Box Spring,California King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'California King',
                        "size": 80,
                        "class": 'Box_Matress',
                        "id": 41845649,
                        "qty": 0
                    },
                    '41845650': {
                        'cat': 'Metal Bed Frame,Collapsible',
                        'name': 'Metal Bed Frame',
                        'subname': 'Collapsible',
                        "size": 8,
                        "class": 'Collapsable_Metal_bed',
                        "id": 41845650,
                        "qty": 0
                    },
                    '41845651': {
                        'cat': 'Beds,Murphy Bed',
                        'name': 'Murphy Bed',
                        "size": 120,
                        "class": 'Murphy_Bed',
                        "id": 41845651,
                        "qty": 0
                    },
                    '41845652': {
                        'cat': 'Beds,Trundle',
                        'name': 'Trundle',
                        "size": 50,
                        "class": 'Trundle_Bed',
                        "id": 41845652,
                        "qty": 0
                    },
                    '41845653': {
                        'cat': 'Beds,Wood Bed Frame',
                        'name': 'Wood Bed Frame',
                        "size": 30,
                        "class": 'Wood_Bed_Frame',
                        "id": 41845653,
                        "qty": 0
                    },
                },
                'Mattress Only': {
                    '41845654': {
                        'cat': 'Futon Mattress,Single',
                        'name': 'Futon Mattress',
                        'subname': 'Single',
                        "size": 15,
                        "class": 'California_King_Mattress',
                        "id": 41845654,
                        "qty": 0
                    },
                    '41845655': {
                        'cat': 'Futon Mattress,Full',
                        'name': 'Futon Mattress',
                        'subname': 'Full',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 41845655,
                        "qty": 0
                    },
                    '41845656': {
                        'cat': 'Futon Mattress,Queen',
                        'name': 'Futon Mattress',
                        'subname': 'Queen',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 41845656,
                        "qty": 0
                    },
                    '41845657': {
                        'cat': 'Futon Mattress,King',
                        'name': 'Futon Mattress',
                        'subname': 'King',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 41845657,
                        "qty": 0
                    },
                    '41845658': {
                        'cat': 'Mattress,Single',
                        'name': 'Mattress',
                        'subname': 'Single "size"',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 41845658,
                        "qty": 0
                    },
                    '41845659': {
                        'cat': 'Mattress,Full',
                        'name': 'Mattress',
                        'subname': 'Full "size"',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 41845659,
                        "qty": 0
                    },
                    '41845660': {
                        'cat': 'Mattress,Queen',
                        'name': 'Mattress',
                        'subname': 'Queen "size"',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 41845660,
                        "qty": 0
                    },
                    '41845661': {
                        'cat': 'Mattress,King',
                        'name': 'Mattress',
                        'subname': 'King "size"',
                        "size": 35,
                        "class": 'California_King_Mattress',
                        "id": 41845661,
                        "qty": 0
                    },
                    '41845662': {
                        'cat': 'Mattress,California King',
                        'name': 'Mattress',
                        'subname': 'California King',
                        "size": 40,
                        "class": 'California_King_Mattress',
                        "id": 41845662,
                        "qty": 0
                    },
                },
                'Cabinets': {
                    "41845663": {
                        'cat': 'Armoire,approx 3 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 41845663,
                        "qty": 0
                    },
                    "41845664": {
                        'cat': 'Armoire,approx 4 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 41845664,
                        "qty": 0
                    },
                    "41845665": {
                        'cat': 'Armoire,approx 4 x 8',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 41845665,
                        "qty": 0
                    },
                    "41845666": {
                        'cat': 'Dresser,approx 2 x 4',
                        'name': 'Dresser',
                        'subname': 'approx 2\' x 4\'',
                        "size": 20,
                        "class": 'Small_Dresser',
                        "id": 41845666,
                        "qty": 0
                    },
                    "41845667": {
                        'cat': 'Dresser,approx 3 x 5',
                        'name': 'Dresser',
                        'subname': 'approx 3\' x 5\'',
                        "size": 30,
                        "class": 'Medium_Dresser',
                        "id": 41845667,
                        "qty": 0
                    },
                    "41845668": {
                        'cat': 'Dresser,approx 5 x 5',
                        'name': 'Dresser',
                        'subname': 'approx 5\' x 5\'',
                        "size": 45,
                        "class": 'Large_Dresser',
                        "id": 41845668,
                        "qty": 0
                    },
                    "41845669": {
                        'cat': 'Glass Armoire,approx 3 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 41845669,
                        "qty": 0
                    },
                    "41845670": {
                        'cat': 'Glass Armoire,approx 4 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 41845670,
                        "qty": 0
                    },
                    "41845671": {
                        'cat': 'Glass Armoire,approx 4 x 8',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 41845671,
                        "qty": 0
                    },
                    '41845672': {
                        'cat': 'Cabinets,Lingerie Chest',
                        'name': 'Lingerie Chest',
                        "size": 10,
                        "class": 'Lingerie_Chest',
                        "id": 41845672,
                        "qty": 0
                    },
                    '41845673': {
                        'cat': 'Cabinets,Vanity',
                        'name': 'Vanity',
                        "size": 15,
                        "class": 'Vanity',
                        "id": 41845673,
                        "qty": 0
                    },
                    '41845674': {
                        'cat': 'Cabinets,Wardrobe Closet',
                        'name': 'Wardrobe Closet',
                        "size": 60,
                        "class": 'Wardrobe_Closet',
                        "id": 41845674,
                        "qty": 0
                    },
                    '41845675': {
                        'cat': 'Cabinets,Wardrobe Closet with Mirrors',
                        'name': 'Wardrobe Closet with Mirrors',
                        "size": 60,
                        "class": 'Wardrobe_Closet_Mirrors',
                        "id": 41845675,
                        "qty": 0
                    },
                },
                'TVs': {
                    '41845676': {
                        'cat': 'DLP TV,Under 40 Inch',
                        'name': 'DLP TV',
                        'subname': 'Under 40 Inch',
                        "size": 25,
                        "class": 'TV_DLP_UNDER_40',
                        "id": 41845676,
                        "qty": 0
                    },
                    '41845677': {
                        'cat': 'DLP TV,40 To 60 Inch',
                        'name': 'DLP TV',
                        'subname': '40 To 60 Inch',
                        "size": 35,
                        "class": 'TV_DLP_41-60',
                        "id": 41845677,
                        "qty": 0
                    },
                    '41845678': {
                        'cat': 'Flat Panel TV,Under 32 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Under 32 Inch',
                        "size": 10,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 41845678,
                        "qty": 0
                    },
                    '41845679': {
                        'cat': 'Flat Panel TV,32 To 45 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '32 To 45 Inch',
                        "size": 15,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 41845679,
                        "qty": 0
                    },
                    '41845680': {
                        'cat': 'Flat Panel TV,46 To 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '46 To 55 Inch',
                        "size": 20,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 41845680,
                        "qty": 0
                    },
                    '41845681': {
                        'cat': 'Flat Panel TV,Over 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Over 55 Inch',
                        "size": 25,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 41845681,
                        "qty": 0
                    },
                    '41845682': {
                        'cat': 'Tube TV,Under 20 Inch',
                        'name': 'Tube TV',
                        'subname': 'Under 20 Inch',
                        "size": 5,
                        "class": 'TV_TUBE_UNDER_20',
                        "id": 41845682,
                        "qty": 0
                    },
                    '41845683': {
                        'cat': 'Tube TV,21 To 27 Inch',
                        'name': 'Tube TV',
                        'subname': '21 To 27 Inch',
                        "size": 10,
                        "class": 'TV_TUBE_21-27',
                        "id": 41845683,
                        "qty": 0
                    },
                    '41845684': {
                        'cat': 'Tube TV,28 To 36 Inch',
                        'name': 'Tube TV',
                        'subname': '28 To 36 Inch',
                        "size": 20,
                        "class": 'TV_TUBE_28-36',
                        "id": 41845684,
                        "qty": 0
                    },
                    "41845685": {
                        'cat': 'TV Stand,approx 3 long',
                        'name': 'TV Stand',
                        'subname': 'approx 3\' long',
                        "size": 10,
                        "class": 'Small_TV_Stand',
                        "id": 41845685,
                        "qty": 0
                    },
                    "41845686": {
                        'cat': 'TV Stand,approx 4 long',
                        'name': 'TV Stand',
                        'subname': 'approx 4\' long',
                        "size": 15,
                        "class": 'Small_TV_Stand',
                        "id": 41845686,
                        "qty": 0
                    },
                    "41845687": {
                        'cat': 'TV Stand,6 or longer',
                        'name': 'TV Stand',
                        'subname': '6\' or longer',
                        "size": 20,
                        "class": 'Large_TV_Stand',
                        "id": 41845687,
                        "qty": 0
                    }
                },
                'Stereo': {
                    "41854688": {
                        'cat': 'Speaker,less than 1 tall',
                        'name': 'Speaker',
                        'subname': 'less than 1\' tall',
                        "size": 3,
                        "class": 'Shelf_Speaker',
                        "id": 41854688,
                        "qty": 0
                    },
                    "41854689": {
                        'cat': 'Speaker,1 - 2 tall',
                        'name': 'Speaker',
                        'subname': '1\' - 2\' tall',
                        "size": 5,
                        "class": 'Shelf_Speaker',
                        "id": 41854689,
                        "qty": 0
                    },
                    "41854690": {
                        'cat': 'Speaker,2 or taller',
                        'name': 'Speaker',
                        'subname': '2\' or taller',
                        "size": 8,
                        "class": 'Floor_Speakers',
                        "id": 41854690,
                        "qty": 0
                    },
                    '41854691': {
                        'cat': 'Stereo,Stereo Or Video Component',
                        'name': 'Stereo Or Video Component',
                        "size": 2,
                        "class": 'Stereo_or_Video_Component',
                        "id": 41854691,
                        "qty": 0
                    }
                },
                'Lamps': {
                    "41854692": {
                        'cat': 'Floor Lamp,less than 5 tall',
                        'name': 'Floor Lamp',
                        'subname': 'less than 5\' tall',
                        "size": 5,
                        "class": 'Floor_Lamp',
                        "id": 41854692,
                        "qty": 0
                    },
                    "41854693": {
                        'cat': 'Floor Lamp,approx 7 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 7\' tall',
                        "size": 10,
                        "class": 'Floor_Lamp',
                        "id": 41854693,
                        "qty": 0
                    },
                    "41854694": {
                        'cat': 'Floor Lamp,approx 9 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 9\' tall',
                        "size": 15,
                        "class": 'Floor_Lamp',
                        "id": 41854694,
                        "qty": 0
                    },
                    "41854695": {
                        'cat': 'Table Lamp,1 x 1 or smaller',
                        'name': 'Table Lamp',
                        'subname': '1\' x 1\' x 1\' or smaller',
                        "size": 3,
                        "class": 'Table_Lamp',
                        "id": 41854695,
                        "qty": 0
                    },
                    "41854696": {
                        'cat': 'Table Lamp,approx 2 x 2',
                        'name': 'Table Lamp',
                        'subname': 'approx 2\' x 2\' x 2\'',
                        "size": 4,
                        "class": 'Table_Lamp',
                        "id": 41854696,
                        "qty": 0
                    },
                    "41854697": {
                        'cat': 'Table Lamp,2.5 x 2.5 x 2.5 or larger',
                        'name': 'Table Lamp',
                        'subname': '2.5\' x 2.5\' x 2.5\' or larger',
                        "size": 5,
                        "class": 'Table_Lamp',
                        "id": 41854697,
                        "qty": 0
                    },
                    '41854698': {
                        'cat': 'Lamps,Tri-Head Lamp',
                        'name': 'Tri-Head Lamp',
                        "size": 27,
                        "class": 'Tri_Head_Lamp',
                        "id": 41854698,
                        "qty": 0
                    }
                },
                'Tables': {
                    "41854699": {
                        'cat': 'End Table,approx 1',
                        'name': 'End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 41854699,
                        "qty": 0
                    },
                    "41854700": {
                        'cat': 'End Table,approx 2',
                        'name': 'End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 41854700,
                        "qty": 0
                    },
                    "41854701": {
                        'cat': 'End Table,approx 3',
                        'name': 'End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 41854701,
                        "qty": 0
                    },
                    "41854702": {
                        'cat': 'Glass End Table,approx 1',
                        'name': 'Glass End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 41854702,
                        "qty": 0
                    },
                    "41854703": {
                        'cat': 'Glass End Table,approx 2',
                        'name': 'Glass End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 41854703,
                        "qty": 0
                    },
                    "41854704": {
                        'cat': 'Glass End Table,approx 3',
                        'name': 'Glass End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 41854704,
                        "qty": 0
                    },
                    "41854705": {
                        'cat': 'Glass Side Table,approx 1',
                        'name': 'Glass Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 41854705,
                        "qty": 0
                    },
                    "41854706": {
                        'cat': 'Glass Side Table,approx 2',
                        'name': 'Glass Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 15,
                        "class": 'Large_Side_Table',
                        "id": 41854706,
                        "qty": 0
                    },
                    "41854707": {
                        'cat': 'Glass Side Table,approx 3',
                        'name': 'Glass Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 20,
                        "class": 'Large_Side_Table',
                        "id": 41854707,
                        "qty": 0
                    },
                    '41854708': {
                        'cat': 'Tables,Night Table',
                        'name': 'Night Table',
                        "size": 5,
                        "class": 'Night_Table',
                        "id": 41854708,
                        "qty": 0
                    },
                    '41854709': {
                        'cat': 'Tables,Nightstand',
                        'name': 'Nightstand',
                        "size": 13,
                        "class": 'Nightstand',
                        "id": 41854709,
                        "qty": 0
                    },
                    "41854710": {
                        'cat': 'Side Table,approx 1',
                        'name': 'Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'Large_Side_Table',
                        "id": 41854710,
                        "qty": 0
                    },
                    "41854711": {
                        'cat': 'Side Table,approx 2',
                        'name': 'Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'Large_Side_Table',
                        "id": 41854711,
                        "qty": 0
                    },
                    "41854712": {
                        'cat': 'Side Table,approx 3',
                        'name': 'Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 41854712,
                        "qty": 0
                    },
                },
                'Chairs': {
                    '41832713': {
                        'cat': 'Chairs,Arm Chair',
                        'name': 'Arm Chair',
                        "size": 12,
                        "class": 'Arm_Chair',
                        "id": 41832713,
                        "qty": 0
                    },
                    '41832714': {
                        'cat': 'Chairs,Club Chair',
                        'name': 'Club Chair',
                        "size": 20,
                        "class": 'Club_Chair',
                        "id": 41832714,
                        "qty": 0
                    },
                },
                'Mirrors': {
                    "41832715": {
                        'cat': 'Mirror,approx 2 x 3',
                        'name': 'Mirror',
                        'subname': 'approx 2\' x 3\'',
                        "size": 5,
                        "class": 'Small_Mirror',
                        "id": 41832715,
                        "qty": 0
                    },
                    "41832716": {
                        'cat': 'Mirror,approx 2.5 x 5',
                        'name': 'Mirror',
                        'subname': 'approx 2.5\' x 5\'',
                        "size": 8,
                        "class": 'Small_Mirror',
                        "id": 41832716,
                        "qty": 0
                    },
                    "41832717": {
                        'cat': 'Mirror,approx 4 x 8',
                        'name': 'Mirror',
                        'subname': 'approx 4\' x 8\'',
                        "size": 10,
                        "class": 'Large_Mirror',
                        "id": 41832717,
                        "qty": 0
                    },
                },
                'Bookcases': {
                    "41832718": {
                        'cat': 'Bookcase,approx 3 x 3',
                        'name': 'Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 41832718,
                        "qty": 0
                    },
                    "41832719": {
                        'cat': 'Bookcase,approx 4 x 6',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 41832719,
                        "qty": 0
                    },
                    "41832720": {
                        'cat': 'Bookcase,approx 4 x 8',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 41832720,
                        "qty": 0
                    },
                    "41832721": {
                        'cat': 'Glass Front Bookcase,approx 3 x 3',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 41832721,
                        "qty": 0
                    },
                    "41832722": {
                        'cat': 'Glass Front Bookcase,approx 4 x 6',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 41832722,
                        "qty": 0
                    },
                    "41832723": {
                        'cat': 'Glass Front Bookcase,approx 4 x 8',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 41832723,
                        "qty": 0
                    },
                },
                'Paintings & Pictures': {
                    "41832724": {
                        'cat': 'Painting,approx 1.5 x 2',
                        'name': 'Painting',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Painting',
                        "id": 41832724,
                        "qty": 0
                    },
                    "41832725": {
                        'cat': 'Painting,approx 2.5 x 4',
                        'name': 'Painting',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Painting',
                        "id": 41832725,
                        "qty": 0
                    },
                    "41832726": {
                        'cat': 'Painting,approx 4 x 6',
                        'name': 'Painting',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Painting',
                        "id": 41832726,
                        "qty": 0
                    },
                    "41832727": {
                        'cat': 'Picture,approx 1.5 x 2',
                        'name': 'Picture',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Picture_with_Frame',
                        "id": 41832727,
                        "qty": 0
                    },
                    "41832728": {
                        'cat': 'Picture,approx 2.5 x 4',
                        'name': 'Picture',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Picture_with_Frame',
                        "id": 41832728,
                        "qty": 0
                    },
                    "41832729": {
                        'cat': 'Picture,approx 4 x 6',
                        'name': 'Picture',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Picture_with_Frame',
                        "id": 41832729,
                        "qty": 0
                    },
                    '41832730': {
                        'cat': 'Picture Crate',
                        'name': 'Picture Crate',
                        "size": 16,
                        "class": 'Picture_Crate',
                        "id": 41832730,
                        "qty": 0
                    }
                },
                'Odds & Ends': {
                    '41832731': {
                        'cat': 'CD Rack',
                        'name': 'CD Rack',
                        "size": 7,
                        "class": 'CD_Rack',
                        "id": 41832731,
                        "qty": 0
                    },
                    '41832732': {
                        'cat': 'Clothes Steamer',
                        'name': 'Clothes Steamer',
                        "size": 3,
                        "class": 'Clothes_Steamer',
                        "id": 41832732,
                        "qty": 0
                    },
                    '41832733': {
                        'cat': 'Clothing Rack',
                        'name': 'Clothing Rack',
                        "size": 15,
                        "class": 'Clothes_Rack',
                        "id": 41832733,
                        "qty": 0
                    },
                    '41832734': {
                        'cat': 'Fan,Table',
                        'name': 'Fan',
                        'subname': 'Table',
                        "size": 3,
                        "class": 'Fan',
                        "id": 41832734,
                        "qty": 0
                    },
                    '41832735': {
                        'cat': 'Fan,Standing',
                        'name': 'Fan',
                        'subname': 'Standing',
                        "size": 12,
                        "class": 'Standing_Fan',
                        "id": 41832735,
                        "qty": 0
                    },
                    '41832736': {
                        'cat': 'Garbage Pail',
                        'name': 'Garbage Pail',
                        "size": 3,
                        "class": 'Garbage_Pail',
                        "id": 41832736,
                        "qty": 0
                    },
                    '41832737': {
                        'cat': 'Hamper',
                        'name': 'Hamper',
                        "size": 5,
                        "class": 'Hamper',
                        "id": 41832737,
                        "qty": 0
                    },
                    '41832738': {
                        'cat': 'Rug,Runner',
                        'name': 'Rug',
                        'subname': 'Runner',
                        "size": 3,
                        "class": 'Runner_Rug',
                        "id": 41832738,
                        "qty": 0
                    },
                    "41832739": {
                        'cat': 'Rug,4 long rolled',
                        'name': 'Rug',
                        'subname': '4\' long rolled',
                        "size": 5,
                        "class": 'Small_rug',
                        "id": 41832739,
                        "qty": 0
                    },
                    "41832740": {
                        'cat': 'Rug,7 long rolled',
                        'name': 'Rug',
                        'subname': '7\' long rolled',
                        "size": 10,
                        "class": 'Medium_Rug',
                        "id": 41832740,
                        "qty": 0
                    },
                    "41832741": {
                        'cat': 'Rug,9 long rolled',
                        'name': 'Rug',
                        'subname': '9\' long rolled',
                        "size": 15,
                        "class": 'Large_Rug',
                        "id": 41832741,
                        "qty": 0
                    },
                    '41832742': {
                        'cat': 'Shoe Rack',
                        'name': 'Shoe Rack',
                        "size": 10,
                        "class": 'Shoe_Rack',
                        "id": 41832742,
                        "qty": 0
                    },
                    '41832743': {
                        'cat': 'Suitcase',
                        'name': 'Suitcase',
                        "size": 5,
                        "class": 'Suitcase',
                        "id": 41832743,
                        "qty": 0
                    }
                }
            },
            'Bedroom 3': {
                'Packing Boxes': {
                    "1171721888": {
                        'pack': true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 1171721888,
                        "qty": 0
                    },
                    "1171721889": {
                        'pack': true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 1171721889,
                        "qty": 0
                    },
                    "1171721890": {
                        'pack': true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 1171721890,
                        "qty": 0
                    },
                    "1171721891": {
                        'pack': true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 1171721891,
                        "qty": 0
                    },
                    "1171721892": {
                        'pack': true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 1171721892,
                        "qty": 0
                    },
                    "1171721893": {
                        'pack': true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 1171721893,
                        "qty": 0
                    },
                    "1171721894": {
                        'pack': true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 1171721894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "2171745888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 2171745888,
                        "qty": 0
                    },
                    "2171745889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 2171745889,
                        "qty": 0
                    },
                    "2171745890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 2171745890,
                        "qty": 0
                    },
                    "2171745891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 2171745891,
                        "qty": 0
                    },
                    "2171745892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 2171745892,
                        "qty": 0
                    },
                    "2171745893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 2171745893,
                        "qty": 0
                    },
                    "2171745894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 2171745894,
                        "qty": 0
                    }
                },
                'Beds': {
                    '4171845640': {
                        'cat': 'Beds,Captains Bed',
                        'name': 'Captains Bed',
                        "size": 40,
                        "class": 'Captains_Bed',
                        "id": 4171845640,
                        "qty": 0
                    },
                    '4171845641': {
                        'cat': 'Beds,Daybed',
                        'name': 'Daybed',
                        "size": 50,
                        "class": 'Daybed',
                        "id": 4171845641,
                        "qty": 0
                    },
                    '4171845642': {
                        'cat': 'Beds,Folding Cots',
                        'name': 'Folding Cots',
                        "size": 6,
                        "class": 'Folding_Cots',
                        "id": 4171845642,
                        "qty": 0
                    },
                    '4171845643': {
                        'cat': 'Beds,Footboard',
                        'name': 'Footboard',
                        "size": 8,
                        "class": 'Footboard_1',
                        "id": 4171845643,
                        "qty": 0
                    },
                    '4171845644': {
                        'cat': 'Beds,Headboard',
                        'name': 'Headboard',
                        "size": 8,
                        "class": 'Headboard_1',
                        "id": 4171845644,
                        "qty": 0
                    },
                    '4171845645': {
                        'cat': 'Mattress and Box Spring,Single',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Single',
                        "size": 40,
                        "class": 'Box_Matress',
                        "id": 4171845645,
                        "qty": 0
                    },
                    '4171845646': {
                        'cat': 'Mattress and Box Spring,Full',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Full',
                        "size": 50,
                        "class": 'Box_Matress',
                        "id": 4171845646,
                        "qty": 0
                    },
                    '4171845647': {
                        'cat': 'Mattress and Box Spring,Queen',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Queen',
                        "size": 60,
                        "class": 'Box_Matress',
                        "id": 4171845647,
                        "qty": 0
                    },
                    '4171845648': {
                        'cat': 'Mattress and Box Spring,King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'King',
                        "size": 70,
                        "class": 'Box_Matress',
                        "id": 4171845648,
                        "qty": 0
                    },
                    '4171845649': {
                        'cat': 'Mattress and Box Spring,California King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'California King',
                        "size": 80,
                        "class": 'Box_Matress',
                        "id": 4171845649,
                        "qty": 0
                    },
                    '4171845650': {
                        'cat': 'Metal Bed Frame,Collapsible',
                        'name': 'Metal Bed Frame',
                        'subname': 'Collapsible',
                        "size": 8,
                        "class": 'Collapsable_Metal_bed',
                        "id": 4171845650,
                        "qty": 0
                    },
                    '4171845651': {
                        'cat': 'Beds,Murphy Bed',
                        'name': 'Murphy Bed',
                        "size": 120,
                        "class": 'Murphy_Bed',
                        "id": 4171845651,
                        "qty": 0
                    },
                    '4171845652': {
                        'cat': 'Beds,Trundle',
                        'name': 'Trundle',
                        "size": 50,
                        "class": 'Trundle_Bed',
                        "id": 4171845652,
                        "qty": 0
                    },
                    '4171845653': {
                        'cat': 'Beds,Wood Bed Frame',
                        'name': 'Wood Bed Frame',
                        "size": 30,
                        "class": 'Wood_Bed_Frame',
                        "id": 4171845653,
                        "qty": 0
                    },
                },
                'Mattress Only': {
                    '4181845654': {
                        'cat': 'Futon Mattress,Single',
                        'name': 'Futon Mattress',
                        'subname': 'Single',
                        "size": 15,
                        "class": 'California_King_Mattress',
                        "id": 4181845654,
                        "qty": 0
                    },
                    '4181845655': {
                        'cat': 'Futon Mattress,Full',
                        'name': 'Futon Mattress',
                        'subname': 'Full',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 4181845655,
                        "qty": 0
                    },
                    '4181845656': {
                        'cat': 'Futon Mattress,Queen',
                        'name': 'Futon Mattress',
                        'subname': 'Queen',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 4181845656,
                        "qty": 0
                    },
                    '4181845657': {
                        'cat': 'Futon Mattress,King',
                        'name': 'Futon Mattress',
                        'subname': 'King',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 4181845657,
                        "qty": 0
                    },
                    '4181845658': {
                        'cat': 'Mattress,Single',
                        'name': 'Mattress',
                        'subname': 'Single "size"',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 4181845658,
                        "qty": 0
                    },
                    '4181845659': {
                        'cat': 'Mattress,Full',
                        'name': 'Mattress',
                        'subname': 'Full "size"',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 4181845659,
                        "qty": 0
                    },
                    '4181845660': {
                        'cat': 'Mattress,Queen',
                        'name': 'Mattress',
                        'subname': 'Queen "size"',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 4181845660,
                        "qty": 0
                    },
                    '4181845661': {
                        'cat': 'Mattress,King',
                        'name': 'Mattress',
                        'subname': 'King "size"',
                        "size": 35,
                        "class": 'California_King_Mattress',
                        "id": 4181845661,
                        "qty": 0
                    },
                    '4181845662': {
                        'cat': 'Mattress,California King',
                        'name': 'Mattress',
                        'subname': 'California King',
                        "size": 40,
                        "class": 'California_King_Mattress',
                        "id": 4181845662,
                        "qty": 0
                    },
                },
                'Cabinets': {
                    "4181845663": {
                        'cat': 'Armoire,approx 3 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 4181845663,
                        "qty": 0
                    },
                    "4181845664": {
                        'cat': 'Armoire,approx 4 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 4181845664,
                        "qty": 0
                    },
                    "4181845665": {
                        'cat': 'Armoire,approx 4 x 8',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 4181845665,
                        "qty": 0
                    },
                    "4181845666": {
                        'cat': 'Dresser,approx 2 x 4',
                        'name': 'Dresser',
                        'subname': 'approx 2\' x 4\'',
                        "size": 20,
                        "class": 'Small_Dresser',
                        "id": 4181845666,
                        "qty": 0
                    },
                    "4181845667": {
                        'cat': 'Dresser,approx 3 x 5',
                        'name': 'Dresser',
                        'subname': 'approx 3\' x 5\'',
                        "size": 30,
                        "class": 'Medium_Dresser',
                        "id": 4181845667,
                        "qty": 0
                    },
                    "4181845668": {
                        'cat': 'Dresser,approx 5 x 5',
                        'name': 'Dresser',
                        'subname': 'approx 5\' x 5\'',
                        "size": 45,
                        "class": 'Large_Dresser',
                        "id": 4181845668,
                        "qty": 0
                    },
                    "4181845669": {
                        'cat': 'Glass Armoire,approx 3 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 4181845669,
                        "qty": 0
                    },
                    "4181845670": {
                        'cat': 'Glass Armoire,approx 4 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 4181845670,
                        "qty": 0
                    },
                    "4181845671": {
                        'cat': 'Glass Armoire,approx 4 x 8',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 4181845671,
                        "qty": 0
                    },
                    '4181845672': {
                        'cat': 'Cabinets,Lingerie Chest',
                        'name': 'Lingerie Chest',
                        "size": 10,
                        "class": 'Lingerie_Chest',
                        "id": 4181845672,
                        "qty": 0
                    },
                    '4181845673': {
                        'cat': 'Cabinets,Vanity',
                        'name': 'Vanity',
                        "size": 15,
                        "class": 'Vanity',
                        "id": 4181845673,
                        "qty": 0
                    },
                    '4181845674': {
                        'cat': 'Cabinets,Wardrobe Closet',
                        'name': 'Wardrobe Closet',
                        "size": 60,
                        "class": 'Wardrobe_Closet',
                        "id": 4181845674,
                        "qty": 0
                    },
                    '4181845675': {
                        'cat': 'Cabinets,Wardrobe Closet with Mirrors',
                        'name': 'Wardrobe Closet with Mirrors',
                        "size": 60,
                        "class": 'Wardrobe_Closet_Mirrors',
                        "id": 4181845675,
                        "qty": 0
                    },
                },
                'TVs': {
                    '4191845676': {
                        'cat': 'DLP TV,Under 40 Inch',
                        'name': 'DLP TV',
                        'subname': 'Under 40 Inch',
                        "size": 25,
                        "class": 'TV_DLP_UNDER_40',
                        "id": 4191845676,
                        "qty": 0
                    },
                    '4191845677': {
                        'cat': 'DLP TV,40 To 60 Inch',
                        'name': 'DLP TV',
                        'subname': '40 To 60 Inch',
                        "size": 35,
                        "class": 'TV_DLP_41-60',
                        "id": 4191845677,
                        "qty": 0
                    },
                    '4191845678': {
                        'cat': 'Flat Panel TV,Under 32 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Under 32 Inch',
                        "size": 10,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 4191845678,
                        "qty": 0
                    },
                    '4191845679': {
                        'cat': 'Flat Panel TV,32 To 45 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '32 To 45 Inch',
                        "size": 15,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 4191845679,
                        "qty": 0
                    },
                    '4191845680': {
                        'cat': 'Flat Panel TV,46 To 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '46 To 55 Inch',
                        "size": 20,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 4191845680,
                        "qty": 0
                    },
                    '4191845681': {
                        'cat': 'Flat Panel TV,Over 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Over 55 Inch',
                        "size": 25,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 4191845681,
                        "qty": 0
                    },
                    '4191845682': {
                        'cat': 'Tube TV,Under 20 Inch',
                        'name': 'Tube TV',
                        'subname': 'Under 20 Inch',
                        "size": 5,
                        "class": 'TV_TUBE_UNDER_20',
                        "id": 4191845682,
                        "qty": 0
                    },
                    '4191845683': {
                        'cat': 'Tube TV,21 To 27 Inch',
                        'name': 'Tube TV',
                        'subname': '21 To 27 Inch',
                        "size": 10,
                        "class": 'TV_TUBE_21-27',
                        "id": 4191845683,
                        "qty": 0
                    },
                    '4191845684': {
                        'cat': 'Tube TV,28 To 36 Inch',
                        'name': 'Tube TV',
                        'subname': '28 To 36 Inch',
                        "size": 20,
                        "class": 'TV_TUBE_28-36',
                        "id": 4191845684,
                        "qty": 0
                    },
                    "4191845685": {
                        'cat': 'TV Stand,approx 3 long',
                        'name': 'TV Stand',
                        'subname': 'approx 3\' long',
                        "size": 10,
                        "class": 'Small_TV_Stand',
                        "id": 4191845685,
                        "qty": 0
                    },
                    "4191845686": {
                        'cat': 'TV Stand,approx 4 long',
                        'name': 'TV Stand',
                        'subname': 'approx 4\' long',
                        "size": 15,
                        "class": 'Small_TV_Stand',
                        "id": 4191845686,
                        "qty": 0
                    },
                    "4191845687": {
                        'cat': 'TV Stand,6 or longer',
                        'name': 'TV Stand',
                        'subname': '6\' or longer',
                        "size": 20,
                        "class": 'Large_TV_Stand',
                        "id": 4191845687,
                        "qty": 0
                    }
                },
                'Stereo': {
                    "4211854688": {
                        'cat': 'Speaker,less than 1 tall',
                        'name': 'Speaker',
                        'subname': 'less than 1\' tall',
                        "size": 3,
                        "class": 'Shelf_Speaker',
                        "id": 4211854688,
                        "qty": 0
                    },
                    "4211854689": {
                        'cat': 'Speaker,1 - 2 tall',
                        'name': 'Speaker',
                        'subname': '1\' - 2\' tall',
                        "size": 5,
                        "class": 'Shelf_Speaker',
                        "id": 4211854689,
                        "qty": 0
                    },
                    "4211854690": {
                        'cat': 'Speaker,2 or taller',
                        'name': 'Speaker',
                        'subname': '2\' or taller',
                        "size": 8,
                        "class": 'Floor_Speakers',
                        "id": 4211854690,
                        "qty": 0
                    },
                    '4211854691': {
                        'cat': 'Stereo,Stereo Or Video Component',
                        'name': 'Stereo Or Video Component',
                        "size": 2,
                        "class": 'Stereo_or_Video_Component',
                        "id": 4211854691,
                        "qty": 0
                    }
                },
                'Lamps': {
                    "4211854692": {
                        'cat': 'Floor Lamp,less than 5 tall',
                        'name': 'Floor Lamp',
                        'subname': 'less than 5\' tall',
                        "size": 5,
                        "class": 'Floor_Lamp',
                        "id": 4211854692,
                        "qty": 0
                    },
                    "4211854693": {
                        'cat': 'Floor Lamp,approx 7 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 7\' tall',
                        "size": 10,
                        "class": 'Floor_Lamp',
                        "id": 4211854693,
                        "qty": 0
                    },
                    "4211854694": {
                        'cat': 'Floor Lamp,approx 9 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 9\' tall',
                        "size": 15,
                        "class": 'Floor_Lamp',
                        "id": 4211854694,
                        "qty": 0
                    },
                    "4211854695": {
                        'cat': 'Table Lamp,1 x 1 or smaller',
                        'name': 'Table Lamp',
                        'subname': '1\' x 1\' x 1\' or smaller',
                        "size": 3,
                        "class": 'Table_Lamp',
                        "id": 4211854695,
                        "qty": 0
                    },
                    "4211854696": {
                        'cat': 'Table Lamp,approx 2 x 2',
                        'name': 'Table Lamp',
                        'subname': 'approx 2\' x 2\' x 2\'',
                        "size": 4,
                        "class": 'Table_Lamp',
                        "id": 4211854696,
                        "qty": 0
                    },
                    "4211854697": {
                        'cat': 'Table Lamp,2.5 x 2.5 x 2.5 or larger',
                        'name': 'Table Lamp',
                        'subname': '2.5\' x 2.5\' x 2.5\' or larger',
                        "size": 5,
                        "class": 'Table_Lamp',
                        "id": 4211854697,
                        "qty": 0
                    },
                    '4211854698': {
                        'cat': 'Lamps,Tri-Head Lamp',
                        'name': 'Tri-Head Lamp',
                        "size": 27,
                        "class": 'Tri_Head_Lamp',
                        "id": 4211854698,
                        "qty": 0
                    }
                },
                'Tables': {
                    "4121854699": {
                        'cat': 'End Table,approx 1',
                        'name': 'End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 4121854699,
                        "qty": 0
                    },
                    "4121854700": {
                        'cat': 'End Table,approx 2',
                        'name': 'End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 4121854700,
                        "qty": 0
                    },
                    "4121854701": {
                        'cat': 'End Table,approx 3',
                        'name': 'End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 4121854701,
                        "qty": 0
                    },
                    "4121854702": {
                        'cat': 'Glass End Table,approx 1',
                        'name': 'Glass End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 4121854702,
                        "qty": 0
                    },
                    "4121854703": {
                        'cat': 'Glass End Table,approx 2',
                        'name': 'Glass End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 4121854703,
                        "qty": 0
                    },
                    "4121854704": {
                        'cat': 'Glass End Table,approx 3',
                        'name': 'Glass End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 4121854704,
                        "qty": 0
                    },
                    "4121854705": {
                        'cat': 'Glass Side Table,approx 1',
                        'name': 'Glass Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 4121854705,
                        "qty": 0
                    },
                    "4121854706": {
                        'cat': 'Glass Side Table,approx 2',
                        'name': 'Glass Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 15,
                        "class": 'Large_Side_Table',
                        "id": 4121854706,
                        "qty": 0
                    },
                    "1241854707": {
                        'cat': 'Glass Side Table,approx 3',
                        'name': 'Glass Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 20,
                        "class": 'Large_Side_Table',
                        "id": 4121854707,
                        "qty": 0
                    },
                    '4121854708': {
                        'cat': 'Tables,Night Table',
                        'name': 'Night Table',
                        "size": 5,
                        "class": 'Night_Table',
                        "id": 4121854708,
                        "qty": 0
                    },
                    '4121854709': {
                        'cat': 'Tables,Nightstand',
                        'name': 'Nightstand',
                        "size": 13,
                        "class": 'Nightstand',
                        "id": 4121854709,
                        "qty": 0
                    },
                    "4121854710": {
                        'cat': 'Side Table,approx 1',
                        'name': 'Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'Large_Side_Table',
                        "id": 4121854710,
                        "qty": 0
                    },
                    "4121854711": {
                        'cat': 'Side Table,approx 2',
                        'name': 'Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'Large_Side_Table',
                        "id": 4121854711,
                        "qty": 0
                    },
                    "4121854712": {
                        'cat': 'Side Table,approx 3',
                        'name': 'Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 4121854712,
                        "qty": 0
                    },
                },
                'Chairs': {
                    '4031832713': {
                        'cat': 'Chairs,Arm Chair',
                        'name': 'Arm Chair',
                        "size": 12,
                        "class": 'Arm_Chair',
                        "id": 4031832713,
                        "qty": 0
                    },
                    '4031832714': {
                        'cat': 'Chairs,Club Chair',
                        'name': 'Club Chair',
                        "size": 20,
                        "class": 'Club_Chair',
                        "id": 4031832714,
                        "qty": 0
                    },
                },
                'Mirrors': {
                    "4031832715": {
                        'cat': 'Mirror,approx 2 x 3',
                        'name': 'Mirror',
                        'subname': 'approx 2\' x 3\'',
                        "size": 5,
                        "class": 'Small_Mirror',
                        "id": 4031832715,
                        "qty": 0
                    },
                    "4031832716": {
                        'cat': 'Mirror,approx 2.5 x 5',
                        'name': 'Mirror',
                        'subname': 'approx 2.5\' x 5\'',
                        "size": 8,
                        "class": 'Small_Mirror',
                        "id": 4031832716,
                        "qty": 0
                    },
                    "4031832717": {
                        'cat': 'Mirror,approx 4 x 8',
                        'name': 'Mirror',
                        'subname': 'approx 4\' x 8\'',
                        "size": 10,
                        "class": 'Large_Mirror',
                        "id": 4031832717,
                        "qty": 0
                    },
                },
                'Bookcases': {
                    "4031832718": {
                        'cat': 'Bookcase,approx 3 x 3',
                        'name': 'Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 4031832718,
                        "qty": 0
                    },
                    "4031832719": {
                        'cat': 'Bookcase,approx 4 x 6',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 4031832719,
                        "qty": 0
                    },
                    "4031832720": {
                        'cat': 'Bookcase,approx 4 x 8',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 4031832720,
                        "qty": 0
                    },
                    "4031832721": {
                        'cat': 'Glass Front Bookcase,approx 3 x 3',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 4031832721,
                        "qty": 0
                    },
                    "4031832722": {
                        'cat': 'Glass Front Bookcase,approx 4 x 6',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 4031832722,
                        "qty": 0
                    },
                    "4031832723": {
                        'cat': 'Glass Front Bookcase,approx 4 x 8',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 4031832723,
                        "qty": 0
                    },
                },
                'Paintings & Pictures': {
                    "4031832724": {
                        'cat': 'Painting,approx 1.5 x 2',
                        'name': 'Painting',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Painting',
                        "id": 4031832724,
                        "qty": 0
                    },
                    "4031832725": {
                        'cat': 'Painting,approx 2.5 x 4',
                        'name': 'Painting',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Painting',
                        "id": 4031832725,
                        "qty": 0
                    },
                    "4031832726": {
                        'cat': 'Painting,approx 4 x 6',
                        'name': 'Painting',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Painting',
                        "id": 4031832726,
                        "qty": 0
                    },
                    "4031832727": {
                        'cat': 'Picture,approx 1.5 x 2',
                        'name': 'Picture',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Picture_with_Frame',
                        "id": 4031832727,
                        "qty": 0
                    },
                    "4031832728": {
                        'cat': 'Picture,approx 2.5 x 4',
                        'name': 'Picture',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Picture_with_Frame',
                        "id": 4031832728,
                        "qty": 0
                    },
                    "4031832729": {
                        'cat': 'Picture,approx 4 x 6',
                        'name': 'Picture',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Picture_with_Frame',
                        "id": 4031832729,
                        "qty": 0
                    },
                    '4031832730': {
                        'cat': 'Picture Crate',
                        'name': 'Picture Crate',
                        "size": 16,
                        "class": 'Picture_Crate',
                        "id": 4031832730,
                        "qty": 0
                    }
                },
                'Odds & Ends': {
                    '4031832731': {
                        'cat': 'CD Rack',
                        'name': 'CD Rack',
                        "size": 7,
                        "class": 'CD_Rack',
                        "id": 4031832731,
                        "qty": 0
                    },
                    '4031832732': {
                        'cat': 'Clothes Steamer',
                        'name': 'Clothes Steamer',
                        "size": 3,
                        "class": 'Clothes_Steamer',
                        "id": 4031832732,
                        "qty": 0
                    },
                    '4031832733': {
                        'cat': 'Clothing Rack',
                        'name': 'Clothing Rack',
                        "size": 15,
                        "class": 'Clothes_Rack',
                        "id": 4031832733,
                        "qty": 0
                    },
                    '4031832734': {
                        'cat': 'Fan,Table',
                        'name': 'Fan',
                        'subname': 'Table',
                        "size": 3,
                        "class": 'Fan',
                        "id": 4031832734,
                        "qty": 0
                    },
                    '4031832735': {
                        'cat': 'Fan,Standing',
                        'name': 'Fan',
                        'subname': 'Standing',
                        "size": 12,
                        "class": 'Standing_Fan',
                        "id": 4031832735,
                        "qty": 0
                    },
                    '4031832736': {
                        'cat': 'Garbage Pail',
                        'name': 'Garbage Pail',
                        "size": 3,
                        "class": 'Garbage_Pail',
                        "id": 4031832736,
                        "qty": 0
                    },
                    '4031832737': {
                        'cat': 'Hamper',
                        'name': 'Hamper',
                        "size": 5,
                        "class": 'Hamper',
                        "id": 4031832737,
                        "qty": 0
                    },
                    '4031832738': {
                        'cat': 'Rug,Runner',
                        'name': 'Rug',
                        'subname': 'Runner',
                        "size": 3,
                        "class": 'Runner_Rug',
                        "id": 4031832738,
                        "qty": 0
                    },
                    "4031832739": {
                        'cat': 'Rug,4 long rolled',
                        'name': 'Rug',
                        'subname': '4\' long rolled',
                        "size": 5,
                        "class": 'Small_rug',
                        "id": 4031832739,
                        "qty": 0
                    },
                    "4031832740": {
                        'cat': 'Rug,7 long rolled',
                        'name': 'Rug',
                        'subname': '7\' long rolled',
                        "size": 10,
                        "class": 'Medium_Rug',
                        "id": 4031832740,
                        "qty": 0
                    },
                    "4031832741": {
                        'cat': 'Rug,9 long rolled',
                        'name': 'Rug',
                        'subname': '9\' long rolled',
                        "size": 15,
                        "class": 'Large_Rug',
                        "id": 4031832741,
                        "qty": 0
                    },
                    '4031832742': {
                        'cat': 'Shoe Rack',
                        'name': 'Shoe Rack',
                        "size": 10,
                        "class": 'Shoe_Rack',
                        "id": 4031832742,
                        "qty": 0
                    },
                    '4031832743': {
                        'cat': 'Suitcase',
                        'name': 'Suitcase',
                        "size": 5,
                        "class": 'Suitcase',
                        "id": 4031832743,
                        "qty": 0
                    }
                }
            },
            'Bedroom 4': {
                'Packing Boxes': {
                    "1172187488": {
                        'pack': true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 1172187488,
                        "qty": 0
                    },
                    "1172187489": {
                        'pack': true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 1172187489,
                        "qty": 0
                    },
                    "1172187490": {
                        'pack': true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 1172187490,
                        "qty": 0
                    },
                    "1172187491": {
                        'pack': true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 1172187491,
                        "qty": 0
                    },
                    "1172187492": {
                        'pack': true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 1172187492,
                        "qty": 0
                    },
                    "1172187493": {
                        'pack': true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 1172187493,
                        "qty": 0
                    },
                    "1172187494": {
                        'pack': true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 1172187494,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "2174587488": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 2174587488,
                        "qty": 0
                    },
                    "2174587489": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 2174587489,
                        "qty": 0
                    },
                    "2174587490": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 2174587490,
                        "qty": 0
                    },
                    "2174587491": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 2174587491,
                        "qty": 0
                    },
                    "2174587492": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 2174587492,
                        "qty": 0
                    },
                    "2174587493": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 2174587493,
                        "qty": 0
                    },
                    "2174587494": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 2174587494,
                        "qty": 0
                    }
                },
                'Beds': {
                    '4184567440': {
                        'cat': 'Beds,Captains Bed',
                        'name': 'Captains Bed',
                        "size": 40,
                        "class": 'Captains_Bed',
                        "id": 4184567440,
                        "qty": 0
                    },
                    '4184567441': {
                        'cat': 'Beds,Daybed',
                        'name': 'Daybed',
                        "size": 50,
                        "class": 'Daybed',
                        "id": 4184567441,
                        "qty": 0
                    },
                    '4184567442': {
                        'cat': 'Beds,Folding Cots',
                        'name': 'Folding Cots',
                        "size": 6,
                        "class": 'Folding_Cots',
                        "id": 4184567442,
                        "qty": 0
                    },
                    '4184567443': {
                        'cat': 'Beds,Footboard',
                        'name': 'Footboard',
                        "size": 8,
                        "class": 'Footboard_1',
                        "id": 4184567443,
                        "qty": 0
                    },
                    '4184567444': {
                        'cat': 'Beds,Headboard',
                        'name': 'Headboard',
                        "size": 8,
                        "class": 'Headboard_1',
                        "id": 4184567444,
                        "qty": 0
                    },
                    '4184567445': {
                        'cat': 'Mattress and Box Spring,Single',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Single',
                        "size": 40,
                        "class": 'Box_Matress',
                        "id": 4184567445,
                        "qty": 0
                    },
                    '4184567446': {
                        'cat': 'Mattress and Box Spring,Full',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Full',
                        "size": 50,
                        "class": 'Box_Matress',
                        "id": 4184567446,
                        "qty": 0
                    },
                    '4184567447': {
                        'cat': 'Mattress and Box Spring,Queen',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Queen',
                        "size": 60,
                        "class": 'Box_Matress',
                        "id": 4184567447,
                        "qty": 0
                    },
                    '4184567448': {
                        'cat': 'Mattress and Box Spring,King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'King',
                        "size": 70,
                        "class": 'Box_Matress',
                        "id": 4184567448,
                        "qty": 0
                    },
                    '4184567449': {
                        'cat': 'Mattress and Box Spring,California King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'California King',
                        "size": 80,
                        "class": 'Box_Matress',
                        "id": 4184567449,
                        "qty": 0
                    },
                    '4184567450': {
                        'cat': 'Metal Bed Frame,Collapsible',
                        'name': 'Metal Bed Frame',
                        'subname': 'Collapsible',
                        "size": 8,
                        "class": 'Collapsable_Metal_bed',
                        "id": 4184567450,
                        "qty": 0
                    },
                    '4184567451': {
                        'cat': 'Beds,Murphy Bed',
                        'name': 'Murphy Bed',
                        "size": 120,
                        "class": 'Murphy_Bed',
                        "id": 4184567451,
                        "qty": 0
                    },
                    '4184567452': {
                        'cat': 'Beds,Trundle',
                        'name': 'Trundle',
                        "size": 50,
                        "class": 'Trundle_Bed',
                        "id": 4184567452,
                        "qty": 0
                    },
                    '4184567453': {
                        'cat': 'Beds,Wood Bed Frame',
                        'name': 'Wood Bed Frame',
                        "size": 30,
                        "class": 'Wood_Bed_Frame',
                        "id": 4184567453,
                        "qty": 0
                    },
                },
                'Mattress Only': {
                    '4184567454': {
                        'cat': 'Futon Mattress,Single',
                        'name': 'Futon Mattress',
                        'subname': 'Single',
                        "size": 15,
                        "class": 'California_King_Mattress',
                        "id": 4184567454,
                        "qty": 0
                    },
                    '4184567455': {
                        'cat': 'Futon Mattress,Full',
                        'name': 'Futon Mattress',
                        'subname': 'Full',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 4184567455,
                        "qty": 0
                    },
                    '4184567456': {
                        'cat': 'Futon Mattress,Queen',
                        'name': 'Futon Mattress',
                        'subname': 'Queen',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 4184567456,
                        "qty": 0
                    },
                    '4184567457': {
                        'cat': 'Futon Mattress,King',
                        'name': 'Futon Mattress',
                        'subname': 'King',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 4184567457,
                        "qty": 0
                    },
                    '4184567458': {
                        'cat': 'Mattress,Single',
                        'name': 'Mattress',
                        'subname': 'Single "size"',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 4184567458,
                        "qty": 0
                    },
                    '4184567459': {
                        'cat': 'Mattress,Full',
                        'name': 'Mattress',
                        'subname': 'Full "size"',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 4184567459,
                        "qty": 0
                    },
                    '4184567460': {
                        'cat': 'Mattress,Queen',
                        'name': 'Mattress',
                        'subname': 'Queen "size"',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 4184567460,
                        "qty": 0
                    },
                    '4184567461': {
                        'cat': 'Mattress,King',
                        'name': 'Mattress',
                        'subname': 'King "size"',
                        "size": 35,
                        "class": 'California_King_Mattress',
                        "id": 4184567461,
                        "qty": 0
                    },
                    '4184567462': {
                        'cat': 'Mattress,California King',
                        'name': 'Mattress',
                        'subname': 'California King',
                        "size": 40,
                        "class": 'California_King_Mattress',
                        "id": 4184567462,
                        "qty": 0
                    },
                },
                'Cabinets': {
                    "4184567463": {
                        'cat': 'Armoire,approx 3 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 4184567463,
                        "qty": 0
                    },
                    "4184567464": {
                        'cat': 'Armoire,approx 4 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 4184567464,
                        "qty": 0
                    },
                    "4184567465": {
                        'cat': 'Armoire,approx 4 x 8',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 4184567465,
                        "qty": 0
                    },
                    "4184567466": {
                        'cat': 'Dresser,approx 2 x 4',
                        'name': 'Dresser',
                        'subname': 'approx 2\' x 4\'',
                        "size": 20,
                        "class": 'Small_Dresser',
                        "id": 4184567466,
                        "qty": 0
                    },
                    "4184567467": {
                        'cat': 'Dresser,approx 3 x 5',
                        'name': 'Dresser',
                        'subname': 'approx 3\' x 5\'',
                        "size": 30,
                        "class": 'Medium_Dresser',
                        "id": 4184567467,
                        "qty": 0
                    },
                    "4184567468": {
                        'cat': 'Dresser,approx 5 x 5',
                        'name': 'Dresser',
                        'subname': 'approx 5\' x 5\'',
                        "size": 45,
                        "class": 'Large_Dresser',
                        "id": 4184567468,
                        "qty": 0
                    },
                    "4184567469": {
                        'cat': 'Glass Armoire,approx 3 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 4184567469,
                        "qty": 0
                    },
                    "4184567470": {
                        'cat': 'Glass Armoire,approx 4 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 4184567470,
                        "qty": 0
                    },
                    "4184567471": {
                        'cat': 'Glass Armoire,approx 4 x 8',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 4184567471,
                        "qty": 0
                    },
                    '4184567472': {
                        'cat': 'Cabinets,Lingerie Chest',
                        'name': 'Lingerie Chest',
                        "size": 10,
                        "class": 'Lingerie_Chest',
                        "id": 4184567472,
                        "qty": 0
                    },
                    '4184567473': {
                        'cat': 'Cabinets,Vanity',
                        'name': 'Vanity',
                        "size": 15,
                        "class": 'Vanity',
                        "id": 4184567473,
                        "qty": 0
                    },
                    '4184567474': {
                        'cat': 'Cabinets,Wardrobe Closet',
                        'name': 'Wardrobe Closet',
                        "size": 60,
                        "class": 'Wardrobe_Closet',
                        "id": 4184567474,
                        "qty": 0
                    },
                    '4184567475': {
                        'cat': 'Cabinets,Wardrobe Closet with Mirrors',
                        'name': 'Wardrobe Closet with Mirrors',
                        "size": 60,
                        "class": 'Wardrobe_Closet_Mirrors',
                        "id": 4184567475,
                        "qty": 0
                    },
                },
                'TVs': {
                    '4184564176': {
                        'cat': 'DLP TV,Under 40 Inch',
                        'name': 'DLP TV',
                        'subname': 'Under 40 Inch',
                        "size": 25,
                        "class": 'TV_DLP_UNDER_40',
                        "id": 4184564176,
                        "qty": 0
                    },
                    '4184564177': {
                        'cat': 'DLP TV,40 To 60 Inch',
                        'name': 'DLP TV',
                        'subname': '40 To 60 Inch',
                        "size": 35,
                        "class": 'TV_DLP_41-60',
                        "id": 4184564177,
                        "qty": 0
                    },
                    '4184564178': {
                        'cat': 'Flat Panel TV,Under 32 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Under 32 Inch',
                        "size": 10,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 4184564178,
                        "qty": 0
                    },
                    '4184564179': {
                        'cat': 'Flat Panel TV,32 To 45 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '32 To 45 Inch',
                        "size": 15,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 4184564179,
                        "qty": 0
                    },
                    '4184564180': {
                        'cat': 'Flat Panel TV,46 To 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '46 To 55 Inch',
                        "size": 20,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 4184564180,
                        "qty": 0
                    },
                    '4184564181': {
                        'cat': 'Flat Panel TV,Over 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Over 55 Inch',
                        "size": 25,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 4184564181,
                        "qty": 0
                    },
                    '4184564182': {
                        'cat': 'Tube TV,Under 20 Inch',
                        'name': 'Tube TV',
                        'subname': 'Under 20 Inch',
                        "size": 5,
                        "class": 'TV_TUBE_UNDER_20',
                        "id": 4184564182,
                        "qty": 0
                    },
                    '4184564183': {
                        'cat': 'Tube TV,21 To 27 Inch',
                        'name': 'Tube TV',
                        'subname': '21 To 27 Inch',
                        "size": 10,
                        "class": 'TV_TUBE_21-27',
                        "id": 4184564183,
                        "qty": 0
                    },
                    '4184564184': {
                        'cat': 'Tube TV,28 To 36 Inch',
                        'name': 'Tube TV',
                        'subname': '28 To 36 Inch',
                        "size": 20,
                        "class": 'TV_TUBE_28-36',
                        "id": 4184564184,
                        "qty": 0
                    },
                    "4184564185": {
                        'cat': 'TV Stand,approx 3 long',
                        'name': 'TV Stand',
                        'subname': 'approx 3\' long',
                        "size": 10,
                        "class": 'Small_TV_Stand',
                        "id": 4184564185,
                        "qty": 0
                    },
                    "4184564186": {
                        'cat': 'TV Stand,approx 4 long',
                        'name': 'TV Stand',
                        'subname': 'approx 4\' long',
                        "size": 15,
                        "class": 'Small_TV_Stand',
                        "id": 4184564186,
                        "qty": 0
                    },
                    "4184564187": {
                        'cat': 'TV Stand,6 or longer',
                        'name': 'TV Stand',
                        'subname': '6\' or longer',
                        "size": 20,
                        "class": 'Large_TV_Stand',
                        "id": 4184564187,
                        "qty": 0
                    }
                },
                'Stereo': {
                    "4185464188": {
                        'cat': 'Speaker,less than 1 tall',
                        'name': 'Speaker',
                        'subname': 'less than 1\' tall',
                        "size": 3,
                        "class": 'Shelf_Speaker',
                        "id": 4185464188,
                        "qty": 0
                    },
                    "4185464189": {
                        'cat': 'Speaker,1 - 2 tall',
                        'name': 'Speaker',
                        'subname': '1\' - 2\' tall',
                        "size": 5,
                        "class": 'Shelf_Speaker',
                        "id": 4185464189,
                        "qty": 0
                    },
                    "4185464190": {
                        'cat': 'Speaker,2 or taller',
                        'name': 'Speaker',
                        'subname': '2\' or taller',
                        "size": 8,
                        "class": 'Floor_Speakers',
                        "id": 4185464190,
                        "qty": 0
                    },
                    '4185464191': {
                        'cat': 'Stereo,Stereo Or Video Component',
                        'name': 'Stereo Or Video Component',
                        "size": 2,
                        "class": 'Stereo_or_Video_Component',
                        "id": 4185464191,
                        "qty": 0
                    }
                },
                'Lamps': {
                    "4185465092": {
                        'cat': 'Floor Lamp,less than 5 tall',
                        'name': 'Floor Lamp',
                        'subname': 'less than 5\' tall',
                        "size": 5,
                        "class": 'Floor_Lamp',
                        "id": 4185465092,
                        "qty": 0
                    },
                    "4185465093": {
                        'cat': 'Floor Lamp,approx 7 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 7\' tall',
                        "size": 10,
                        "class": 'Floor_Lamp',
                        "id": 4185465093,
                        "qty": 0
                    },
                    "4185465094": {
                        'cat': 'Floor Lamp,approx 9 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 9\' tall',
                        "size": 15,
                        "class": 'Floor_Lamp',
                        "id": 4185465094,
                        "qty": 0
                    },
                    "4185465095": {
                        'cat': 'Table Lamp,1 x 1 or smaller',
                        'name': 'Table Lamp',
                        'subname': '1\' x 1\' x 1\' or smaller',
                        "size": 3,
                        "class": 'Table_Lamp',
                        "id": 4185465095,
                        "qty": 0
                    },
                    "4185465096": {
                        'cat': 'Table Lamp,approx 2 x 2',
                        'name': 'Table Lamp',
                        'subname': 'approx 2\' x 2\' x 2\'',
                        "size": 4,
                        "class": 'Table_Lamp',
                        "id": 4185465096,
                        "qty": 0
                    },
                    "4185465097": {
                        'cat': 'Table Lamp,2.5 x 2.5 x 2.5 or larger',
                        'name': 'Table Lamp',
                        'subname': '2.5\' x 2.5\' x 2.5\' or larger',
                        "size": 5,
                        "class": 'Table_Lamp',
                        "id": 4185465097,
                        "qty": 0
                    },
                    '4185465098': {
                        'cat': 'Lamps,Tri-Head Lamp',
                        'name': 'Tri-Head Lamp',
                        "size": 27,
                        "class": 'Tri_Head_Lamp',
                        "id": 4185465098,
                        "qty": 0
                    }
                },
                'Tables': {
                    "4185465099": {
                        'cat': 'End Table,approx 1',
                        'name': 'End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 4185465099,
                        "qty": 0
                    },
                    "4185475000": {
                        'cat': 'End Table,approx 2',
                        'name': 'End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 4185475000,
                        "qty": 0
                    },
                    "4185475001": {
                        'cat': 'End Table,approx 3',
                        'name': 'End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 4185475001,
                        "qty": 0
                    },
                    "4185475002": {
                        'cat': 'Glass End Table,approx 1',
                        'name': 'Glass End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 4185475002,
                        "qty": 0
                    },
                    "4185475003": {
                        'cat': 'Glass End Table,approx 2',
                        'name': 'Glass End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 4185475003,
                        "qty": 0
                    },
                    "4185475004": {
                        'cat': 'Glass End Table,approx 3',
                        'name': 'Glass End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 4185475004,
                        "qty": 0
                    },
                    "4185475005": {
                        'cat': 'Glass Side Table,approx 1',
                        'name': 'Glass Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 4185475005,
                        "qty": 0
                    },
                    "4185475006": {
                        'cat': 'Glass Side Table,approx 2',
                        'name': 'Glass Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 15,
                        "class": 'Large_Side_Table',
                        "id": 4185475006,
                        "qty": 0
                    },
                    "4185475007": {
                        'cat': 'Glass Side Table,approx 3',
                        'name': 'Glass Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 20,
                        "class": 'Large_Side_Table',
                        "id": 4185475007,
                        "qty": 0
                    },
                    '4185475008': {
                        'cat': 'Tables,Night Table',
                        'name': 'Night Table',
                        "size": 5,
                        "class": 'Night_Table',
                        "id": 4185475008,
                        "qty": 0
                    },
                    '4185475009': {
                        'cat': 'Tables,Nightstand',
                        'name': 'Nightstand',
                        "size": 13,
                        "class": 'Nightstand',
                        "id": 4185475009,
                        "qty": 0
                    },
                    "4185475010": {
                        'cat': 'Side Table,approx 1',
                        'name': 'Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'Large_Side_Table',
                        "id": 4185475010,
                        "qty": 0
                    },
                    "4185475011": {
                        'cat': 'Side Table,approx 2',
                        'name': 'Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'Large_Side_Table',
                        "id": 4185475011,
                        "qty": 0
                    },
                    "4185475012": {
                        'cat': 'Side Table,approx 3',
                        'name': 'Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 4185475012,
                        "qty": 0
                    },
                },
                'Chairs': {
                    '4183275013': {
                        'cat': 'Chairs,Arm Chair',
                        'name': 'Arm Chair',
                        "size": 12,
                        "class": 'Arm_Chair',
                        "id": 4183275013,
                        "qty": 0
                    },
                    '4183275014': {
                        'cat': 'Chairs,Club Chair',
                        'name': 'Club Chair',
                        "size": 20,
                        "class": 'Club_Chair',
                        "id": 4183275014,
                        "qty": 0
                    },
                },
                'Mirrors': {
                    "4183275015": {
                        'cat': 'Mirror,approx 2 x 3',
                        'name': 'Mirror',
                        'subname': 'approx 2\' x 3\'',
                        "size": 5,
                        "class": 'Small_Mirror',
                        "id": 4183275015,
                        "qty": 0
                    },
                    "4183275016": {
                        'cat': 'Mirror,approx 2.5 x 5',
                        'name': 'Mirror',
                        'subname': 'approx 2.5\' x 5\'',
                        "size": 8,
                        "class": 'Small_Mirror',
                        "id": 4183275016,
                        "qty": 0
                    },
                    "4183275017": {
                        'cat': 'Mirror,approx 4 x 8',
                        'name': 'Mirror',
                        'subname': 'approx 4\' x 8\'',
                        "size": 10,
                        "class": 'Large_Mirror',
                        "id": 4183275017,
                        "qty": 0
                    },
                },
                'Bookcases': {
                    "4183275018": {
                        'cat': 'Bookcase,approx 3 x 3',
                        'name': 'Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 4183275018,
                        "qty": 0
                    },
                    "4183275019": {
                        'cat': 'Bookcase,approx 4 x 6',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 4183275019,
                        "qty": 0
                    },
                    "4183275020": {
                        'cat': 'Bookcase,approx 4 x 8',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 4183275020,
                        "qty": 0
                    },
                    "4183275021": {
                        'cat': 'Glass Front Bookcase,approx 3 x 3',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 4183275021,
                        "qty": 0
                    },
                    "4183275022": {
                        'cat': 'Glass Front Bookcase,approx 4 x 6',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 4183275022,
                        "qty": 0
                    },
                    "4183275023": {
                        'cat': 'Glass Front Bookcase,approx 4 x 8',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 4183275023,
                        "qty": 0
                    },
                },
                'Paintings & Pictures': {
                    "4183271024": {
                        'cat': 'Painting,approx 1.5 x 2',
                        'name': 'Painting',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Painting',
                        "id": 4183271024,
                        "qty": 0
                    },
                    "4183271025": {
                        'cat': 'Painting,approx 2.5 x 4',
                        'name': 'Painting',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Painting',
                        "id": 4183271025,
                        "qty": 0
                    },
                    "4183271026": {
                        'cat': 'Painting,approx 4 x 6',
                        'name': 'Painting',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Painting',
                        "id": 4183271026,
                        "qty": 0
                    },
                    "4183271027": {
                        'cat': 'Picture,approx 1.5 x 2',
                        'name': 'Picture',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Picture_with_Frame',
                        "id": 4183271027,
                        "qty": 0
                    },
                    "4183271028": {
                        'cat': 'Picture,approx 2.5 x 4',
                        'name': 'Picture',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Picture_with_Frame',
                        "id": 4183271028,
                        "qty": 0
                    },
                    "4183271029": {
                        'cat': 'Picture,approx 4 x 6',
                        'name': 'Picture',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Picture_with_Frame',
                        "id": 4183271029,
                        "qty": 0
                    },
                    '4183271030': {
                        'cat': 'Picture Crate',
                        'name': 'Picture Crate',
                        "size": 16,
                        "class": 'Picture_Crate',
                        "id": 4183271030,
                        "qty": 0
                    }
                },
                'Odds & Ends': {
                    '4183271031': {
                        'cat': 'CD Rack',
                        'name': 'CD Rack',
                        "size": 7,
                        "class": 'CD_Rack',
                        "id": 4183271031,
                        "qty": 0
                    },
                    '4183271032': {
                        'cat': 'Clothes Steamer',
                        'name': 'Clothes Steamer',
                        "size": 3,
                        "class": 'Clothes_Steamer',
                        "id": 4183271032,
                        "qty": 0
                    },
                    '4183271033': {
                        'cat': 'Clothing Rack',
                        'name': 'Clothing Rack',
                        "size": 15,
                        "class": 'Clothes_Rack',
                        "id": 4183271033,
                        "qty": 0
                    },
                    '4183271034': {
                        'cat': 'Fan,Table',
                        'name': 'Fan',
                        'subname': 'Table',
                        "size": 3,
                        "class": 'Fan',
                        "id": 4183271034,
                        "qty": 0
                    },
                    '4183271035': {
                        'cat': 'Fan,Standing',
                        'name': 'Fan',
                        'subname': 'Standing',
                        "size": 12,
                        "class": 'Standing_Fan',
                        "id": 4183271035,
                        "qty": 0
                    },
                    '4183271036': {
                        'cat': 'Garbage Pail',
                        'name': 'Garbage Pail',
                        "size": 3,
                        "class": 'Garbage_Pail',
                        "id": 4183271036,
                        "qty": 0
                    },
                    '4183271037': {
                        'cat': 'Hamper',
                        'name': 'Hamper',
                        "size": 5,
                        "class": 'Hamper',
                        "id": 4183271037,
                        "qty": 0
                    },
                    '4183271038': {
                        'cat': 'Rug,Runner',
                        'name': 'Rug',
                        'subname': 'Runner',
                        "size": 3,
                        "class": 'Runner_Rug',
                        "id": 4183271038,
                        "qty": 0
                    },
                    "4183271039": {
                        'cat': 'Rug,4 long rolled',
                        'name': 'Rug',
                        'subname': '4\' long rolled',
                        "size": 5,
                        "class": 'Small_rug',
                        "id": 4183271039,
                        "qty": 0
                    },
                    "4183271040": {
                        'cat': 'Rug,7 long rolled',
                        'name': 'Rug',
                        'subname': '7\' long rolled',
                        "size": 10,
                        "class": 'Medium_Rug',
                        "id": 4183271040,
                        "qty": 0
                    },
                    "4183271041": {
                        'cat': 'Rug,9 long rolled',
                        'name': 'Rug',
                        'subname': '9\' long rolled',
                        "size": 15,
                        "class": 'Large_Rug',
                        "id": 4183271041,
                        "qty": 0
                    },
                    '4183271042': {
                        'cat': 'Shoe Rack',
                        'name': 'Shoe Rack',
                        "size": 10,
                        "class": 'Shoe_Rack',
                        "id": 4183271042,
                        "qty": 0
                    },
                    '4183271043': {
                        'cat': 'Suitcase',
                        'name': 'Suitcase',
                        "size": 5,
                        "class": 'Suitcase',
                        "id": 4183271043,
                        "qty": 0
                    }
                }
            },
            'Dining Room': {
                'Packing Boxes': {
                    "542117888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 542117888,
                        "qty": 0
                    },
                    "542117889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 542117889,
                        "qty": 0
                    },
                    "542117890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 542117890,
                        "qty": 0
                    },
                    "542117891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 542117891,
                        "qty": 0
                    },
                    "542117892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 542117892,
                        "qty": 0
                    },
                    "542117893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 542117893,
                        "qty": 0
                    },
                    "542117894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 542117894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "2317888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 2317888,
                        "qty": 0
                    },
                    "2317889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 2317889,
                        "qty": 0
                    },
                    "2317890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 2317890,
                        "qty": 0
                    },
                    "2317891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 2317891,
                        "qty": 0
                    },
                    "2317892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 2317892,
                        "qty": 0
                    },
                    "2317893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 2317893,
                        "qty": 0
                    },
                    "2317894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 2317894,
                        "qty": 0
                    }
                },
                'Tables': {
                    '418744': {
                        'cat': 'Tables,Buffet',
                        'name': 'Buffet',
                        "size": 35,
                        "class": 'Buffet',
                        "id": 418744,
                        "qty": 0
                    },
                    '418745': {
                        'cat': 'Tables,Console Table',
                        'name': 'Console Table',
                        "size": 15,
                        "class": 'Console',
                        "id": 418745,
                        "qty": 0
                    },
                    '418746': {
                        'cat': 'Dining Table,Seats 4',
                        'name': 'Dining Table',
                        'subname': 'Seats 4',
                        "size": 25,
                        "class": 'Dining_Table',
                        "id": 418746,
                        "qty": 0
                    },
                    '418747': {
                        'cat': 'Dining Table,Seats 6',
                        'name': 'Dining Table',
                        'subname': 'Seats 6',
                        "size": 40,
                        "class": 'Dining_Table',
                        "id": 418747,
                        "qty": 0
                    },
                    '418748': {
                        'cat': 'Dining Table,Seats 8',
                        'name': 'Dining Table',
                        'subname': 'Seats 8',
                        "size": 60,
                        "class": 'Dining_Table',
                        "id": 418748,
                        "qty": 0
                    },
                    "418749": {
                        'cat': 'End Table,approx 1',
                        'name': 'End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 418749,
                        "qty": 0
                    },
                    "418750": {
                        'cat': 'End Table,approx 2',
                        'name': 'End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 418750,
                        "qty": 0
                    },
                    "418751": {
                        'cat': 'End Table,approx 3',
                        'name': 'End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 418751,
                        "qty": 0
                    },
                    "418752": {
                        'cat': 'Side Table,approx 1',
                        'name': 'Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'Large_Side_Table',
                        "id": 418752,
                        "qty": 0
                    },
                    "418753": {
                        'cat': 'Side Table,approx 2',
                        'name': 'Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'Large_Side_Table',
                        "id": 418753,
                        "qty": 0
                    },
                    "418754": {
                        'cat': 'Side Table,approx 3',
                        'name': 'Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 418754,
                        "qty": 0
                    },
                },
                'Sofas and Couches': {

                    '6182314521': {
                        'cat': 'Ottoman,approx 18',
                        'name': 'Ottoman',
                        'subname': 'approx 18" x 18" x 18"',
                        "size": 5,
                        "class": 'Small_Ottoman',
                        "id": 6182314521,
                        "qty": 0
                    },
                    "6182314522": {
                        'cat': 'Ottoman,approx 2',
                        'name': 'Ottoman',
                        'subname': "approx 2' x 2' x 2'",
                        "size": 10,
                        "class": 'Medium_Ottoman',
                        "id": 6182314522,
                        "qty": 0
                    },
                    "6182314523": {
                        'cat': 'Ottoman,bigger than 2',
                        'name': 'Ottoman',
                        'subname': 'bigger than 2\' x 2\' x 2\'',
                        "size": 15,
                        "class": 'Large_Ottoman',
                        "id": 6182314523,
                        "qty": 0
                    },
                    '6182314524': {
                        'cat': 'Sofa,Loveseat',
                        'name': 'Sofa',
                        'subname': 'Loveseat',
                        "size": 35,
                        "class": 'Love_Seat',
                        "id": 6182314524,
                        "qty": 0
                    },
                    '6182314525': {
                        'cat': 'Sofa,3 Seater',
                        'name': 'Sofa',
                        'subname': '3 Seater',
                        "size": 60,
                        "class": 'Seater_Sofa_3',
                        "id": 6182314525,
                        "qty": 0
                    },
                    '6182314526': {
                        'cat': 'Sofa,4 Seater',
                        'name': 'Sofa',
                        'subname': '4 Seater',
                        "size": 70,
                        "class": 'Seater_Sofa_4',
                        "id": 6182314526,
                        "qty": 0
                    },
                    '6182314527': {
                        'cat': 'Sofa,4 Seater Sectional',
                        'name': 'Sofa',
                        'subname': '4 Seater Sectional',
                        "size": 80,
                        "class": 'Seater_Sofa_4',
                        "id": 6182314527,
                        "qty": 0
                    },
                    '6182314528': {
                        'cat': 'Sofa,8 Seater Sectional',
                        'name': 'Sofa',
                        'subname': '8 Seater Sectional',
                        "size": 123,
                        "class": 'Sofa_Large_Sectional',
                        "id": 6182314528,
                        "qty": 0
                    },
                    '6182314529': {
                        'cat': 'Sofa,Sofa Bed',
                        'name': 'Sofa',
                        "size": 60,
                        'subname': 'Sofa Bed',
                        "class": 'Sofa_Bed',
                        "id": 6182314529,
                        "qty": 0
                    }
                },
                'Glass Tables': {
                    '418755': {
                        'cat': 'Glass Tables,Glass Buffet',
                        'name': 'Glass Buffet',
                        "size": 35,
                        "class": 'Buffet',
                        "id": 418755,
                        "qty": 0
                    },
                    '418756': {
                        'cat': 'Glass Tables,Glass Console Table',
                        'name': 'Glass Console Table',
                        "size": 15,
                        "class": 'Console',
                        "id": 418756,
                        "qty": 0
                    },
                    '418757': {
                        'cat': 'Glass Dining Table,Seats 4',
                        'name': 'Glass Dining Table',
                        'subname': 'Seats 4',
                        "size": 25,
                        "class": 'Dining_Table',
                        "id": 418757,
                        "qty": 0
                    },
                    '418758': {
                        'cat': 'Glass Dining Table,Seats 6',
                        'name': 'Glass Dining Table',
                        'subname': 'Seats 6',
                        "size": 40,
                        "class": 'Dining_Table',
                        "id": 418758,
                        "qty": 0
                    },
                    '418759': {
                        'cat': 'Glass Dining Table,Seats 8',
                        'name': 'Glass Dining Table',
                        'subname': 'Seats 8',
                        "size": 60,
                        "class": 'Dining_Table',
                        "id": 418759,
                        "qty": 0
                    },
                    "418760": {
                        'cat': 'Glass End Table,approx 1',
                        'name': 'Glass End Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 418760,
                        "qty": 0
                    },
                    "418761": {
                        'cat': 'Glass End Table,approx 2',
                        'name': 'Glass End Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 418761,
                        "qty": 0
                    },
                    "418762": {
                        'cat': 'Glass End Table,approx 3',
                        'name': 'Glass End Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 418762,
                        "qty": 0
                    },
                    "418763": {
                        'cat': 'Glass Side Table,approx 1',
                        'name': 'Glass Side Table',
                        'subname': 'approx 1\' x 1\'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 418763,
                        "qty": 0
                    },
                    "418764": {
                        'cat': 'Glass Side Table,approx 2',
                        'name': 'Glass Side Table',
                        'subname': 'approx 2\' x 2\'',
                        "size": 15,
                        "class": 'Large_Side_Table',
                        "id": 418764,
                        "qty": 0
                    },
                    "418765": {
                        'cat': 'Glass Side Table,approx 3',
                        'name': 'Glass Side Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 20,
                        "class": 'Large_Side_Table',
                        "id": 418765,
                        "qty": 0
                    },
                },
                'Chairs': {
                    '418766': {
                        'cat': 'Chairs,Dining Chair',
                        'name': 'Dining Chair',
                        "size": 6,
                        "class": 'Dining_Chair',
                        "id": 418766,
                        "qty": 0
                    }
                },
                'Cabinets': {
                    "418767": {
                        'cat': 'China Cabinet,approx 3 x 7 tall',
                        'name': 'China Cabinet',
                        'subname': 'approx 3\' x 7\' tall',
                        "size": 30,
                        "class": 'Small_China_Cabinet',
                        "id": 418767,
                        "qty": 0
                    },
                    "418768": {
                        'cat': 'China Cabinet,approx 3.5 x 7 tall',
                        'name': 'China Cabinet',
                        'subname': 'approx 3.5\' x 7\' tall',
                        "size": 40,
                        "class": 'Small_China_Cabinet',
                        "id": 418768,
                        "qty": 0
                    },
                    "418769": {
                        'cat': 'China Cabinet,approx 4 x 8 tall',
                        'name': 'China Cabinet',
                        'subname': 'approx 4\' x 8\' tall',
                        "size": 50,
                        "class": 'Large_China_Cabinet',
                        "id": 418769,
                        "qty": 0
                    },
                    "412038588": {
                        'cat': 'Bar',
                        'name': 'Bar',
                        "size": 20,
                        "class": 'Bar',
                        "id": 412038588,
                        "qty": 0
                    },
                    "418770": {
                        'cat': 'Credenza,approx 5 long',
                        'name': 'Credenza',
                        'subname': 'approx 5\' long',
                        "size": 30,
                        "class": 'Small_Credenza',
                        "id": 418770,
                        "qty": 0
                    },
                    "418771": {
                        'cat': 'Credenza,approx 7 long',
                        'name': 'Credenza',
                        'subname': 'approx 7\' long',
                        "size": 35,
                        "class": 'Small_Credenza',
                        "id": 418771,
                        "qty": 0
                    },
                    "418772": {
                        'cat': 'Credenza,approx 9 long',
                        'name': 'Credenza',
                        'subname': 'approx 9\' long',
                        "size": 40,
                        "class": 'Large_Credenza',
                        "id": 418772,
                        "qty": 0
                    },
                    "418773": {
                        'cat': 'Glass China Cabinet,approx 3 x 7 tall',
                        'name': 'Glass China Cabinet',
                        'subname': 'approx 3\' x 7\' tall',
                        "size": 30,
                        "class": 'Small_China_Cabinet',
                        "id": 418773,
                        "qty": 0
                    },
                    "418774": {
                        'cat': 'Glass China Cabinet,approx 3.5 x 7 tall',
                        'name': 'Glass China Cabinet',
                        'subname': 'approx 3.5\' x 7\' tall',
                        "size": 40,
                        "class": 'Small_China_Cabinet',
                        "id": 418774,
                        "qty": 0
                    },
                    "418775": {
                        'cat': 'Glass China Cabinet,approx 4 x 8 tall',
                        'name': 'Glass China Cabinet',
                        'subname': 'approx 4\' x 8\' tall',
                        "size": 50,
                        "class": 'Large_China_Cabinet',
                        "id": 418775,
                        "qty": 0
                    },
                },
                'Paintings & Pictures': {
                    "418776": {
                        'cat': 'Painting,approx 1.5 x 2',
                        'name': 'Painting',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Painting',
                        "id": 418776,
                        "qty": 0
                    },
                    "418777": {
                        'cat': 'Painting,approx 2.5 x 4',
                        'name': 'Painting',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Painting',
                        "id": 418777,
                        "qty": 0
                    },
                    "418778": {
                        'cat': 'Painting,approx 4 x 6',
                        'name': 'Painting',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Painting',
                        "id": 418778,
                        "qty": 0
                    },
                    "418779": {
                        'cat': 'Picture,approx 1.5 x 2',
                        'name': 'Picture',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Picture_with_Frame',
                        "id": 418779,
                        "qty": 0
                    },
                    "418780": {
                        'cat': 'Picture,approx 2.5 x 4',
                        'name': 'Picture',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Picture_with_Frame',
                        "id": 418780,
                        "qty": 0
                    },
                    "418781": {
                        'cat': 'Picture,approx 4 x 6',
                        'name': 'Picture',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Picture_with_Frame',
                        "id": 418781,
                        "qty": 0
                    },
                    '418782': {
                        'cat': 'Picture Crate',
                        'name': 'Picture Crate',
                        "size": 16,
                        "class": 'Picture_Crate',
                        "id": 418782,
                        "qty": 0
                    }
                },
                'Odds & Ends': {
                    "418783": {
                        'cat': 'Chandelier,approx 1 cube',
                        'name': 'Chandelier',
                        'subname': 'approx 1\' cube',
                        "size": 5,
                        "class": 'Chandelier',
                        "id": 418783,
                        "qty": 0
                    },
                    "418784": {
                        'cat': 'Chandelier,approx 2 x 3',
                        'name': 'Chandelier',
                        'subname': 'approx 2\' x 2\' x 3\'',
                        "size": 10,
                        "class": 'Chandelier',
                        "id": 418784,
                        "qty": 0
                    },
                    "418785": {
                        'cat': 'Chandelier,approx 3 x 3 x 5',
                        'name': 'Chandelier',
                        'subname': 'approx 3\' x 3\' x 5\'',
                        "size": 15,
                        "class": 'Chandelier',
                        "id": 418785,
                        "qty": 0
                    },
                    '418786': {
                        'cat': 'Rug,Runner',
                        'name': 'Rug',
                        'subname': 'Runner',
                        "size": 3,
                        "class": 'Runner_Rug',
                        "id": 418786,
                        "qty": 0
                    },
                    "418787": {
                        'cat': 'Rug,4 long rolled',
                        'name': 'Rug',
                        'subname': '4\' long rolled',
                        "size": 5,
                        "class": 'Small_rug',
                        "id": 418787,
                        "qty": 0
                    },
                    "418788": {
                        'cat': 'Rug,7 long rolled',
                        'name': 'Rug',
                        'subname': '7\' long rolled',
                        "size": 10,
                        "class": 'Medium_Rug',
                        "id": 418788,
                        "qty": 0
                    },
                    "418789": {
                        'cat': 'Rug,9 long rolled',
                        'name': 'Rug',
                        'subname': '9\' long rolled',
                        "size": 15,
                        "class": 'Large_Rug',
                        "id": 418789,
                        "qty": 0
                    }
                }
            },
            'Kitchen': {
                'Packing Boxes': {
                    "1517888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 1517888,
                        "qty": 0
                    },
                    "1517889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 1517889,
                        "qty": 0
                    },
                    "1517890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 1517890,
                        "qty": 0
                    },
                    "1517891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 1517891,
                        "qty": 0
                    },
                    "1517892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 1517892,
                        "qty": 0
                    },
                    "1517893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 1517893,
                        "qty": 0
                    },
                    "1517894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 1517894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "2217888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 2217888,
                        "qty": 0
                    },
                    "2217889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 2217889,
                        "qty": 0
                    },
                    "2217890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 2217890,
                        "qty": 0
                    },
                    "2217891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 2217891,
                        "qty": 0
                    },
                    "2217892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 2217892,
                        "qty": 0
                    },
                    "2217893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 2217893,
                        "qty": 0
                    },
                    "2217894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 2217894,
                        "qty": 0
                    }
                },
                'Tables': {
                    '418790': {
                        'cat': 'Tables,Glass Kitchen Table',
                        'name': 'Glass Kitchen Table',
                        "size": 20,
                        "class": 'Kitchen_Table',
                        "id": 418790,
                        "qty": 0
                    },
                    '418791': {
                        'cat': 'Tables,Kitchen Table',
                        'name': 'Kitchen Table',
                        "size": 20,
                        "class": 'Kitchen_Table',
                        "id": 418791,
                        "qty": 0
                    },
                },
                'Chairs': {
                    '418792': {
                        'cat': 'Chairs,Bar Stool',
                        'name': 'Bar Stool',
                        "size": 6,
                        "class": 'Bar_Stool',
                        "id": 418792,
                        "qty": 0
                    },
                    '418793': {
                        'cat': 'Chairs,High Chair',
                        'name': 'High Chair',
                        "size": 8,
                        "class": 'High_Chair',
                        "id": 418793,
                        "qty": 0
                    },
                    '418794': {
                        'cat': 'Chairs,Kitchen Chair',
                        'name': 'Kitchen Chair',
                        "size": 5,
                        "class": 'Kitchen_Chair',
                        "id": 418794,
                        "qty": 0
                    },
                    '418795': {
                        'cat': 'Chairs,Small Stool',
                        'name': 'Small Stool',
                        "size": 2,
                        "class": 'Small_Stool',
                        "id": 418795,
                        "qty": 0
                    },
                },
                'Cabinets': {
                    '418796': {
                        'cat': 'Cabinets,Kitchen Cabinet',
                        'name': 'Kitchen Cabinet',
                        "size": 15,
                        "class": 'Small_China_Cabinet',
                        "id": 418796,
                        "qty": 0
                    },
                    "418234770": {
                        'cat': 'Credenza,approx 5 long',
                        'name': 'Credenza',
                        'subname': 'approx 5\' long',
                        "size": 30,
                        "class": 'Small_Credenza',
                        "id": 418234770,
                        "qty": 0
                    },
                    "418875771": {
                        'cat': 'Credenza,approx 7 long',
                        'name': 'Credenza',
                        'subname': 'approx 7\' long',
                        "size": 35,
                        "class": 'Small_Credenza',
                        "id": 418875771,
                        "qty": 0
                    },
                    "418180772": {
                        'cat': 'Credenza,approx 9 long',
                        'name': 'Credenza',
                        'subname': 'approx 9\' long',
                        "size": 40,
                        "class": 'Large_Credenza',
                        "id": 418180772,
                        "qty": 0
                    },
                },
                'Appliances': {
                    '418797': {
                        'cat': 'Appliances,Blender',
                        'name': 'Blender',
                        "size": 1,
                        "class": 'Blender',
                        "id": 418797,
                        "qty": 0
                    },
                    '418798': {
                        'cat': 'Appliances,Bread Maker',
                        'name': 'Bread Maker',
                        "size": 1,
                        "class": 'Bread_Maker',
                        "id": 418798,
                        "qty": 0
                    },
                    '418799': {
                        'cat': 'Appliances,Chest Freezer',
                        'name': 'Chest Freezer',
                        "size": 26,
                        "class": 'Chest_Freezer',
                        "id": 418799,
                        "qty": 0
                    },
                    '418800': {
                        'cat': 'Appliances,Coffee Maker',
                        'name': 'Coffee Maker',
                        "size": 2,
                        "class": 'Coffee_maker',
                        "id": 418800,
                        "qty": 0
                    },
                    '418801': {
                        'cat': 'Appliances,Crock Pot',
                        'name': 'Crock Pot',
                        "size": 2,
                        "class": 'Crock_Pot',
                        "id": 418801,
                        "qty": 0
                    },
                    '418802': {
                        'cat': 'Appliances,Dishwasher',
                        'name': 'Dishwasher',
                        "size": 25,
                        "class": 'Dishwasher',
                        "id": 418802,
                        "qty": 0
                    },
                    '418803': {
                        'cat': 'Appliances,Food Processor',
                        'name': 'Food Processor',
                        "size": 2,
                        "class": 'Food_Processor',
                        "id": 418803,
                        "qty": 0
                    },
                    '418804': {
                        'cat': 'Appliances,Juicer',
                        'name': 'Juicer',
                        "size": 2,
                        "class": 'Juicer',
                        "id": 418804,
                        "qty": 0
                    },
                    '418805': {
                        'cat': 'Appliances,Microwave',
                        'name': 'Microwave',
                        "size": 5,
                        "class": 'Microwave',
                        "id": 418805,
                        "qty": 0
                    },
                    '418806': {
                        'cat': 'Appliances,Oven',
                        'name': 'Oven',
                        "size": 25,
                        "class": 'Oven',
                        "id": 418806,
                        "qty": 0
                    },
                    '418807': {
                        'cat': 'Refrigerator,Mini',
                        'name': 'Refrigerator',
                        'subname': 'Mini',
                        "size": 10,
                        "class": 'Mini_Refrigerator',
                        "id": 418807,
                        "qty": 0
                    },
                    '418808': {
                        'cat': 'Refrigerator,Wine',
                        'name': 'Refrigerator',
                        'subname': 'Wine',
                        "size": 10,
                        "class": 'Wine_Refrigerator',
                        "id": 418808,
                        "qty": 0
                    },
                    "418809": {
                        'cat': 'Refrigerator,under 5 tall',
                        'name': 'Refrigerator',
                        'subname': 'under 5',
                        "size": 25,
                        "class": 'Small_Refrigerator',
                        "id": 418809,
                        "qty": 0
                    },
                    "418810": {
                        'cat': 'Refrigerator,under 6.5 tall',
                        'name': 'Refrigerator',
                        'subname': 'under 6.5\' tall',
                        "size": 50,
                        "class": 'Medium_Refrigerator',
                        "id": 418810,
                        "qty": 0
                    },
                    "418811": {
                        'cat': 'Refrigerator,taller than 7',
                        'name': 'Refrigerator',
                        'subname': 'taller than 7\'',
                        "size": 65,
                        "class": 'Large_Refrigerator',
                        "id": 418811,
                        "qty": 0
                    },
                    "418812": {
                        'cat': 'Refrigerator,wider than 5',
                        'name': 'Refrigerator',
                        'subname': 'wider than 5\'',
                        "size": 65,
                        "class": 'Large_Refrigerator',
                        "id": 418812,
                        "qty": 0
                    },
                    '418813': {
                        'cat': 'Appliances,Toaster Oven',
                        'name': 'Toaster Oven',
                        "size": 2,
                        "class": 'Toaster_Oven',
                        "id": 418813,
                        "qty": 0
                    },
                },
                'Odds & Ends': {
                    '418814': {
                        'cat': 'Backer Rack',
                        'name': 'Backer Rack',
                        "size": 40,
                        "class": 'Bakers_Rack',
                        "id": 418814,
                        "qty": 0
                    },
                    '418815': {
                        'cat': 'Butcher Block',
                        'name': 'Butcher Block',
                        "size": 15,
                        "class": 'Butchers_Block',
                        "id": 418815,
                        "qty": 0
                    },
                    '418816': {
                        'cat': 'Garbage Bin',
                        'name': 'Garbage Bin',
                        "size": 7,
                        "class": 'Garbage_Can',
                        "id": 418816,
                        "qty": 0
                    },
                    '418817': {
                        'cat': 'Garbage Can',
                        'name': 'Garbage Can',
                        "size": 5,
                        "class": 'Garbage_Can',
                        "id": 418817,
                        "qty": 0
                    },
                    '418818': {
                        'cat': 'Microwave Cart',
                        'name': 'Microwave Cart',
                        "size": 10,
                        "class": 'Microwave_Cart',
                        "id": 418818,
                        "qty": 0
                    },
                    '418819': {
                        'cat': 'Water Cooler',
                        'name': 'Water Cooler',
                        "size": 8,
                        "class": 'Water_Cooler',
                        "id": 418819,
                        "qty": 0
                    },
                    '418820': {
                        'cat': 'Wine Rack',
                        'name': 'Wine Rack',
                        "size": 7,
                        "class": 'Wine_Rack',
                        "id": 418820,
                        "qty": 0
                    },
                }
            },
            'Kids Room': {
                'Packing Boxes': {
                    "6617888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 6617888,
                        "qty": 0
                    },
                    "6617889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 6617889,
                        "qty": 0
                    },
                    "6617890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 6617890,
                        "qty": 0
                    },
                    "6617891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 6617891,
                        "qty": 0
                    },
                    "6617892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 6617892,
                        "qty": 0
                    },
                    "6617893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 6617893,
                        "qty": 0
                    },
                    "6617894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 6617894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "7617888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 7617888,
                        "qty": 0
                    },
                    "7617889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 7617889,
                        "qty": 0
                    },
                    "7617890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 7617890,
                        "qty": 0
                    },
                    "7617891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 7617891,
                        "qty": 0
                    },
                    "7617892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 7617892,
                        "qty": 0
                    },
                    "7617893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 7617893,
                        "qty": 0
                    },
                    "7617894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 7617894,
                        "qty": 0
                    }
                },
                'Beds': {
                    '418821': {
                        'cat': 'Beds,Bassinet',
                        'name': 'Bassinet',
                        "size": 10,
                        "class": 'Bassinet',
                        "id": 418821,
                        "qty": 0
                    },
                    '418822': {
                        'cat': 'Beds,Bunk Bed',
                        'name': 'Bunk Bed',
                        "size": 110,
                        "class": 'Bunk_Bed',
                        "id": 418822,
                        "qty": 0
                    },
                    "418823": {
                        'cat': 'Beds,Childrens Bed',
                        'name': 'Children\'s Bed',
                        "size": 20,
                        "class": 'Childrens_Bed',
                        "id": 418823,
                        "qty": 0
                    },
                    '418824': {
                        'cat': 'Beds,Crib',
                        'name': 'Crib',
                        "size": 15,
                        "class": 'Crib',
                        "id": 418824,
                        "qty": 0
                    },
                    "418825": {
                        'cat': 'Beds,Toddlers Bed',
                        'name': 'Toddler\'s Bed',
                        "size": 15,
                        "class": 'Childrens_Bed',
                        "id": 418825,
                        "qty": 0
                    },
                },
                'Tables': {
                    '418826': {
                        'cat': 'Tables,Changing Table',
                        'name': 'Changing Table',
                        "size": 15,
                        "class": 'Changing_Table',
                        "id": 418826,
                        "qty": 0
                    },
                    "418827": {
                        'cat': 'Tables,Childrens Table',
                        'name': 'Children\'s Table',
                        "size": 5,
                        "class": 'Childrens_Table',
                        "id": 418827,
                        "qty": 0
                    },
                },
                'Chairs': {
                    "418828": {
                        'cat': 'Chairs,Childrens Chair',
                        'name': 'Children\'s Chair',
                        "size": 4,
                        "class": 'Childrens_Chair',
                        "id": 418828,
                        "qty": 0
                    },
                },
                'Toys': {
                    '418829': {
                        'cat': 'Toys,Dollhouse',
                        'name': 'Dollhouse',
                        "size": 7,
                        "class": 'Dollhouse',
                        "id": 418829,
                        "qty": 0
                    },
                    '418830': {
                        'cat': 'Toys,Play Set',
                        'name': 'Play Set',
                        "size": 10,
                        "class": 'Play_Set',
                        "id": 418830,
                        "qty": 0
                    },
                    '418831': {
                        'cat': 'Toys,Playpen',
                        'name': 'Playpen',
                        "size": 10,
                        "class": 'Play_Pen',
                        "id": 418831,
                        "qty": 0
                    },
                    '418832': {
                        'cat': 'Toys,Toy Car',
                        'name': 'Toy Car',
                        "size": 15,
                        "class": 'Toy_Car',
                        "id": 418832,
                        "qty": 0
                    },
                },
                'Odds & Ends': {
                    '418833': {
                        'cat': 'Car Seat',
                        'name': 'Car Seat',
                        "size": 5,
                        "class": 'Car_Seat',
                        "id": 418833,
                        "qty": 0
                    },
                    '418834': {
                        'cat': 'Stroller',
                        'name': 'Stroller',
                        "size": 10,
                        "class": 'Stroller',
                        "id": 418834,
                        "qty": 0
                    },
                    '418835': {
                        'cat': 'Toy Bin',
                        'name': 'Toy Bin',
                        "size": 5,
                        "class": 'Toy_Bin',
                        "id": 418835,
                        "qty": 0
                    },
                    '418836': {
                        'cat': 'Toy Trunk',
                        'name': 'Toy Trunk',
                        "size": 10,
                        "class": 'Trunk',
                        "id": 418836,
                        "qty": 0
                    },
                }
            },
            'Office': {
                'Packing Boxes': {
                    "8117888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 8117888,
                        "qty": 0
                    },
                    "8117889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 8117889,
                        "qty": 0
                    },
                    "8117890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 8117890,
                        "qty": 0
                    },
                    "8117891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 8117891,
                        "qty": 0
                    },
                    "8117892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 8117892,
                        "qty": 0
                    },
                    "8117893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 8117893,
                        "qty": 0
                    },
                    "8117894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 8117894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "4317888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 4317888,
                        "qty": 0
                    },
                    "4317889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 4317889,
                        "qty": 0
                    },
                    "4317890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 4317890,
                        "qty": 0
                    },
                    "4317891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 4317891,
                        "qty": 0
                    },
                    "4317892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 4317892,
                        "qty": 0
                    },
                    "4317893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 4317893,
                        "qty": 0
                    },
                    "4317894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 4317894,
                        "qty": 0
                    }
                },
                'Tables & Desks': {
                    "418836": {
                        'cat': 'Conference Table,6 long',
                        'name': 'Conference Table',
                        'subname': '6\' long',
                        "size": 30,
                        "class": 'Conference_Table',
                        "id": 418836,
                        "qty": 0
                    },
                    "418837": {
                        'cat': 'Conference Table,8 long',
                        'name': 'Conference Table',
                        'subname': '8\' long',
                        "size": 35,
                        "class": 'Conference_Table',
                        "id": 418837,
                        "qty": 0
                    },
                    "418838": {
                        'cat': 'Conference Table,10 long',
                        'name': 'Conference Table',
                        'subname': '10\' long',
                        "size": 40,
                        "class": 'Conference_Table',
                        "id": 418838,
                        "qty": 0
                    },
                    "418839": {
                        'cat': 'Conference Table,12 long',
                        'name': 'Conference Table',
                        'subname': '12\' long',
                        "size": 45,
                        "class": 'Conference_Table',
                        "id": 418839,
                        "qty": 0
                    },
                    "418840": {
                        'cat': 'Desk,approx 4 x 2.5',
                        'name': 'Desk',
                        'subname': 'approx 4\' x 2.5\'',
                        "size": 15,
                        "class": 'Small_Desk',
                        "id": 418840,
                        "qty": 0
                    },
                    "418841": {
                        'cat': 'Desk,approx 6 x 2.5',
                        'name': 'Desk',
                        'subname': 'approx 6\' x 2.5\'',
                        "size": 20,
                        "class": 'Small_Desk',
                        "id": 418841,
                        "qty": 0
                    },
                    "418842": {
                        'cat': 'Desk,approx 8 x 3',
                        'name': 'Desk',
                        'subname': 'approx 8\' x 3\'',
                        "size": 25,
                        "class": 'Small_Desk',
                        "id": 418842,
                        "qty": 0
                    },
                    "418843": {
                        'cat': 'Desk,with hutch',
                        'name': 'Desk',
                        'subname': 'with hutch',
                        "size": 43,
                        "class": 'Desk_With_Hutch',
                        "id": 418843,
                        "qty": 0
                    },
                    "418844": {
                        'cat': 'Desk,with return',
                        'name': 'Desk',
                        'subname': 'with return',
                        "size": 55,
                        "class": 'Office_with_Return',
                        "id": 418844,
                        "qty": 0
                    },
                    '418845': {
                        'cat': 'Tables and Desks,Drafting Table',
                        'name': 'Drafting Table',
                        "size": 25,
                        "class": 'Drafting_Table',
                        "id": 418845,
                        "qty": 0
                    },
                    "418846": {
                        'cat': 'Glass Conference Table,6 long',
                        'name': 'Glass Conference Table',
                        'subname': '6\' long',
                        "size": 30,
                        "class": 'Conference_Table',
                        "id": 418846,
                        "qty": 0
                    },
                    "418847": {
                        'cat': 'Glass Conference Table,8 long',
                        'name': 'Glass Conference Table',
                        'subname': '8\' long',
                        "size": 35,
                        "class": 'Conference_Table',
                        "id": 418847,
                        "qty": 0
                    },
                    "418848": {
                        'cat': 'Glass Conference Table,10 long',
                        'name': 'Glass Conference Table',
                        'subname': '10\' long',
                        "size": 40,
                        "class": 'Conference_Table',
                        "id": 418848,
                        "qty": 0
                    },
                    "418849": {
                        'cat': 'Glass Conference Table,12 long',
                        'name': 'Glass Conference Table',
                        'subname': '12\' long',
                        "size": 45,
                        "class": 'Conference_Table',
                        "id": 418849,
                        "qty": 0
                    },
                    "418850": {
                        'cat': 'Glass Desk,approx 4 x 2.5',
                        'name': 'Glass Desk',
                        'subname': 'approx 4\' x 2.5\'',
                        "size": 15,
                        "class": 'Small_Desk_Glass',
                        "id": 418850,
                        "qty": 0
                    },
                    "418851": {
                        'cat': 'Glass Desk,approx 6 x 2.5',
                        'name': 'Glass Desk',
                        'subname': 'approx 6\' x 2.5\'',
                        "size": 20,
                        "class": 'Small_Desk_Glass',
                        "id": 418851,
                        "qty": 0
                    },
                    "418852": {
                        'cat': 'Glass Desk,approx 8 x 3',
                        'name': 'Glass Desk',
                        'subname': 'approx 8\' x 3\'',
                        "size": 25,
                        "class": 'Small_Desk_Glass',
                        "id": 418852,
                        "qty": 0
                    },
                    "418853": {
                        'cat': 'Glass Desk,with return',
                        'name': 'Glass Desk',
                        'subname': 'with return',
                        "size": 55,
                        "class": 'Office_Desk_Glass',
                        "id": 418853,
                        "qty": 0
                    },
                    "418854": {
                        'cat': 'Work Table,approx 2.5 x 2.5',
                        'name': 'Work Table',
                        'subname': 'approx 2.5\' x 2.5\'',
                        "size": 15,
                        "class": 'Work_Table',
                        "id": 418854,
                        "qty": 0
                    },
                    "418855": {
                        'cat': 'Work Table,approx 4 x 2.5',
                        'name': 'Work Table',
                        'subname': 'approx 4\' x 2.5\'',
                        "size": 20,
                        "class": 'Work_Table',
                        "id": 418855,
                        "qty": 0
                    },
                    "418856": {
                        'cat': 'Work Table,approx 6 x 3',
                        'name': 'Work Table',
                        'subname': 'approx 6\' x 3\'',
                        "size": 25,
                        "class": 'Work_Table',
                        "id": 418856,
                        "qty": 0
                    },
                },
                'Chairs': {
                    '418857': {
                        'cat': 'Chairs,Conference Chair',
                        'name': 'Conference Chair',
                        "size": 15,
                        "class": 'Conference_Chair',
                        "id": 418857,
                        "qty": 0
                    },
                    '418858': {
                        'cat': 'Chairs,Executive Chair',
                        'name': 'Executive Chair',
                        "size": 20,
                        "class": 'Executive_Chair',
                        "id": 418858,
                        "qty": 0
                    },
                    '418859': {
                        'cat': 'Chairs,Office Chair',
                        'name': 'Office Chair',
                        "size": 15,
                        "class": 'Office-Chair',
                        "id": 418859,
                        "qty": 0
                    },
                },
                'Computers': {
                    '418860': {
                        'cat': 'Computer,Small',
                        'name': 'Computer',
                        'subname': 'Small',
                        "size": 3,
                        "class": 'Computer',
                        "id": 418860,
                        "qty": 0
                    },
                    '418861': {
                        'cat': 'Computer,Medium',
                        'name': 'Computer',
                        'subname': 'Medium',
                        "size": 4,
                        "class": 'Computer',
                        "id": 418861,
                        "qty": 0
                    },
                    '418862': {
                        'cat': 'Computer,Large',
                        'name': 'Computer',
                        'subname': 'Large',
                        "size": 5,
                        "class": 'Computer',
                        "id": 418862,
                        "qty": 0
                    },
                },
                'Monitors': {
                    "418863": {
                        'cat': 'Monitor,approx 2 x 1',
                        'name': 'Monitor',
                        'subname': 'approx 2\' x 1\'',
                        "size": 4,
                        "class": 'Monitor',
                        "id": 418863,
                        "qty": 0
                    },
                    "418864": {
                        'cat': 'Monitor,approx 3 x 1.5',
                        'name': 'Monitor',
                        'subname': 'approx 3\' x 1.5\'',
                        "size": 5,
                        "class": 'Monitor',
                        "id": 418864,
                        "qty": 0
                    },
                    "418865": {
                        'cat': 'Monitor,approx 3.5 x 1.5',
                        'name': 'Monitor',
                        'subname': 'approx 3.5\' x 1.5\'',
                        "size": 6,
                        "class": 'Monitor',
                        "id": 418865,
                        "qty": 0
                    },
                },
                'Equipment': {
                    '418866': {
                        'cat': 'Equipment,Fax Machine',
                        'name': 'Fax Machine',
                        "size": 2,
                        "class": 'Fax_Machine',
                        "id": 418866,
                        "qty": 0
                    },
                    '418867': {
                        'cat': 'Equipment,Garbage Pail',
                        'name': 'Garbage Pail',
                        "size": 3,
                        "class": 'Garbage_Pail',
                        "id": 418867,
                        "qty": 0
                    },
                    '418868': {
                        'cat': 'Equipment,Laminating Machine',
                        'name': 'Laminating Machine',
                        "size": 1,
                        "class": 'Laminating-Machine',
                        "id": 418868,
                        "qty": 0
                    },
                    '418869': {
                        'cat': 'Equipment,Paper Shredder',
                        'name': 'Paper Shredder',
                        "size": 2,
                        "class": 'Paper_Shredder',
                        "id": 418869,
                        "qty": 0
                    },
                    "418870": {
                        'cat': 'Printer,less than 1.5 cube',
                        'name': 'Printer',
                        'subname': 'less than 1.5 cub',
                        "size": 3,
                        "class": 'Small_Printer',
                        "id": 418870,
                        "qty": 0
                    },
                    "418871": {
                        'cat': 'Printer,approx 1.5 cube',
                        'name': 'Printer',
                        'subname': 'approx 1.5\' cube',
                        "size": 5,
                        "class": 'Small_Printer',
                        "id": 418871,
                        "qty": 0
                    },
                    "418872": {
                        'cat': 'Printer,approx 2 cube or more',
                        'name': 'Printer',
                        'subname': 'approx 2\' cube or more',
                        "size": 8,
                        "class": 'Large_Printer',
                        "id": 418872,
                        "qty": 0
                    },
                    '418873': {
                        'cat': 'Equipment,Printer Stand',
                        'name': 'Printer Stand',
                        "size": 5,
                        "class": 'Printer_Stand',
                        "id": 418873,
                        "qty": 0
                    },
                    '418874': {
                        'cat': 'Equipment,Scanner',
                        'name': 'Scanner',
                        "size": 2,
                        "class": 'Scanner',
                        "id": 418874,
                        "qty": 0
                    },
                },
                'Cabinets': {
                    '418875': {
                        'cat': 'Cabinets,Drawer Unit',
                        'name': 'Drawer Unit',
                        "size": 5,
                        "class": 'Small_Drawer_Unit',
                        "id": 418875,
                        "qty": 0
                    },
                    '418876': {
                        'cat': 'File Cabinet,2 Drawer Vertical',
                        'name': 'File Cabinet',
                        'subname': '2 Drawer Vertical',
                        "size": 5,
                        "class": 'Drawer_Vertical_2',
                        "id": 418876,
                        "qty": 0
                    },
                    '418877': {
                        'cat': 'File Cabinet,2 Drawer Vertical Deep',
                        'name': 'File Cabinet',
                        'subname': '2 Drawer Vertical Deep',
                        "size": 10,
                        "class": 'Drawer_Vertical_Deep_2',
                        "id": 418877,
                        "qty": 0
                    },
                    '418878': {
                        'cat': 'File Cabinet,4 Drawer Vertical',
                        'name': 'File Cabinet',
                        'subname': '4 Drawer Vertical',
                        "size": 10,
                        "class": 'Drawer_Vertical_4',
                        "id": 418878,
                        "qty": 0
                    },
                    '418879': {
                        'cat': 'File Cabinet,2 Drawer Lateral',
                        'name': 'File Cabinet',
                        'subname': '2 Drawer Lateral',
                        "size": 15,
                        "class": 'Drawer_Lateral_2',
                        "id": 418879,
                        "qty": 0
                    },
                    '418880': {
                        'cat': 'File Cabinet,4 Drawer Vertical Deep',
                        'name': 'File Cabinet',
                        'subname': '4 Drawer Vertical Deep',
                        "size": 20,
                        "class": 'Drawer_Vertical_Deep_4',
                        "id": 418880,
                        "qty": 0
                    },
                    '418881': {
                        'cat': 'File Cabinet,4 Drawer Lateral',
                        'name': 'File Cabinet',
                        'subname': '4 Drawer Lateral',
                        "size": 30,
                        "class": 'Drawer_Lateral_4',
                        "id": 418881,
                        "qty": 0
                    },
                },
                'Bookcase': {
                    "418882": {
                        'cat': 'Bookcase,approx 3 x 3',
                        'name': 'Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 418882,
                        "qty": 0
                    },
                    "418883": {
                        'cat': 'Bookcase,approx 4 x 6',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 418883,
                        "qty": 0
                    },
                    "418884": {
                        'cat': 'Bookcase,approx 4 x 8',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 418884,
                        "qty": 0
                    },
                    "418885": {
                        'cat': 'Glass Front Bookcase,approx 3 x 3',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 418885,
                        "qty": 0
                    },
                    "418886": {
                        'cat': 'Glass Front Bookcase,approx 4 x 6',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 418886,
                        "qty": 0
                    },
                    "418887": {
                        'cat': 'Glass Front Bookcase,approx 4 x 8',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 418887,
                        "qty": 0
                    },
                }
            },
            'Basement':{
                'Packing Boxes': {
                    "51917888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 51917888,
                        "qty": 0
                    },
                    "51917889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 51917889,
                        "qty": 0
                    },
                    "51917890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 51917890,
                        "qty": 0
                    },
                    "51917891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 51917891,
                        "qty": 0
                    },
                    "51917892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 51917892,
                        "qty": 0
                    },
                    "51917893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 51917893,
                        "qty": 0
                    },
                    "51917894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 51917894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "5317888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 5317888,
                        "qty": 0
                    },
                    "5317889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 5317889,
                        "qty": 0
                    },
                    "5317890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 5317890,
                        "qty": 0
                    },
                    "5317891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 5317891,
                        "qty": 0
                    },
                    "5317892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 5317892,
                        "qty": 0
                    },
                    "5317893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 5317893,
                        "qty": 0
                    },
                    "5317894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 5317894,
                        "qty": 0
                    }
                },
                'Beds': {
                    '318640': {
                        'cat': 'Beds,Captains Bed',
                        'name': 'Captains Bed',
                        "size": 40,
                        "class": 'Captains_Bed',
                        "id": 318640,
                        "qty": 0
                    },
                    '318641': {
                        'cat': 'Beds,Daybed',
                        'name': 'Daybed',
                        "size": 50,
                        "class": 'Daybed',
                        "id": 318641,
                        "qty": 0
                    },
                    '418642': {
                        'cat': 'Beds,Folding Cots',
                        'name': 'Folding Cots',
                        "size": 6,
                        "class": 'Folding_Cots',
                        "id": 418642,
                        "qty": 0
                    },
                    '318643': {
                        'cat': 'Beds,Footboard',
                        'name': 'Footboard',
                        "size": 8,
                        "class": 'Footboard_1',
                        "id": 318643,
                        "qty": 0
                    },
                    '318644': {
                        'cat': 'Beds,Headboard',
                        'name': 'Headboard',
                        "size": 8,
                        "class": 'Headboard_1',
                        "id": 318644,
                        "qty": 0
                    },
                    '318645': {
                        'cat': 'Mattress and Box Spring,Single',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Single',
                        "size": 40,
                        "class": 'Box_Matress',
                        "id": 318645,
                        "qty": 0
                    },
                    '318646': {
                        'cat': 'Mattress and Box Spring,Full',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Full',
                        "size": 50,
                        "class": 'Box_Matress',
                        "id": 318646,
                        "qty": 0
                    },
                    '318647': {
                        'cat': 'Mattress and Box Spring,Queen',
                        'name': 'Mattress & Box Spring',
                        'subname': 'Queen',
                        "size": 60,
                        "class": 'Box_Matress',
                        "id": 318647,
                        "qty": 0
                    },
                    '318648': {
                        'cat': 'Mattress and Box Spring,King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'King',
                        "size": 70,
                        "class": 'Box_Matress',
                        "id": 318648,
                        "qty": 0
                    },
                    '318649': {
                        'cat': 'Mattress and Box Spring,California King',
                        'name': 'Mattress & Box Spring',
                        'subname': 'California King',
                        "size": 80,
                        "class": 'Box_Matress',
                        "id": 318649,
                        "qty": 0
                    },
                    '318650': {
                        'cat': 'Metal Bed Frame,Collapsible',
                        'name': 'Metal Bed Frame',
                        'subname': 'Collapsible',
                        "size": 8,
                        "class": 'Collapsable_Metal_bed',
                        "id": 318650,
                        "qty": 0
                    },
                    '318651': {
                        'cat': 'Beds,Murphy Bed',
                        'name': 'Murphy Bed',
                        "size": 120,
                        "class": 'Murphy_Bed',
                        "id": 318651,
                        "qty": 0
                    },
                    '318652': {
                        'cat': 'Beds,Trundle',
                        'name': 'Trundle',
                        "size": 50,
                        "class": 'Trundle_Bed',
                        "id": 318652,
                        "qty": 0
                    },
                    '318653': {
                        'cat': 'Beds,Wood Bed Frame',
                        'name': 'Wood Bed Frame',
                        "size": 30,
                        "class": 'Wood_Bed_Frame',
                        "id": 318653,
                        "qty": 0
                    },
                },
                'Mattress Only': {
                    '318654': {
                        'cat': 'Futon Mattress,Single',
                        'name': 'Futon Mattress',
                        'subname': 'Single',
                        "size": 15,
                        "class": 'California_King_Mattress',
                        "id": 318654,
                        "qty": 0
                    },
                    '318655': {
                        'cat': 'Futon Mattress,Full',
                        'name': 'Futon Mattress',
                        'subname': 'Full',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 318655,
                        "qty": 0
                    },
                    '318656': {
                        'cat': 'Futon Mattress,Queen',
                        'name': 'Futon Mattress',
                        'subname': 'Queen',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 318656,
                        "qty": 0
                    },
                    '318657': {
                        'cat': 'Futon Mattress,King',
                        'name': 'Futon Mattress',
                        'subname': 'King',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 318657,
                        "qty": 0
                    },
                    '318658': {
                        'cat': 'Mattress,Single',
                        'name': 'Mattress',
                        'subname': 'Single "size"',
                        "size": 20,
                        "class": 'California_King_Mattress',
                        "id": 318658,
                        "qty": 0
                    },
                    '318659': {
                        'cat': 'Mattress,Full',
                        'name': 'Mattress',
                        'subname': 'Full "size"',
                        "size": 25,
                        "class": 'California_King_Mattress',
                        "id": 318659,
                        "qty": 0
                    },
                    '318660': {
                        'cat': 'Mattress,Queen',
                        'name': 'Mattress',
                        'subname': 'Queen "size"',
                        "size": 30,
                        "class": 'California_King_Mattress',
                        "id": 318660,
                        "qty": 0
                    },
                    '318661': {
                        'cat': 'Mattress,King',
                        'name': 'Mattress',
                        'subname': 'King "size"',
                        "size": 35,
                        "class": 'California_King_Mattress',
                        "id": 318661,
                        "qty": 0
                    },
                    '318662': {
                        'cat': 'Mattress,California King',
                        'name': 'Mattress',
                        'subname': 'California King',
                        "size": 40,
                        "class": 'California_King_Mattress',
                        "id": 318662,
                        "qty": 0
                    },
                },
                'Sofas and Couches': {
                    '318517': {
                        'cat': 'Futon Mattress,Single',
                        'name': 'Futon and Mattress',
                        'subname': 'Single',
                        "size": 30,
                        "class": 'Futon',
                        "id": 318517,
                        "qty": 0
                    },
                    '318518': {
                        'cat': 'Futon Mattress,Full',
                        'name': 'Futon and Mattress',
                        'subname': 'Full',
                        "size": 40,
                        "class": 'Futon',
                        "id": 318518,
                        "qty": 0
                    },
                    '318519': {
                        'cat': 'Futon Mattress,Queen',
                        'name': 'Futon and Mattress',
                        'subname': 'Queen',
                        "size": 50,
                        "class": 'Futon',
                        "id": 318519,
                        "qty": 0
                    },
                    '318520': {
                        'cat': 'Futon Mattress,King',
                        'name': 'Futon and Mattress',
                        'subname': 'King',
                        "size": 60,
                        "class": 'Futon',
                        "id": 318520,
                        "qty": 0
                    },
                    '318521': {
                        'cat': 'Ottoman,approx 18',
                        'name': 'Ottoman',
                        'subname': 'approx 18" x 18" x 18"',
                        "size": 5,
                        "class": 'Small_Ottoman',
                        "id": 318521,
                        "qty": 0
                    },
                    "318522": {
                        'cat': 'Ottoman,approx 2',
                        'name': 'Ottoman',
                        'subname': "approx 2' x 2' x 2'",
                        "size": 10,
                        "class": 'Medium_Ottoman',
                        "id": 318522,
                        "qty": 0
                    },
                    "318523": {
                        'cat': 'Ottoman,bigger than 2',
                        'name': 'Ottoman',
                        'subname': 'bigger than 2\' x 2\' x 2\'',
                        "size": 15,
                        "class": 'Large_Ottoman',
                        "id": 318523,
                        "qty": 0
                    },
                    '318524': {
                        'cat': 'Sofa,Loveseat',
                        'name': 'Sofa',
                        'subname': 'Loveseat',
                        "size": 35,
                        "class": 'Love_Seat',
                        "id": 318524,
                        "qty": 0
                    },
                    '318525': {
                        'cat': 'Sofa,3 Seater',
                        'name': 'Sofa',
                        'subname': '3 Seater',
                        "size": 60,
                        "class": 'Seater_Sofa_3',
                        "id": 318525,
                        "qty": 0
                    },
                    '318526': {
                        'cat': 'Sofa,4 Seater',
                        'name': 'Sofa',
                        'subname': '4 Seater',
                        "size": 70,
                        "class": 'Seater_Sofa_4',
                        "id": 318526,
                        "qty": 0
                    },
                    '318527': {
                        'cat': 'Sofa,4 Seater Sectional',
                        'name': 'Sofa',
                        'subname': '4 Seater Sectional',
                        "size": 80,
                        "class": 'Seater_Sofa_4',
                        "id": 318527,
                        "qty": 0
                    },
                    '318528': {
                        'cat': 'Sofa,8 Seater Sectional',
                        'name': 'Sofa',
                        'subname': '8 Seater Sectional',
                        "size": 123,
                        "class": 'Sofa_Large_Sectional',
                        "id": 318528,
                        "qty": 0
                    },
                    '318529': {
                        'cat': 'Sofa,Sofa Bed',
                        'name': 'Sofa',
                        "size": 60,
                        'subname': 'Sofa Bed',
                        "class": 'Sofa_Bed',
                        "id": 318529,
                        "qty": 0
                    }
                },
                'Chairs': {
                    '318530': {
                        'cat': 'Chairs,Arm Chair',
                        'name': 'Arm Chair',
                        "size": 12,
                        "class": 'Arm_Chair',
                        "id": 318530,
                        "qty": 0
                    },
                    '318531': {
                        'cat': 'Chairs,Bean Bag',
                        'name': 'Bean Bag',
                        "size": 7,
                        "class": 'Bean_Bag_Chair',
                        "id": 318531,
                        "qty": 0
                    },
                    '318532': {
                        'cat': 'Chairs,Chaise Lounge',
                        'name': 'Chaise Lounge',
                        "size": 30,
                        "class": 'Chaise_Lounge',
                        "id": 318532,
                        "qty": 0
                    },
                    '318533': {
                        'cat': 'Chairs,Club Chair',
                        'name': 'Club Chair',
                        "size": 20,
                        "class": 'Club_Chair',
                        "id": 318533,
                        "qty": 0
                    },
                    '318534': {
                        'cat': 'Chairs,Glider Chair',
                        'name': 'Glider Chair',
                        "size": 15,
                        "class": 'Glider_Chair',
                        "id": 318534,
                        "qty": 0
                    },
                    '318535': {
                        'cat': 'Chairs,Overstuffed Chair',
                        'name': 'Overstuffed Chair',
                        "size": 30,
                        "class": 'Overstuffed_Chair',
                        "id": 318535,
                        "qty": 0
                    },
                    '318536': {
                        'cat': 'Chairs,Papasan Chair',
                        'name': 'Papasan Chair',
                        "size": 25,
                        "class": 'Papason_Chair',
                        "id": 318536,
                        "qty": 0
                    },
                    '318537': {
                        'cat': 'Chairs,Recliner Chair',
                        'name': 'Recliner Chair',
                        "size": 25,
                        "class": 'Recliner_Chair',
                        "id": 318537,
                        "qty": 0
                    },
                    '318538': {
                        'cat': 'Chairs,Rocking Chair',
                        'name': 'Rocking Chair',
                        "size": 20,
                        "class": 'Rocking_Chair',
                        "id": 318538,
                        "qty": 0
                    },
                    '318857': {
                        'cat': 'Chairs,Conference Chair',
                        'name': 'Conference Chair',
                        "size": 15,
                        "class": 'Conference_Chair',
                        "id": 318857,
                        "qty": 0
                    },
                    '318858': {
                        'cat': 'Chairs,Executive Chair',
                        'name': 'Executive Chair',
                        "size": 20,
                        "class": 'Executive_Chair',
                        "id": 318858,
                        "qty": 0
                    },
                    '318859': {
                        'cat': 'Chairs,Office Chair',
                        'name': 'Office Chair',
                        "size": 15,
                        "class": 'Office-Chair',
                        "id": 318859,
                        "qty": 0
                    },
                },
                'Tables': {
                    "318539": {
                        'cat': 'Coffee Table,approx 3',
                        'name': 'Coffee Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Small_Coffee_Table',
                        "id": 318539,
                        "qty": 0
                    },
                    "318540": {
                        'cat': 'Coffee Table,approx 4',
                        'name': 'Coffee Table',
                        'subname': 'approx 4\' x 2\'',
                        "size": 12,
                        "class": 'Small_Coffee_Table',
                        "id": 318540,
                        "qty": 0
                    },
                    "318541": {
                        'cat': 'Coffee Table,5or larger',
                        'name': 'Coffee Table',
                        'subname': '5\' x 3\' or larger',
                        "size": 15,
                        "class": 'Large_Coffee_Table',
                        "id": 318541,
                        "qty": 0
                    },
                    "318542": {
                        'cat': 'End Table,approx 1',
                        'name': 'End Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 318542,
                        "qty": 0
                    },
                    "318543": {
                        'cat': 'End Table,approx 2',
                        'name': 'End Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 318543,
                        "qty": 0
                    },
                    "318544": {
                        'cat': 'End Table,approx 3',
                        'name': 'End Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 318544,
                        "qty": 0
                    },
                    '318545': {
                        'cat': 'Tables,Foyer Table',
                        'name': 'Foyer Table',
                        "size": 22,
                        "class": 'Foyer_Table',
                        "id": 318545,
                        "qty": 0
                    },
                    '318546': {
                        'cat': 'Tables,Nesting Table',
                        'name': 'Nesting Table',
                        "size": 10,
                        "class": 'Nesting_Table',
                        "id": 318546,
                        "qty": 0
                    },
                    "318547": {
                        'cat': 'Side Table,approx 1',
                        'name': 'Side Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 5,
                        "class": 'Large_Side_Table',
                        "id": 318547,
                        "qty": 0
                    },
                    "318548": {
                        'cat': 'Side Table,approx 2',
                        'name': 'Side Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 8,
                        "class": 'Large_Side_Table',
                        "id": 318548,
                        "qty": 0
                    },
                    "318549": {
                        'cat': 'Side Table,approx 3',
                        'name': 'Side Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 318549,
                        "qty": 0
                    },
                    '318550': {
                        'cat': 'Tables,TV Dinner Folding Table',
                        'name': 'TV Dinner Folding Table',
                        "size": 6,
                        "class": 'TV_Dinner_Table',
                        "id": 318550,
                        "qty": 0
                    },
                    "318836": {
                        'cat': 'Conference Table,6 long',
                        'name': 'Conference Table',
                        'subname': '6\' long',
                        "size": 30,
                        "class": 'Conference_Table',
                        "id": 318836,
                        "qty": 0
                    },
                    "318837": {
                        'cat': 'Conference Table,8 long',
                        'name': 'Conference Table',
                        'subname': '8\' long',
                        "size": 35,
                        "class": 'Conference_Table',
                        "id": 318837,
                        "qty": 0
                    },
                    "318838": {
                        'cat': 'Conference Table,10 long',
                        'name': 'Conference Table',
                        'subname': '10\' long',
                        "size": 40,
                        "class": 'Conference_Table',
                        "id": 318838,
                        "qty": 0
                    },
                    "318839": {
                        'cat': 'Conference Table,12 long',
                        'name': 'Conference Table',
                        'subname': '12\' long',
                        "size": 45,
                        "class": 'Conference_Table',
                        "id": 318839,
                        "qty": 0
                    },
                    "318840": {
                        'cat': 'Desk,approx 4 x 2.5',
                        'name': 'Desk',
                        'subname': 'approx 4\' x 2.5\'',
                        "size": 15,
                        "class": 'Small_Desk',
                        "id": 318840,
                        "qty": 0
                    },
                    "318841": {
                        'cat': 'Desk,approx 6 x 2.5',
                        'name': 'Desk',
                        'subname': 'approx 6\' x 2.5\'',
                        "size": 20,
                        "class": 'Small_Desk',
                        "id": 318841,
                        "qty": 0
                    },
                    "318842": {
                        'cat': 'Desk,approx 8 x 3',
                        'name': 'Desk',
                        'subname': 'approx 8\' x 3\'',
                        "size": 25,
                        "class": 'Small_Desk',
                        "id": 318842,
                        "qty": 0
                    },
                    "318843": {
                        'cat': 'Desk,with hutch',
                        'name': 'Desk',
                        'subname': 'with hutch',
                        "size": 43,
                        "class": 'Desk_With_Hutch',
                        "id": 318843,
                        "qty": 0
                    },
                    "318844": {
                        'cat': 'Desk,with return',
                        'name': 'Desk',
                        'subname': 'with return',
                        "size": 55,
                        "class": 'Office_with_Return',
                        "id": 318844,
                        "qty": 0
                    },
                    '318845': {
                        'cat': 'Tables and Desks,Drafting Table',
                        'name': 'Drafting Table',
                        "size": 25,
                        "class": 'Drafting_Table',
                        "id": 318845,
                        "qty": 0
                    },
                    "318846": {
                        'cat': 'Glass Conference Table,6 long',
                        'name': 'Glass Conference Table',
                        'subname': '6\' long',
                        "size": 30,
                        "class": 'Conference_Table',
                        "id": 318846,
                        "qty": 0
                    },
                    "318847": {
                        'cat': 'Glass Conference Table,8 long',
                        'name': 'Glass Conference Table',
                        'subname': '8\' long',
                        "size": 35,
                        "class": 'Conference_Table',
                        "id": 318847,
                        "qty": 0
                    },
                    "318848": {
                        'cat': 'Glass Conference Table,10 long',
                        'name': 'Glass Conference Table',
                        'subname': '10\' long',
                        "size": 40,
                        "class": 'Conference_Table',
                        "id": 318848,
                        "qty": 0
                    },
                    "318849": {
                        'cat': 'Glass Conference Table,12 long',
                        'name': 'Glass Conference Table',
                        'subname': '12\' long',
                        "size": 45,
                        "class": 'Conference_Table',
                        "id": 318849,
                        "qty": 0
                    },
                    "318850": {
                        'cat': 'Glass Desk,approx 4 x 2.5',
                        'name': 'Glass Desk',
                        'subname': 'approx 4\' x 2.5\'',
                        "size": 15,
                        "class": 'Small_Desk_Glass',
                        "id": 318850,
                        "qty": 0
                    },
                    "318851": {
                        'cat': 'Glass Desk,approx 6 x 2.5',
                        'name': 'Glass Desk',
                        'subname': 'approx 6\' x 2.5\'',
                        "size": 20,
                        "class": 'Small_Desk_Glass',
                        "id": 318851,
                        "qty": 0
                    },
                    "318852": {
                        'cat': 'Glass Desk,approx 8 x 3',
                        'name': 'Glass Desk',
                        'subname': 'approx 8\' x 3\'',
                        "size": 25,
                        "class": 'Small_Desk_Glass',
                        "id": 318852,
                        "qty": 0
                    },
                    "318853": {
                        'cat': 'Glass Desk,with return',
                        'name': 'Glass Desk',
                        'subname': 'with return',
                        "size": 55,
                        "class": 'Office_Desk_Glass',
                        "id": 318853,
                        "qty": 0
                    },
                    "318854": {
                        'cat': 'Work Table,approx 2.5 x 2.5',
                        'name': 'Work Table',
                        'subname': 'approx 2.5\' x 2.5\'',
                        "size": 15,
                        "class": 'Work_Table',
                        "id": 318854,
                        "qty": 0
                    },
                    "318855": {
                        'cat': 'Work Table,approx 4 x 2.5',
                        'name': 'Work Table',
                        'subname': 'approx 4\' x 2.5\'',
                        "size": 20,
                        "class": 'Work_Table',
                        "id": 318855,
                        "qty": 0
                    },
                    "318856": {
                        'cat': 'Work Table,approx 6 x 3',
                        'name': 'Work Table',
                        'subname': 'approx 6\' x 3\'',
                        "size": 25,
                        "class": 'Work_Table',
                        "id": 318856,
                        "qty": 0
                    },
                },
                'Glass Tables': {
                    "318560": {
                        'cat': 'Glass Coffee Table,approx 3',
                        'name': 'Glass Coffee Table',
                        'subname': 'approx 3\' x 2\'',
                        "size": 10,
                        "class": 'Small_Coffee_Table',
                        "id": 318560,
                        "qty": 0
                    },
                    "318561": {
                        'cat': 'Glass Coffee Table,approx 4',
                        'name': 'Glass Coffee Table',
                        'subname': 'approx 4\' x 2\'',
                        "size": 12,
                        "class": 'Small_Coffee_Table',
                        "id": 318561,
                        "qty": 0
                    },
                    "318562": {
                        'cat': 'Glass Coffee Table,5 or larger',
                        'name': 'Glass Coffee Table',
                        'subname': '5\' x 3\' or larger',
                        "size": 15,
                        "class": 'Large_Coffee_Table',
                        "id": 318562,
                        "qty": 0
                    },
                    "318563": {
                        'cat': 'Glass End Table,approx 1',
                        'name': 'Glass End Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 318563,
                        "qty": 0
                    },
                    "318564": {
                        'cat': 'Glass End Table,approx 2',
                        'name': 'Glass End Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 318564,
                        "qty": 0
                    },
                    "318565": {
                        'cat': 'Glass End Table,approx 3',
                        'name': 'Glass End Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 318565,
                        "qty": 0
                    },
                    '318566': {
                        'cat': 'Glass Tables,Glass Nesting Table',
                        'name': 'Glass Nesting Table',
                        "size": 10,
                        "class": 'Nesting_Table',
                        "id": 318566,
                        "qty": 0
                    },
                    "318567": {
                        'cat': 'Glass Side Table,approx 1',
                        'name': 'Glass Side Table',
                        'subname': 'approx 1\' x 1 \'',
                        "size": 10,
                        "class": 'Large_Side_Table',
                        "id": 318567,
                        "qty": 0
                    },
                    "318568": {
                        'cat': 'Glass Side Table,approx 2',
                        'name': 'Glass Side Table',
                        'subname': 'approx 2\' x 2 \'',
                        "size": 15,
                        "class": 'Large_Side_Table',
                        "id": 318568,
                        "qty": 0
                    },
                    "318569": {
                        'cat': 'Glass Side Table,approx 3',
                        'name': 'Glass Side Table',
                        'subname': 'approx 3\' x 2 \'',
                        "size": 20,
                        "class": 'Large_Side_Table',
                        "id": 318569,
                        "qty": 0
                    },
                },
                'TVs': {
                    '318570': {
                        'cat': 'DLP TV,Under 40 Inch',
                        'name': 'DLP TV',
                        'subname': 'Under 40 Inch',
                        "size": 25,
                        "class": 'TV_DLP_UNDER_40',
                        "id": 318570,
                        "qty": 0
                    },
                    '318571': {
                        'cat': 'DLP TV,40 To 60 Inch',
                        'name': 'DLP TV',
                        'subname': '40 To 60 Inch',
                        "size": 35,
                        "class": 'TV_DLP_41-60',
                        "id": 318571,
                        "qty": 0
                    },
                    '318572': {
                        'cat': 'Flat Panel TV,Under 32 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Under 32 Inch',
                        "size": 10,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 318572,
                        "qty": 0
                    },
                    '318573': {
                        'cat': 'Flat Panel TV,32 To 45 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '32 To 45 Inch',
                        "size": 15,
                        "class": 'TV_FLAT_PANEL_33-45',
                        "id": 318573,
                        "qty": 0
                    },
                    '318574': {
                        'cat': 'Flat Panel TV,46 To 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': '46 To 55 Inch',
                        "size": 20,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 318574,
                        "qty": 0
                    },
                    '318575': {
                        'cat': 'Flat Panel TV,Over 55 Inch',
                        'name': 'Flat Panel TV',
                        'subname': 'Over 55 Inch',
                        "size": 25,
                        "class": 'TV_FLAT_PANEL_46-55',
                        "id": 318575,
                        "qty": 0
                    },
                    '318576': {
                        'cat': 'Tube TV,Under 20 Inch',
                        'name': 'Tube TV',
                        'subname': 'Under 20 Inch',
                        "size": 5,
                        "class": 'TV_TUBE_UNDER_20',
                        "id": 318576,
                        "qty": 0
                    },
                    '318577': {
                        'cat': 'Tube TV,21 To 27 Inch',
                        'name': 'Tube TV',
                        'subname': '21 To 27 Inch',
                        "size": 10,
                        "class": 'TV_TUBE_21-27',
                        "id": 318577,
                        "qty": 0
                    },
                    '318578': {
                        'cat': 'Tube TV,28 To 36 Inch',
                        'name': 'Tube TV',
                        'subname': '28 To 36 Inch',
                        "size": 20,
                        "class": 'TV_TUBE_28-36',
                        "id": 318578,
                        "qty": 0
                    },
                    "318579": {
                        'cat': 'TV Stand,approx 3 long',
                        'name': 'TV Stand',
                        'subname': 'approx 3\' long',
                        "size": 10,
                        "class": 'Small_TV_Stand',
                        "id": 318579,
                        "qty": 0
                    },
                    "318580": {
                        'cat': 'TV Stand,approx 4 long',
                        'name': 'TV Stand',
                        'subname': 'approx 4\' long',
                        "size": 15,
                        "class": 'Small_TV_Stand',
                        "id": 318580,
                        "qty": 0
                    },
                    "318581": {
                        'cat': 'TV Stand,6 or longer',
                        'name': 'TV Stand',
                        'subname': '6\' or longer',
                        "size": 20,
                        "class": 'Large_TV_Stand',
                        "id": 318581,
                        "qty": 0
                    }
                },
                'Stereo': {
                    "318582": {
                        'cat': 'Speaker,less than 1 tall',
                        'name': 'Speaker',
                        'subname': 'less than 1\' tall',
                        "size": 3,
                        "class": 'Shelf_Speaker',
                        "id": 318582,
                        "qty": 0
                    },
                    "318583": {
                        'cat': 'Speaker,1 - 2 tall',
                        'name': 'Speaker',
                        'subname': '1\' - 2\' tall',
                        "size": 5,
                        "class": 'Shelf_Speaker',
                        "id": 318583,
                        "qty": 0
                    },
                    "318584": {
                        'cat': 'Speaker,2 or taller',
                        'name': 'Speaker',
                        'subname': '2\' or taller',
                        "size": 8,
                        "class": 'Floor_Speakers',
                        "id": 318584,
                        "qty": 0
                    },
                    '318585': {
                        'cat': 'Stereo,Stereo Or Video Component',
                        'name': 'Stereo Or Video Component',
                        "size": 2,
                        "class": 'Stereo_or_Video_Component',
                        "id": 318585,
                        "qty": 0
                    }
                },
                'Cabinets': {
                    "318586": {
                        'cat': 'Armoire,approx 3 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 318586,
                        "qty": 0
                    },
                    "318587": {
                        'cat': 'Armoire,approx 4 x 7',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 318587,
                        "qty": 0
                    },
                    "318588": {
                        'cat': 'Armoire,approx 4 x 8',
                        'name': 'Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 318588,
                        "qty": 0
                    },
                    '318589': {
                        'cat': 'Cubby,3 ft',
                        'name': 'Cubby',
                        'subname': '3 ft',
                        "size": 3,
                        "class": 'Cubby_Small',
                        "id": 318589,
                        "qty": 0
                    },
                    '318590': {
                        'cat': 'Cubby,9 ft',
                        'name': 'Cubby',
                        'subname': '9 ft',
                        "size": 9,
                        "class": 'Cubby_Medium',
                        "id": 318590,
                        "qty": 0
                    },
                    '318591': {
                        'cat': 'Cubby,12 ft',
                        'name': 'Cubby',
                        'subname': '12 ft',
                        "size": 12,
                        "class": 'Cubby_Large',
                        "id": 318591,
                        "qty": 0
                    },
                    '318592': {
                        'cat': 'Cabinets,Display Case',
                        'name': 'Display Case',
                        "size": 19,
                        "class": 'Glass_Cabinet',
                        "id": 318592,
                        "qty": 0
                    },
                    "318593": {
                        'cat': 'Entertainment Center,approx 4 long',
                        'name': 'Entertainment Center',
                        'subname': 'approx 4\' long',
                        "size": 60,
                        "class": 'Entertainment_Center',
                        "id": 318593,
                        "qty": 0
                    },
                    "318594": {
                        'cat': 'Entertainment Center,approx 5 long',
                        'name': 'Entertainment Center',
                        'subname': 'approx 5\' long',
                        "size": 80,
                        "class": 'Entertainment_Center',
                        "id": 318594,
                        "qty": 0
                    },
                    "318595": {
                        'cat': 'Entertainment Center,6 or longer',
                        'name': 'Entertainment Center',
                        'subname': '6\' or longer',
                        "size": 120,
                        "class": 'Entertainment_Center',
                        "id": 318595,
                        "qty": 0
                    },
                    "318596": {
                        'cat': 'Glass Armoire,approx 3 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 3\' x 7\'',
                        "size": 40,
                        "class": 'Small_Armoire',
                        "id": 318596,
                        "qty": 0
                    },
                    "418597": {
                        'cat': 'Glass Armoire,approx 4 x 7',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 7\'',
                        "size": 50,
                        "class": 'Small_Armoire',
                        "id": 418597,
                        "qty": 0
                    },
                    "318598": {
                        'cat': 'Glass Armoire,approx 4 x 8',
                        'name': 'Glass Armoire',
                        'subname': 'approx 4\' x 8\'',
                        "size": 60,
                        "class": 'Large_Armoire',
                        "id": 318598,
                        "qty": 0
                    },
                    "318599": {
                        'cat': 'Glass Entertainment Center,approx 4 long',
                        'name': 'Glass Entertainment Center',
                        'subname': 'approx 4\' long',
                        "size": 60,
                        "class": 'Entertainment_Center',
                        "id": 318599,
                        "qty": 0
                    },
                    "318600": {
                        'cat': 'Glass Entertainment Center,approx 5 long',
                        'name': 'Glass Entertainment Center',
                        'subname': 'approx 5\' long',
                        "size": 80,
                        "class": 'Entertainment_Center',
                        "id": 318600,
                        "qty": 0
                    },
                    "318601": {
                        'cat': 'Glass Entertainment Center,6 or longer',
                        'name': 'Glass Entertainment Center',
                        'subname': '6\' or longer',
                        "size": 120,
                        "class": 'Entertainment_Center',
                        "id": 318601,
                        "qty": 0
                    },
                    '318875': {
                        'cat': 'Cabinets,Drawer Unit',
                        'name': 'Drawer Unit',
                        "size": 5,
                        "class": 'Small_Drawer_Unit',
                        "id": 318875,
                        "qty": 0
                    },
                    '318876': {
                        'cat': 'File Cabinet,2 Drawer Vertical',
                        'name': 'File Cabinet',
                        'subname': '2 Drawer Vertical',
                        "size": 5,
                        "class": 'Drawer_Vertical_2',
                        "id": 318876,
                        "qty": 0
                    },
                    '318877': {
                        'cat': 'File Cabinet,2 Drawer Vertical Deep',
                        'name': 'File Cabinet',
                        'subname': '2 Drawer Vertical Deep',
                        "size": 10,
                        "class": 'Drawer_Vertical_Deep_2',
                        "id": 318877,
                        "qty": 0
                    },
                    '318878': {
                        'cat': 'File Cabinet,4 Drawer Vertical',
                        'name': 'File Cabinet',
                        'subname': '4 Drawer Vertical',
                        "size": 10,
                        "class": 'Drawer_Vertical_4',
                        "id": 318878,
                        "qty": 0
                    },
                    '318879': {
                        'cat': 'File Cabinet,2 Drawer Lateral',
                        'name': 'File Cabinet',
                        'subname': '2 Drawer Lateral',
                        "size": 15,
                        "class": 'Drawer_Lateral_2',
                        "id": 318879,
                        "qty": 0
                    },
                    '318880': {
                        'cat': 'File Cabinet,4 Drawer Vertical Deep',
                        'name': 'File Cabinet',
                        'subname': '4 Drawer Vertical Deep',
                        "size": 20,
                        "class": 'Drawer_Vertical_Deep_4',
                        "id": 318880,
                        "qty": 0
                    },
                    '318881': {
                        'cat': 'File Cabinet,4 Drawer Lateral',
                        'name': 'File Cabinet',
                        'subname': '4 Drawer Lateral',
                        "size": 30,
                        "class": 'Drawer_Lateral_4',
                        "id": 318881,
                        "qty": 0
                    },
                },
                'Lamps': {
                    "318602": {
                        'cat': 'Floor Lamp,less than 5 tall',
                        'name': 'Floor Lamp',
                        'subname': 'less than 5\' tall',
                        "size": 5,
                        "class": 'Floor_Lamp',
                        "id": 318602,
                        "qty": 0
                    },
                    "318603": {
                        'cat': 'Floor Lamp,approx 7 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 7\' tall',
                        "size": 10,
                        "class": 'Floor_Lamp',
                        "id": 318603,
                        "qty": 0
                    },
                    "318604": {
                        'cat': 'Floor Lamp,approx 9 tall',
                        'name': 'Floor Lamp',
                        'subname': 'approx 9\' tall',
                        "size": 15,
                        "class": 'Floor_Lamp',
                        "id": 318604,
                        "qty": 0
                    },
                    "318605": {
                        'cat': 'Table Lamp,1 x 1 or smaller',
                        'name': 'Table Lamp',
                        'subname': '1\' x 1\' x 1\' or smaller',
                        "size": 3,
                        "class": 'Table_Lamp',
                        "id": 318605,
                        "qty": 0
                    },
                    "318606": {
                        'cat': 'Table Lamp,approx 2 x 2',
                        'name': 'Table Lamp',
                        'subname': 'approx 2\' x 2\' x 2\'',
                        "size": 4,
                        "class": 'Table_Lamp',
                        "id": 318606,
                        "qty": 0
                    },
                    "318607": {
                        'cat': 'Table Lamp,2.5 x 2.5 x 2.5 or larger',
                        'name': 'Table Lamp',
                        'subname': '2.5\' x 2.5\' x 2.5\' or larger',
                        "size": 5,
                        "class": 'Table_Lamp',
                        "id": 318607,
                        "qty": 0
                    },
                    '318608': {
                        'cat': 'Lamps,Tri-Head Lamp',
                        'name': 'Tri-Head Lamp',
                        "size": 27,
                        "class": 'Tri_Head_Lamp',
                        "id": 318608,
                        "qty": 0
                    }
                },
                'Computers': {
                    '318860': {
                        'cat': 'Computer,Small',
                        'name': 'Computer',
                        'subname': 'Small',
                        "size": 3,
                        "class": 'Computer',
                        "id": 318860,
                        "qty": 0
                    },
                    '318861': {
                        'cat': 'Computer,Medium',
                        'name': 'Computer',
                        'subname': 'Medium',
                        "size": 4,
                        "class": 'Computer',
                        "id": 318861,
                        "qty": 0
                    },
                    '318862': {
                        'cat': 'Computer,Large',
                        'name': 'Computer',
                        'subname': 'Large',
                        "size": 5,
                        "class": 'Computer',
                        "id": 318862,
                        "qty": 0
                    },
                },
                'Monitors': {
                    "318863": {
                        'cat': 'Monitor,approx 2 x 1',
                        'name': 'Monitor',
                        'subname': 'approx 2\' x 1\'',
                        "size": 4,
                        "class": 'Monitor',
                        "id": 318863,
                        "qty": 0
                    },
                    "318864": {
                        'cat': 'Monitor,approx 3 x 1.5',
                        'name': 'Monitor',
                        'subname': 'approx 3\' x 1.5\'',
                        "size": 5,
                        "class": 'Monitor',
                        "id": 318864,
                        "qty": 0
                    },
                    "318865": {
                        'cat': 'Monitor,approx 3.5 x 1.5',
                        'name': 'Monitor',
                        'subname': 'approx 3.5\' x 1.5\'',
                        "size": 6,
                        "class": 'Monitor',
                        "id": 318865,
                        "qty": 0
                    },
                },
                'Bookcases': {
                    "318609": {
                        'cat': 'Bookcase,approx 3 x 3',
                        'name': 'Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 318609,
                        "qty": 0
                    },
                    "318610": {
                        'cat': 'Bookcase,approx 4 x 6',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 318610,
                        "qty": 0
                    },
                    "318611": {
                        'cat': 'Bookcase,approx 4 x 8',
                        'name': 'Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 318611,
                        "qty": 0
                    },
                    "318612": {
                        'cat': 'Glass Front Bookcase,approx 3 x 3',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 3\' x 3\'',
                        "size": 10,
                        "class": 'Glass_Front_Bookcase_Small',
                        "id": 318612,
                        "qty": 0
                    },
                    "318613": {
                        'cat': 'Glass Front Bookcase,approx 4 x 6',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 6\'',
                        "size": 20,
                        "class": 'Glass_Front_Bookcase_Medium',
                        "id": 318613,
                        "qty": 0
                    },
                    "318614": {
                        'cat': 'Glass Front Bookcase,approx 4 x 8',
                        'name': 'Glass Front Bookcase',
                        'subname': 'approx 4\' x 8\'',
                        "size": 40,
                        "class": 'Glass_Front_Bookcase_Large',
                        "id": 318614,
                        "qty": 0
                    },
                },
                'Pianos': {
                    '318615': {
                        'cat': 'Pianos,Baby Grand Piano',
                        'name': 'Baby Grand Piano',
                        "size": 80,
                        "class": 'Baby_Grand_Piano',
                        "id": 318615,
                        "qty": 0
                    },
                    '318616': {
                        'cat': 'Pianos,Console Piano',
                        'name': 'Console Piano',
                        "size": 55,
                        "class": 'Console_Piano',
                        "id": 318616,
                        "qty": 0
                    },
                    '318617': {
                        'cat': 'Pianos,Grand Piano',
                        'name': 'Grand Piano',
                        "size": 90,
                        "class": 'Grand_Piano',
                        "id": 318617,
                        "qty": 0
                    },
                    '318618': {
                        'cat': 'Pianos,Piano Bench',
                        'name': 'Piano Bench',
                        "size": 7,
                        "class": 'Piano_Bench',
                        "id": 318618,
                        "qty": 0
                    },
                    '318619': {
                        'cat': 'Pianos,Spinet Piano',
                        'name': 'Spinet Piano',
                        "size": 50,
                        "class": 'Spinet_Piano',
                        "id": 318619,
                        "qty": 0
                    },
                    '318620': {
                        'cat': 'Pianos,Upright Piano',
                        'name': 'Upright Piano',
                        "size": 60,
                        "class": 'Upright_Piano',
                        "id": 318620,
                        "qty": 0
                    },
                },
                'Mirrors': {
                    "318621": {
                        'cat': 'Mirror,approx 2 x 3',
                        'name': 'Mirror',
                        'subname': 'approx 2\' x 3\'',
                        "size": 5,
                        "class": 'Small_Mirror',
                        "id": 318621,
                        "qty": 0
                    },
                    "318622": {
                        'cat': 'Mirror,approx 2.5 x 5',
                        'name': 'Mirror',
                        'subname': 'approx 2.5\' x 5\'',
                        "size": 8,
                        "class": 'Small_Mirror',
                        "id": 318622,
                        "qty": 0
                    },
                    "318623": {
                        'cat': 'Mirror,approx 4 x 8',
                        'name': 'Mirror',
                        'subname': 'approx 4\' x 8\'',
                        "size": 10,
                        "class": 'Large_Mirror',
                        "id": 318623,
                        "qty": 0
                    },
                },
                'Equipment': {
                    '318866': {
                        'cat': 'Equipment,Fax Machine',
                        'name': 'Fax Machine',
                        "size": 2,
                        "class": 'Fax_Machine',
                        "id": 318866,
                        "qty": 0
                    },
                    '318867': {
                        'cat': 'Equipment,Garbage Pail',
                        'name': 'Garbage Pail',
                        "size": 3,
                        "class": 'Garbage_Pail',
                        "id": 318867,
                        "qty": 0
                    },
                    '318868': {
                        'cat': 'Equipment,Laminating Machine',
                        'name': 'Laminating Machine',
                        "size": 1,
                        "class": 'Laminating-Machine',
                        "id": 318868,
                        "qty": 0
                    },
                    '318869': {
                        'cat': 'Equipment,Paper Shredder',
                        'name': 'Paper Shredder',
                        "size": 2,
                        "class": 'Paper_Shredder',
                        "id": 318869,
                        "qty": 0
                    },
                    "318870": {
                        'cat': 'Printer,less than 1.5 cube',
                        'name': 'Printer',
                        'subname': 'less than 1.5 cub',
                        "size": 3,
                        "class": 'Small_Printer',
                        "id": 318870,
                        "qty": 0
                    },
                    "318871": {
                        'cat': 'Printer,approx 1.5 cube',
                        'name': 'Printer',
                        'subname': 'approx 1.5\' cube',
                        "size": 5,
                        "class": 'Small_Printer',
                        "id": 318871,
                        "qty": 0
                    },
                    "318872": {
                        'cat': 'Printer,approx 2 cube or more',
                        'name': 'Printer',
                        'subname': 'approx 2\' cube or more',
                        "size": 8,
                        "class": 'Large_Printer',
                        "id": 318872,
                        "qty": 0
                    },
                    '318873': {
                        'cat': 'Equipment,Printer Stand',
                        'name': 'Printer Stand',
                        "size": 5,
                        "class": 'Printer_Stand',
                        "id": 318873,
                        "qty": 0
                    },
                    '318874': {
                        'cat': 'Equipment,Scanner',
                        'name': 'Scanner',
                        "size": 2,
                        "class": 'Scanner',
                        "id": 318874,
                        "qty": 0
                    },
                },
                'Paintings & Pictures': {
                    "318624": {
                        'cat': 'Painting,approx 1.5 x 2',
                        'name': 'Painting',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Painting',
                        "id": 318624,
                        "qty": 0
                    },
                    "318625": {
                        'cat': 'Painting,approx 2.5 x 4',
                        'name': 'Painting',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Painting',
                        "id": 318625,
                        "qty": 0
                    },
                    "318626": {
                        'cat': 'Painting,approx 4 x 6',
                        'name': 'Painting',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Painting',
                        "id": 318626,
                        "qty": 0
                    },
                    "318627": {
                        'cat': 'Picture,approx 1.5 x 2',
                        'name': 'Picture',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Picture_with_Frame',
                        "id": 318627,
                        "qty": 0
                    },
                    "318628": {
                        'cat': 'Picture,approx 2.5 x 4',
                        'name': 'Picture',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Picture_with_Frame',
                        "id": 318628,
                        "qty": 0
                    },
                    "318629": {
                        'cat': 'Picture,approx 4 x 6',
                        'name': 'Picture',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Picture_with_Frame',
                        "id": 318629,
                        "qty": 0
                    },
                    '318630': {
                        'cat': 'Picture Crate',
                        'name': 'Picture Crate',
                        "size": 16,
                        "class": 'Picture_Crate',
                        "id": 318630,
                        "qty": 0
                    }
                },
                'Odds & Ends': {
                    '318631': {
                        'cat': 'CD Rack',
                        'name': 'CD Rack',
                        "size": 7,
                        "class": 'CD_Rack',
                        "id": 318631,
                        "qty": 0
                    },
                    '318632': {
                        'cat': 'Fan,Table',
                        'name': 'Fan',
                        'subname': 'Table',
                        "size": 3,
                        "class": 'Fan',
                        "id": 318632,
                        "qty": 0
                    },
                    '318633': {
                        'cat': 'Fan,Standing',
                        'name': 'Fan',
                        'subname': 'Standing',
                        "size": 12,
                        "class": 'Standing_Fan',
                        "id": 318633,
                        "qty": 0
                    },
                    '318634': {
                        'cat': 'Fireplace Equipment',
                        'name': 'Fireplace Equipment',
                        "size": 5,
                        "class": 'Fireplace_Equipment',
                        "id": 318634,
                        "qty": 0
                    },
                    '318635': {
                        'cat': 'Grandfather Clock',
                        'name': 'Grandfather Clock',
                        "size": 43,
                        "class": 'Grandfather_Clock',
                        "id": 318635,
                        "qty": 0
                    },
                    '318636': {
                        'cat': 'Rug,Runner',
                        'name': 'Rug',
                        'subname': 'Runner',
                        "size": 3,
                        "class": 'Runner_Rug',
                        "id": 318636,
                        "qty": 0
                    },
                    "318637": {
                        'cat': 'Rug,4 long rolled',
                        'name': 'Rug',
                        'subname': '4\' long rolled',
                        "size": 5,
                        "class": 'Small_rug',
                        "id": 318637,
                        "qty": 0
                    },
                    "318638": {
                        'cat': 'Rug,7 long rolled',
                        'name': 'Rug',
                        'subname': '7\' long rolled',
                        "size": 10,
                        "class": 'Medium_Rug',
                        "id": 318638,
                        "qty": 0
                    },
                    "318639": {
                        'cat': 'Rug,9 long rolled',
                        'name': 'Rug',
                        'subname': '9\' long rolled',
                        "size": 15,
                        "class": 'Large_Rug',
                        "id": 318639,
                        "qty": 0
                    }
                }
            },
            'Garage': {
                'Packing Boxes': {
                    "2217888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 2217888,
                        "qty": 0
                    },
                    "2217889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 2217889,
                        "qty": 0
                    },
                    "2217890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 2217890,
                        "qty": 0
                    },
                    "2217891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 2217891,
                        "qty": 0
                    },
                    "2217892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 2217892,
                        "qty": 0
                    },
                    "2217893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 2217893,
                        "qty": 0
                    },
                    "2217894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 2217894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "8017888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 8017888,
                        "qty": 0
                    },
                    "8017889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 8017889,
                        "qty": 0
                    },
                    "8017890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 8017890,
                        "qty": 0
                    },
                    "8017891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 8017891,
                        "qty": 0
                    },
                    "8017892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 8017892,
                        "qty": 0
                    },
                    "8017893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 8017893,
                        "qty": 0
                    },
                    "8017894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 8017894,
                        "qty": 0
                    }
                },
                'Equipment': {
                    '218866': {
                        'cat': 'Equipment,Exercise Bike',
                        'name': 'Exercise Bike',
                        "size": 16,
                        "class": 'Exercise_Bike',
                        "id": 218928,
                        "qty": 0
                    },
                    '218978': {
                        'cat': 'Ladder,Small',
                        'name': 'Ladder',
                        'subname': 'Small',
                        "size": 5,
                        "class": 'Small_Ladder',
                        "id": 218978,
                        "qty": 0
                    },
                    '218979': {
                        'cat': 'Ladder,Medium',
                        'name': 'Ladder',
                        'subname': 'Medium',
                        "size": 7,
                        "class": 'Medium_Ladder',
                        "id": 218979,
                        "qty": 0
                    },
                    '218980': {
                        'cat': 'Ladder,Large',
                        'name': 'Ladder',
                        'subname': 'Large',
                        "size": 15,
                        "class": 'Large_Ladder',
                        "id": 218980,
                        "qty": 0
                    },
                    '218992': {
                        'cat': 'Tool Box,Large',
                        'name': 'Tool Box',
                        'subname': 'Large, Up to 300 lbs.',
                        "size": 20,
                        "class": 'Tool_Box',
                        "id": 218992,
                        "qty": 0
                    },
                    '218993': {
                        'cat': 'Tool Box',
                        'name': 'Tool Box',
                        'subname': 'Small',
                        "size": 5,
                        "class": 'Tool_Box',
                        "id": 218993,
                        "qty": 0
                    },
                    '218994': {
                        'cat': 'Tool Gang Box',
                        'name': 'Tool Gang Box',
                        "size": 50,
                        "class": 'Tool_Box',
                        "id": 218994,
                        "qty": 0
                    },
                    '218933': {
                        'cat': 'Sports and Hobbies,Treadmill',
                        'name': 'Treadmill',
                        "size": 25,
                        "class": 'Treadmill',
                        "id": 218933,
                        "qty": 0
                    },
                    '219030': {
                        'cat': 'Travel and Storage,Trunk',
                        'name': 'Trunk',
                        'subname': 'Large',
                        "size": 10,
                        "class": 'Trunk',
                        "id": 219030,
                        "qty": 0
                    },
                    '219031': {
                        'cat': 'Travel and Storage,Trunk',
                        'name': 'Trunk',
                        'subname': 'Small',
                        "size": 5,
                        "class": 'Trunk',
                        "id": 219031,
                        "qty": 0
                    },
                    '218944': {
                        'cat': 'Home Appliances,Vacuum Cleaner',
                        'name': 'Vacuum Cleaner',
                        "size": 5,
                        "class": 'Vacuum_Cleaner',
                        "id": 218944,
                        "qty": 0
                    },
                },
            },
            'Outdoor': {
                'Packing Boxes': {
                    "10817888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 10817888,
                        "qty": 0
                    },
                    "10817889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 10817889,
                        "qty": 0
                    },
                    "10817890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 10817890,
                        "qty": 0
                    },
                    "10817891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 10817891,
                        "qty": 0
                    },
                    "10817892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 10817892,
                        "qty": 0
                    },
                    "10817893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 10817893,
                        "qty": 0
                    },
                    "10817894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 10817894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "53217888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 53217888,
                        "qty": 0
                    },
                    "53217889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 53217889,
                        "qty": 0
                    },
                    "53217890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 53217890,
                        "qty": 0
                    },
                    "53217891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 53217891,
                        "qty": 0
                    },
                    "53217892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 53217892,
                        "qty": 0
                    },
                    "53217893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 53217893,
                        "qty": 0
                    },
                    "53217894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 53217894,
                        "qty": 0
                    }
                },
                'Tables': {
                    "418888": {
                        'cat': 'Outdoor End Table,Small',
                        'name': 'Outdoor End Table',
                        'subname': 'Small',
                        "size": 5,
                        "class": 'Outdoor_End_Table',
                        "id": 418888,
                        "qty": 0
                    },
                    "418889": {
                        'cat': 'Outdoor End Table,Medium',
                        'name': 'Outdoor End Table',
                        'subname': 'Medium',
                        "size": 8,
                        "class": 'Outdoor_End_Table',
                        "id": 418889,
                        "qty": 0
                    },
                    "418890": {
                        'cat': 'Outdoor End Table,Large',
                        'name': 'Outdoor End Table',
                        'subname': 'Large',
                        "size": 10,
                        "class": 'Outdoor_End_Table',
                        "id": 418890,
                        "qty": 0
                    },
                    "418891": {
                        'cat': 'Outdoor Glass End Table,Small',
                        'name': 'Outdoor Glass End Table',
                        'subname': 'Small',
                        "size": 5,
                        "class": 'End_Table',
                        "id": 418891,
                        "qty": 0
                    },
                    "418892": {
                        'cat': 'Outdoor Glass End Table,Medium',
                        'name': 'Outdoor Glass End Table',
                        'subname': 'Medium',
                        "size": 8,
                        "class": 'End_Table',
                        "id": 418892,
                        "qty": 0
                    },
                    "418893": {
                        'cat': 'Outdoor Glass End Table,Large',
                        'name': 'Outdoor Glass End Table',
                        'subname': 'Large',
                        "size": 10,
                        "class": 'End_Table',
                        "id": 418893,
                        "qty": 0
                    },
                    "418894": {
                        'cat': 'Outdoor Glass Table,Seats 4',
                        'name': 'Outdoor Glass Table',
                        'subname': 'Seats 4',
                        "size": 25,
                        "class": 'Outdoor_Dining_Table',
                        "id": 418894,
                        "qty": 0
                    },
                    "418895": {
                        'cat': 'Outdoor Glass Table,Seats 6',
                        'name': 'Outdoor Glass Table',
                        'subname': 'Seats 6',
                        "size": 40,
                        "class": 'Outdoor_Dining_Table',
                        "id": 418895,
                        "qty": 0
                    },
                    "418896": {
                        'cat': 'Outdoor Glass Table,Seats 8',
                        'name': 'Outdoor Glass Table',
                        'subname': 'Seats 8',
                        "size": 60,
                        "class": 'Outdoor_Dining_Table',
                        "id": 418896,
                        "qty": 0
                    },
                    "418897": {
                        'cat': 'Outdoor Table,Seats 4',
                        'name': 'Outdoor Table',
                        'subname': 'Seats 4',
                        "size": 25,
                        "class": 'Outdoor_Dining_Table',
                        "id": 418897,
                        "qty": 0
                    },
                    "418898": {
                        'cat': 'Outdoor Table,Seats 6',
                        'name': 'Outdoor Table',
                        'subname': 'Seats 6',
                        "size": 40,
                        "class": 'Outdoor_Dining_Table',
                        "id": 418898,
                        "qty": 0
                    },
                    "418899": {
                        'cat': 'Outdoor Table,Seats 8',
                        'name': 'Outdoor Table',
                        'subname': 'Seats 8',
                        "size": 60,
                        "class": 'Outdoor_Dining_Table',
                        "id": 418899,
                        "qty": 0
                    }
                },
                'Chairs': {
                    '418900': {
                        'cat': 'Chairs,Outdoor Chair',
                        'name': 'Outdoor Chair',
                        "size": 10,
                        "class": 'Outdoor_Chair',
                        "id": 418900,
                        "qty": 0
                    },
                    '418901': {
                        'cat': 'Chairs,Outdoor Lounge Chair',
                        'name': 'Outdoor Lounge Chair',
                        "size": 15,
                        "class": 'Outdoor_Lounge_Chair',
                        "id": 418901,
                        "qty": 0
                    }
                },
                'Sofas': {
                    '418902': {
                        'cat': 'Outdoor Sofa,Loveseat',
                        'name': 'Outdoor Sofa',
                        'subname': 'Loveseat',
                        "size": 35,
                        "class": 'Outdoor_Sofa',
                        "id": 418902,
                        "qty": 0
                    },
                    '418903': {
                        'cat': 'Outdoor Sofa,3 Seater',
                        'name': 'Outdoor Sofa',
                        'subname': '3 Seater',
                        "size": 60,
                        "class": 'Outdoor_Sofa',
                        "id": 418903,
                        "qty": 0
                    }
                },
                'Plants': {
                    "418904": {
                        'cat': 'Plant,under 4 tall',
                        'name': 'Plant',
                        'subname': 'under 4\' tall',
                        "size": 5,
                        "class": 'Small_Plant',
                        "id": 418904,
                        "qty": 0
                    },
                    "418905": {
                        'cat': 'Plant,approx 6 tall',
                        'name': 'Plant',
                        'subname': 'approx 6\' tall',
                        "size": 10,
                        "class": 'Medium_Plant',
                        "id": 418905,
                        "qty": 0
                    },
                    "418906": {
                        'cat': 'Plant,over 8 tall',
                        'name': 'Plant',
                        'subname': 'over 8\' tall',
                        "size": 15,
                        "class": 'Large_Plant',
                        "id": 418906,
                        "qty": 0
                    },
                },
                'Grills': {
                    "418907": {
                        'cat': 'Grill,approx 2.5 long',
                        'name': 'Grill',
                        'subname': 'approx 2.5\' long',
                        "size": 5,
                        "class": 'Small_Grill',
                        "id": 418907,
                        "qty": 0
                    },
                    "418908": {
                        'cat': 'Grill,approx 3.5 long',
                        'name': 'Grill',
                        'subname': 'approx 3.5\' long',
                        "size": 10,
                        "class": 'Large_Grill',
                        "id": 418908,
                        "qty": 0
                    },
                    "418909": {
                        'cat': 'Grill,approx 5 long',
                        'name': 'Grill',
                        'subname': 'approx 5\' long',
                        "size": 15,
                        "class": 'Large_Grill',
                        "id": 418909,
                        "qty": 0
                    },
                }
            },
            'Other': {
                'Packing Boxes': {
                    "62317888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 62317888,
                        "qty": 0
                    },
                    "62317889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 62317889,
                        "qty": 0
                    },
                    "62317890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 62317890,
                        "qty": 0
                    },
                    "62317891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 62317891,
                        "qty": 0
                    },
                    "62317892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 62317892,
                        "qty": 0
                    },
                    "62317893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 62317893,
                        "qty": 0
                    },
                    "62317894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 62317894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "53217888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 53217888,
                        "qty": 0
                    },
                    "53217889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 53217889,
                        "qty": 0
                    },
                    "53217890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 53217890,
                        "qty": 0
                    },
                    "53217891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 53217891,
                        "qty": 0
                    },
                    "53217892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 53217892,
                        "qty": 0
                    },
                    "53217893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 53217893,
                        "qty": 0
                    },
                    "53217894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 53217894,
                        "qty": 0
                    }
                },
                'Instruments': {
                    '408910': {
                        'cat': 'Instruments,Clarinet',
                        'name': 'Clarinet',
                        "size": 3,
                        "class": 'Clarinet',
                        "id": 408910,
                        "qty": 0
                    },
                    '418911': {
                        'cat': 'Instruments,Drums',
                        'name': 'Drums',
                        "size": 20,
                        "class": 'Drums',
                        "id": 418911,
                        "qty": 0
                    },
                    '418912': {
                        'cat': 'Instruments,Guitar',
                        'name': 'Guitar',
                        "size": 5,
                        "class": 'Guitar',
                        "id": 418912,
                        "qty": 0
                    },
                    '418913': {
                        'cat': 'Instruments,Guitar Amplifier',
                        'name': 'Guitar Amplifier',
                        "size": 3,
                        "class": 'Amplifier',
                        "id": 418913,
                        "qty": 0
                    },
                    '418914': {
                        'cat': 'Instruments,Saxophone',
                        'name': 'Saxophone',
                        "size": 5,
                        "class": 'Saxophone',
                        "id": 418914,
                        "qty": 0
                    },
                    '418915': {
                        'cat': 'Instruments,Trombone',
                        'name': 'Trombone',
                        "size": 7,
                        "class": 'Trombone',
                        "id": 418915,
                        "qty": 0
                    },
                    '418916': {
                        'cat': 'Instruments,Trumpet',
                        'name': 'Trumpet',
                        "size": 3,
                        "class": 'Trumpet',
                        "id": 418916,
                        "qty": 0
                    },
                    '418917': {
                        'cat': 'Instruments,Violin',
                        'name': 'Violin',
                        "size": 3,
                        "class": 'Violin',
                        "id": 418917,
                        "qty": 0
                    },
                },
                'Chairs': {
                    '418918': {
                        'cat': 'Chairs,Bench',
                        'name': 'Bench',
                        "size": 15,
                        "class": 'Bench',
                        "id": 418918,
                        "qty": 0
                    },
                    '418919': {
                        'cat': 'Chairs,Folding Chair',
                        'name': 'Folding Chair',
                        "size": 2,
                        "class": 'Folding_Chair',
                        "id": 418919,
                        "qty": 0
                    },
                },
                'Cabinets': {
                    '418920': {
                        'cat': 'Cabinets,Bathroom Cabinet',
                        'name': 'Bathroom Cabinet',
                        "size": 10,
                        "class": 'Bathroom_Cabinet',
                        "id": 418920,
                        "qty": 0
                    },
                    '418921': {
                        'cat': 'Cabinets,Glass Cabinet',
                        'name': 'Glass Cabinet',
                        "size": 15,
                        "class": 'Glass_Cabinet',
                        "id": 418921,
                        "qty": 0
                    },
                },
                'Sports & Hobbies': {
                    '418922': {
                        'cat': 'Sports and Hobbies,Bicycle',
                        'name': 'Bicycle',
                        "size": 10,
                        "class": 'Bicycle',
                        "id": 418922,
                        "qty": 0
                    },
                    "418923": {
                        'cat': 'Sports and Hobbies,Childrens Bicycle',
                        'name': 'Children\'s Bicycle',
                        "size": 7,
                        "class": 'Childrens_Bicycle',
                        "id": 418923,
                        "qty": 0
                    },
                    '418924': {
                        'cat': 'Dumbbells,31lb or more (1 pair)',
                        'name': 'Dumbbells',
                        'subname': '31lb or more (1 pair)',
                        "size": 1,
                        "class": 'Dumbbells_Small',
                        "id": 418924,
                        "qty": 0
                    },
                    '418925': {
                        'cat': 'Dumbbells,10lb or less (1 pair)',
                        'name': 'Dumbbells',
                        'subname': '10lb or less (1 pair)',
                        "size": 1,
                        "class": 'Dumbbells_Medium',
                        "id": 418925,
                        "qty": 0
                    },
                    '418926': {
                        'cat': 'Dumbbells,11lb - 30lb (1 pair)',
                        'name': 'Dumbbells',
                        'subname': '11lb - 30lb (1 pair)',
                        "size": 1,
                        "class": 'Dumbbells_Large',
                        "id": 418926,
                        "qty": 0
                    },
                    '418927': {
                        'cat': 'Sports and Hobbies,Elliptical',
                        'name': 'Elliptical',
                        "size": 68,
                        "class": 'Elliptical',
                        "id": 418927,
                        "qty": 0
                    },
                    '418928': {
                        'cat': 'Sports and Hobbies,Exercise Bike',
                        'name': 'Exercise Bike',
                        "size": 48,
                        "class": 'Exercise_Bike',
                        "id": 418928,
                        "qty": 0
                    },
                    '418929': {
                        'cat': 'Sports and Hobbies,Golf Bag',
                        'name': 'Golf Bag',
                        "size": 5,
                        "class": 'Golf_Bag',
                        "id": 418929,
                        "qty": 0
                    },
                    '418930': {
                        'cat': 'Sports and Hobbies,Skis',
                        'name': 'Skis',
                        "size": 7,
                        "class": 'Ski',
                        "id": 418930,
                        "qty": 0
                    },
                    '418931': {
                        'cat': 'Sports and Hobbies,Snowboard',
                        'name': 'Snowboard',
                        "size": 7,
                        "class": 'Snowboard',
                        "id": 418931,
                        "qty": 0
                    },
                    '418932': {
                        'cat': 'Sports and Hobbies,Surfboard',
                        'name': 'Surfboard',
                        "size": 6,
                        "class": 'Surfboard',
                        "id": 418932,
                        "qty": 0
                    },
                    '418933': {
                        'cat': 'Sports and Hobbies,Treadmill',
                        'name': 'Treadmill',
                        "size": 60,
                        "class": 'Treadmill',
                        "id": 418933,
                        "qty": 0
                    },
                },

                'Home Appliances': {
                    "418934": {
                        'cat': 'Air Conditioner,approx 1 cube',
                        'name': 'Air Conditioner',
                        'subname': 'approx 1\' cube',
                        "size": 5,
                        "class": 'Air_Conditioner_Small',
                        "id": 418934,
                        "qty": 0
                    },
                    "418935": {
                        'cat': 'Air Conditioner,approx 1.5 x 1.5 x 4',
                        'name': 'Air Conditioner',
                        'subname': 'approx 1.5\' x 1.5\' x 4\'',
                        "size": 8,
                        "class": 'Air_Conditioner_Small',
                        "id": 418935,
                        "qty": 0
                    },
                    "418936": {
                        'cat': 'Air Conditioner,approx 2 x 4',
                        'name': 'Air Conditioner',
                        'subname': 'approx 2\' x 2\' x 4\'',
                        "size": 10,
                        "class": 'Air_Conditioner_Small',
                        "id": 418936,
                        "qty": 0
                    },
                    '418937': {
                        'cat': 'Home Appliances,Air Purifier',
                        'name': 'Air Purifier',
                        "size": 3,
                        "class": 'Air_Purifier',
                        "id": 418937,
                        "qty": 0
                    },
                    '418938': {
                        'cat': 'Home Appliances,Dryer',
                        'name': 'Dryer',
                        "size": 25,
                        "class": 'Dryer',
                        "id": 418938,
                        "qty": 0
                    },
                    '418940': {
                        'cat': 'Home Appliances,Iron',
                        'name': 'Iron',
                        "size": 1,
                        "class": 'Iron',
                        "id": 418940,
                        "qty": 0
                    },
                    '418941': {
                        'cat': 'Home Appliances,Ironing Board',
                        'name': 'Ironing Board',
                        "size": 3,
                        "class": 'Ironing_Board',
                        "id": 418941,
                        "qty": 0
                    },
                    '418942': {
                        'cat': 'Home Appliances,Sewing Machine',
                        'name': 'Sewing Machine',
                        "size": 5,
                        "class": 'Sewing_Machine',
                        "id": 418942,
                        "qty": 0
                    },
                    '418943': {
                        'cat': 'Home Appliances,Space Heater',
                        'name': 'Space Heater',
                        "size": 3,
                        "class": 'Space_Heater',
                        "id": 418943,
                        "qty": 0
                    },
                    '418944': {
                        'cat': 'Home Appliances,Vacuum Cleaner',
                        'name': 'Vacuum Cleaner',
                        "size": 5,
                        "class": 'Vacuum_Cleaner',
                        "id": 418944,
                        "qty": 0
                    },
                    '418945': {
                        'cat': 'Home Appliances,Washer/Dryer Combo',
                        'name': 'Washer/Dryer Combo',
                        "size": 41,
                        "class": 'Washer_Dryer_Combo',
                        "id": 418945,
                        "qty": 0
                    },
                    '418946': {
                        'cat': 'Home Appliances,Washing Machine',
                        'name': 'Washing Machine',
                        "size": 25,
                        "class": 'Washing_Machine',
                        "id": 418946,
                        "qty": 0
                    },
                },
                'Stereo Equipment': {
                    "418947": {
                        'cat': 'Speaker,less than 1 tall',
                        'name': 'Speaker',
                        'subname': 'less than 1\' tall',
                        "size": 3,
                        "class": 'Shelf_Speaker',
                        "id": 418947,
                        "qty": 0
                    },
                    "418948": {
                        'cat': 'Speaker,1 - 2 tall',
                        'name': 'Speaker',
                        'subname': '1\' - 2\' tall',
                        "size": 5,
                        "class": 'Shelf_Speaker',
                        "id": 418948,
                        "qty": 0
                    },
                    "418949": {
                        'cat': 'Speaker,2 or taller',
                        'name': 'Speaker',
                        'subname': '2\' or taller',
                        "size": 8,
                        "class": 'Floor_Speakers',
                        "id": 418949,
                        "qty": 0
                    },
                    '418950': {
                        'cat': 'Stereo,Stereo Or Video Component',
                        'name': 'Stereo Or Video Component',
                        "size": 2,
                        "class": 'Stereo_or_Video_Component',
                        "id": 418950,
                        "qty": 0
                    }
                },
                'Games': {
                    '418951': {
                        'cat': 'Games,Foosball Table',
                        'name': 'Foosball Table',
                        "size": 30,
                        "class": 'Foosball_Table',
                        "id": 418951,
                        "qty": 0
                    },
                    '418952': {
                        'cat': 'Games,Pinball Machine',
                        'name': 'Pinball Machine',
                        "size": 25,
                        "class": 'Pinball_Machine',
                        "id": 418952,
                        "qty": 0
                    },
                    '418953': {
                        'cat': 'Games,Ping Pong Table',
                        'name': 'Ping Pong Table',
                        "size": 25,
                        "class": 'Ping_Pong_Table',
                        "id": 418953,
                        "qty": 0
                    },
                    '418954': {
                        'cat': 'Games,Pool Table',
                        'name': 'Pool Table',
                        "size": 60,
                        "class": 'Pool_Table',
                        "id": 418954,
                        "qty": 0
                    },
                },
                'Odds & Ends': {
                    '418955': {
                        'cat': 'Basket',
                        'name': 'Basket',
                        "size": 5,
                        "class": 'Basket',
                        "id": 418955,
                        "qty": 0
                    },
                    '418956': {
                        'cat': 'Bike Rack',
                        'name': 'Bike Rack',
                        "size": 2,
                        "class": 'Bike_rack',
                        "id": 418956,
                        "qty": 0
                    },
                    '418957': {
                        'cat': 'Broom',
                        'name': 'Broom',
                        "size": 4,
                        "class": 'Broom',
                        "id": 418957,
                        "qty": 0
                    },
                    '418958': {
                        'cat': 'Cat Litter Box',
                        'name': 'Cat Litter Box',
                        "size": 5,
                        "class": 'Cat_Litter_Box',
                        "id": 418958,
                        "qty": 0
                    },
                    '418959': {
                        'cat': 'Cat Tree,Small',
                        'name': 'Cat Tree',
                        'subname': 'Small',
                        "size": 7,
                        "class": 'Cat_Tree_Small',
                        "id": 418959,
                        "qty": 0
                    },
                    '418960': {
                        'cat': 'Cat Tree,Medium',
                        'name': 'Cat Tree',
                        'subname': 'Medium',
                        "size": 15,
                        "class": 'Cat_Tree_Medium',
                        "id": 418960,
                        "qty": 0
                    },
                    '418961': {
                        'cat': 'Cat Tree,Large',
                        'name': 'Cat Tree',
                        'subname': 'Large',
                        "size": 20,
                        "class": 'Cat_Tree_Large',
                        "id": 418961,
                        "qty": 0
                    },
                    '418962': {
                        'cat': 'CD Rack',
                        'name': 'CD Rack',
                        "size": 7,
                        "class": 'CD_Rack',
                        "id": 418962,
                        "qty": 0
                    },
                    '418963': {
                        'cat': 'Clothes Steamer',
                        'name': 'Clothes Steamer',
                        "size": 3,
                        "class": 'Clothes_Steamer',
                        "id": 418963,
                        "qty": 0
                    },
                    '418964': {
                        'cat': 'Coat Rack',
                        'name': 'Coat Rack',
                        "size": 5,
                        "class": 'Coat_Rack',
                        "id": 418964,
                        "qty": 0
                    },
                    '418965': {
                        'cat': 'Dumbbells,31lb or more (1 pair)',
                        'name': 'Dumbbells',
                        'subname': '31lb or more (1 pair)',
                        "size": 1,
                        "class": 'Dumbbells_Small',
                        "id": 418965,
                        "qty": 0
                    },
                    '418966': {
                        'cat': 'Dumbbells,10lb or less (1 pair)',
                        'name': 'Dumbbells',
                        'subname': '10lb or less (1 pair)',
                        "size": 1,
                        "class": 'Dumbbells_Medium',
                        "id": 418966,
                        "qty": 0
                    },
                    '418967': {
                        'cat': 'Dumbbells,11lb - 30lb (1 pair)',
                        'name': 'Dumbbells',
                        'subname': '11lb - 30lb (1 pair)',
                        "size": 1,
                        "class": 'Dumbbells_Large',
                        "id": 418967,
                        "qty": 0
                    },
                    '418968': {
                        'cat': 'Easel,Small',
                        'name': 'Easel',
                        'subname': 'Small',
                        "size": 5,
                        "class": 'Easel_Small',
                        "id": 418968,
                        "qty": 0
                    },
                    '418969': {
                        'cat': 'Easel,Medium',
                        'name': 'Easel',
                        'subname': 'Medium',
                        "size": 8,
                        "class": 'Easel_Small',
                        "id": 418969,
                        "qty": 0
                    },
                    '418970': {
                        'cat': 'Easel,Large',
                        'name': 'Easel',
                        'subname': 'Large',
                        "size": 10,
                        "class": 'Easel_Large',
                        "id": 418970,
                        "qty": 0
                    },
                    '418971': {
                        'cat': 'Fan,Table',
                        'name': 'Fan',
                        'subname': 'Table',
                        "size": 3,
                        "class": 'Fan',
                        "id": 418971,
                        "qty": 0
                    },
                    '418972': {
                        'cat': 'Fan,Standing',
                        'name': 'Fan',
                        'subname': 'Standing',
                        "size": 12,
                        "class": 'Standing_Fan',
                        "id": 418972,
                        "qty": 0
                    },
                    '418973': {
                        'cat': 'Faux Fireplace',
                        'name': 'Faux Fireplace',
                        "size": 10,
                        "class": 'Faux_Fireplace',
                        "id": 418973,
                        "qty": 0
                    },
                    '418974': {
                        'cat': 'Folding Screen',
                        'name': 'Folding Screen',
                        "size": 15,
                        "class": 'Folding_Screen',
                        "id": 418974,
                        "qty": 0
                    },
                    '418975': {
                        'cat': 'Garbage Pail',
                        'name': 'Garbage Pail',
                        "size": 3,
                        "class": 'Garbage_Pail',
                        "id": 418975,
                        "qty": 0
                    },
                    '418976': {
                        'cat': 'Gun Safe',
                        'name': 'Gun Safe',
                        "size": 20,
                        "class": 'Gun_Safe',
                        "id": 418976,
                        "qty": 0
                    },
                    '418977': {
                        'cat': 'Hoe',
                        'name': 'Hoe',
                        "size": 2,
                        "class": 'Hoe',
                        "id": 418977,
                        "qty": 0
                    },
                    '418978': {
                        'cat': 'Ladder,Small',
                        'name': 'Ladder',
                        'subname': 'Small',
                        "size": 5,
                        "class": 'Small_Ladder',
                        "id": 418978,
                        "qty": 0
                    },
                    '418979': {
                        'cat': 'Ladder,Medium',
                        'name': 'Ladder',
                        'subname': 'Medium',
                        "size": 10,
                        "class": 'Medium_Ladder',
                        "id": 418979,
                        "qty": 0
                    },
                    '418980': {
                        'cat': 'Ladder,Large',
                        'name': 'Ladder',
                        'subname': 'Large',
                        "size": 15,
                        "class": 'Large_Ladder',
                        "id": 418980,
                        "qty": 0
                    },
                    '418981': {
                        'cat': 'Lawn Mover',
                        'name': 'Lawn Mover',
                        "size": 30,
                        "class": 'Lawnmower',
                        "id": 418981,
                        "qty": 0
                    },
                    '418982': {
                        'cat': 'Magazine Rack',
                        'name': 'Magazine Rack',
                        "size": 2,
                        "class": 'Magazine_Rack',
                        "id": 418982,
                        "qty": 0
                    },
                    '418983': {
                        'cat': 'Mannequin',
                        'name': 'Mannequin',
                        "size": 20,
                        "class": 'Mannequin',
                        "id": 418983,
                        "qty": 0
                    },
                    '418984': {
                        'cat': 'Metal Locker',
                        'name': 'Metal Locker',
                        "size": 59,
                        "class": 'Metal_Locker',
                        "id": 418984,
                        "qty": 0
                    },
                    '418985': {
                        'cat': 'Milk Crate',
                        'name': 'Milk Crate',
                        "size": 2,
                        "class": 'Milk_Crate',
                        "id": 418985,
                        "qty": 0
                    },
                    '418986': {
                        'cat': 'Mop',
                        'name': 'Mop',
                        "size": 3,
                        "class": 'Mop',
                        "id": 418986,
                        "qty": 0
                    },
                    '418987': {
                        'cat': 'Rake',
                        'name': 'Rake',
                        "size": 2,
                        "class": 'Rake',
                        "id": 418987,
                        "qty": 0
                    },
                    '418988': {
                        'cat': 'Safe',
                        'name': 'Safe',
                        "size": 5,
                        "class": 'Safe',
                        "id": 418988,
                        "qty": 0
                    },
                    '418989': {
                        'cat': 'Shopping Cart',
                        'name': 'Shopping Cart',
                        "size": 24,
                        "class": 'Shopping_Cart',
                        "id": 418989,
                        "qty": 0
                    },
                    '418990': {
                        'cat': 'Shovel',
                        'name': 'Shovel',
                        "size": 2,
                        "class": 'Shovel',
                        "id": 418990,
                        "qty": 0
                    },
                    '418991': {
                        'cat': 'Snow Blower',
                        'name': 'Snow Blower',
                        "size": 30,
                        "class": 'Snow_Blower',
                        "id": 418991,
                        "qty": 0
                    },
                    '418992': {
                        'cat': 'Tool Box',
                        'name': 'Tool Box',
                        "size": 10,
                        "class": 'Tool_Box',
                        "id": 418992,
                        "qty": 0
                    },
                    '418993': {
                        'cat': 'Tool Chest,Small',
                        'name': 'Tool Chest',
                        'subname': 'Small',
                        "size": 2,
                        "class": 'Tool_Chest',
                        "id": 418993,
                        "qty": 0
                    },
                    '418994': {
                        'cat': 'Tool Chest,Medium',
                        'name': 'Tool Chest',
                        'subname': 'Medium',
                        "size": 4,
                        "class": 'Tool_Chest',
                        "id": 418994,
                        "qty": 0
                    },
                    '418995': {
                        'cat': 'Tool Chest,Large',
                        'name': 'Tool Chest',
                        'subname': 'Large',
                        "size": 8,
                        "class": 'Tool_Chest',
                        "id": 418995,
                        "qty": 0
                    },
                },
                'Tables': {
                    '418996': {
                        'cat': 'Tables,Card Table',
                        'name': 'Card Table',
                        "size": 8,
                        "class": 'Card_Table',
                        "id": 418996,
                        "qty": 0
                    },
                    '418997': {
                        'cat': 'Tables,Folding Table',
                        'name': 'Folding Table',
                        "size": 8,
                        "class": 'Folding_Table',
                        "id": 418997,
                        "qty": 0
                    },
                    '418998': {
                        'cat': 'Glass Table,Small',
                        'name': 'Glass Table',
                        'subname': 'Small',
                        "size": 10,
                        "class": 'Dining_Table',
                        "id": 418998,
                        "qty": 0
                    },
                    '418999': {
                        'cat': 'Glass Table,Medium',
                        'name': 'Glass Table',
                        'subname': 'Medium',
                        "size": 15,
                        "class": 'Dining_Table',
                        "id": 418999,
                        "qty": 0
                    },
                    '419000': {
                        'cat': 'Glass Table,Large',
                        'name': 'Glass Table',
                        'subname': 'Large',
                        "size": 20,
                        "class": 'Dining_Table',
                        "id": 419000,
                        "qty": 0
                    },
                    '419001': {
                        'cat': 'Tables,Sewing Machine Table',
                        'name': 'Sewing Machine Table',
                        "size": 30,
                        "class": 'Sewing_Machine_Table',
                        "id": 419001,
                        "qty": 0
                    },
                    "419002": {
                        'cat': 'Table,Small(approx 3)',
                        'name': 'Table',
                        'subname': 'Small(approx 3\' x 2\')',
                        "size": 10,
                        "class": 'Dining_Table',
                        "id": 419002,
                        "qty": 0
                    },
                    "419003": {
                        'cat': 'Table,Medium (approx 4)',
                        'name': 'Table',
                        'subname': 'Medium (approx 4\' x 2\')',
                        "size": 15,
                        "class": 'Dining_Table',
                        "id": 419003,
                        "qty": 0
                    },
                    "419004": {
                        'cat': 'Table,Large (approx 5 x 2)',
                        'name': 'Table',
                        'subname': 'Large (approx 5\' x 2\')',
                        "size": 35,
                        "class": 'Dining_Table',
                        "id": 419004,
                        "qty": 0
                    },
                    '419005': {
                        'cat': 'Tables,Utility Table',
                        'name': 'Utility Table',
                        "size": 25,
                        "class": 'Utility_Table',
                        "id": 419005,
                        "qty": 0
                    },
                },
                'Rugs': {
                    '419006': {
                        'cat': 'Rug,Runner',
                        'name': 'Rug',
                        'subname': 'Runner',
                        "size": 3,
                        "class": 'Runner_Rug',
                        "id": 419006,
                        "qty": 0
                    },
                    "419007": {
                        'cat': 'Rug,4 long rolled',
                        'name': 'Rug',
                        'subname': '4\' long rolled',
                        "size": 5,
                        "class": 'Small_rug',
                        "id": 419007,
                        "qty": 0
                    },
                    "419008": {
                        'cat': 'Rug,7 long rolled',
                        'name': 'Rug',
                        'subname': '7\' long rolled',
                        "size": 10,
                        "class": 'Medium_Rug',
                        "id": 419008,
                        "qty": 0
                    },
                    "419009": {
                        'cat': 'Rug,9 long rolled',
                        'name': 'Rug',
                        'subname': '9\' long rolled',
                        "size": 15,
                        "class": 'Large_Rug',
                        "id": 419009,
                        "qty": 0
                    }
                },
                'Art & Sculptures': {
                    "419010": {
                        'cat': 'Painting,approx 1.5 x 2',
                        'name': 'Painting',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Painting',
                        "id": 419010,
                        "qty": 0
                    },
                    "419011": {
                        'cat': 'Painting,approx 2.5 x 4',
                        'name': 'Painting',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Painting',
                        "id": 419011,
                        "qty": 0
                    },
                    "419012": {
                        'cat': 'Painting,approx 4 x 6',
                        'name': 'Painting',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Painting',
                        "id": 419012,
                        "qty": 0
                    },
                    "419013": {
                        'cat': 'Picture,approx 1.5 x 2',
                        'name': 'Picture',
                        'subname': 'approx 1.5\' x 2\'',
                        "size": 3,
                        "class": 'Picture_with_Frame',
                        "id": 419013,
                        "qty": 0
                    },
                    "419014": {
                        'cat': 'Picture,approx 2.5 x 4',
                        'name': 'Picture',
                        'subname': 'approx 2.5\' x 4\'',
                        "size": 5,
                        "class": 'Picture_with_Frame',
                        "id": 419014,
                        "qty": 0
                    },
                    "419015": {
                        'cat': 'Picture,approx 4 x 6',
                        'name': 'Picture',
                        'subname': 'approx 4\' x 6\'',
                        "size": 10,
                        "class": 'Picture_with_Frame',
                        "id": 419015,
                        "qty": 0
                    },
                    '419016': {
                        'cat': 'Picture Crate',
                        'name': 'Picture Crate',
                        "size": 16,
                        "class": 'Picture_Crate',
                        "id": 419016,
                        "qty": 0
                    },
                    '419017': {
                        'cat': 'Sculpture,Small',
                        'name': 'Sculpture',
                        'subname': 'Small',
                        "size": 5,
                        "class": 'Sculpture',
                        "id": 419017,
                        "qty": 0
                    },
                    '419018': {
                        'cat': 'Sculpture,Medium',
                        'name': 'Sculpture',
                        'subname': 'Medium',
                        "size": 10,
                        "class": 'Sculpture',
                        "id": 419018,
                        "qty": 0
                    },
                    '419019': {
                        'cat': 'Sculpture,Large',
                        'name': 'Sculpture',
                        'subname': 'Large',
                        "size": 15,
                        "class": 'Sculpture',
                        "id": 419019,
                        "qty": 0
                    },
                },
                'Travel & Storage': {
                    '419020': {
                        'cat': 'Travel and Storage,Commercial Bin',
                        'name': 'Commercial Bin',
                        "size": 20,
                        "class": 'Commercial_Bin',
                        "id": 419020,
                        "qty": 0
                    },
                    '419021': {
                        'cat': 'Travel and Storage,Duffle Bag',
                        'name': 'Duffle Bag',
                        "size": 5,
                        "class": 'Bag_Duffle',
                        "id": 419021,
                        "qty": 0
                    },
                    "419022": {
                        'cat': 'Plastic Bin,approx 1 x 2',
                        'name': 'Plastic Bin',
                        'subname': 'approx 1\' x 1\' x 2\'',
                        "size": 3,
                        "class": 'Plastic_Bin_Small',
                        "id": 419022,
                        "qty": 0
                    },
                    "419023": {
                        'cat': 'Plastic Bin,approx 2 x 2',
                        'name': 'Plastic Bin',
                        'subname': 'approx 2\' x 2\' x 2\'',
                        "size": 8,
                        "class": 'Plastic_Bin_Medium',
                        "id": 419023,
                        "qty": 0
                    },
                    "419024": {
                        'cat': 'Plastic Bin,approx 3 x 2',
                        'name': 'Plastic Bin',
                        'subname': 'approx 3\' x 2\' x 2\'',
                        "size": 10,
                        "class": 'Plastic_Bin_Large',
                        "id": 419024,
                        "qty": 0
                    },
                    '419025': {
                        'cat': 'Rental Bin,27',
                        'name': 'Rental Bin',
                        'subname': '27" x 12" x 17"',
                        "size": 3,
                        "class": 'Bin_Medium',
                        "id": 419025,
                        "qty": 0
                    },
                    '419026': {
                        'cat': 'Rental Bin,20',
                        'name': 'Rental Bin',
                        'subname': '20" x 15" x 28"',
                        "size": 5,
                        "class": 'Bin_Large',
                        "id": 419026,
                        "qty": 0
                    },
                    '419027': {
                        'cat': 'Suitcase',
                        'name': 'Suitcase',
                        "size": 5,
                        "class": 'Suitcase',
                        "id": 419027,
                        "qty": 0
                    },
                    '419028': {
                        'cat': 'Trash Bag,Small',
                        'name': 'Trash Bag',
                        'subname': 'Small',
                        "size": 3,
                        "class": 'Trash_Bag_Small',
                        "id": 419028,
                        "qty": 0
                    },
                    '419029': {
                        'cat': 'Trash Bag,Large',
                        'name': 'Trash Bag',
                        'subname': 'Large',
                        "size": 4,
                        "class": 'Trash_Bag_Large',
                        "id": 419029,
                        "qty": 0
                    },
                    '419030': {
                        'cat': 'Travel and Storage,Trunk',
                        'name': 'Trunk',
                        "size": 10,
                        "class": 'Trunk',
                        "id": 419030,
                        "qty": 0
                    },
                }
            },
            'Boxes':{
                'Packing Boxes': {
                    "810127888": {
                        'pack':true,
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 810127888,
                        "qty": 0
                    },
                    "810127889": {
                        'pack':true,
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 810127889,
                        "qty": 0
                    },
                    "810127890": {
                        'pack':true,
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 810127890,
                        "qty": 0
                    },
                    "810127891": {
                        'pack':true,
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 810127891,
                        "qty": 0
                    },
                    "817892": {
                        'pack':true,
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 817892,
                        "qty": 0
                    },
                    "810127893": {
                        'pack':true,
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 810127893,
                        "qty": 0
                    },
                    "810127894": {
                        'pack':true,
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 810127894,
                        "qty": 0
                    }
                },
                'Boxes': {
                    "410327888": {
                        'cat': '',
                        'name': 'Small Box',
                        "size": 2,
                        "class": 'Book_Box',
                        "id": 410327888,
                        "qty": 0
                    },
                    "410327889": {
                        'cat': '',
                        'name': 'Medium Box',
                        "size": 3,
                        "class": 'Linen_Box',
                        "id": 410327889,
                        "qty": 0
                    },
                    "410327890": {
                        'cat': '',
                        'name': 'Large Box',
                        "size": 5,
                        "class": 'Large_Linen_Box',
                        "id": 410327890,
                        "qty": 0
                    },
                    "410327891": {
                        'cat': '',
                        'name': 'China Box',
                        "size": 6,
                        "class": 'China_Box',
                        "id": 410327891,
                        "qty": 0
                    },
                    "410327892": {
                        'cat': '',
                        'name': 'Wardrobe Box',
                        "size": 16,
                        "class": 'Wardrobe_Box',
                        "id": 410327892,
                        "qty": 0
                    },
                    "410327893": {
                        'cat': '',
                        'name': 'File Box',
                        "size": 2,
                        "class": 'Letter_File_Box',
                        "id": 410327893,
                        "qty": 0
                    },
                    "410327894": {
                        'cat': '',
                        'name': 'Legal File Box',
                        "size": 3,
                        "class": 'Legal_File_Box',
                        "id": 410327894,
                        "qty": 0
                    }
                },
            }
        },
        special:{},
        selectedCategory: {},
        filteredItems: {},
        inventory: {},
        orderNumber:null
    },
    getters: {
        getPrices(state) {
            return state.prices
        },
        roomInventory(state) {
            return state.room
        },
        subCategoryInventory(state) {
            return state.subCategory
        },
        currentRoomInventory(state) {
            return state.currentRoom
        },
        customNameInventory(state) {
            return state.customName
        },
        customHeightInventory(state) {
            return state.customHeight
        },
        customWidthInventory(state) {
            return state.customWidth
        },
        customDepthInventory(state) {
            return state.customDepth
        },
        databaseInventory(state){
            return state.database
        },
        specialInventory(state){
            return state.special
        },
        selectedCategoryInventory(state){
            return state.selectedCategory
        },
        filteredItemsInventory(state){
            return state.filteredItems
        },
        inventoryInventory(state){
            return state.inventory
        },
        orderNumberInfo(state){
            return state.orderNumber
        }
    }
}