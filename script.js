console.log("JS working")
async function genqr() {
    let input = document.getElementById('input').value
    let output = document.getElementById('output')
    let apistring = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input
    
    if (input === "") {
        output.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/prathmesh-ka-github"
    } else {
        output.src = apistring
    }
    output.style.height ="150px"
}