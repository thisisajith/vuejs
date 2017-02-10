new Vue({
  el: '#container',

  data: {
    newname: "",
      newadd:"",
      newcity:"",
      taskList: [],
      task:[{
          name:'',
          address:'',
          city:''
      }],
  },
   
   
    methods:{
        additem :function(){
          
 var name=this.newname

     
    if (name) { 
     
        this.taskList.push({
          name
     

        });
    }
        this.newname = "";
      
    var address=this.newadd
    
    
        this.taskList.push({
          address
        });
         this.newaddress = "";
  
    
     var city=this.newcity
    
   
        this.taskList.push({
          city
        });
         this.newcity = "";
          
        }
        
        
        
        
    }

});

