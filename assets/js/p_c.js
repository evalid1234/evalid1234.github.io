
/* Define the navigations */
class Nav extends HTMLElement { 
    connectedCallback() { 
        this.innerHTML = `<nav id="nav">
				<ul class="container">
					<li><a href="/index.html">Home</a></li>
				</ul>
            </nav>`
    }
};

customElements.define('custom-nav', Nav); 

/* Shared Footer */
class Footer extends HTMLElement { 
    connectedCallback() {
        this.innerHTML = 
           `
			<article id="contact" class="wrapper style4">
				<div class="container medium">
					<header>
						<h2>Contact Me </h2>
						<p>Feel free to contact me. Jobs are fun to have!</p>
					</header>
					<div class="row">
						<div class="col-12">
							<form method="post" action="mailto:elagu013@fiu.edu" enctype="text/plain">
								<div class="row">
									<div class="col-6 col-12-small">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div class="col-6 col-12-small">
										<input type="text" name="email" id="email" placeholder="Email" />
									</div>
									<div class="col-12">
										<input type="text" name="subject" id="subject" placeholder="Subject" />
									</div>
									<div class="col-12">
										<textarea name="message" id="message" placeholder="Message"></textarea>
									</div>
									<div class="col-12">
										<ul class="actions">
											<li><input type="submit" value="Send Message" /></li>
											<li><input type="reset" value="Clear Form" class="alt" /></li>
										</ul>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12">
							<hr />
							<h3>Find me on ...</h3>
							<ul class="social">
								
								<li><a href="https://www.linkedin.com/in/eduardo-lagunas/" class ="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
								<li><a href="https://github.com/evalid1234" class="icon brands fa-github"><span class="label">Github</span></a></li>
							</ul>
							<hr />
						</div>
					</div>
					<footer>
						<ul id="copyright">
							<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</footer>
				</div>
			</article>
        `
    }
};

customElements.define('custom-footer', Footer); 