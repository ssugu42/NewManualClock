        var i,d,height,width;
		var c = document.getElementById("mycan");
		d = c.getContext("2d");
		var radi = c.height /2;
		d.translate(radi,radi);
		setInterval(clock, 1000);


		function clock(){
			drw_panel(d,radi);
			drw_numbers(d,radi);
			drw_handles(d,radi);
		}

		function drw_panel(d,radi){
			d.beginPath();
            d.arc(0, 0, radi, 0, 2*Math.PI);
            d.fillStyle = 'white';
            d.fill();
			d.beginPath();
            d.arc(0,0,radi * 0.99,0,2*Math.PI);
			d.lineWidth = 4;
			d.stroke();
            d.beginPath();
            d.arc(0, 0, radi*0.04, 0, 2*Math.PI);
            d.fillStyle = '#333';
            d.fill();
		}

		function drw_numbers(d,radi){  
			for(i = 1;i < 13; i++){
				var degree = i * Math.PI /6;
				d.rotate(degree);
				d.translate(0,-radi*0.85);
				d.font = "15pt Arial";
				d.fillText(i.toString() , 0 , 0);
				d.translate(0,radi*0.85);
				d.rotate(-degree);
			}
		}

		function drw_handles(d,radi){
			var now_date = new Date();
			var seconds = now_date.getSeconds();
		    seconds = seconds * Math.PI / 30;
		    drw_hands(d,seconds,radi * 0.85);

	     ///////////////////////////////////////////////////
		   var minute = now_date.getMinutes();
		   minute = (minute * Math.PI / 30) + (seconds * Math.PI / (30*60));
           drw_hands(d, minute, radi * 0.8);

		//////////////////////////////////////////////////////
		   var hour = now_date.getHours();
		   hour = hour % 12;
           hour = (hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (seconds*Math.PI/(360*60));
           drw_hands(d, hour, radi*0.5, radi*0.07);
		}

		function drw_hands(d,seconds,lenght){
			d.beginPath();
			d.lineCap = "round";
			d.rotate(seconds);
			d.moveTo(0,0);
			d.lineTo(0,-lenght);
			d.stroke();
			d.rotate(-seconds);
		}