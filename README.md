English.js
==========

### GeoIP based spelling correction between EN-GB &amp; EN-US

Introducing English.js, a JavaScript library which quietly converts text on your webpage to either Commonwealth English (aka British English) or American English depending on where you access the page from. ​English.JS uses a GeoIP service called hostip.info to determine where you are, and then adjusts the spelling of certain key words accordingly.

Write your content in EN-GB or EN-US, whichever you normally would, but spare yourself the annoyance of having pedantic people on either side of the Atlantic complaining that color/colour is spelled/spelt wrong.



### Setup:

1. Include "English.js" in your page. 
2. Initialize the EnglishJS plugin once the DOM has loaded:

```javascript
// EnglishJS will detect your location and display text in either Commonwealth
// or American English depending on which is most suitable
EnglishJS(); 

// Alternatively pass through the country you wish to localise/localize 
// for and EnglishJS will pick accordingly.
EnglishJS("GB");
// or
EnglishJS("US");
```

### Who gets what?

Visitors that hostip.info identify as coming from the following countries get Commonwealth English, and everyone else (including people who's location is unkown) gets American English.  

Anguilla,
Australia,
Barbados,
Bahamas,
Belize,
Bermuda,
Botswana,
Brunei,
Cameroon,
Cook Islands,
Cyprus,
Dominica,
Eritrea,
Falkland Islands,
Fiji,
Gambia,
Ghana,
Gibraltar,
Grenada,
Guernsey,
Guyana,
Hong Kong,
Ireland,
Isle of Man,
India,
Jamaica,
Jersey,
Jordan,
Kenya,
Kiribati,
Lesotho,
Malawi,
Malaysia,
Maldives,
Mauritius,
Malta,
Montserrat,
Mozambique,
Namibia,
Nauru,
New Zealand,
Nigeria,
Oman,
Pakistan,
Papua New Guinea,
Pitcairn,
Rwanda,
Samoa,
Saint Helena,
Saint Kitts and Nevis,
Saint Lucia,
Saint Vincent and the Grenadines,
Seychelles,
Sierra Leone,
Singapore,
South Africa,
The Sudan,
Swaziland,
Tanzania,
Tonga,
Trinidad and Tobago,
Turks and Caicos Islands,
Tuvalu,
Uganda,
United Kingdom,
Vanatu,
Zambia,
Zimbabwe

This list was based on info from http://wikitravel.org/en/English_language_varieties
