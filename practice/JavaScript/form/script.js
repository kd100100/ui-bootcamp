
/**
 * dynamic form
 */

const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const formJSON = [
    {
        type:'email',
        pattern:regex,
        name:'Your Email'
    },
    {
        type:"number",
        minValue:10,
        maxValue:20,
        name:'Your Number'
    },
    {
        type:'string',
        minLength:10,
        maxLength:20,
        name:'Your Name'
    }
]

const formElement = document.getElementById('form');

const makeForm = () => {
    // key value atribute