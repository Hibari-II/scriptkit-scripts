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

const PW_COUNT = 5;

const password = await arg("Select a password",
    generateMultiple(PW_COUNT, {
        length: 12,
        symbols: true,
        uppercase: false
    })
);

copy(password);