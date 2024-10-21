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
