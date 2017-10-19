/**
 * Created by Administrator on 2017/10/18.
 */
app.factory("shopServer",["baseServer",function(baseServer){
    var factory={
        getShop:function(type,url){
            return baseServer.ajax(type,url)
        }
    };
    return factory;
}]);