/*
# Google Search
- Use the keyword "g"
- After the keyword type the search term
- e.g. g Monster Hunter Wild
*/

// Name: Google
// Description: Google Search
// Keyword: g  
// Author: Hoa Binh Dinh

import "@johnlindquist/kit"

const SCRIPT_KEYWORD = "g";
const GOOGLE_URL = `https://www.google.com/search?q=`;

function getSearchTermFrom(searchInput: string) {
    var args = searchInput.toLowerCase().split(" ");
    var hasKeyword = args.at(0).toLowerCase() === SCRIPT_KEYWORD;

    return hasKeyword 
           ? args.slice(1, args.length).join("+")
           : searchInput;
}

const searchInputs = await arg("What do you want to search");
const searchUrl = GOOGLE_URL + getSearchTermFrom(searchInputs);

open(searchUrl);