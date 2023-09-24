# Return the timetable

A simple script to return the timetable button to bromcom VLE.

## Installation

Either download the script, or copy the code into the Tampermonkey script creator. To install Tampermonkey, or similar, follow [this](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).

## Script

```javascript
// ==UserScript==
// @name     RETURN THE TIMETABLE
// @include  https://vle.bromcomcloud.com/*
// @icon     https://vle.bromcomcloud.com/favicon.ico
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==
//--- The @grant directive is used to restore the proper sandbox.

$("#PagesUL").append ( `
    <li class="">
    <a data-menuname="Timetable" href="/Timetable">
        <span class="icon"><i class="fa fa-clock-o"></i></span>
        <span class="text">Timetable</span>
    </a>
    </li>
` );


```

## Contributing

The script works. If it fails in the future, it wont be difficult to change.
BromCom brought back the timetable link, so it is unnecessary now.

## License

[MIT](https://choosealicense.com/licenses/mit/)
