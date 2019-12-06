var homePage = `
<div class="content_1">
							<div class="regform">
							<div class="auth_title">
									<h2>Register to pomah</h2>
									<p>Join to Pomah you will get the best recommendation for rent house in near of you.</p>
							</div>
							<div class="auth_title hide">
									<h2>Login to pomah</h2>
									<p>Join to Pomah you will get the best recommendation for rent house in near of you.</p>
							</div>
							<div class="auth_nav" id="auth">
								<a class="auth_sel actives" id="auth_reg" href="#">Register </a>
								<a class="auth_sel" id="auth_log" href="#">Login </a>
							</div>
						
							<form class="form-horizontal" action='' method="POST">
								<fieldset>
									<div class="control-group">
										<!-- Username -->
										<label class="control-label" for="username">Username</label>
										<div class="controls">
											<input type="text" id="username" name="username" placeholder="ddf" class="input-xlarge">
											<p class="help-block">Username can contain any letters or numbers, without spaces</p>
										</div>
									</div>
				
									<div class="control-group">
										<!-- E-mail -->
										<label class="control-label rounded-top" for="email">E-mail</label>
										<div class="controls">
											<input type="text" id="email" name="email" placeholder="" class="input-xlarge">
											<p class="help-block">Please provide your E-mail</p>
										</div>
									</div>
				
									<div class="control-group">
										<!-- Password-->
										<label class="control-label" for="password">Password</label>
										<div class="controls">
											<input type="password" id="password" name="password" placeholder="" class="input-xlarge">
											<p class="help-block">Password should be at least 4 characters</p>
										</div>
									</div>
				
								<!--	<div class="control-group">
										<-- Password 
										<label class="control-label" for="password_confirm">Password (Confirm)</label>
										<div class="controls">
											<input type="password" id="password_confirm" name="password_confirm" placeholder=""
												class="input-xlarge">
											<p class="help-block">Please confirm password</p>
										</div>
									</div>
								-->
									<div class="control-group">
										<!-- Button -->
										<div class="controls">
											<button class="btn btn-success reg_btn">Register</button>
										</div>
									</div>
								</fieldset>
							</form>


							<form class="form-horizontal hide" action='' method="POST">
									<fieldset>
										
										<div class="control-group">
											<!-- E-mail -->
											<label class="control-label rounded-top" for="email">E-mail</label>
											<div class="controls">
												<input type="text" id="email" name="email" placeholder="" class="input-xlarge">
												<p class="help-block">Please provide your E-mail</p>
											</div>
										</div>
					
										<div class="control-group">
											<!-- Password-->
											<label class="control-label" for="password">Password</label>
											<div class="controls">
												<input type="password" id="password" name="password" placeholder="" class="input-xlarge">
												<p class="help-block">Password should be at least 4 characters</p>
											</div>
										</div>
					
					
										<div class="control-group">
											<!-- Button -->
											<div class="controls">
												<button class="btn btn-success reg_btn">Login</button>
											</div>
										</div>
									</fieldset>
								</form>
						</div>


						
					</div>
						<div class="content_2">
							<div id="carouselExampleIndicators" class="carousel slide" style=" width:100%; height: 100%">
									<ol class="carousel-indicators">
											<span class="dot" onclick="currentSlide(1)"></span>
											<span class="dot" onclick="currentSlide(2)"></span>
											<span class="dot" onclick="currentSlide(3)"></span>
											<span class="dot" onclick="currentSlide(4)"></span>
										  </ol>
									
								<div class="w3-content" style="max-width:100%; height:79.3%">
										<img class="mySlides w3-animate-right" src="../images/background-front.png" style="width:100%; height:100%">
										<img class="mySlides w3-animate-right" src="../images/house_2.jpg" style="width:100%; height:100%">
										<img class="mySlides w3-animate-right" src="../images/house_3.jpg" style="width:100%; height:100%">
										<img class="mySlides w3-animate-right" src="../images/house_2.jpg" style="width:100%; height:100%">
									  </div>
									  <div class="text_box">
										<div class="text_box_logo">
												<img src="../images/text_box_logo.png" alt="Third slide">
										</div>
										<div class="text_box_text">
											<div class="text_box_text_center">
												<h2 id="carousel_h2">sdaBest Price Guarantee</h2>
												<p id="carousel_p">dsadCompetitive price from extensive network budget hotels to 5 start hotels such as lbis, Amaris, Santika Hotel with best price guarantee</p>
											</div>
										</div>
`;


function auth(){

// Add active class to the current button (highlight it)
var header = document.getElementById("auth");
var btns = header.getElementsByClassName("auth_sel");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var title = document.getElementsByClassName("auth_title");
    var form = document.getElementsByClassName("form-horizontal");
    console.log(form);
    if(this.id === "auth_log" && form[1].className.includes("hide")){
        form[0].className += " hide";
        form[1].className = form[1].className.replace(" hide", "");
        title[0].className += " hide";
        title[1].className = title[1].className.replace(" hide", "");
    }
    if(this.id === "auth_reg" && form[0].className.includes("hide")){
        form[1].className += " hide";
        form[0].className = form[0].className.replace(" hide", "");
        title[1].className += " hide";
        title[0].className = title[0].className.replace(" hide", "");
    }
  var current = document.getElementsByClassName("actives");
  current[0].className = current[0].className.replace(" actives", "");
  this.className += " actives";
  });

}
var script = document.createElement('script');
script.onload = function () {
    //do stuff with the script
};
script.src = "../js/slideshow.js";

document.head.appendChild(script);
}