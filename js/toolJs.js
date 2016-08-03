		/*倒计时*/
		function showTime(){
			var endTime=new Date("2017/7/1,0:0:0");//毕业时间
			var nowTime=new Date();//当前时间
			var leftTime=parseInt((endTime.getTime()-nowTime.getTime())/1000); //剩下时间（秒）
			var d=parseInt(leftTime/(24*60*60));
			var h=parseInt(leftTime/(60*60)%24);
			var m=parseInt(leftTime/60%60);
			var s=parseInt(leftTime%60);
			document.getElementById("leftTime").innerHTML="距离毕业剩余"+d+"天"+h+"时"+m+"分"+s+"秒";
			if(leftTime<=0){
					document.getElementById("leftTime").innerHTML="毕业啦!"
			}
			setTimeout(showTime,500);

		}