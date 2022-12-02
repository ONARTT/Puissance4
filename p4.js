$(document).ready(function(){

// page HTML
    for (var i=2;i<=6;i++){
        $("<div id='ligne"+i+"' class='lignes'></div>").appendTo(".tableau")
        $("<div class='ligne'>"+i+"</div>").appendTo("#ligne"+i);
        
        for(var j=1;j<=7;j++){
            $("<div class='container'><div  ligne='"+i+"' colonne='"+j+"' id='case_"+i+"_"+j+"'class='case'></div></div>").appendTo("#ligne"+i);
       
        }
    }

    for (i=1;i<=7;i++) {
        $("<div id='colonne"+i+"' class='colonne'>"+i+"</div>").appendTo("#ligne1");
        $("<div class='container'><div ligne='1' colonne='"+i+"' id='case_1_"+i+"' class='case'></div></div>").appendTo("#colonne"+i);
    }

// initialisation du tableau
    var data = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
 
    ];

    var scoreOne = 0;
    var scoreTwo = 0;
    var winner = 0;
    var gameCount = 0;


    var turn = true;
    var player = "joueurUn";
    
    

    
// surbrillance de la colonne  

    $(".tableau").mousemove(function(e){

        if(e.clientX < 126){
            $(".colonne").removeClass("active");
            $("#colonne1").addClass("active");
        } else if (e.clientX < 239) {
            $(".colonne").removeClass("active");
            $("#colonne2").addClass("active");

        } else if (e.clientX < 350 && e.clientX > 239) {
            $(".colonne").removeClass("active");
            $("#colonne3").addClass("active");

        } else if (e.clientX < 463 && e.clientX > 350) {
            $(".colonne").removeClass("active");
            $("#colonne4").addClass("active");

        } else if (e.clientX < 575 && e.clientX > 463) {
            $(".colonne").removeClass("active");
            $("#colonne5").addClass("active");

        } else if (e.clientX < 685 && e.clientX > 575) {
            $(".colonne").removeClass("active");
            $("#colonne6").addClass("active");

        } else if (e.clientX > 685) {
            $(".colonne").removeClass("active");
            $("#colonne7").addClass("active");

        }
    });

    
// placer un anneau

    $(".case").click(function(e){
        
        var x = ($(e.target).attr("ligne"));
        var y =parseInt(($(e.target).attr("colonne")));
        var k = 6;

        if(data[0][y-1] != 1) {
            if (turn == true) {
                player = "joueurUn";
                turn = false;
            
            } else {
                player = "joueurDeux";
                turn = true;
                
            }
        }

      
        if(data[0][y-1] == 0) {
            while (data[k-1][y-1] != 0) {
                k -= 1;
            }
            while(data[k-1][y-1] == 0) {
                if(turn == true) {
                    data[k-1][y-1] = 2;
                } else {
                    data[k-1][y-1] = 1;
                }
                
                $("#case_"+k+"_"+y).addClass(player);
                $("#case_"+k+"_"+y).css({"top": -k*100+"px"});
                $("#case_"+k+"_"+y).animate({
                    "top": "0px"
                }, 2000); 
            }
        }

        var countLineOne = -1;
        var countLineTwo = -1;
        var i = 0;
        while(data[k-1][y-1+i] == 1 || data[k-1][y-1+i] == 2){
            if(data[k-1][y-1+i] == 1){
                countLineOne += 1;
            } else if(data[k-1][y-1+i] == 2){
                countLineTwo += 1;
            }
            i += 1;

           
        }
        var j = 0;
        while(data[k-1][y-1-j] == 1 || data[k-1][y-1-j] == 2){
            if(data[k-1][y-1-j] == 1){
                countLineOne += 1;
            } else if(data[k-1][y-1-j] == 2){
                countLineTwo += 1;
            }
            j += 1;

           
        }
        
        var countColumnOne = 0;
        var countColumnTwo = 0;
        
        for(i=0;i<4;i++){
           
            if($('#case_'+(k+i)+'_'+y).hasClass('joueurUn')){
                countColumnOne += 1;
            } else if($('#case_'+(k+i)+'_'+y).hasClass('joueurDeux')){
                countColumnTwo += 1;
            }
        
      
        c++;
    }

        var countFirstDiagOne = -1;
        var countFirstDiagTwo = -1;
       
        var c = 0;
        for(i=0;i<4;i++){
           
                if($('#case_'+(k+i)+'_'+(y+c)).hasClass('joueurUn')){
                    countFirstDiagOne += 1;
                } else if($('#case_'+(k+i)+'_'+(y+c)).hasClass('joueurDeux')){
                    countFirstDiagTwo += 1;
                }
            
            c++;
        }
       
        c = 0;
        for(i=0;i<4;i++){
           
            if($('#case_'+(k-i)+'_'+(y-c)).hasClass('joueurUn')){
                countFirstDiagOne += 1;
            } else if($('#case_'+(k-i)+'_'+(y-c)).hasClass('joueurDeux')){
                countFirstDiagTwo += 1;
            }
        

        c++;
    }
         
    var countSecDiagOne = -1;
    var countSecDiagTwo = -1;

    c = 0;
    for(i=0;i<4;i++){
       
            if($('#case_'+(k-i)+'_'+(y+c)).hasClass('joueurUn')){
                countSecDiagOne += 1;
            } else if($('#case_'+(k-i)+'_'+(y+c)).hasClass('joueurDeux')){
                countSecDiagTwo += 1;
            }
        
        c++;
    }

    c = 0;
    for(i=0;i<4;i++){
       
        if($('#case_'+(k+i)+'_'+(y-c)).hasClass('joueurUn')){
            countSecDiagOne += 1;
        } else if($('#case_'+(k+i)+'_'+(y-c)).hasClass('joueurDeux')){
            countSecDiagTwo += 1;
        }
    
        
        c++;
    }



    var isEmpty = 0
    for(i=0;i<6;i++){
        for(j=0;j<7;j++){
           if(data[i][j] == 0){
            isEmpty +=1;
           }
        }
    }
        
    
    
    if (countLineOne >= 4 || countColumnOne >= 4 || countFirstDiagOne >= 4 || countSecDiagOne >= 4) {
        winner = 1;
        scoreOne += 1;
    } else if (countLineTwo >= 4 || countColumnTwo >= 4 || countFirstDiagTwo >= 4 || countSecDiagTwo >= 4) {
        winner = 1;
        scoreTwo += 1;
    }

    if(isEmpty == 0 && winner == 0){
        winner = 2;
    }

    if(winner == 1) {
        $("#score").html('Scores :   '+scoreOne+' - '+scoreTwo)
        
       } else if (winner == 2) {
        $("#score").html('Match Nul')
        
       }
    });
    
    $(".recommencer").click(function reset(e){
        scoreOne = 0;
        scoreTwo = 0;
        winner = 0;
        $(".case").removeClass("joueurUn");
        $(".case").removeClass("joueurDeux");
        turn = true;
        player = "playerUn";
        for(i=0;i<6;i++){
            for(j=0;j<7;j++){
               data[i][j] = 0;
            }
        }
    });
    
});