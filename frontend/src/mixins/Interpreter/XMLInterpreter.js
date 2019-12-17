export default{
    methods: {
        myAwesomeMethod(){
            console.log("mixin");
        },
        convertXmlToObject(){
            let hola;
            function handleFileSelect(evt) {
                var files = evt.target.files[0]; // FileList object
            
                // files is a FileList of File objects. List some properties.
                var output = [];
                new Promise(function(resolve, reject){
                    let reader = new FileReader();
                    reader.onload = function (evt){
                        resolve((evt.target.result)); //Se transforma el json a objeto de js
                    };
                    reader.readAsText(files);
                    reader.onerror = reject;
                })
                .then((retorna) => {
                    hola = readXml(retorna);
                    console.log(hola);
                    trabajarXml(hola);
                    
                })
                .catch(function(err){
                    console.log(err)
                });
            }
            
            document.getElementById('files').addEventListener('change', handleFileSelect, false);
            
            
            function readXml(xmlFile){
            
                var xmlDoc;
                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(xmlFile, "text/xml");
                return xmlDoc;
            }	
            
            function trabajarXml(xmlFile){
                let elements = xmlFile.getElementsByTagName("ontology");
                elements = elements[0].getElementsByTagName('term_definitions');
                for(let i = 0; i < elements.length; i++){
                    attribute = elements[i].getAttribute('language');
                    if(attribute === 'es'){
                        elements = elements[i];
                        break;
                    }
                    console.log(attribute);
                }
                console.log(elements);
            
            }
        }
    }
}