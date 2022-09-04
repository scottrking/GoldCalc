// Enter gold and get coins
// A lot of this code is straight stolen from https://oatcookies.neocities.org/dndmoney.html

function getvalue(id) { return document.getElementById(id).value; }
function settext(id, txt) { document.getElementById(id).innerText = txt; }
function setvalue(id, txt) { document.getElementById(id).value = txt; }
function F(str) { return Number.parseFloat(str); }
function N(value) { if (Number.isNaN(value)) { return 0; } return value; }

function recalc() {
const pennies = getvalue("gold") * 100
calc();
}

function calc() {
const pennies = getvalue("gold") * 100
const cOut = pennies % 10
const sOut = ((pennies - cOut) % 100) / 10
const gOut = ((pennies - cOut - 10 * sOut) / 100) % 10
const sgOut = (pennies - cOut - 10 * sOut) / 100
const pOut = ((pennies - cOut - 10 * sOut) - (gOut / 10)) / 1000

// Simple coins
settext("gp", sgOut)
settext("sp", sOut)
settext("cp", cOut.toFixed(0))
// Basic coins
settext("pp", Math.trunc(pOut))
settext("gpm", gOut)
settext("spm", sOut)
settext("cpm", cOut.toFixed(0))



// Console outoput for troubleshooting
 console.log("pp:",pOut,"gp:",gOut,"sgOut:",sgOut,"sp:",sOut,"cp:",cOut,"pennies:",pennies,"gold:", gold)
}

// Enter coins to get gold
function consolidate() {
    const cp = getvalue("platinum")
    const cg = getvalue("cgold")
    const ce = getvalue("electrum")
    const cs = getvalue("silver")
    const cc = getvalue("copper")
    const cValue = ((cp*1000+cg*100+ce*50+cs*10+cc*1)/100).toFixed(2)
    settext("result",cValue)
    }

