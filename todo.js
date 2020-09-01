var new_item = $('#new_item');
var todos = [];
var todo_list = document.querySelector('#todo_list');

$('.btn').click(function(){
    
    if(new_item.val()==''){
        alert('Enter some text!'); 
        new_item.focus();
    }else{
        todos.push(new_item.val());

        //Create new element and append to list
        var new_todo_element = document.createElement('li');
        var todo_text = document.createElement('span');
        var todo_remove = document.createElement('span');

        todo_text.innerText = new_item.val();
        todo_text.classList.add('text');

        todo_remove.innerHTML = '&times;';
        todo_remove.classList.add('remove');

        todo_remove.onclick = function(){
            //Remove element
            todo_list.removeChild(new_todo_element);

            //Remove from array
            var index = todos.indexOf(todo_text.nodeValue);
            todos.splice(index,1);

            //If todos is empty, tell user
            if(todos.length==0){
                $('#empty').css('display','block');
            }
        };

        //Add the text and remove button
        new_todo_element.appendChild(todo_text);
        new_todo_element.appendChild(todo_remove);

        //Add todo item
        todo_list.append(new_todo_element);

        //Empty the new item input
        new_item.val('');

        //Hide the empty list text
        if($('#empty').css('display')=='block'){
            $('#empty').css('display','none');
        }
    }
});