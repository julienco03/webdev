<?php

function e($html)
{
    return htmlspecialchars($html, ENT_QUOTES, 'UTF-8', true);
}

function format_guestbook_entry_content($content)
{
    $paragraphs = explode("\n", $content);
    $filteredParagraphs = [];
    foreach ($paragraphs as $paragraph) {
        $paragraph = trim($paragraph);
        if (strlen($paragraph) > 0) {
            $filteredParagraphs[] = $paragraph;
        }
    }
    return $filteredParagraphs;
}