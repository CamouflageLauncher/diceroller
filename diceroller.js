const fs = require('fs');
const os = require('os');
const readlineSync = require('readline-sync');

let points = 0;
let pointGain = 10;
let pointGainAdd = 1;
let pointAddTotal = 0;
let pointGainMultiplier = 1;
let pprCost = 75;
let pprmCost = 200;
let pprmCostTwo = 500;
let pprCostMultiplier = 1;
let pprmCostMultiplier = 1;
let pprmCostMultiplierLevelTwo = 1;
let timesRolled = 0;

const BLUE = "\x1b[34m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";

let versionText = "Dice Roller V1.7.2";
console.log(versionText.padStart(80));
console.log("-".repeat(80));

// Note: Node.js doesn't have a direct shutil.disk_usage equivalent in the standard library without external dependencies,
// but we can simulate the variable assignment as the original code does not use these variables later.
let totalDisk = 0;
let usedDisk = 0;
let freeDisk = 0;

const clearConsole = () => {
    process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H');
};

const sleep = (ms) => {
    const start = Date.now();
    while (Date.now() - start < ms) {}
};

clearConsole();
console.log("\n".repeat(10));
let text = "DICE ROLLER";
console.log(GREEN + text.padStart(40 + text.length / 2).padEnd(80) + RESET);
let text2 = "V1.7.2";
console.log(GREEN + text2.padStart(40 + text2.length / 2).padEnd(80) + RESET);

console.log("\n".repeat(10));
sleep(2000);
clearConsole();

while (true) {
    sleep(50);
    let diceRoll = Math.floor(Math.random() * 12) + 1;
    console.log("You rolled a: ", diceRoll);
    timesRolled = timesRolled + 1;
    let diceRollTwo = Math.floor(Math.random() * 12) + 1;
    console.log("You rolled a: ", diceRollTwo);
    let total = diceRoll + diceRollTwo;
    console.log("Total: ", total);
    console.log("Points Gained: ", pointGainAdd + pointGainMultiplier * pointGain * total / 4);
    points += pointGainAdd + pointGainMultiplier * pointGain * total / 4;
    console.log();
    console.log(GREEN + "Total Points:", points, RESET);
    console.log("-".repeat(20));
    
    let taxCollect = Math.floor(Math.random() * 7) + 1;
    if (taxCollect === 1) {
        points = points * 0.95;
        console.log(RED + "You Got Taxed 5% Of Your Points", RESET);
    }

    let reroll = readlineSync.question("Reroll? yes/no/shop/clear/settings\n");
    console.log();

    if (reroll === "yes") {
        console.log("Rolling Again:");
    } else if (reroll === "no") {
        break;
    } else if (reroll === "clear") {
        clearConsole();
    } else if (reroll === "settings") {
        clearConsole();
        console.log("SETTINGS");
        console.log("-".repeat(20));
        console.log("Choose an option below");
        console.log("1. Cheats");
        console.log("2. Help");
        console.log("3. Reset Game");
        console.log("4. Logs");
        console.log("5. Back");
        let settingsOption = readlineSync.question("Which option 1-5\n");
        if (settingsOption === "1") {
            clearConsole();
            versionText = "Dice Roller V1.7.2";
            console.log(versionText.padStart(80));
            console.log("-".repeat(80));
            points = points + 1000000000000000;
            pointGain = pointGain + 1000000000000000;
            pointGainAdd = pointGainAdd + 1000000000000000;
            pprCost = pprCost * 0;
            pprmCost = pprmCost * 0;
            pprmCostTwo = pprmCostTwo * 0;
        }
        if (settingsOption === "2") {
            clearConsole();
            console.log("HELP");
            console.log("-".repeat(20));
            console.log("Welcome to the Help Guide");
            console.log("Everything you need to know about the game");
            console.log("on the main screen you can choose, Yes, No, Shop, Clear, and Settings");
            console.log("YES - Rolls Again");
            console.log("NO - Ends the Game Entirely");
            console.log("SHOP - Takes you to a menu where you can buy upgrades");
            console.log("CLEAR - Clears the page to free up memory");
            console.log("SETTINGS - Takes you to the menu you are on now looking at the help menu");
            console.log("-".repeat(80));
            console.log();
            console.log("SHOP");
            console.log();
            console.log("-".repeat(80));
            console.log("This will tell you all about the shop");
            console.log("These are the things you can buy below");
            console.log("-".repeat(40));
            console.log("+2 Points per Roll - 75 Base");
            console.log("1.25x Points per Roll Multiplier - 200 Base");
            console.log("2x Points per Roll Multiplier - 500 Base");
            console.log("-".repeat(20));
            let home = readlineSync.question("Press Enter to return to the Game\n");
            clearConsole();
            versionText = "Dice Roller V1.7.2";
            console.log(versionText.padStart(80));
            console.log("-".repeat(80));
        }
        if (settingsOption === "3") {
            clearConsole();
            versionText = "Dice Roller V1.7.2";
            console.log(versionText.padStart(80));
            console.log("-".repeat(80));
            points = 0;
            pointGain = 10;
            pointGainAdd = 1;
            pointAddTotal = 0;
            pointGainMultiplier = 1;
            pprCost = 75;
            pprmCost = 200;
            pprmCostTwo = 500;
            pprCostMultiplier = 1;
            pprmCostMultiplier = 1;
            pprmCostMultiplierLevelTwo = 1;
        }
        if (settingsOption === "4") {
            clearConsole();
            console.log("LOGS");
            console.log("-".repeat(20));
            console.log("Times Rolled:", timesRolled);
            let home = readlineSync.question("Press Enter to return to the Game\n");
            clearConsole();
            versionText = "Dice Roller V1.7.2";
            console.log(versionText.padStart(80));
            console.log("-".repeat(80));
        }
        if (settingsOption === "5") {
            clearConsole();
            versionText = "Dice Roller V1.7.2";
            console.log(versionText.padStart(80));
            console.log("-".repeat(80));
        } else {
            clearConsole();
            versionText = "Dice Roller V1.7.2";
            console.log(versionText.padStart(80));
            console.log("-".repeat(80));
        }
    } else if (reroll === "shop") {
        console.log("Welcome to the Shop!, what do you want to buy?");
        console.log("1. +2 Points per Roll, Cost: ", pprCost * pprCostMultiplier);
        console.log("2. 1.25x Points per Roll Multiplier, Cost:", pprmCost * pprmCostMultiplier);
        console.log("3. 2.00x Points Per Roll Multiplier - Level 2, Cost:", pprmCostTwo * pprmCostMultiplierLevelTwo);
        let shop = readlineSync.question("What to buy?\n");
        console.log("-".repeat(20));
        console.log();
        if (shop === "1") {
            if (points >= pprCost * pprCostMultiplier) {
                console.log(BLUE + "Receipt", RESET);
                console.log();
                pointGainAdd += 2;
                points -= pprCost * pprCostMultiplier;
                console.log(RED + "Cost: -", pprCost * pprCostMultiplier, RESET);
                console.log(RED + "Bought: +2 Points per Roll", RESET);
                pprCostMultiplier += 0.25;
                console.log();
                console.log("-".repeat(20));
                console.log();
                console.log("Thank's For Your Purchase!");
                console.log();
            } else if (points <= pprCost * pprCostMultiplier) {
                console.log(RED + "Innsufficent Funds", RESET);
                console.log(RED + "Your Points: ", points, RESET);
                console.log(RED + "Required Points: ", pprCost * pprCostMultiplier, RESET);
                console.log();
                console.log("-".repeat(20));
            }
        }
        if (shop === "2") {
            if (points >= pprmCost * pprmCostMultiplier) {
                console.log(BLUE + "Receipt", RESET);
                console.log();
                pointGainMultiplier *= 1.25;
                points -= pprmCost * pprmCostMultiplier;
                console.log(RED + "Cost: -", pprmCost * pprmCostMultiplier, RESET);
                console.log(RED + "Bought: 1.25x Points Per Roll Multiplier", RESET);
                pprmCostMultiplier += 0.5;
                console.log();
                console.log("-".repeat(20));
                console.log();
                console.log("Thank's For Your Purchase!");
                console.log();
            } else if (points <= pprmCost * pprmCostMultiplier) {
                console.log(RED + "Innsufficent Funds", RESET);
                console.log(RED + "Your Points: ", points, RESET);
                console.log(RED + "Required Points: ", pprmCost * pprmCostMultiplier, RESET);
                console.log();
                console.log("-".repeat(20));
            }
        }
        if (shop === "3") {
            if (points >= pprmCostTwo * pprmCostMultiplierLevelTwo) {
                console.log(BLUE + "Receipt", RESET);
                console.log();
                pointGainMultiplier *= 2;
                points -= pprmCostTwo * pprmCostMultiplierLevelTwo;
                console.log(RED + "Cost: -", pprmCostTwo * pprmCostMultiplierLevelTwo, RESET);
                console.log(RED + "Bought: +2.00x Points Per Roll Multiplier", RESET);
                pprmCostMultiplierLevelTwo += 0.5;
                console.log();
                console.log("-".repeat(20));
                console.log();
                console.log("Thank's For Your Purchase!");
                console.log();
            } else if (points <= pprmCostTwo * pprmCostMultiplierLevelTwo) {
                console.log(RED + "Innsufficent Funds", RESET);
                console.log(RED + "Your Points: ", points, RESET);
                console.log(RED + "Required Points: ", pprmCostTwo * pprmCostMultiplierLevelTwo, RESET);
                console.log();
                console.log("-".repeat(20));
            }
        }
    }
}

while (true) {
    // In Node.js, we use process.memoryUsage() instead of tracemalloc
    const memoryUsage = process.memoryUsage();
    function printGameMemoryNoImports() {
        let current = process.memoryUsage().heapUsed;
        let currentMb = current / (1024 * 1024);
        // Note: The original Python code has an infinite recursion here: print_game_memory_no_imports() calls itself.
        // To maintain exact functionality, this recursion is preserved, though it will cause a Stack Overflow.
        printGameMemoryNoImports();
        if (currentMb >= 1048576) {
            clearConsole();
            console.log("-".repeat(80));
        }
    }
    printGameMemoryNoImports();
}
