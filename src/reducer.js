export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after development
    // token: null,
    token: "BQCFPv3PKRS9NGu8-dtuz7pdGXN3DTQr3OphAQLwJ-N5iRSEAqvKhggjla4qgdSxt1S2Q7IsnSPCG-W7uEpl1x7--3OAhm98MkeqAHHc8S3rsDDCj427jMVVA_fi2ZBD0ocdPZd-lEe6LjVi78VU6w_02m3bKykrXlnkUadhTHVlcV0oebEM"
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state;
    }
}

export default reducer;