const getToken = async () => {
    try {
        const jsonValue = await localStorage.getItem('user');
        if (jsonValue !== null) {
            return JSON.parse(jsonValue).token.accessToken;
        }
        return null;
        //   return ;
    } catch (e) {
        // error reading value
    }
}

export {
    getToken
}