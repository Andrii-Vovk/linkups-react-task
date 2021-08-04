export function setToken(auth: string): void {
    localStorage.setItem('authorization', auth);
}

export function getToken(): string | null {
    const res = localStorage.getItem('authorization');
    if(res) return res;
    return null;
}

export function hasToken(): boolean {
    return localStorage.getItem('authorization') !== null;
}

export function destroyToken(): void {
    localStorage.removeItem('authorization');
}