//creating class for implementing design to different category 
let categoryList = ['work','Personal','Cleaning','Others'] 
$(document).ready(function(){
    let categorys = document.getElementsByClassName('catesec'); // getting all the class name category 
        for(let i=0;i<categorys.length;i++){ // looping in the  categorys to find the which categry class belongs and implement according sesign check home.css to get the color of eact section
            if(categorys[i].innerHTML.trim()=='Work'){ 
               categorys[i].classList.add(categoryList[0])
               categorys[i].classList.add('commonClass')
            }
            else if(categorys[i].innerHTML.trim()=='Personal'){
                categorys[i].classList.add(categoryList[1])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Cleaning'){
                categorys[i].classList.add(categoryList[2])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Others'){
                categorys[i].classList.add(categoryList[3])
                categorys[i].classList.add('commonClass')
            }
        }
});

// this in responsible for making  making cross line when the item is  checked for deleting
function checkedOrNot(){ 
    let cb = document.querySelectorAll('.description_checkbox'); // getting all the check-box class 
    let descdisp = document.querySelectorAll('.description_display'); // getting all the class where descripting of TODO is defined
    for(let i=0;i<descdisp.length;i++){
        // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
            if(cb[i].checked == true){ 
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through'
            }
            else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none'
        }
       
    } 
   
}

// this addEventListener come into action when we clicked on delete button after we checked which list of items need to be deleted
document.getElementById('deleteButton').addEventListener('click',function(){
    let checked_value = document.querySelectorAll('.description_checkbox:checked') // getting only checked vale
    let arrcheck = []  // creating the list of checked array
    for(let i of checked_value){
        let gg=''
        gg= i.getAttribute('uid')    // getting uniue id from and pushing into array
        console.log(gg)
        arrcheck.push(gg);
    }
    if(arrcheck.length===0){ // checking if array is null the 
        console.log('no item is checked')
        swal("No item is checked!!", "please select item to remove!", "error"); // using show alert to show if there is no items in the array
        return;
    }


    //here we are making delete request with the help of Ajax request 
    $.ajax({
        type: 'post',
        url: '/delete_todo/?id='+arrcheck,
        success: function(){ // on ajax success i.e when data is delete
            swal("Item is deleted ", "click ok to go back Home ", "success") // using sweet alert to show the data is delete
            .then(redir => {
                window.location = '/';
            })
           
        },
        error: function(err){ 
            console.log(err);
        }

    });
})