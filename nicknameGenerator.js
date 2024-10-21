  function generateNickname() {
    // First part of the nickname
    var firstPart = ["Dragon", "Shadow", "Dark", "Ninja", "Fire", "Thunder", "Ghost", "Steel", "Mystic", "Storm",
      "Phoenix", "Wolf", "Night", "Cyber", "Rogue", "Venom", "Flame", "Blade", "Alpha", "Omega",
      "Raven", "Vortex", "Titan", "Inferno", "Zephyr", "Silent", "Crimson", "Frost", "Void", "Nebula"];
    
    // Second part of the nickname
    var secondPart = ["Slayer", "Master", "Warrior", "Hunter", "Blade", "Knight", "Rogue", "Guardian", "Wizard", "Assassin",
      "Reaper", "Champion", "Destroyer", "Berserker", "Ranger", "Invoker", "Commander", "Overlord", "Warden", "Sentry",
      "Predator", "Shifter", "Stormbringer", "Ghostwalker", "Chaosbringer", "Shadewalker", "Tempest", "Breaker", "Executor", "Saboteur"];
    
    // Array of symbols to make the nickname cooler
    var symbols = ["★", "⚡", "✿", "☯", "☠", "✧", "♡", "⚔", "♞", "♛", "∞", "✪", "✦", "⛧", "✡", "☾", "♢", "⍟", "✶", "☢", "☤", "♆", "✸", "⚜"];

    // Generate random parts
    var randomFirst = firstPart[Math.floor(Math.random() * firstPart.length)];
    var randomSecond = secondPart[Math.floor(Math.random() * secondPart.length)];
    var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    // Combine parts to form nickname
    var nickname = randomSymbol + " " + randomFirst + " " + randomSecond + " " + randomSymbol;

    // Get selected font
    var selectedFont = document.getElementById("fontSelect").value;

    // Display the nickname with the selected font
    var nicknameElement = document.getElementById("nicknameResult");
    nicknameElement.style.fontFamily = selectedFont;
nicknameElement.innerHTML = nickname;
   // Show copy button
    document.getElementById("copyButton").style.display = "inline-block";
  }

  function copyNickname() {
    var nicknameText = document.getElementById("nicknameResult").textContent;
    var tempInput = document.createElement("textarea");
    tempInput.value = nicknameText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Alert the user that the nickname has been copied
    alert("Nickname " + nicknameText + " berhasil disalin!");
  }
