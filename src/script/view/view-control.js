const errorNotifElement = document.querySelector("error-notification");

class ViewControl {
    static setKasusChartResponsive(time){
        setTimeout(() => {
            const itemDetailHeight = document.querySelectorAll(".item-detail")[1].clientHeight;
            document.querySelector(".statistik-kasus").style.height = `${itemDetailHeight-30}px`;
        }, time);

    }

    static setNotificationResponsive(){
        const notifWidth = document.getElementsByClassName("summary-item")[0].clientWidth;
        const notifHeight = document.getElementsByClassName("statistik-kasus")[0].offsetHeight;
    
        errorNotifElement.style.height = (window.innerWidth >=700) ? `${notifHeight-4}px` : `${notifHeight*2 + 40 - 4}px`;
        errorNotifElement.style.width = `${notifWidth}px`;
    }

    static changeReloadButton(){
        const reloadButton = document.querySelector("#reloadDataElement");
        reloadButton.innerHTML = "Reloading...";
        reloadButton.setAttribute("disabled","true");
    }

    static disableNotifications(){
        errorNotifElement.removeAttribute("class");
        errorNotifElement.removeAttribute("style");
        errorNotifElement.innerHTML = ``; 
    }

};

export default ViewControl;