/*
# Youtube Search
- Use the keyword "yt"
- After the keyword type the search term
- e.g. yt Monster Hunter Wild
*/

// Name: Youtube
// Description: Search Videos on Youtube
// Keyword: yt
// Author: Hoa Binh Dinh

import "@johnlindquist/kit"

const SCRIPT_KEYWORD = "yt";
const YOUTUBE_URL = `https://www.youtube.com/results?search_query=`;

function getSearchTermFrom(searchInput: string) {
    var args = searchInput.toLowerCase().split(" ");
    var hasKeyword = args.at(0).toLowerCase() === SCRIPT_KEYWORD;

    return hasKeyword 
           ? args.slice(1, args.length).join("+")
           : searchInput;
}

const searchInputs = await arg("What do you want to search");
const searchUrl = YOUTUBE_URL + getSearchTermFrom(searchInputs);

open(searchUrl);