import React, { useRef } from 'react'

import { ArkLog } from 'ark-react-log'
import csle from './assets/csle_1.PNG'
import log_def_tag from './assets/csle_log_default_tag.PNG'
import log_with_tag from './assets/csle_log_with_tag.PNG'
import err_with_tag from './assets/csle_err_with_tag.PNG'
import rdev from './assets/react_dev.png'

const App = () => {
  const introEl = {
    contain: useRef(null),
    txtmsg: useRef(null),
    txtbtn: useRef(null)
  }, getStartEl = {
    contain: useRef(null),
    txtmsg: useRef(null),
    txtbtn: useRef(null)
    }, usageEl = {
      contain: useRef(null),
      txtmsg: useRef(null),
      txtbtn: useRef(null)
    };

  let copyNpm = (evt) => {
    var cc = evt.target.closest('.precode').querySelector('.npm-code').innerText;
    copyToClipboard(cc);
    ArkLog("Npm Copy", cc).log();
  }
  let copyJs = (evt) => {
    var cc = evt.target.closest('.precode').querySelector('.jss-code').innerText;
    copyToClipboard(cc);
    ArkLog("Js Copy", cc).log();
  }
  let copyToClipboard = (value) => {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  return <div>
    <h1 className="con-tit">Conversational Documentation <span className="sml"> for </span> <span className="med">ark-react-log (an react library) </span> </h1>
    <div className="container clearfix">
      <div className="people-list" id="people-list">
        <div className="search">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <ul className="list">
          <li className="clearfix hand-sig" onClick={(evt) => { [...document.getElementsByClassName('chat')].forEach(t => t.style.display = 'none'); introEl.contain.current.style.display = ''; }}>
            <img src={rdev} alt="avatar" width="60" />
            <div className="about">
              <div className="name">Introduction</div>
              <div className="status">
                <i className="fa fa-circle online"></i> What is it?
            </div>
            </div>
          </li>

          <li className="clearfix hand-sig" onClick={(evt) => { [...document.getElementsByClassName('chat')].forEach(t => t.style.display = 'none'); getStartEl.contain.current.style.display = ''; }}>
            <img src={rdev} width="60" alt="avatar" />
            <div className="about">
              <div className="name">Getting Started</div>
              <div className="status">
                <i className="fa fa-circle online"></i> Setup & installation
            </div>
            </div>
          </li>

          <li className="clearfix hand-sig" onClick={(evt) => { [...document.getElementsByClassName('chat')].forEach(t => t.style.display = 'none'); usageEl.contain.current.style.display = ''; }}>
            <img src={rdev} width="60" alt="avatar" />
            <div className="about">
              <div className="name">Usage</div>
              <div className="status">
                <i className="fa fa-circle online"></i> Api
            </div>
            </div>
          </li>

          <li className="clearfix hand-sig" onClick={(evt) => { [...document.getElementsByClassName('chat')].forEach(t => t.style.display = 'none'); usageEl.contain.current.style.display = ''; }}>
            <img src={rdev} width="60" alt="avatar" />
            <div className="about">
              <div className="name">Demo</div>
              <div className="status">
                <i className="fa fa-circle online"></i> Demo Link
            </div>
            </div>
          </li>

          <li className="clearfix hand-sig">
            <img src={rdev} width="60" alt="avatar" />
            <div className="about">
              <div className="name">FAQ</div>
              <div className="status">
                <i className="fa fa-circle online"></i> Q&A
            </div>
            </div>
          </li>

          <li className="clearfix hand-sig">
            <img src={rdev} width="60" alt="avatar" />
            <div className="about">
              <div className="name">Compatibility</div>
              <div className="status">
                <i className="fa fa-circle online"></i> Browser compatibility
            </div>
            </div>
          </li>

          <li className="clearfix hand-sig">
            <img src={rdev} width="60" alt="avatar" />
            <div className="about">
              <div className="name">QA</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> Tests/Benchmarks
            </div>
            </div>
          </li>

        </ul>
      </div>

      <div ref={introEl.contain} className="chat">
        <div className="chat-header clearfix">
          <img src="https://immanuel.co/about/immi_c1.png" alt="avatar" width="50" />

          <div className="chat-about">
            <div className="chat-with">Introduction</div>
            <div className="chat-num-messages">ArkBot (The Assistant)</div>
          </div>
          <i className="fa fa-star" style={{ display: "none" }}></i>
        </div>

        <div className="chat-history">
          <ul>
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Developer</span> <i className="fa fa-circle me"></i>

              </div>
              <div className="message other-message float-right">
                Hi ArkBot, what is this library for?
            </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> ArkBot (The Assitance)</span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message" style={{ fontStyle: "italic" }}>
                This is a simple library for developers to log the content in developer console with right color enhancement.
                <br /><br />
                <img src={csle} alt="console img" width="600" />
              </div>
            </li>

            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Developer</span> <i className="fa fa-circle me"></i>

              </div>
              <div className="message other-message float-right">
                What is the benefit for me as a developer making this console logs?
            </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> ArkBot (The Assitance)</span>
                <span className="message-data-time">10:20 AM, Today</span>
              </div>
              <div className="message my-message">
                - Color spec for each log type <br />
                - Clear timestamp is captured <br />
                - Tag based distinction <br />
                - Clear timestamp is captured <br />
                - Other several formatting supports
            </div>
            </li>
          </ul>
        </div>
        <div className="chat-message clearfix hidden">
          <textarea ref={introEl.txtmsg} name="message-to-send" id="message-to-send" placeholder="Type your message" rows="1"></textarea>
          <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i>
          <button ref={introEl.txtbtn}>Send To Support</button>
        </div>
      </div>

      <div ref={getStartEl.contain} className="chat" style={{ display: "none" }}>
        <div className="chat-header clearfix">
          <img src="https://immanuel.co/about/immi_c1.png" alt="avatar" width="50" />

          <div className="chat-about">
            <div className="chat-with">Getting Started</div>
            <div className="chat-num-messages">ArkBot (The Helper)</div>
          </div>
          <i className="fa fa-star" style={{ display: "none" }}></i>
        </div>

        <div className="chat-history">
          <ul>
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Developer</span> <i className="fa fa-circle me"></i>

              </div>
              <div className="message other-message float-right">
                How do I install this library?
            </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> ArkBot (The Assitance)</span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message" style={{ fontStyle: "italic", width: "80%" }}>
                <div className="precode">
                  npm package:<br /><br />
                  <code className='npm-code'>
                    npm i ark-react-log --save
                  </code>
                  <button onClick={(evt) => copyNpm(evt)}>
                    <i className="fa fa-clone" aria-hidden="true"></i>
                  </button>
                </div>
                <br /><br />
                <div className="precode">
                  browser script:<br /><br />
                  <code className='jss-code'>
                    &lt;script src="https://cdn.jsdelivr.net/npm/ark-js-log@latest/ark-log.js"&gt;&lt;/script&gt;
                  </code>
                  <button onClick={(evt) => copyJs(evt)}>
                    <i className="fa fa-clone" aria-hidden="true"></i>
                  </button>
                </div>
                <br /><br />
              </div>
            </li>

            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Developer</span> <i className="fa fa-circle me"></i>

              </div>
              <div className="message other-message float-right">
                What are the platform is supported?
            </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> ArkBot (The Assitance)</span>
                <span className="message-data-time">10:20 AM, Today</span>
              </div>
              <div className="message my-message">
                - React Js <br />
                - Vanilla JS (browser) <br />
            </div>
            </li>
          </ul>
        </div>
        <div className="chat-message clearfix hidden">
          <textarea ref={getStartEl.txtmsg} name="message-to-send" id="message-to-send" placeholder="Type your message" rows="1"></textarea>
          <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i>
          <button ref={getStartEl.txtbtn}>Send To Support</button>
        </div>
      </div>

      <div ref={usageEl.contain} className="chat" style={{ display: "none" }}>
        <div className="chat-header clearfix">
          <img src="https://immanuel.co/about/immi_c1.png" alt="avatar" width="50" />

          <div className="chat-about">
            <div className="chat-with">Getting Started</div>
            <div className="chat-num-messages">ArkBot (The Helper)</div>
          </div>
          <i className="fa fa-star" style={{ display: "none" }}></i>
        </div>

        <div className="chat-history">
          <ul>
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Developer</span> <i className="fa fa-circle me"></i>

              </div>
              <div className="message other-message float-right">
                Ok, now that I have installed the library how do I import this to the react component?
            </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> ArkBot (The Assitance)</span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message" style={{ fontStyle: "italic", width: "80%" }}>
                <div className="precode">
                  import package:<br /><br />
                  <code className='npm-code'>
                    {"import {ArkLog} from 'ark-react-log'"}
                  </code>
                  <button onClick={(evt) => copyNpm(evt)}>
                    <i className="fa fa-clone" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </li>

            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Developer</span> <i className="fa fa-circle me"></i>

              </div>
              <div className="message other-message float-right">
                How many types of logs were possible?
            </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> ArkBot (The Assitance)</span>
                <span className="message-data-time">10:20 AM, Today</span>
              </div>
              <div className="message my-message">
                - Info <br />
                - Warn <br />
                - Error <br />
              </div>
            </li>

            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Developer</span> <i className="fa fa-circle me"></i>

              </div>
              <div className="message other-message float-right">
                Walk me thru how to use each Log type?
            </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> ArkBot (The Assitance)</span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message" style={{ fontStyle: "italic", width: "80%" }}>
                <div className="precode">
                  Log Info Message without Tag:<br /><br />
                  <code className='npm-code'>
                    {"ArkLog('Lord Jesus my Protector').log()"}
                  </code>
                  <button onClick={(evt) => copyNpm(evt)}>
                    <i className="fa fa-clone" aria-hidden="true"></i>
                  </button>
                </div> <br />
                Output: with default Tag - 'ArkLog Tag' as below <br /><br />
                <img src={log_def_tag} alt='console img' />
              </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> ArkBot (The Assitance)</span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message" style={{ fontStyle: "italic", width: "80%" }}>
                <div className="precode">
                  Log Info Message with Tag:<br /><br />
                  <code className='npm-code'>
                    {"ArkLog('Lord Jesus', 'Lord Jesus my Protector').log()"}
                  </code>
                  <button onClick={(evt) => copyNpm(evt)}>
                    <i className="fa fa-clone" aria-hidden="true"></i>
                  </button>
                </div> <br />
                Output: with provided Tag - 'Lord Jesus' as below, the only maximum length of Tag is 10 chars <br /><br />
                <img src={log_with_tag} alt='console img' />
              </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> ArkBot (The Assitance)</span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message" style={{ fontStyle: "italic", width: "80%" }}>
                <div className="precode">
                  Log Error Message with Tag:<br /><br />
                  <code className='npm-code'>
                    {"ArkLog('Lord Jesus', 'Almost SAVED is Totally Lost').error()"}
                  </code>
                  <button onClick={(evt) => copyNpm(evt)}>
                    <i className="fa fa-clone" aria-hidden="true"></i>
                  </button>
                </div> <br />
                Output: with provided Tag - 'Lord Jesus' as below, the only maximum length of Tag is 10 chars <br /><br />
                <img src={err_with_tag} alt='console img' />
              </div>
            </li>
          </ul>
        </div>
        <div className="chat-message clearfix hidden">
          <textarea ref={usageEl.txtmsg} name="message-to-send" id="message-to-send" placeholder="Type your message" rows="1"></textarea>
          <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i>
          <button ref={usageEl.txtbtn}>Send To Support</button>
        </div>
      </div>
    </div>
    {ArkLog('Lord Jesus my Protector').log()}
    {ArkLog('Lord Jesus', 'Lord Jesus my Protector').log()}

    {ArkLog('Almost SAVED is Totally Lost').error()}
    {ArkLog('Lord Jesus', 'Almost SAVED is Totally Lost').error()}
  </div>
}

export default App
