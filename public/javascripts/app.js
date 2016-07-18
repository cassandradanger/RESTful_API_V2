/**
 * Created by casie on 6/28/16.
 */

var creatureID;

$(document).ready(function(){

    $('.clickMe').on('click', function(){
        $('.here').empty();

        $.ajax({
            method: "GET",
            url: "/getCreature"
        }).done(function( response ) {
            for(var i = 0; i < response.creatures.length; i++){
                $(".here").append("<div><p>" + response.creatures[i].name + " <button class='info' id='" + response.creatures[i].id + "'>Get Info</button></p><hr/></div>");
            }
        });
    });

    $('.here').on('click', '.info', function(){
        var el = $(this).parent();
        creatureID = $(this).attr('id');
        console.log(creatureID);

        $.ajax({
            method: "GET",
            url: "/getCreature"
        }).done(function( response ) {
            console.log(response.creatures[creatureID].name);
            el.append("<div><p>Age: " + response.creatures[creatureID].age + "</p><p>Skills: " + response.creatures[creatureID].skills + "</p><input type='checkbox' class='like'>Like?</input></div>");
        });

        $('.here').on('click', '.like', function() {

            var like = {
                'id': creatureID,
                'like': true
            };

            $.ajax({
                method: "POST",
                url: "/getCreature/" + creatureID,
                data: like
            }).done(function(response){
                console.log(response);
            });
        });
    });
});