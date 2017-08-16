var loginInfo = function() {
    return new Promise((resolve) => {
        wx.login({
            complete: function(data) {
                resolve(data);
            }
        })
    })
}

export default loginInfo;