//adds context menu for right click
var contextMenus ={};

contextMenus.addTask = chrome.contextMenus.create({
        "title":"Add task to inbox",
        "contexts": ["selection"],
        "id": "selection-text",
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, function(selection) {
        var selected = selection[0];
        //do something with var selection
    });
});

