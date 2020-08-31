const initialState = {
    arr: [],
    select: false,
    phone: '',
    email: '',
    clearInp: false,
    load: true
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CART':
            const elem = action.payPost;
            const newArr = state.arr;

            if (!elem.added) {
                newArr.push(elem)
            } else {
                const index = newArr.indexOf(elem);
                newArr.splice(index, 1);
            }

            return {
                arr: newArr
            }

        case 'ACT':
            const target = action.payTarget;
        
            target.active = 'active_btn_added';
            target.added = !target.added;
             
            if (target.added === false) {
                target.count = 1;
            }

            return {
                ...state,
                select: !initialState.select
            }

        case 'DEL':
            const targetDel = action.payDelete;
            const changeArr = state.arr;

            const indexDel = changeArr.indexOf(targetDel);
            changeArr.splice(indexDel, 1);

            targetDel.added = false;
            targetDel.count = 1;

            return {
                ...state,
                arr: [
                    ...changeArr
                ]
            }

            case 'SENDP':
                const phoneTarget = action.payPhone;

                return {
                    ...state,
                    phone: phoneTarget
                }
            
            case 'SENDE':
                const emailTarget = action.payEmail;

                return {
                    ...state,
                    email: emailTarget
                }

            case 'COUNT':
                const countTarget = action.payCount;

                countTarget.count = countTarget.count + 1;

                return {
                    ...state,
                    arr: [
                        ...state.arr
                    ]
                }

            case 'CLEAR':
                return {
                    ...state,
                    phone: '',
                    email: '',
                }

            case 'LOAD':
                return {
                    ...state,
                    load: true
                }
            case 'REQ':
                return {
                    ...state,
                    load: false
                }
        default:
            return state;
    }
}

export default reducer;