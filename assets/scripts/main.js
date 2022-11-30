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
    const btnAddTable = document.getElementById('btn-add-table');
    const table = document.getElementById('table')
    const btnSave = document.getElementById('btn-save');

    // events
    btnAdd.addEventListener('click', btnMainSectionToSecondSection);
    btnSave.addEventListener('click', btnSecondSectionToMainSection);
    btnAddTable.addEventListener('click', addInformation);

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
            const row = table.insertRow();
            row.innerHTML = `
                <td>${inputTitleToDo.value}</td>
                <td>${inputDescriptionToDo.value}</td>
                <td>
                    <input type="checkbox">
                </td>
                <td>
                    <figure>
                        <img class="img-pencil-solid" src="./assets/icons/pencil-solid.svg" alt="">
                        <img class="img-trash-solid" src="./assets/icons/trash-solid.svg" alt="">
                    </figure>
                </td>
            `
        }
    };

});