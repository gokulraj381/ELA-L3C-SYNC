import Controller from '@ember/controller';
import {  action } from '@ember/object';


export default class ElaController extends Controller {

 

  getStatus() {
    var status ="true";
    let s=this;
    $.ajax({
      type: "post",
      url: "ELA",
      data: {
        status
      },
      success: function (data) {
        const obj = JSON.parse(data);
        console.log(data);
        if(obj.status=="success")
        {
          $(".message1").html(obj.message).slideDown('slow');
          s.clearIntervalCount();
        }else if(obj.status=="Failed"){
          $(".message").html(obj.message).slideDown('slow');
          s.clearIntervalCount();
        }else
        {
          $(".message1").html(obj.message).slideDown('slow');
        }
      }
  })
  }

  clearIntervalCount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  
  @action
  sendRequest() {
    let name = this.getProperties("name");
    let password = this.getProperties("password");
    var status ="false";
    console.log(name);
    console.log(password);
    console.log(status);
    let s=this;
    
    $.ajax({
      type: "post",
      url: "ELA",
      data: {
        name:name,
        password:password,
        status
      },
      success: function (data) {
        $(".message1").html(data).slideDown('slow');
        s.set("intervalId", setInterval(() => s.getStatus(), 10000));
    
    
      }
  
    
    
  })}



   
 

}