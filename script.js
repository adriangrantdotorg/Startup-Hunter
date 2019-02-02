/*=============================================>>>>>
= Functions =
===============================================>>>>>*/
function Linkedin(info,tab) {
  chrome.tabs.create({  
    url: "https://www.linkedin.com/search/results/index/?keywords=" + info.selectionText
  });
}
function Crunchbase(info,tab) {
  chrome.tabs.create({  
    url: "https://www.crunchbase.com/textsearch?q=" + info.selectionText
  });
}
function Twitter(info,tab) {
  chrome.tabs.create({  
    url: "https://twitter.com/search?q=" + info.selectionText
  });
}
function Angel(info,tab) {
  chrome.tabs.create({  
    url: "https://angel.co/search?q=" + info.selectionText
  });
}
function All(info,tab) {
  chrome.windows.create({
    url: "https://www.linkedin.com/search/results/index/?keywords=" + info.selectionText
  });
  chrome.tabs.create({  
    url: "https://twitter.com/search?q=" + info.selectionText
  });
  chrome.tabs.create({  
    url: "https://angel.co/search?q=" + info.selectionText
  });
  chrome.tabs.create({  
    url: "https://www.crunchbase.com/textsearch?q=" + info.selectionText
  });
}

/*=============================================>>>>>
= Context Menus =
===============================================>>>>>*/
chrome.contextMenus.create({
  title: "Startup Hunter",
  id: "parent",
  contexts:["selection"]
});

chrome.contextMenus.create({
  title: "LinkedIn",
  parentId: "parent",
  contexts:["selection"],
  onclick: Linkedin
});
chrome.contextMenus.create({
  title: "Twitter",
  parentId: "parent",
  contexts:["selection"],
  onclick: Twitter
});
chrome.contextMenus.create({
  title: "Angel.co",
  parentId: "parent",
  contexts:["selection"],
  onclick: Angel
});
chrome.contextMenus.create({
  title: "Crunchbase",
  parentId: "parent",
  contexts:["selection"],
  onclick: Crunchbase
});
chrome.contextMenus.create({
  title:"⚡ All",
  parentId: "parent",
  contexts:["selection"],
  onclick: All
});
