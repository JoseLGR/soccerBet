apuesta.controller('partidoController', function ($scope) {
    $scope.saludo = "hola"
    
    $scope.arregloFalsoNoUsar = ["uno" , "dos"]





    $scope.obtenerPartidos = function() {
        var listaPartidos = Parse.Object.extend("partidos");

        var query = new Parse.Query(listaPartidos);

        //FILTROS
        //query.equalTo("nombre", "Chelsea VS Liverpool");

        //ORDEN
        query.descending("fecha");

        query.ascending("nombre");

        query.find({

            success: function (results) {

                var resultadoConFormatoOK = []


                for (var i = 0; i < results.length; i++) {

                    var object = results[i];
                    infoDelPartido = {}

                    infoDelPartido.nombre = object.get('nombre');
                    infoDelPartido.liga = object.get('liga');
                    infoDelPartido.imagen = object.get('imagen');
                    infoDelPartido.fecha = object.get('fecha');
                    infoDelPartido.hora = object.get('hora');
                    infoDelPartido.link = object.get('link');

                    resultadoConFormatoOK.push(infoDelPartido)

                }

                $scope.todosLosPartidos = resultadoConFormatoOK

                /*
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
                contenido += '<a href="' + link + '" class="btn btn-primary">Apostar!</a>';
                contenido += '</p>';
                contenido += '</div>';
                contenido += '</div>';
                contenido += '</div>';


                $("#contenedorPrincipal").append(contenido);
            }*/
            },
            error: function () {}

        })

    }


})