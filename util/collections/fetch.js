const fetch = function(obj) {
    return new Promise((resolves, reject) => {
        wx.request({
            url: obj.url,
            data: obj.data,
            header: obj.header || {
                "content-type": "application/json"
            },
            complete: function(recieveData) {
                resolve(recieveData);
            },
            fail: function(failInfo) {
                resolve(failInfo);
            }
        })
    });

}

export default fetch;