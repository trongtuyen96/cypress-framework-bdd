import { randomString } from './utils'
class User {
    constructor() {
        this.firstName = `F${randomString(7)}`;
        this.lastName = `L${randomString(7)}`;
        this.email = `e-${randomString(9)}@atwt.com`;
        this.password = `P${randomString(6)}`;
        this.phoneNumber = '0123456789'
    }
}

module.exports = User;