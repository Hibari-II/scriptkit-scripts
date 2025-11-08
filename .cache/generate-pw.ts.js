// Name: Generate Password
// Description: Generate Random Password
// Keyword: gpw
// Author: Hoa Binh Dinh
// .kenv/scripts/generate-pw.ts
import "@johnlindquist/kit";
import { generateMultiple } from "generate-password";
var PW_OPTIONS_COUNT = 5;
var PW_SECTIONS = 3;
var PW_SECTION_LENGTH = 6;
function generatePasswordOptions() {
  const options = [];
  for (let i = 0; i < PW_OPTIONS_COUNT; i++) {
    let password = generateMultiple(PW_SECTIONS, {
      length: PW_SECTION_LENGTH,
      numbers: true,
      symbols: false,
      uppercase: true
    }).join("-");
    options.push(password);
  }
  return options;
}
var generatedPasswords = generatePasswordOptions();
var selectedPassword = await arg("Select a password", generatedPasswords);
copy(selectedPassword);
