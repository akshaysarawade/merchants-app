export function addMerchant(merchant) {
  return {
    type: 'ADD_MERCHANT',
    merchant: merchant
  }
}

export function editMerchant(merchant) {
  return {
    type: 'EDIT_MERCHANT',
    merchant: merchant
  }
}

export function deleteMerchant(id) {
  return {
    type: 'DELETE_MERCHANT',
    id
  }
}

export function setSelectedMerchant(id) {
  return {
    type: 'SET_SELECTED_MERCHANT',
    id
  }
}

export function setMerchantBids(merchantId) {
  return {
    type: 'SET_MERCHANT_BIDS',
    merchantId
  }
}

export function setSortType(sortType) {
  return {
    type: 'SET_SORT_TYPE',
    sortType
  }
}
