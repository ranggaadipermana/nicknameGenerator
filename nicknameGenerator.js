function a() {
    var b = [
        "Dragon", "Shadow", "Dark", "Ninja", "Fire", "Thunder", "Ghost", "Steel", 
        "Mystic", "Storm", "Phoenix", "Wolf", "Night", "Cyber", "Rogue", "Venom", 
        "Flame", "Blade", "Alpha", "Omega", "Raven", "Vortex", "Titan", "Inferno", 
        "Zephyr", "Silent", "Crimson", "Frost", "Void", "Nebula", "Star", 
        "Tiger", "Wind", "Spirit", "Artifact", "Darkness", "Water", "Ocean", 
        "Earth", "Lightning", "Moon", "Cobra", "Bolt", "Glacier", "Titanium", 
        "Obsidian", "Specter", "Wraith", "Fury", "Dusk", "Havoc", "Riptide"
    ];
    
    var c = [
        "Slayer", "Master", "Warrior", "Hunter", "Blade", "Knight", "Rogue", 
        "Guardian", "Wizard", "Assassin", "Reaper", "Champion", "Destroyer", 
        "Berserker", "Ranger", "Invoker", "Commander", "Overlord", "Warden", 
        "Sentry", "Predator", "Shifter", "Stormbringer", "Ghostwalker", 
        "Chaosbringer", "Shadewalker", "Tempest", "Breaker", "Executor", 
        "Saboteur", "Hero", "Vanquisher", "Protector", "Fighter", "Conqueror", 
        "Avenger", "Savior", "Defender", "Sentinel", "Prowler", "Brawler", 
        "Juggernaut", "Demon", "Mystic"
    ];
    
    var d = [
        "★", "⚡", "✿", "☯", "☠", "✧", "♡", "⚔", "♞", "♛", "∞", "✪", "✦", 
        "⛧", "✡", "☾", "♢", "⍟", "✶", "☢", "☤", "♆", "✸", "⚜", "꩜", 
        "𐙚", "•⩊•"
    ];
    
    var e = b[Math.floor(Math.random() * b.length)];
    var f = c[Math.floor(Math.random() * c.length)];
    var g = d[Math.floor(Math.random() * d.length)];
    var h = g + " " + e + " " + f + " " + g;
    var i = document.getElementById("fontSelect").value;
    var j = document.getElementById("nicknameResult");
    
    j.style.fontFamily = i;
    j.innerHTML = h;
    document.getElementById("copyButton").style.display = "inline-block";
}

function copyNickname() {
    var a = document.getElementById("nicknameResult").textContent;
    var b = document.createElement("textarea");
    b.value = a;
    document.body.appendChild(b);
    b.select();
    document.execCommand("copy");
    document.body.removeChild(b);
    alert("Nama " + a + " berhasil disalin!");
}
