function browserHistory(obj, arr) {

    let openTabs = obj['Open Tabs'];
    let recentlyClosed = obj["Recently Closed"];
    let browserLogs = obj["Browser Logs"];

    for (let actions of arr) {

        let [action, page] = actions.split(' ');

        if (action === 'Open') {

            openTabs.push(page);
            browserLogs.push(actions);

        } else if (action === 'Close') {

            if (openTabs.includes(page)) {

                let index = openTabs.indexOf(page);

                openTabs.splice(index, 1);
                recentlyClosed.push(page);
                browserLogs.push(actions);

            }

        } else if (action === 'Clear') {

            openTabs.splice(0);
            recentlyClosed.splice(0);
            browserLogs.splice(0);

        }
    }

    let entries = Object.entries(obj);

    for (let [key, value] of entries) {

        if (key === 'Browser Name') {

            console.log(value);
            continue;

        }

        console.log(`${key}: ${value.join(', ')}`);

    }
}
browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);