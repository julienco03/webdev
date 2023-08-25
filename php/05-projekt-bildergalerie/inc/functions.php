<?php

// Mit Hilfe von htmlspecialchars() lassen sich XSS-Attacken abwehren, indem bspw. <script>-Tags kodiert werden
// Aus <script></script> wird "&lt;script&gt;&lt;/script&gt;"
function e($html)
{
    return htmlspecialchars($html, ENT_QUOTES, 'UTF-8', true);
}