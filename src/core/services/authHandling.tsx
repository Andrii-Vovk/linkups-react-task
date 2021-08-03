export function setToken(auth: string) {
    localStorage.setItem('authorization', auth);
}

export function getToken() {
    if(localStorage.getItem('authorization')) {
        return localStorage.getItem('authorization')
    }
    else {
        console.log("Not authorized");
    }
}

export function hasToken() {
    return localStorage.getItem('authorization') !== null;
}

export function destroyToken() {
    return localStorage.removeItem('authorization');
}