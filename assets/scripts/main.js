document.addEventListener('DOMContentLoaded', function(){
    // variable name
    const mainNav = document.getElementById('main-nav')
    const mainSection = document.getElementById('main-section');
    const btnAdd = document.getElementById('btn-add');
    const secondSection = document.getElementById('second-section')
    const navSecondSection = document.getElementById('nav-second-section');
    const errorAlert = document.getElementById('error-alert')
    const inputTitleToDo = document.getElementById('input-title-todo');
    const inputDescriptionToDo = document.getElementById('input-description-todo');
    const btnAddSecondSection = document.getElementById('btn-add-second-section');
    const btnSave = document.getElementById('btn-save');
    const divSecondSection = document.getElementById('div-second-section');
    const divSecondContent = document.getElementById('div-second-content');



    // events
    btnAdd.addEventListener('click', btnMainSectionToSecondSection);
    btnSave.addEventListener('click', btnSecondSectionToMainSection);
    btnAddSecondSection.addEventListener('click', addInformation);

    // functions
    function btnMainSectionToSecondSection(){
        mainSection.style.display = 'none';
        mainNav.style.display = 'none';
        secondSection.style.display = 'flex';
        navSecondSection.style.display = 'flex';
    };

    function btnSecondSectionToMainSection(){
        mainSection.style.display = 'block';
        mainNav.style.display = 'flex';
        secondSection.style.display = 'none';
        navSecondSection.style.display = 'none';
    };

    function addInformation(){
        if (inputTitleToDo.value == '' || inputDescriptionToDo.value == '') {
            errorAlert.style.display = 'flex';
        } else {
            errorAlert.style.display = 'none';
            const pToDo = document.createElement('p');
            pToDo.innerText = inputTitleToDo.value;
            divSecondContent.appendChild(pToDo);
            const pDescription = document.createElement('p');
            const inputCheckbox = document.createElement('input');
            const figureIconsTrashPencil = document.createElement('figure');

        }
    };

});