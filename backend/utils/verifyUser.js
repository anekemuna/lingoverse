import bcrypt from 'bcrypt';
import User from "../models/user.model.js";


//verify username and password
export async function verifyUser(username, password) {

    const returningUser = await User.findOne({userName: username});
    if(!returningUser){
        return false;
    }
    //decrypt password and verify that
    const passwordIsValid = await bcrypt.compare(password, returningUser.password);
    return passwordIsValid
}
