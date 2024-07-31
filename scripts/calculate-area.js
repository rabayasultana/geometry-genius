

function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    // console.log(base);

    const height = getInputValueById('parallelogram-height');
    // console.log(height);

    const parallelogramArea = base * height;
    // console.log(area);

    setInnerTextById('parallelogram-area',parallelogramArea);


}


function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    // console.log(base);

    const apothem = getInputValueById('pentagon-apothem');
    // console.log(height);

    const pentagonArea = 0.5 * perimeter * apothem;
    // console.log(area);

    setInnerTextById('pentagon-area',pentagonArea);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}