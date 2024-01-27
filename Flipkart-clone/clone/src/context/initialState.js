//contains all the information of user in its inital state
import {fetchUser} from "../utils/fetchLocalStorageData"

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
    ProductItems: null
};