(function($){
	$.fn.drawclock=function(){
		var clock=$(this)				
				var ctx=clock.get(0).getContext('2d');
				var height=ctx.canvas.height;
				var width=ctx.canvas.width;
				
				var rem=width/200
				var r=width/2;
				function drawbg(){
					var num=[3,4,5,6,7,8,9,10,11,12,1,2]
					ctx.save();
				    ctx.translate(r,r);
					ctx.beginPath();
					ctx.lineWidth=15*rem;
					ctx.arc(0,0,r-15*rem/2,0,2*Math.PI,false);
					ctx.stroke();
					
					ctx.font=20*rem+'px arial';
					ctx.textAlign='center';
					ctx.textBaseline='middle';
					num.forEach(function(number,i){
					   var ang=2*Math.PI/12*i;					   
					   //console.log(ang)
					   var x=(r-(45*rem))*Math.sin(ang);
					   var y=(r-(45*rem))*Math.cos(ang);
					    //console.log(x)						   
					    ctx.fillText(num[i],y,x);					    					    				    								
				});
				
				for (var i=0;i<60;i++) {
						var ang=2*Math.PI/60*i
						var y=Math.sin(ang)*(r-28*rem);
						var x=Math.cos(ang)*(r-28*rem);
						ctx.beginPath();
						
						if(i%5!==0){
							ctx.arc(x,y,2*rem,0,2*Math.PI,true);
							ctx.fillStyle='gainsboro'
						}
						else{
							ctx.arc(x,y,2*rem,0,2*Math.PI,true);
							ctx.fillStyle='black'
						}
						ctx.fill();												
				};										
				};
				
				function drawhour(hour,min){
					    ctx.save();
					var ang=2*Math.PI/12*hour;
					var ang2=2*Math.PI/12/60*min;
					    ctx.beginPath();
					    ctx.rotate(ang+ang2);						
						ctx.moveTo(0,10*rem);
						ctx.lineCap='round';
						ctx.lineWidth=10*rem;
						ctx.lineTo(0,-50*rem);						
						ctx.stroke();
						ctx.restore();
				};
				
				function drawminute(min){
					ctx.save()
					var ang=2*Math.PI/60*min
					ctx.beginPath();
					ctx.rotate(ang);
					ctx.lineCap='round';
					ctx.lineWidth=5*rem;
					ctx.moveTo(0,20*rem);
					ctx.lineTo(0,-70*rem);
					ctx.stroke();
				    ctx.restore()
				};
				
				function second(sec){
					ctx.save();
					var ang=2*Math.PI/60*sec;
					ctx.beginPath();
					ctx.rotate(ang);
					ctx.fillStyle='red';
					ctx.moveTo(-2*rem,35*rem);
					ctx.lineTo(2*rem,35*rem);
					ctx.lineTo(1*rem,20*rem-r);
					ctx.lineTo(-1*rem,20*rem-r);
					ctx.fill();
					ctx.restore();
				};
				
				function doti(){
					ctx.beginPath();
					ctx.fillStyle='#FFFFFF'
					ctx.arc(0 ,0 , 3*rem, 0, 2*Math.PI, false);
					ctx.fill();												
				};
				
				function drawit(){
					ctx.clearRect(0,0,r*2,r*2)
					var time=new Date();
					var hour=time.getHours();
					var min=time.getMinutes();
					var sec=time.getSeconds();						
			     drawbg();	
				drawhour(hour,min)
				drawminute(min)
				second(sec)	
				doti()
			    ctx.restore()
				};
				
				drawit();				
				setInterval(drawit,1000)
				
				
				
				
				
				
				
				
				
			
	}
})(jQuery)
