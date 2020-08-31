const postToCart = (selector) => {
    return {
        type: 'CART',
        payPost: selector
    }
}

const handleActive = (target) => {
    return {
        type: 'ACT',
        payTarget: target
    }
}

const deleteCard = (target) => {
    return {
        type: 'DEL',
        payDelete: target
    }
}

const sendProductsPhone = (phone) => {
    return {
        type: 'SENDP',
        payPhone: phone
    }
}

const sendProductsEmail = (email) => {
    return {
        type: 'SENDE',
        payEmail: email
    }
}

const incCount = (count) => {
    return {
        type: 'COUNT',
        payCount: count
    }
}

const clear = () => {
    return {
        type: 'CLEAR'
    }
}

const loading = () => {
    return {
        type: 'LOAD'
    }
}

const requested = () => {
    return {
        type: 'REQ'
    }
}

export {postToCart, handleActive, deleteCard, sendProductsPhone, sendProductsEmail,incCount, clear, loading, requested};