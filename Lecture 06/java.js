function Init() {
    var asd = document.getElementById("main");
    if(asd.style.display =='none') {
        asd.style.display ='block';
    }else{
        asd.style.display ='none';
    }
}


var colors = ["black", "purple", "blue", "green", "yellow", "red"];
    var divs = [document.getElementById("a"), document.getElementById("b"), document.getElementById("c")];
    var array = [[5,4,3,2,1,0],[],[]];
    var sel = -1;
    document.getElementById("reset").onclick=()=>{
        reset();
    };

    
    for(var i=0; i < 3; i++){
        var func = (num)=>{
            divs[num].onclick = () => {
                if (sel != -1) {
                    move(sel, num);
                    sel = -1;
                    for(var j=0; j < 3; j++){ 
                        divs[j].classList.remove("selected");
                    }
                }else{
                    for (var j = 0; j < 3; j++) {
                        divs[j].classList.remove("selected");
                    }
                    divs[num].classList.add("selected")
                    sel = num;    
                }
            };
        }
        func(i);
    }

    function render(){
        for(var i=0; i<3;i++)
            divs[i].innerHTML = "";
        for(var dn = 0; dn < 3; dn++){
            for(var i=0; i<array[dn].length; i++){
                for (var j = 0; j < array[dn][i]+1; j++) {
                    divs[dn].innerHTML += "<span style='display:inline-block; background: "+colors[array[dn][i]]+"; border:1px solid black; width:10px; height:10px; margin: 1px;'>";
                    //aDiv.innerHTML += array[0][i]
                    divs[dn].innerHTML += "</span>";
                }
                divs[dn].innerHTML += "<br>";
            }
        }
    }

    function reset(){
        array = [[5, 4, 3, 2, 1, 0], [], []];
        render();
    }

    function move(s, d){ 
        var result = array[s].pop();
        if(result != undefined){
            console.log(result);
            array[d].push(result);
            render();
        }
    }
    render();