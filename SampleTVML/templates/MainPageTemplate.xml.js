//# sourceURL=application.js

//
//  MainPageTemplate.xml.js
//  SampleTVML
//
//  Created by Mac-OBS-18 on 10/01/23.
//


var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
    <menuBarTemplate>
        <menuBar>
            <menuItem id="LIVE" data-identifier="list">
                <title>Top Movies</title>
                <lockup videoURL="https://cdn.scbcmedia.com/scbctelevision/c9a1fdac6e082dd89e7173244f34d7b3.sdp/playlist.m3u8">
                  <img src="${this.BASEURL}images/scbcthumb.png" width="500" height="308" />
                </lockup>
            </menuItem>
            <menuItem id="Ask Docta!" data-identifier="index">
                <title>Genres</title>
            </menuItem>
            <menuItem id="navigation_search" data-identifier="search">
                <title>Search</title>
            </menuItem>
            <menuItem id="navigation_edit" data-identifier="edit">
                <title>Edit</title>
            </menuItem>
            <menuItem id="navigation_settings_add" data-identifier="add_settings">
                <title>Add Settings</title>
            </menuItem>
        </menuBar>
    </menuBarTemplate>
</document>
}
