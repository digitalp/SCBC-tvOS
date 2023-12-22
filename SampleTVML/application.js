//# sourceURL=application.js

var resourceLoader;

App.onLaunch = function(options) {
    var javascriptFiles = [
        `${options.BASEURL}/ResourceLoader.js`,
        `${options.BASEURL}/Presenter.js`
    ];

    evaluateScripts(javascriptFiles, function(success) {
        if (success) {
            resourceLoader = new ResourceLoader(options.BASEURL);

            // Load EPG data and then load the main template
            loadEPGData(`${options.BASEURL}scbcguide.xml`, function(epgData) {
                var processedEPGData = processEPGData(epgData);
                resourceLoader.loadResource(`${options.BASEURL}templates/MainPageTemplate.xml.js`, function(resource) {
                    var doc = Presenter.makeDocument(resource, processedEPGData);
                    doc.addEventListener("select", Presenter.load.bind(Presenter));
                    Presenter.pushDocument(doc);
                });
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
                callback(xmlDoc); // Pass the XML document for further processing
            } else {
                console.error("Failed to fetch EPG data");
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function processEPGData(epgXml) {
    // Process the XML document and extract EPG data
    // This function should return processed data in a format suitable for MainPageTemplate
    // Implement the logic based on your EPG data structure and requirements
}

var createAlert = function(title, description) {
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
      <document>
        <alertTemplate>
          <title>${title}</title>
          <description>${description}</description>
          <button>
            <text>OK</text>
          </button>
        </alertTemplate>
      </document>`;

    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc;
};
