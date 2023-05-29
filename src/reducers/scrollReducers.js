

const SCROLL1_TRUE = 'SCROLL1_TRUE'
const SCROLL1_FALSE = 'SCROLL1_FALSE'

export const scroll1Reducer = (state = {scroll1 : Boolean}, action) => {
    switch(action.type){
        case SCROLL1_TRUE: 
            return {scroll1: true}
        case SCROLL1_FALSE:
            return {scroll1: false}
        default: 
            return state
    }
}