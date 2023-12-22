//# sourceURL=application.js

var resourceLoader;

App.onLaunch = function(options) {
    var javascriptFiles = [
        `${options.BASEURL}/ResourceLoader.js`,
        `${options.BASEURL}/Presenter.js`
    ];

    evaluateScripts(javascriptFiles, function(success) {
        if(success) {
            resourceLoader = new ResourceLoader(options.BASEURL);
            loadEPGData(`${options.BASEURL}scbcguide.xml`, function(epgData) {
                var mainPageTemplate = createMainPageTemplate(epgData);
                var doc = Presenter.makeDocument(mainPageTemplate);
                doc.addEventListener("select", Presenter.load.bind(Presenter));
                Presenter.pushDocument(doc);
            });
        } else {
            var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
            navigationDocument.presentModal(errorDoc);
        }
    });
};

function loadEPGData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(xhr.responseText, "application/xml");
                callback(xmlDoc); // Process and extract EPG data
            } else {
                console.error("Failed to fetch EPG data");
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function createMainPageTemplate(epgXml) {
    var programmes = epgXml.getElementsByTagName("programme");
    var now = new Date();
    var upcomingProgrammes = [];

    for (var i = 0; i < programmes.length; i++) {
        var programme = programmes[i];
        var startDate = parseDate(programme.getAttribute("start"));
        var endDate = parseDate(programme.getAttribute("stop"));

        if (now >= startDate && now <= endDate || now < startDate) {
            upcomingProgrammes.push(programme);
            if (upcomingProgrammes.length === 4) break; // Current + next 3 shows
        }
    }

    return generateEPGTVML(upcomingProgrammes);
}

function parseDate(dateString) {
    // Parse the date string from the XMLTV format to a JavaScript Date object
    // Implement this based on the format of the dates in your XMLTV data
    // Example: "20231222060000 +0100" --> JavaScript Date object
    // Return the parsed Date object
}

function generateEPGTVML(programmes) {
    var tvmlString = `<?xml version="1.0" encoding="UTF-8" ?><document><stackTemplate><banner><title>Program Guide</title></banner><collectionList><grid><section>`;

    for (var i = 0; i < programmes.length; i++) {
        var programme = programmes[i];
        var title = programme.getElementsByTagName("title")[0].textContent;
        var desc = programme.getElementsByTagName("desc")[0].textContent;

        tvmlString += `<lockup><img src="your_image_url_here" width="500" height="308" /><title>${title}</title><description>${desc}</description></lockup>`;
    }

    tvmlString += `</section></grid></collectionList></stackTemplate></document>`;

    return tvmlString;
}

var createAlert = function(title, description) {
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?><document><alertTemplate><title>${title}</title><description>${description}</description><button><text>OK</text></button></alertTemplate></document>`;

    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc;
};
