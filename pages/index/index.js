import Util from '../../util/util';

Page({
    data: {
        content: "helloworld"
    },
    //只调一次;
    onLoad(options) {


        var til = Util;
        this.setData({
            content: 'no'
        })
    },
    //每次打开都会调
    onShow() {

    }
})