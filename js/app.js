window.addEventListener('load', start);

function start() {
    document.querySelector("#generator").addEventListener("click", generateLorem);
    document.querySelector("#copy").addEventListener("click", copyToClipboard);
}

const loremWords = ["ab", "abeo", "absum", "ac", "accedo", "accipio", "ad", "addo", "adeo", "adhuc", "adsum", "aequus", "ago", "alius", "aliquis", "alter", "altus", "amicus", "amor", "animus", "annus", "ante", "antequam", "apud", "aqua", "ars", "at", "atque", "audio", "aut", "autem", "bellum", "bene", "bonus", "brevis", "caelum", "capio", "caput", "causa", "ceterus", "clarus", "coepi", "cogito", "cognosco", "color", "comes", "concedo", "conor", "contra", "corpus", "cras", "cum", "cur", "dare", "de", "debeo", "decet", "deus", "dico", "dies", "differo", "dignus", "disco", "do", "dolus", "domus", "dono", "dubito", "dux", "ego", "enim", "eo", "ergo", "erro", "et", "etiam", "ex", "facilis", "facio", "fallo", "fama", "fero", "fides", "finis", "fleo", "fortis", "frater", "fugio", "fundo", "genus", "gloria", "habeo", "homo", "honor", "hora", "hortus", "ibi", "idem", "ignis", "ille", "imago", "imperium", "incipio", "inde", "infelix", "ingenium", "inquam", "inter", "ipse", "is", "ita", "iter", "iubeo", "iudex", "ius", "labor", "laudo", "lego", "liber", "lingua", "locus", "longus", "loquor", "magis", "magnus", "manus", "mare", "mater", "meus", "miles", "mille", "mors", "moveo", "multus", "nam", "natura", "navis", "nec", "neque", "nihil", "nomen", "non", "nos", "noster", "novus", "nullus", "numquam", "nunc", "obscurus", "occido", "omnis", "opus", "pater", "pax", "per", "perdo", "pes", "peto", "placeo", "possum", "prae", "pro", "publicus", "puer", "quaero", "quam", "quidam", "quinque", "quis", "quo", "quod", "ratio", "res", "rex", "rogatio", "salus", "scio", "scribo", "sed", "senex", "senatus", "sentio", "sequor", "servus", "si", "sic", "signum", "similis", "solus", "somnus", "spes", "spiritus", "suus", "tamen", "tempus", "terra", "timeo", "tollo", "totus", "tu", "tuus", "ubi", "ullus", "unus", "usus", "ut", "uter", "vel", "venio", "verbum", "verus", "video", "vinco", "virtus", "vis", "vita", "voco", "vos", "vox", "vulnus"];

const generateLorem = () => {
    let paragraphCount = document.querySelector("#paragraphCount").value;
    if (paragraphCount < 1 || paragraphCount > 99) {
        alert("The number of paragraphs must be between 1 and 99")
    }else {
        let result = ""
        for (let i = 0; i < paragraphCount; i++) {
            let paragraphWordCount = Math.floor(Math.random() * (160 - 40 + 1)) + 40;
            if (i === 0) {
                result += "lorem ipsum dolor sit amet";
            }
            for (let j = 0; j < paragraphWordCount; j++) {
                let chooseRandomWord = Math.floor(Math.random() * loremWords.length);
                if (j == 0 && i != 0){
                    let chooseRandomFirstWord = Math.floor(Math.random() * loremWords.length);
                    firstCapitalWord = loremWords[chooseRandomFirstWord];
                    result += firstCapitalWord.charAt(0).toUpperCase() + firstCapitalWord.slice(1);
                }
                result += " " + loremWords[chooseRandomWord];
                if (j === paragraphWordCount - 1) {
                    result += ". <br><br>";
                }
                result = result.charAt(0).toUpperCase() + result.slice(1);
            }
        }
        document.querySelector("#result").innerHTML = result;
        document.querySelector("#copy").style.display = "inline-block";
    }
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(document.querySelector("#result").innerText);
    document.querySelector("#copy").value = "Copied!";
    setTimeout(() => {
        document.querySelector("#copy").value = "Copy to clipboard";
    }, 500);
}