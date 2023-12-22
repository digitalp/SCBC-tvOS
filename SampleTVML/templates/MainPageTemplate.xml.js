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
      <head>
        <style>
          .backgroundImageStyle {
            background-image: url('${this.BASEURL}images/SCBC-Background-FullHD13.png');
            background-size: cover; /* Cover the entire area */
          }
          .bannerLogo {
            tv-tint-color: transparent; /* Remove tint to display the logo clearly */
          }
        </style>
      </head>
      <catalogTemplate class="backgroundImageStyle">
        <banner>
          <img src="${this.BASEURL}images/scbc_logo.png" class="bannerLogo" width="200" height="100" />
        </banner>
      <list>
        <section>
      <listItemLockup>
        <title>LIVE</title>
        <decorationLabel>13</decorationLabel>
            //1. add from here
        <relatedContent>
          <grid>
            <section>
                  //2
          <lockup videoURL="https://cdn.scbcmedia.com/scbctelevision/c9a1fdac6e082dd89e7173244f34d7b3.sdp/playlist.m3u8">
            <img src="${this.BASEURL}images/scbcthumb.png" width="500" height="308" />
          </lockup>
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/ryan.png" width="500" height="308" />
          </lockup>
              <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/matthijs.png" width="500" height="308" />
          </lockup>
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/vicki.png" width="500" height="308" />
          </lockup>
              <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/alexis.png" width="500" height="308" />
              </lockup>
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/marin.png" width="500" height="308" />
          </lockup>
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/chris.png" width="500" height="308" />
              </lockup>
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/cesare.png" width="500" height="308" />
          </lockup>
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/ellen.png" width="500" height="308" />
          </lockup>
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/jake.png" width="500" height="308" />
          </lockup>
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/kim.png" width="500" height="308" />
          </lockup>
              <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/tammy.png" width="500" height="308" />
          </lockup>
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/saul.png" width="500" height="308" />
          </lockup>
        </section>
          </grid>
        </relatedContent>
      </listItemLockup>
  
        <listItemLockup>
          <title>Funny Videos</title>
          <decorationLabel>3</decorationLabel>
              //1. add from here
          <relatedContent>
            <grid>
              <section>
                    //2
                      <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                        <img src="${this.BASEURL}images/kim.png" width="500" height="308" />
                      </lockup>
                          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                        <img src="${this.BASEURL}images/tammy.png" width="500" height="308" />
                      </lockup>
                      <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                        <img src="${this.BASEURL}images/saul.png" width="500" height="308" />
                      </lockup>
  
          </section>
            </grid>
          </relatedContent>
        </listItemLockup>
  
          <listItemLockup>
            <title>Educational Videos</title>
            <decorationLabel>4</decorationLabel>
                //1. add from here
            <relatedContent>
              <grid>
                <section>
                      //2
                      <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                        <img src="${this.BASEURL}images/cesare.png" width="500" height="308" />
                      </lockup>
                      <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                        <img src="${this.BASEURL}images/ellen.png" width="500" height="308" />
                      </lockup>
                      <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                        <img src="${this.BASEURL}images/jake.png" width="500" height="308" />
                      </lockup>
                      <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                        <img src="${this.BASEURL}images/kim.png" width="500" height="308" />
                      </lockup>
    
            </section>
              </grid>
            </relatedContent>
          </listItemLockup>
  
            <listItemLockup>
              <title>Anime Videos</title>
              <decorationLabel>3</decorationLabel>
                  //1. add from here
              <relatedContent>
                <grid>
                  <section>
                        //2
                                  <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                                    <img src="${this.BASEURL}images/vicki.png" width="500" height="308" />
                                  </lockup>
                                      <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                                    <img src="${this.BASEURL}images/alexis.png" width="500" height="308" />
                                      </lockup>
                                  <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
                                    <img src="${this.BASEURL}images/marin.png" width="500" height="308" />
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



