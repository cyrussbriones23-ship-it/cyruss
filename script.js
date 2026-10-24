
function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value.trim();

    if (userText === "") return;

    // Ipakita ang mensahe ng user
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.textContent = userText;
    chatBox.appendChild(userMsg);

    input.value = "";

    // Gumawa ng simpleng offline reply
    const text = userText.toLowerCase();
    let reply;

    if (text.includes("kumusta") || text.includes("hello")) {
        reply = "Kumusta! Ako si jemar ang nag titinda ano po ang ma itutulong ko?";
    } else if (text.includes("meron ba kayong kamatis")) {
        reply = "meron ilang kilo po ba!";
    } else if (text.includes("gwapo ba si jemar")) {
        reply = "Oo naman napaka gwapo niya walng makaka lamang.";
    } else if (text.includes("salamat")) {
        reply = "Walang anuman! Nandito ako para tumulong.";
    } else if (text.includes("joke") || text.includes("biro")) {
        reply = "Bakit laging panalo ang computer? Dahil marami itong bytes! 😄";
    } else if (text.includes("paalam")) {
        reply = "Paalam! Mag-chat ka ulit kapag kailangan mo ng tulong.";
    } else {
        reply = "Naiintindihan ko ang tanong mo, pero limitado pa ang offline knowledge ko. Subukan mong magtanong tungkol sa pangalan ko, kumusta, o joke.";
    }

    // Ipakita ang sagot
    setTimeout(() => {
        const aiMsg = document.createElement("div");
        aiMsg.className = "ai-message";
        aiMsg.textContent = reply;
        chatBox.appendChild(aiMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 300);
}

// Pindutin ang Enter para magpadala
document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});