import axios from 'axios';
import {convertXML, createAST} from 'simple-xml-to-json';

export async function GetTimetable(cb){
    const config = {
        method: 'get',
        maxContentLength: Infinity,
        url: 'http://172.17.7.30/FIDS/AG10.XML',
        headers: {}
    }

    axios.request(config)
    .then(responce => {
        const dataXML = responce.data;
        const XMLtoJSON = convertXML(dataXML);
        const ast = createAST(dataXML);
        ast
        console.log(XMLtoJSON, ast);
        cb("hi");
    })

}