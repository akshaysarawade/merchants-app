let initialState = {
  merchants: [
    {
      id: 0,
      firstName: "Max",
      lastName: "Muller",
      avatarUrl : 'www.google.com',
      emailId: 'max@gmail.com',
      phone: 97556221,
      hasPremium: 1,
      bids: [
        { id: 5111, carTitle: 'Audi A6', amount: '20000€', created: '22.05.2017' },
        { id: 9671, carTitle: 'Volkswagen Vento', amount: '15000€', created: '30.01.2017' },
        { id: 214, carTitle: 'Audi Q7', amount: '25000€', created: '29.10.2015' }
      ]
    }, {
      id: 1,
      firstName: "Jeff",
      lastName: "Bosz",
      avatarUrl : 'www.google1.com',
      emailId: 'jeff@gmail.com',
      phone: 9683221,
      hasPremium: 0
    }, {
      id: 2,
      firstName: "Robert",
      lastName: "Lewandowski",
      avatarUrl : 'www.rbl.com',
      emailId: 'robert@gmail.com',
      phone: 6511906,
      hasPremium: 1,
      bids: [
        { id: 701, carTitle: 'Audi A8', amount: '35000€', created: '10.09.2017' },
        { id: 1178, carTitle: 'Mercedes AMG GT', amount: '25800€', created: '22.01.2015' },
        { id: 871, carTitle: 'Audi Q5', amount: '22000€', created: '25.02.2016' },
        { id: 994, carTitle: 'Mercedes V-Class', amount: '32000€', created: '11.11.2017' },
        { id: 4482, carTitle: 'Mercedes S-Class', amount: '28000€', created: '17.05.2017' }
      ]
    }
  ],
  selectedMerchant: {},
  selectedMerchantBids: [],
  sortType: 'asc'
};

const merchantsObj = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MERCHANT':
      return {
        ...state,
        merchants: [...state.merchants, {
          id: Math.floor(Math.random()*900) + 100,
          firstName: action.merchant.firstName,
          lastName: action.merchant.lastName,
          emailId: action.merchant.emailId,
          avatarUrl: action.merchant.avatarUrl,
          phone: action.merchant.phone,
          hasPremium: action.merchant.hasPremium
        }]
      }
    // break;

    case 'SET_SELECTED_MERCHANT':
      let selectedMerchant = state.merchants.filter((merchant) => merchant.id === action.id);
      selectedMerchant = selectedMerchant.length ? selectedMerchant[0] : {}
      return {
        ...state,
        selectedMerchant
      }
    // break;

    case 'EDIT_MERCHANT':
      const tempMerchants = state.merchants.filter((merchant) => merchant.id !== action.merchant.id);
      return {
        ...state,
        merchants: [
          ...tempMerchants,
          action.merchant
        ]
      }
    // break;

    case 'DELETE_MERCHANT':
      return {
        ...state,
        merchants: state.merchants.filter((merchant) => merchant.id !== action.id)
      };
    // break;

    case 'SET_MERCHANT_BIDS':
      const selMerchant = state.merchants.filter((merchant) => merchant.id === action.merchantId);
      const selectedMerchantBids = selMerchant.length && selMerchant[0].hasOwnProperty('bids') ?  selMerchant[0].bids : [];
      return {
        ...state,
        selectedMerchantBids
      }

    case 'SET_SORT_TYPE':
      return {
        ...state,
        sortType: action.sortType
      }

    default:
      return state;
  }
}

export default merchantsObj;
