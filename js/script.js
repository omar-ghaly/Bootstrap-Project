var btns = document.querySelectorAll("#btn")
btns.forEach(function(btn) {
    btn.onclick = function(){
        alert(" تم نسخ النص..")
    }
})