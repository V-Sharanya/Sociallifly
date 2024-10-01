const requests = document.getElementById('request');
const requestBody = document.querySelector('.requests');
const requestCount = document.getElementById('request-count');
const menuItems = document.querySelectorAll('.items');
const theme = document.querySelector('#theme');
const messages = document.querySelector('#messages');
const messagePopup = document.querySelector('.messages');
const messageCount = document.getElementById('message-count');
const notification = document.querySelector('#notification');
const notificationPopup = document.querySelector('.notifications');
const notificationCount = document.getElementById('notification-count');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

/* Side-bar items*/
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
    });
});

/*For themes*/
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

/*Themes font size*/
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        size.classList.toggle('active');
        let fontSize;
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem')
        }


        document.querySelector('html').style.fontSize = fontSize;
    });
});

/*Theme Colors*/
const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPallete.forEach(color =>  {
    color.addEventListener('click',() => {
        let primary;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

/*Theme Display mode*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click', () => {

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

/*Notication items*/
const openNotificationModal = () => {
    notificationPopup.style.display = 'grid';
    notificationCount.style.display = 'none';
}

const closeNotificationModal = (e) => {
    if (e.target.classList.contains('notifications')) {
        console.log("Don't display");
        notificationPopup.style.display = 'none';
    }
}
notificationPopup.addEventListener('click', closeNotificationModal);

notification.addEventListener('click', openNotificationModal);

/*Message items*/
const openMessageModal = () => {
    messagePopup.style.display = 'grid';
    messageCount.style.display = 'none';
}

const closeMessageModal = (e) => {
    if (e.target.classList.contains('messages')) {
        console.log("Don't display");
        messagePopup.style.display = 'none';
    }
}
messagePopup.addEventListener('click', closeMessageModal);

messages.addEventListener('click', openMessageModal);

/*Request items*/
requests.addEventListener('click',(e) => {
    e.preventDefault();
    console.log("Clicked");
    requestBody.style.boxShadow =  '0.3rem 0.3rem 0.3rem 0rem var(--color-dark)';
    requestCount.style.display = 'none';
    setTimeout(() => {
        requestBody.style.boxShadow = 'none';
    }, 3000);
})

/*Create post*/
document.querySelectorAll('.append, .replace').forEach(function (button) {
    button.addEventListener('click', function (e) {
        var el = e.currentTarget;
        var action = el.getAttribute('data-action');
        var content = document.getElementById('my-textArea').value;
        var main = document.getElementById('post1');

        if (action === "append") {
            console.log("appending...");
            main.innerHTML += content + "<br/>";
            main.style.display = 'block';
        }
        else if (action === "replace") {
            console.log("replacing...");
            main.innerHTML = content;
            main.style.display="none";
        }

        if (content.trim() === "") {
            console.log("Content is empty, not displaying.");
            return;
        }

        main.style.display = 'block';

        main.style.height = 'auto';  
        var contentHeight = main.scrollHeight;
        main.style.height = contentHeight + 'px';

        document.getElementById('my-textArea').value = '';
    });
});

/*Dropdown for more info*/
document.querySelectorAll('#info').forEach(function (button) {
    button.addEventListener('click', function (e) {
        var submenu = this.parentElement.querySelector('.dropdown');
        submenu.classList.toggle('active');
    })

});

/* Slider images*/
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let prev = document.getElementById('prev')
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    console.log("ok");
    if(active - 1<0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
}

/* Dropdown for comments*/
document.querySelectorAll('.comment-button').forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log("button clicked");
        var menu = this.parentElement.querySelector('.comment-dropdown');
        menu.classList.toggle('active');
    })

});

/*Dropdown for share*/
document.querySelectorAll('#share').forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log("button clicked");
        var menu1 = this.parentElement.querySelector('.share-dropdown');
        menu1.classList.toggle('active');
    })

});

/*Slider for images*/
let list1 = document.querySelector('.slider-alia .list-alia');
let items1 = document.querySelectorAll('.slider-alia .list-alia .item-alia');
let prev1 = document.getElementById('prev-alia')
let next1 = document.getElementById('next-alia');

let active1 = 0;
let lengthItems1 = items1.length - 1;

next1.onclick = function(){
    if(active1 + 1 > lengthItems1){
        active1 = 0;
    }else{
        active1 = active1 + 1;
    }
    reloadSlider1();
}

prev1.onclick = function(){
    console.log("ok");
    if(active1 - 1<0){
        active1 = lengthItems1;
    }else{
        active1 = active1 - 1;
    }
    reloadSlider1();
}

function reloadSlider1(){
    let checkLeft = items1[active1].offsetLeft;
    list1.style.left = -checkLeft + 'px';
}

/*Stories*/
const popupYourStory = document.getElementById('popupYourStory');
const closeBtnYourStory = popupYourStory.querySelector('.close-btn');
const triggerImageYourStory = document.getElementById('triggerImage');

const popupSaiPallavi = document.getElementById('popupSaiPallavi');
const closeBtnSaiPallavi = popupSaiPallavi.querySelector('.close-btn');
const triggerImageSaiPallavi = document.getElementById('triggerImage1');

const popupNeymar = document.getElementById('popupNeymar');
const closeBtnNeymar = popupNeymar.querySelector('.close-btn');
const triggerImageNeymar = document.getElementById('triggerImage2');

const popupSiddhant = document.getElementById('popupSiddhant');
const closeBtnSiddhant = popupSiddhant.querySelector('.close-btn');
const triggerImageSiddhant = document.getElementById('triggerImage3');

const popupAlia = document.getElementById('popupAlia');
const closeBtnAlia = popupAlia.querySelector('.close-btn');
const triggerImageAlia = document.getElementById('triggerImage4');

const popupArmaan = document.getElementById('popupArmaan');
const closeBtnArmaan = popupArmaan.querySelector('.close-btn');
const triggerImageArmaan = document.getElementById('triggerImage5');


triggerImageYourStory.addEventListener('click', () => {
    popupYourStory.classList.add('active');
});


closeBtnYourStory.addEventListener('click', () => {
    popupYourStory.classList.remove('active');
});

triggerImageSaiPallavi.addEventListener('click', () => {
    popupSaiPallavi.classList.add('active');
});


closeBtnSaiPallavi.addEventListener('click', () => {
    popupSaiPallavi.classList.remove('active');
});

triggerImageNeymar.addEventListener('click', () => {
    popupNeymar.classList.add('active');
});

closeBtnNeymar.addEventListener('click', () => {
    popupNeymar.classList.remove('active');
});

triggerImageSiddhant.addEventListener('click', () => {
    popupSiddhant.classList.add('active');
});

closeBtnSiddhant.addEventListener('click', () => {
    popupSiddhant.classList.remove('active');
});

triggerImageAlia.addEventListener('click', () => {
    popupAlia.classList.add('active');
});

closeBtnAlia.addEventListener('click', () => {
    popupAlia.classList.remove('active');
});

triggerImageArmaan.addEventListener('click', () => {
    popupArmaan.classList.add('active');
});

closeBtnArmaan.addEventListener('click', () => {
    popupArmaan.classList.remove('active');
});

/*Messages*/
const piersonChat = document.querySelector('.up-bar.pierson');
const piersonChatPopup = document.querySelector('.side2.pierson');

const aliaChat = document.querySelector('.up-bar.alia');
const aliaChatPopup = document.querySelector('.side2.alia');


const lilyChat = document.querySelector('.up-bar.lily');
const lilyChatPopup = document.querySelector('.side2.lily');

const taneChat = document.querySelector('.up-bar.tane');
const taneChatPopup = document.querySelector('.side2.tane');

const neymarChat = document.querySelector('.up-bar.neymar');
const neymarChatPopup = document.querySelector('.side2.neymar');

const saiChat = document.querySelector('.up-bar.sai');
const saiChatPopup = document.querySelector('.side2.sai');


const armaanChat = document.querySelector('.up-bar.armaan');
const armaanChatPopup = document.querySelector('.side2.armaan');

const siddhantChat = document.querySelector('.up-bar.siddhant');
const siddhantChatPopup = document.querySelector('.side2.siddhant');

function hideAllChats() {
    piersonChatPopup.classList.remove('active');
    aliaChatPopup.classList.remove('active');
    lilyChatPopup.classList.remove('active');
    taneChatPopup.classList.remove('active');
    neymarChatPopup.classList.remove('active');
    saiChatPopup.classList.remove('active');
    armaanChatPopup.classList.remove('active');
    siddhantChatPopup.classList.remove('active');
}

piersonChat.addEventListener('click',() => {
    hideAllChats();
    piersonChatPopup.classList.toggle('active');
})

aliaChat.addEventListener('click',() => {
    hideAllChats();
    aliaChatPopup.classList.toggle('active');
})


lilyChat.addEventListener('click',() => {
    hideAllChats();
    lilyChatPopup.classList.toggle('active');
})

taneChat.addEventListener('click',() => {
    hideAllChats();
    taneChatPopup.classList.toggle('active');
})


armaanChat.addEventListener('click',() => {
    hideAllChats();
    armaanChatPopup.classList.toggle('active');
})

neymarChat.addEventListener('click',() => {
    hideAllChats();
    neymarChatPopup.classList.toggle('active');
})


siddhantChat.addEventListener('click',() => {
    hideAllChats();
    siddhantChatPopup.classList.toggle('active');
})

saiChat.addEventListener('click',() => {
    hideAllChats();
    saiChatPopup.classList.toggle('active');
})