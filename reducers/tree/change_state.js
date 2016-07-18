/**
	author : sailing
	date : 2016-7-14
	fun :tree改变闭合状态
**/

function setState (data , path) {
	if(data){
      let lis=[];

      for(let index in data){
         
        if(data[index].path == path){
        	data[index].state ? data[index].state = false : data[index].state = true 
        	return ;
        } 
        if(data[index].next && data[index].state){
            let next= setState(data[index].next , path);
        }

      }

      return 
  }

}

export default function(obj , path) {
	setState (obj , path)

	console.log("obj ##### : " , obj)
}