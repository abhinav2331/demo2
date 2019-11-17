import { UPDATE_REASON } from "./types";

const updateReasonAsync = (user) => {
    return {
        type: UPDATE_REASON,
        payload:user
    }
}

const updateReason = (user) => {
    return dispatch => {
        dispatch(updateReasonAsync(user));
    }
}


export default updateReason;
