
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Curriculum Vitae</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/cv.css">
    <script type="text/javascript" src="jscodes/myjs.js"></script>
  </head>
<body>
  <header>
    <ul class="menu">
      <li style="float:left;"><a href="index.php" target="_self" title="Return to home page"><img src="images/home.png">Home</a></li>
      <li><a href="login.php" target="_self" title="End session">Logout</a></li>
	</ul>
    <h1>Muddy Ramadhan</h1>
	<p id="position">Software Engineer</p>
     </header>
    <section>
    <h2>Summary</h2>
	<p class="summary"><img src="images/profile.jpg.jpg" width="150" alt="">
	  Deadline-oriented software engineer with lots of experience. Solid track record of architecting solutions that exceed client expectations.</p>
    </section>
     <section>
    <h2>Experience</h2>
	<ul id="experience">
	  <li>
	    <b>Senior Software UDSM</b> | 2023-Present
	  </li>
	  <li>
	    <b>Senior Software COICT</b> | 2020-2022
	  </li>
	</ul>
  </section>
  <section>
    <h2>Skills</h2>
	<table id="skilss">
	  <tr><th>Skill</th><th>Level</th></tr>
	  <tr><td>HTML</td><td>Intermediate</td></tr>
	  <tr><td>CSS</td><td>Intermediate</td></tr>
	  <tr><td>JS</td><td>Intermediate</td></tr>
	  <tr><td>pHp</td><td>Intermediate</td></tr>
	  <tr><td>jQUERY</td><td>Intermediate</td></tr>
	  <tr><td>JAVA</td><td>Intermediate</td></tr>
	</table>
  </section>
  <section>
    <h2>Contact Form</h2>
	<form id="contcact-form" action="cvs.php" method="post">
	  <label for="name">Name: </label><input placeholder="Name" id="name" type="text" name="username"/><br>
	  <label for="email">Email: </label><input placeholder="Email" id="email" name="useremail" type="email"/><br>
	  <textarea placeholder="Message" maxlength="60" name="userinfo"></textarea><br>
	  <input type="submit" value="SEND" >
	</form>
  </section>
  <footer>
	<p id="copyright">Copyright &copy;Muddy Ramadhan</p>
  </footer>
</body>
</html>