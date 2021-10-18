function datepickerTitle(elem) {
	let label = elem.nextElementSibling;
    // console.log(label);
    let titleText = '';
    if(label && label.tagName === 'LABEL') {
        titleText = label.textContent;
    } else {
        titleText = elem.getAttribute('aria-label') || '';
    }
    return titleText;
}

const elems = document.querySelectorAll('.datepicker_input');
// console.log(elems);
for(let elem of elems) {
    const datepicker = new Datepicker(elem, {
        format: 'dd-mm-yyyy',
        title: datepickerTitle(elem)
    })
}

