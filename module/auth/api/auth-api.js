import { ROLE } from "../../../data/constant";

export function sendOtpApi(mobileNumber) {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                message: `Otp will be sent to ${mobileNumber} successfully!`
            }
        });
    })
}

export function verifyOtpApi(mobileNumber, otp) {
    return new Promise((resolve, reject) => {

        if (otp !== '1234') {
            reject({
                data: {
                    message: `Please Enter Right OTP!`
                }
            });
        }

        switch (mobileNumber) {
            case '9999999999': {
                resolve({
                    data: {
                        name: 'jivesh',
                        role: ROLE.RESTAURANT,
                        accessToken: 'qhj23j4kh112hkjljsazoj',
                        message: `OTP verified successfully!`
                    }
                });
                break;
            }
            case '8888888888': {
                resolve({
                    data: {
                        name: 'Hitesh',
                        role: ROLE.DELIVERY,
                        accessToken: 'qhj23j4kh112hkjljsazoj',
                        message: `OTP verified successfully!`
                    }
                });
                break;
            }
            case '7777777777': {
                resolve({
                    data: {
                        name: 'Deepak',
                        role: ROLE.EXECUTIVE,
                        accessToken: 'qhj23j4kh112hkjljsazoj',
                        message: `OTP verified successfully!`
                    }
                });
                break;
            }
            default : {
                resolve({
                    data: {
                        name: 'Deepak',
                        role: ROLE.EXECUTIVE,
                        accessToken: 'qhj23j4kh112hkjljsazoj',
                        message: `OTP verified successfully!`
                    }
                });
            }
        }

        reject({
            data: {
                message: `Something went Wrong!!!`
            }
        });
    })
}
