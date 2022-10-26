import { formStateMapper } from "../../utils/formStateMapper";
import { postReq } from "./axios";

const usersURL = ''

export async function registerUser(userForm) {
    const userInfo = formStateMapper(userForm);
    //return await postReq(usersURL, userInfo);
    return userInfo;
}