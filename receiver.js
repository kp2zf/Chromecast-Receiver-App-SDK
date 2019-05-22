const context = cast.framework.CastReceiverContext.getInstance();

//...

// Update style using javascript
let playerElement = document.getElementsByTagName("cast-media-player")[0];
playerElement.style.setProperty('--splash-image', 'url("https://www.broadcastingcable.com/.image/t_share/MTU4Nzc0ODkxMjQ2NTI4MTYx/fox-news-channel-logo.jpg")');

//...

context.start();