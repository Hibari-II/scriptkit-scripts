export function getSearchTermFrom(searchInput: string, keyword: string) {
    var args = searchInput.toLowerCase().split(" ");
    var hasKeyword = args.at(0).toLowerCase() === keyword;

    return hasKeyword 
           ? args.slice(1, args.length).join("+")
           : searchInput;
}