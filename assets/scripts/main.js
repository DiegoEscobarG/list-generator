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
    const imgTrashSolid = document.getElementById('img-trash-solid');
    let id = 1;

    // events
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
            row.setAttribute('id', id++);
            row.innerHTML = `
                <td>${inputTitleToDo.value}</td>
                <td>${inputDescriptionToDo.value}</td>
                <td>
                    <input type="checkbox">
                </td>
                <td>
                    <button class="btn-pencil">
                        <i class="fa fa-pencil"></i>
                    </button>
                </td>
            `

            const btnTrash = document.createElement('button');
            btnTrash.classList.add('btn-trash');
            btnTrash.innerHTML = '<i class="fa fa-trash"></i>';
            btnTrash.onclick = function (){
                removeToDo(row.getAttribute('id'));
            }
            row.children[3].appendChild(btnTrash);
        }
    };

    function removeToDo(id){
        document.getElementById(id).remove();
    }

    
    
});