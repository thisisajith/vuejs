new Vue({
  el: '#container',

  data: {
    newname: "",
      newadd:"",
      newcity:"",
      search:"",
      taskList: [],
        task:{
          name:'',
          address:'',
          city:''
      },
  },
   
   
    methods:{
        additem :function(){
       
 var name=this.newname
  var address=this.newadd
     var city=this.newcity

     var task = {
      name: name,
      address: address,
      city: city
     }
      console.log(task)
        this.taskList.push(task);
        name:task
        address:task
        city:task
        this.newname = "";
        this.newadd = "";
        this.newcity = "";
          console.log(this.taskList)
        }
        
        
        
        
    }

});

