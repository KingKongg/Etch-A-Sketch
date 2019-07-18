function createGrid(x){
    for(let rows=0; rows <x ; rows++){
         for(let columns=0;columns<x;columns++){
    $("#container").append("<div class='grid'></div>");
};
};
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

function clearGrid(){
    $(".grid").remove();
};

function refreshGrid(){
    let z =prompt("How many grids per side do you want?");
    clearGrid();
    createGrid(z);
}

function randomGridColour() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

$(document).ready(function(){
    createGrid(16)

$(".blackMode").click(function(){
    $(".grid").mouseover(function(){
        $(this).css("background-color", "black");
    });
});

$(".colorMode").click(function(){
    $(".grid").mouseover(function(){
        $(this).css("background-color", randomGridColour());
    });
});


 $(".newGrid").click(function(){
     refreshGrid();
     
 });

});