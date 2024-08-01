

let section = document.getElementById('section')

closeUI()
async function toggleUI(userUid,userName,userCharec){
    renderUser(userUid,userName,userCharec)
        if(section.style.display == "none"){
            section.style.display = "flex"
            section.classList.add("sUI")
            closeUI()
        }
}
function closeUI(){
    section.classList.toggle('cUI')
}
function renderUser (Duid,Dname,Dcharec){

        let c_uid = document.querySelector('.c-uid')
        let c_name = document.querySelector('.c-name')
        let c_char = document.querySelector('.c-char')
        let c_view = document.querySelector('.c-viwe')
        
        c_uid.innerHTML= Duid
        c_name.innerHTML= Dname
        c_char.innerHTML= Dcharec
        c_view.innerHTML= '<a href="https://enka.network/u/'+Duid+'/" target="_blank" >https://enka.network/u/'+Duid+'/</a>'
}
function popupClose(){
    section.classList.remove("sUI")
            const displayer = setInterval(()=>{
                section.style.display = "none"
                clearInterval(displayer)
            },190)
            closeUI()
}