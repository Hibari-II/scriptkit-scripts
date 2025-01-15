/*
# Generate multiple Passwords
- Use the keyword "gpw"
*/

// Name: Generate Password
// Description: Generate Random Password
// Keyword: gpw
// Author: Hoa Binh Dinh

import "@johnlindquist/kit"
import { generateMultiple } from "generate-password"

const PW_OPTIONS_COUNT = 5;
const PW_SECTIONS = 3;
const PW_SECTION_LENGTH = 6;

function generatePasswordOptions(): string[] {
    const options: string[] = [];
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

const generatedPasswords: string[] = generatePasswordOptions();
const selectedPassword: string = await arg("Select a password", generatedPasswords);

copy(selectedPassword);