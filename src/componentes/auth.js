const isTokenValid = () => {
    const tokenExist = !!localStorage.getItem('token');
    if (tokenExist) {     
        return true
    } else {
        return false
    }
}


export default isTokenValid