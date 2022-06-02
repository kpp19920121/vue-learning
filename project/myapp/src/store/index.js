import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    user:{
      permissionList:[]
    }
  },
  getters:{
    permissionList:(state)=>{state.user.permissionList}
  },
  actions:{
    //获取权限列表
    GetPermissionList({commit}){
      let signHeader = {"X-Sign": sign,"X-TIMESTAMP": signMd5Utils.getDateTimeToString()};

      return new Promise((resolve, reject)=>{
        axios.post("http://api.boot.jeecg.com/sys/permission/getUserPermissionByToken",{

        },{
          headers:{

          }
        }).then((result)=>{
          console.log("获取所有权限集合：",result.data);
          commit("addPermissionList",result.data);
          resolve(result);
        }).catch((err)=>{
          console.log(err);
          reject(err);

        });
      });


    }
  },
  mutations:{
    addPermissionList:function(state,permissionList){
      state.user.permissionList=permissionList;
    }
  }
})
