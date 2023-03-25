import jwtDecode from 'jwt-decode';

export const isTokenValid = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // divide by 1000 to convert to seconds
        if (decodedToken.exp < currentTime) {
            // token has expired
            return false;
        } else {
            // token is valid
            return true;
        }
    } catch (error) {
        // error decoding token
        return false;
    }
}

export const getUsername = (token) =>{
    const decodedToken = jwtDecode(token)
    return decodedToken.sub;
};