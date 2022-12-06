employee={
    name:'john',
    employee_id:'123',
    description(){
      console.log(this.name+" "+this.employee_id);
      
    },
    description_with_countryandcity(city,country){
      console.log(this.name+" "+this.employee_id+" "+city+" "+country);
      
    }
  };
  programmer={
    name:"hello",
    employee_id:'246',
  };
  //apply without arguments
  employee.description.apply(programmer);
  //apply with  arguments 
  employee.description_with_countryandcity.apply(programmer,["delhi","india"]);
  
  //maximum of array with apply 
  console.log(Math.max.apply(null,[1,2,3]));
  