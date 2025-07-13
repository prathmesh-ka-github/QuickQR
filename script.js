function reveal() {
    let oContainer = document.getElementById('output-container')
    oContainer.style.height ="212px"
}
async function genqr() {
    let input = document.getElementById('input').value
    let output = document.getElementById('output')
    const fileType = document.getElementById('fileType').value
    let apistring = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&format=${fileType}&data=${input}`
    
    if (input === "") {
        output.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&format=${fileType}&data=https://github.com/prathmesh-ka-github`
    } else {
        output.src = apistring
    }
    setTimeout(reveal(), 5000);
}

if (window.innerWidth<600) {
    document.getElementById('instructions').innerHTML = "Tap and hold to download 👆🏻"
}