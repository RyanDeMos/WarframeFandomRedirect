const url = window.location.href;
const path = /(https?):\/\/warframe.fandom.com\/wiki\/(.*)/.exec(url);
const redirectURL = `${path[1]}://wiki.warframe.com/w/${path[2]}`;
window.location.href = redirectURL;