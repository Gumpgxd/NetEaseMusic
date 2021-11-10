const initState: any = {
    token: ""
}

const reducer = (state = initState, action:any) => {
    switch (action.type) {
        case "add_token":
            return {
                token: action.payload
            }
        default:
            return state;
    }
}

export default reducer