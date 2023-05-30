'use strict'

console.log(document.getElementById('navigation'))
/*
<nav id="navigation">
{<ul>
<li><a class="active" href="#">Startseite</a></li>
<li><a href="#">HTML</a></li>
<li><a href="#">CSS</a></li>
<li><a href="#">JavaScript</a></li>
</ul>
</nav>
*/

console.log(document.getElementsByClassName('jumbotron'))
// HTMLCollection(2) [article.jumbotron, article.jumbotron]

console.log(document.getElementsByTagName('a'))
// HTMLCollection(4) [a.active, a, a, a]
