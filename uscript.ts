// Name: User Scripts

import "@johnlindquist/kit"

// TODO: 
//  - Git Push 
//  - Complex Target Directory
//  - Change script name
//  - Scripts abgleichen
//  - Subfolder Mitnahme
const HOME_PATH = (await env("KIT")).split("/.kit").join("")

async function copyFilesToDirectory(files: string[], dir: string) {
    for (let file of files) {
        await $`cp ${file} ${dir}`
    }
}

const targetPath = await selectFolder();

const scriptsPath = await kenvPath("scripts"); // Recursive iteration

const files = await readdir(scriptsPath); 
const filePaths = files.map(file => `${scriptsPath}/${file}`)

copyFilesToDirectory(filePaths, targetPath)


//const result = await term(`cd ~/Desktop && mkdir kittest && cd kittest && git clone https://github.com/hdinh95/actions.git`);

