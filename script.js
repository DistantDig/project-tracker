var projectFormEl = $('#project-form');

projectFormEl.on('click', 'button', function (event) {
    var projectName;
    var projectType;
    var dueDate;
    var formInfo = projectName.concat(' ', projectType, ' ', dueDate);
    renderFormInfo(dueDate);
})

function storeForm() {
    localStorage.setItem('form-info', JSON.stringify(formInfo));
}

function renderFormInfo(event) {
    var storedInfo = JSON.parse(localStorage.getItem('form-info'));
    var row = $('tbody').add('tr');
    var difference = today.diff(event, 'day');

    if (difference < 0) {
        $('placeholder').addClass('past');
    } else if (difference == 0) {
        $('placeholder').addClass('present');
    }
    row.append('<td></td>');
}



//Timer
setInterval(updateTime, 1000);

function updateTime() {
    var date = dayjs().format();
    console.log(date);
}