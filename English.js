/**
 * English.js 1st release
 * http://www.mcgirk.com
 *
 * Copyright (C) 2013, Martin McGirk.
 * All rights reserved.
 *
 * This software is MIT licensed. Do what you like with it. If you do use it
 * I'd really appreciate an email (english@mcgirk.com) just to let me know
 * what it's being used for. It is in no way required that you do this though.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 **/
 
var EnglishJS = (function () {

    //Set up a dictionary of word replacements.
    //GB English at position 0, US English at position 1
    var wordReplacements = [
    ["æroplane", "airplane"],
    ["æsthetic", "esthetic"],
    ["ageing", "aging"],
    ["aluminium", "aluminum"],
    ["amœba", "ameba"],
    ["anæmia", "anemia"],
    ["anæsthesia", "anesthesia"],
    ["analyse", "analyze"],
    ["analogue", "analog"],
    ["annexe", "annex"],
    ["apologise", "apologize"],
    ["archæology", "archeology"],
    ["armour", "armor"],
    ["arse", "ass"],
    ["artefact", "artifact"],
    ["authorise", "authorize"],
    ["axe", "ax"],
    ["behaviour", "behavior"],
    ["caesium", "cesium"],
    ["cancelled", "canceled"],
    ["carburettor", "carburetor"],
    ["catalogue", "catalog"],
    ["centre", "center"],
    ["chamomile", "camomile"],
    ["chequer", "checker"],
    ["civilise", "civilize"],
    ["colonise", "colonize"],
    ["colonisation", "colonization"],
    ["colour", "color"],
    ["cosy", "cozy"],
    ["counsellor", "counselor"],
    ["cypher", "cipher"],
    ["defence", "defense"],
    ["demagogue", "demagog"],
    ["dialled", "dialed"],
    ["dialler", "dialer"],
    ["dialogue", "dialog"],
    ["diarrhœa", "diarrhea"],
    ["disc", "disk"],
    ["distention", "distension"],
    ["distil", "distill"],
    ["doughnut", "donut"],
    ["draught", "draft"],
    ["dreamt", "dreamed"],
    ["encyclopædia", "encyclopedia"],
    ["œnology", "enology"],
    ["enrolment", "enrollment"],
    ["equalling", "equaling"],
    ["œsophagus", "esophagus"],
    ["œstrogen", "estrogen"],
    ["favourites", "favorites"],
    ["fæces", "feces"],
    ["fibre", "fiber"],
    ["fœtid", "fetid"],
    ["fœtus", "fetus"],
    ["flautist", "flutist"],
    ["flavour", "flavor"],
    ["fulfil", "fulfill"],
    ["furore", "furor"],
    ["gaol", "jail"],
    ["glycerine", "glycerin"],
    ["grey", "gray"],
    ["gynæcology", "gynecology"],
    ["hæmophilia", "hemophilia"],
    ["harbour", "harbor"],
    ["harmonise", "harmonize"],
    ["harmonisation", "harmonization"],
    ["homologue", "homolog"],
    ["honour", "honor"],
    ["humour", "humor"],
    ["instalment", "installment"],
    ["gaol", "jail"],
    ["jewellery", "jewelry"],
    ["judgement", "judgment"],
    ["kilometre", "kilometer"],
    ["labour", "labor"],
    ["leapt", "leaped"],
    ["leukæmia", "leukemia"],
    ["licence", "license"],
    ["liquorice", "licorice"],
    ["light", "lite"],
    ["litre", "liter"],
	["localise", "localize"],
    ["manœuvre", "maneuver"],
    ["marvellous", "marvelous"],
    ["mediæval", "medieval"],
    ["metre", "meter"],
    ["modelling", "modeling"],
    ["mould", "mold"],
    ["mollusc", "mollusk"],
    ["moult", "molt"],
    ["mum", "mom"],
    ["monologue", "monolog"],
    ["moustache", "mustache"],
    ["neighbour", "neighbor"],
    ["œnology", "enology"],
    ["œsophagus", "esophagus"],
    ["œstrogen", "estrogen"],
    ["offence", "offense"],
    ["omelette", "omelet"],
    ["organisation", "organization"],
    ["ortholog", "orthologue"],
    ["orthopædic", "orthopedic"],
    ["pædiatric", "pediatric"],
    ["pædophile", "pedophile"],
    ["pyjamas", "pajamas"],
    ["paralyse", "paralyze"],
    ["parlour", "parlor"],
    ["pedagogue", "pedagog"],
    ["plough", "plow"],
    ["practise", "practice"],
    ["pretence", "pretense"],
    ["quarrelled", "quarreled"],
    ["quarrelling", "quarreling"],
    ["realise", "realize"],
    ["realisation", "realization"],
    ["rigour", "rigor"],
    ["routeing", "routing"],
    ["savoury", "savory"],
    ["sceptic", "skeptic"],
    ["show", "showorshew"],
    ["signalling", "signaling"],
    ["skilful", "skillful"],
    ["speciality", "specialty"],
    ["spelt", "spelled"],
    ["sulphur", "sulfur"],
    ["theatre", "theater"],
    ["tyre", "tire"],
    ["tranquillity", "tranquility"],
    ["travelled", "traveled"],
    ["traveller", "traveler"],
    ["travelling", "traveling"],
    ["tumour", "tumor"],
    ["valour", "valor"],
    ["victual", "vittle"],
    ["vigour", "vigor"],
    ["whisky", "whiskey"],
    ["woollen", "woolen"],
    ["yoghurt", "yogurt"]
    ];

    //Country codes for http://www.hostip.info/bulk/countries.html where 
    //Commonwealth English has primacy over US English as defined at 
    //http://wikitravel.org/en/English_language_varieties
    var commonwealthEnglishCountries = [
        "AI", //Anguilla
        "AU", //Australia
        "BB", //Barbados
        "BS", //Bahamas
        "BZ", //Belize
        "BM", //Bermuda
        "BW", //Botswana
        "BN", //Brunei
        "CM", //Cameroon
        "CK", //Cook Islands
        "CY", //Cyprus
        "DM", //Dominica
        "ER", //Eritrea
        "FK", //Falkland Islands
        "FJ", //Fiji
        "GM", //Gambia
        "GH", //Ghana
        "GI", //Gibraltar
        "GD", //Grenada
        "GG", //Guernsey
        "GY", //Guyana
        "HK", //Hong Kong
        "IE", //Ireland
        "IM", //Isle of Man
        "IN", //India
        "JM", //Jamaica
        "JE", //Jersey
        "JO", //Jordan
        "KE", //Kenya
        "KI", //Kiribati
        "LS", //Lesotho
        "MW", //Malawi
        "MY", //Malaysia
        "MV", //Maldives
        "MU", //Mauritius
        "MT", //Malta
        "MS", //Montserrat
        "MZ", //Mozambique
        "NA", //Namibia
        "NR", //Nauru
        "NZ", //New Zealand
        "NG", //Nigeria
        "OM", //Oman
        "PK", //Pakistan
        "PG", //Papua New Guinea
        "PN", //Pitcairn
        "RW", //Rwanda
        "WS", //Samoa
        "SH", //Saint Helena
        "KN", //Saint Kitts and Nevis
        "LC", //Saint Lucia
        "VC", //Saint Vincent and the Grenadines
        "SC", //Seychelles
        "SL", //Sierra Leone
        "SG", //Singapore
        "ZA", //South Africa
        "SD", //The Sudan
        "SZ", //Swaziland
        "TZ", //Tanzania
        "TO", //Tonga
        "TT", //Trinidad and Tobago
        "TC", //Turks and Caicos Islands
        "TV", //Tuvalu
        "UG", //Uganda
        "GB", //United Kingdom
        "VU", //Vanatu
        "ZM", //Zambia
        "ZW"  //Zimbabwe 
    ];

    //Extend String replace to keep case if needed. Handles either all upper "INPUT", all lower "input" or 
    //first letter only upper "Input". Will handle funky edge cases "inPut" by making them all lower case.
    String.prototype.replaceWithCase = function (oldStr, newStr) {
        return this.replace(new RegExp(oldStr, 'ig'), function (found) {
            if (/^[^a-z]+$/.test(found)) {
                return newStr.toUpperCase();
            }
            else {
                return /[A-Z]/.test(found.charAt(0)) ? (newStr.charAt(0).toUpperCase() + newStr.substring(1)) : newStr.toLowerCase();
            }
        });
    }

    //Alters the text on the page based on what country your 
    //ip address originates from. Geolocation provided by
    //hostip.info. Can be overridden by manually passing through
    //a country code.
    return function LocaliseOrLocalize(countryCode) {
        var country;
        if (countryCode) {
            country = countryCode;
        }
        else {
            //Get user location using ip address from hostip.info
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            }
            else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", "http://api.hostip.info/country.php", false);
            xmlhttp.send();
            country = xmlhttp.responseText;
        }

        //Get all text nodes in the body of the page
        var textNodes = getTextNodesInBody();
		
        for (var i = 0; i < textNodes.length; i++) {
            var nodeValue = textNodes[i].nodeValue;
            if (nodeValue) {
                for (var j = 0; j < wordReplacements.length; j++) {
                    if (commonwealthEnglishCountries.indexOf(country) > -1) {
                        //Switch any US dictionary abominations to Commonwealth English
                        textNodes[i].nodeValue = textNodes[i].nodeValue.replaceWithCase(wordReplacements[j][1], wordReplacements[j][0]);
                    }
                    else {
                        //Switch any British English to US English to appease the unwashed masses.
                        //I joke, but I have made US English the default on the basis that everybody,
						//including large swathes of the UK seem to think that US English is the correct
						//way to spell things.
                        textNodes[i].nodeValue = textNodes[i].nodeValue.replaceWithCase(wordReplacements[j][0], wordReplacements[j][1]);
                    }
                }
            }
        }
        return false;
    }

    //Credit to Tim Down on Stack Overflow who's code this method is a lightly modified version of.
    function getTextNodesInBody() {
        var node = document.body;
        var textNodes = [], whitespace = /^\s*$/;

        function getTextNodes(node) {
            if (node.nodeType == 3) {
                if (!whitespace.test(node.nodeValue)) {
                    textNodes.push(node);
                }
            } else {
                for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                    getTextNodes(node.childNodes[i]);
                }
            }
        }

        getTextNodes(node);
        return textNodes;
    }

})();