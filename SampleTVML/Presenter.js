//# sourceURL=application.js

//
//  Presenter.js
//  SampleTVML
//
//  Created by Mac-OBS-18 on 10/01/23.
//

var Presenter = {
  // 1
  makeDocument: function(resource) {
    if (!Presenter.parser) {
      Presenter.parser = new DOMParser();
    }
    var doc = Presenter.parser.parseFromString(resource, "application/xml");
    return doc;
  },
  // 2
  modalDialogPresenter: function(xml) {
    navigationDocument.presentModal(xml);
  },
 
  // 3
  pushDocument: function(xml) {
    navigationDocument.pushDocument(xml);
  },
    
  // 4 [handles cell selection]
load: function(event) {
    //1
    var self = this,
    ele = event.target,
    videoURL = ele.getAttribute("videoURL")
    if(videoURL) {
        //2
        var player = new Player();
        var playlist = new Playlist();
        var mediaItem = new MediaItem("video", videoURL);
        
        player.playlist = playlist;
        player.playlist.push(mediaItem);
        player.present();
    }
},

}


