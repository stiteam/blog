let User = {

    getLoginInfo () {
        return $.get('/api/loginInfo');
    }

};

export {User};