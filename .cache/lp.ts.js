// Name: Look for Port
// Description: Open specific Jira Ticket
// Keyword: lp
// .kenv/scripts/lp.ts
import "@johnlindquist/kit";

// .kenv/scripts/utils/search-helper.ts
function getSearchTermFrom(searchInput, keyword) {
  var args = searchInput.toLowerCase().split(" ");
  var hasKeyword = args.at(0).toLowerCase() === keyword;
  return hasKeyword ? args.slice(1, args.length).join("+") : searchInput;
}

// .kenv/scripts/lp.ts
var SCRIPT_KEYWORD = "lp";
var searchInputs = await arg("What do you want to search");
var port = getSearchTermFrom(searchInputs, SCRIPT_KEYWORD);
await term("lsof -i tcp:" + port);
