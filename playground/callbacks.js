var getUser = (id, callback) => {
    var user = {
        name: 'VlPan',
        id: id
    }

    callback(user);
}

getUser(31, (userObject) => {
    console.log(userObject);
});