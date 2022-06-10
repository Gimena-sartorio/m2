let URL= 'http://localhost:5000/amigos';
let showFriends=function(){
    $('#lista').empty();
    $.get(`${URL}`, function(friends){
        friends.forEach(f => {
            $("#lista").append(`<li id="${f.id}">${f.name} X </li>`)
            
        });
    })
}
$('#boton').click(showFriends);
$('#search').click(function(){
    let id=$('#input').val();

$('#search').click(function(){
let id=$('#input').val();

if(id){ 
$.get(`${URL}/${id}`, function(friend){
    console.log(friend);
$('#amigo').text(`${friend.name} ${friend.age} ${friend.email}`);
$('#input').val("");
})

}else{ $('#amigo').text('Ingresa un Id');
 }

})
})

let deleteFriend= function(){
    let id= $('#inputDelete').val();
    if(id){
        $.ajax({
            url: `${URL}/${id}`,
            type: "DELETE",
            success: function(){
                $('#success').text('Eliminado correctamente');
                $('#inputDelete').val("");
                showFriends();
            }
        })

    }else{

        $('#success').text('Ingresa un Id');

    }

    
};
$('#delete').click(deleteFriend)