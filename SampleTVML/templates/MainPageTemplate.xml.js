//# sourceURL=application.js

//
//  MainPageTemplate.xml.js
//  SampleTVML
//
//  Created by Mac-OBS-18 on 10/01/23.
//


var Template = function() { 
    return `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <catalogTemplate
          <background>
              <img src="${this.BASEURL}images/SCBC-Background-FullHD13.png"/>
          </background>
        <banner>
        <title>SCBC Television</title>
      </banner>
      <list>
        <section>
      <listItemLockup>
        <title>LIVE</title>
        <decorationLabel>2</decorationLabel>
            //1. add from here
        <relatedContent>
          <grid>
            <section>
                  //2
          <lockup videoURL="https://cdn.scbcmedia.com/scbctelevision/c9a1fdac6e082dd89e7173244f34d7b3.sdp/playlist.m3u8">
            <img src="${this.BASEURL}images/scbcthumb.png" width="500" height="308" />
            <title>SCBC Television</title>
          </lockup>
        </section>
          </grid>
        </relatedContent>
      </listItemLockup>
  
        <listItemLockup>
          <title>Originals</title>
          <decorationLabel>1</decorationLabel>
              //1. add from here
          <relatedContent>
            <grid>
              <section>
                    //2
                      <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                        <img src="${this.BASEURL}images/scbcthumb.png" width="500" height="308" />
                      </lockup>
  
          </section>
            </grid>
          </relatedContent>
        </listItemLockup>
  
          <listItemLockup>
            <title>Local Movies</title>
            <decorationLabel>1</decorationLabel>
                //1. add from here
            <relatedContent>
              <grid>
                <section>
                      //2
                      <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                        <img src="${this.BASEURL}images/scbcthumb.png" width="500" height="308" />
                      </lockup>
    
            </section>
              </grid>
            </relatedContent>
          </listItemLockup>
  
            <listItemLockup>
              <title>Local Series</title>
              <decorationLabel>1</decorationLabel>
                  //1. add from here
              <relatedContent>
                <grid>
                  <section>
                        //2
                                  <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                                    <img src="${this.BASEURL}images/scbcthumb.png" width="500" height="308" />
                                  </lockup>
      
              </section>
                </grid>
              </relatedContent>
            </listItemLockup>
  
        </section>
      </list>
    </catalogTemplate>
  </document>`
}
