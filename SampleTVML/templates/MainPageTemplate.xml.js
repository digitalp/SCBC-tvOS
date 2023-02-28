//# sourceURL=application.js

//
//  MainPageTemplate.xml.js
//  SampleTVML
//
//  Created by Mac-OBS-18 on 10/01/23.
//


var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate>
      <banner>
        <title>Highlights</title>
      </banner>
      <list>
        <section>
      <listItemLockup>
        <title>Inspiration Videos</title>
        <decorationLabel>13</decorationLabel>
            //1. add from here
        <relatedContent>
          <grid>
            <section>
                  //2
          <lockup videoURL="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8">
            <img src="${this.BASEURL}images/ray.png" width="500" height="308" />
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



