$(function(){
    var casa_selecionada = null;
	var peca_selecionada = null;

   function montarTabuleiro(){
        var i;
        for(i = 0; i< 8; i++){
            $("#tabuleiro").append("<div id='linha_" + i.toString() + "' class='linha'>");
            for(var j = 0; j<8; j++){
                var nome_casa = "casa_" + i.toString() + "_" + j.toString();
                var classe;
                if(i%2 == 0){
                    if(j%2 == 0){
                        classe = "casa_branca";
                    }else{
                        classe = "casa_preta";
                    }
                }else{
                    if(j%2 != 0){
                        classe = "casa_branca";
                    }else{
                        classe = "casa_preta";
                    }
                }
                $("#linha_"+i.toString()).append("<div id='"+nome_casa+"' class='coluna "+classe+"' />");

				if(classe == "casa_preta"){
					if(i < 3){
						$("#"+nome_casa).append("<img src='peca_preta.png' class='peca' id='"+nome_casa.replace("casa", "peca_preta")+"'/>");
					}
					else
					if(i > 4){
						$("#"+nome_casa).append("<img src='peca_branca.png' class='peca' id='"+nome_casa.replace("casa", "peca_branca")+"'/>");	
					}

				}
            }
        }
    }

    montarTabuleiro();

    $(".linha div").click(function(){
		$("#"+casa_selecionada).removeClass("casa_selecionada");
		casa_selecionada = $(this).attr("id");
		$("#"+casa_selecionada).addClass("casa_selecionada");
		$("#info_casa_selecionada").text(casa_selecionada);

		peca_selecionada = $("#"+casa_selecionada).children("img:first").attr("id");
		$("#info_peca_selecionada").text(peca_selecionada);
	});
    
});