//comment Julio
function envio(){
var cadena1=[];
var cadena2=[];

var estados=[
  {"name":"Aguascalientes", "value":"Ags"},
  {"name":"Baja California", "value":"BC"},
  {"name":"Baja California Sur", "value":"BCS"},
  {"name":"Campeche", "value":"Camp"},
  {"name":"Coahuila", "value":"Coah"},
  {"name":"Colima", "value":"Col"},
  {"name":"Chiapas", "value":"Chis"},
  {"name":"Chihuahua", "value":"Chih"},
  {"name":"Ciudad de México",  "value":"CDMX"},
  {"name":"Durango", "value":"Dgo"},
  {"name":"Guanajuato", "value":"Gto"},
  {"name":"Guerrero", "value":"Gro"},
  {"name":"Hidalgo", "value":"Hgo"},
  {"name":"Jalisco", "value":"Jal"},
  {"name":"Estado de México", "value":"Edo Méx"},
  {"name":"Michoacán", "value":"Mich"},
  {"name":"Morelos", "value":"Mor"},
  {"name":"Nayarit", "value":"Nay"},
  {"name":"Nuevo León", "value":"NL"},
  {"name":"Oaxaca", "value":"Oax"},
  {"name":"Puebla", "value":"Pue"},
  {"name":"Querétaro", "value":"Qro"},
  {"name":"Quintana Roo", "value":"QR"},
  {"name":"San Luis Potosí", "value":"SLP"},
  {"name":"Sinaloa", "value":"Sin"},
  {"name":"Sonora", "value":"Son"},
  {"name":"Tabasco", "value":"Tab"},
  {"name":"Tamaulipas", "value":"Tams"},
  {"name":"Tlaxcala", "value":"Tlax"},
  {"name":"Veracruz", "value":"Ver"},
  {"name":"Yucatán", "value":"Yuc"},
  {"name":"Zacatecas", "value":"Zac"},
];
var rubros=[
  {"name":"Seguridad Pública", "value":"seg", "color":"rgb(166, 0, 21)"},
  {"name":"Seguridad Nacional", "value":"segnac", "color":"rgb(107, 9, 3)"},
  {"name":"Educación", "value":"edu", "color":"rgb(221, 231, 38)"},
  {"name":"Relaciones Exteriores", "value":"re", "color":"rgb(5, 101, 11)"},
  {"name":"Democracia", "value":"dem", "color":"rgb(13, 93, 187)"},
  {"name":"Economía", "value":"eco", "color":"rgb(72, 189, 38)"},
  {"name":"Cultura", "value":"cul", "color":"rgb(184, 63, 132)"},
  {"name":"Salud", "value":"sal", "color":"rgb(218, 0, 0)"},
  {"name":"Infraestructura", "value":"inf", "color":"rgb(8, 94, 73)"},
  {"name":"Comercio", "value":"com", "color":"rgb(76, 47, 102)"},
  {"name":"Agricultura", "value":"agr", "color":"rgb(101, 68, 33)"},
  {"name":"Medio Ambiente", "value":"ma", "color":"rgb(16, 93, 52)"},
  {"name":"Transporte Público", "value":"tp", "color":"rgb(185, 58, 101)"},
  {"name":"Justicia", "value":"just", "color":"rgb(136, 105, 39)"},
  {"name":"Empleo", "value":"emp", "color":"rgb(32, 173, 173)"},
  {"name":"Vivienda", "value":"casa", "color":"rgb(76, 91, 72)"}
];
//

var sestados="";
var rrubros="";

var select="";

      for (var i=0;i<estados.length;i++){
         cadena1 += "<option value='' >" + estados[i].name + "</option>";
       }



  sestados = "<select class='selector' name='estado'>" +
                "<option value='' disabled selected>Selecciona tu estado</option>" +
                cadena1 + "</select></div>";

//document.getElementById('estado').innerHTML = sestados;

       for (var i=0;i<rubros.length;i++){
         cadena2 += "<option value='' >" + rubros[i].name + "</option>";
       }

  rrubros = "<select class='selector' name='rubro'>" +
                "<option value='' disabled selected>Selecciona el rubro</option>" +
                cadena2 + "</select></div>";

//document.getElementById('rubro').innerHTML = rrubros;

    select = "<div id='estado'>" + sestados + "</div>" +
            "<div id='rubro'>" + rrubros + "</div>" +
            "<div id='sexo'>"+
              "<div class='sexo'>"+
                "<div class='sexo_txt'>Hombre</div>"+
                "<div class='radio_input'>"+
                  "<input type='radio' name='sexo' value='H'>"+
                "</div>"+
              "</div>"+
              "<div class='sexo'>"+
                "<div class='sexo_txt'>Mujer</div>"+
                "<div class='radio_input'>"+
                  "<input type='radio' name='sexo' value='M' >"+
                "</div>"+
              "</div>"+
            "</div>"+
            "<div id='submit_container'>"+
              "<button type='submit' name='button' id='enviar'>Enviar</button>"+
            "</div>";

document.getElementById('inputs').innerHTML = select;
}
