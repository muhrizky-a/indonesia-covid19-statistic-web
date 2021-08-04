
import '../component/search-bar.js';
import '../component/kasus-summary.js';
import '../component/kasus-chart.js';
import '../component/provinsi-chart.js';
import '../component/provinsi-item.js';
import '../component/error-notification.js';

import DataSource from "../data/data-source.js";
import DataProvinsi from "../data/data-provinsi.js";

import ViewControl from "../view/view-control.js";


const main = () => {
    const searchElement = document.querySelector("search-bar");
    const provinsiListElement = document.querySelector("provinsi-item");
    const kasusSummaryElement = document.querySelector("kasus-summary");
    const kasusChartElement = document.querySelector("kasus-chart");
    const provinsiChartElement = document.querySelector("provinsi-chart");
    const errorNotifElement = document.querySelector("error-notification");


    const onButtonSearchClicked = async () => {
        try{
            const result = await DataProvinsi.searchData(searchElement.value)
            renderResult(result);
        }catch (message){
            fallbackResult(message)
        }
    };
    const renderResult = results => {
        provinsiListElement.dataProvinsi = results;
        ViewControl.setKasusChartResponsive(300);
    };
    const fallbackResult = message => {
        provinsiListElement.renderError(message);
    }; 

    
    const getKasusIndo = () => {
        DataSource.getData()
            .then(renderData)
            .catch(fallbackData)
            
    };
    const renderData = results => {
        kasusSummaryElement.dataset = results;
        kasusChartElement.dataset = results;   
        ViewControl.setKasusChartResponsive(300);
    };
    const fallbackData = message => {
        kasusSummaryElement.renderError();
        errorNotifElement.render(message, reloadData);
        ViewControl.setNotificationResponsive();
    };


    const getKasusProvinsi = () => {
        DataProvinsi.getData()
            .then(renderDataProvinsi)
            .catch(fallbackDataProvinsi)
    }
    const renderDataProvinsi = results => {
        DataProvinsi.dataset = results;
        provinsiChartElement.dataset = results;

        searchElement.clickEvent = onButtonSearchClicked;
        DataProvinsi.loadOption();
        
    };
    const fallbackDataProvinsi = message => {
        //provinsiListElement.renderError(message);
    };


    const loadData = () => {
        setTimeout(() => {
            getKasusIndo();
            getKasusProvinsi();
        }, 1000);
    }
    const reloadData = () => {
        ViewControl.changeReloadButton();
        setTimeout(() => {
            ViewControl.disableNotifications();
        }, 750);
        loadData();
    }

    
    window.onresize = () => {
        if(window.innerWidth >=700){
            ViewControl.setKasusChartResponsive(1);
        }
        if(errorNotifElement.className == "enabled-flex"){
            ViewControl.setNotificationResponsive();
        }
    }

    loadData();
};

export default main;

