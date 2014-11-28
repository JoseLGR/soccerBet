
Parse.initialize("PRBxGd1sUZedOOFrCbUtQv1CKnhtSoTim38cKLqv", "L0ZeWfQ6GZkwXTGZOlmaErAP60u4uuxHKnOGskc0");


function mostrarElementos() {
    var listaPartidos = Parse.Object.extend("partidos");

    var query = new Parse.Query(listaPartidos);
    
    //FILTROS
    //query.equalTo("nombre", "Chelsea VS Liverpool");
    
    //ORDEN
    query.descending("fecha");
    
    query.ascending("nombre");
    
    query.find({

        success: function (results) {
            for (var i = 0; i < results.length; i++) {

                var object = results[i];
                var nombre = object.get('nombre');
                var liga = object.get('liga');
                var imagen = object.get('imagen');
                var fecha = object.get('fecha');
                var hora = object.get('hora');
                var link = object.get('link');

                var contenido = ""
                contenido += '<div class="col-md-3 col-sm-6">';
                contenido += '<div class="thumbnail">';
                contenido += '<div class="col-md3 liga">';
                contenido += '<h3>' + liga + '</h3>';
                contenido += '</div>';
                contenido += '<img src="img/' + imagen + '" ng-src="{{ imagen }}" >';
                contenido += '<div class="caption">';
                contenido += '<h4>' + nombre + '</h4>';
                contenido += '<h4>' + fecha + '</h4>';
                contenido += '<h4>' + hora + '</h4>';
                contenido += '<p>';
                contenido += '<a href="index.html#/' + link + '" class="btn btn-primary">Apostar!</a>';
                contenido += '</p>';
                contenido += '</div>';
                contenido += '</div>';
                contenido += '</div>';


                $("#contenedorPrincipal").append(contenido);
                          
            }
            $scope.$apply()
        },
        error: function () {}

    })
}


mostrarElementos()