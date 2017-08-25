import React from 'react';

const MemberResources = () => (
  <div>
    <div>
      <h2>New Members</h2>
      <ul>
        <li>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc92b32sfo011b8I-QiP7GtWSA2prQ0UPSmn6LxXb6wdpjtQg/viewform">
            Members Form
          </a>
          {" "}
          - please fill this out so we know what you are interested in (you can update it later too!)
        </li>
        <li><a href="http://www.codefordenver.org/WantToHelp">New Member Overview</a></li>
      </ul>
      <h3>Tools</h3>
      <ul>
        <li>
          SparkTime
          <ul>
            <li>
              Text
              {" "}
              <em>“In with Code for Denver”</em>
              {" "}
              to
              {" "}
              <strong>929-244-4357</strong>
              {" "}
              to record your volunteer time
            </li>
            <li>Text <em>"out"</em> at the end of your shift</li>
          </ul>
        </li>
        <li><a href="https://github.com/codefordenver">GitHub</a></li>
        <li>
          <a href="https://www.flowdock.com/app/cfa-brigades/code-for-denver">
            Flowdock
          </a>
        </li>
      </ul>
      <h3>Other Links</h3>
      <ul>
        <li>
          <a href="https://github.com/codefordenver/codeofconduct">
            Code of Conduct
          </a>
        </li>
        <li><a href="http://www.codefordenver.org/WantToLearn">Resources for learning</a></li>
        <li><a href="http://www.codefordenver.org/WorkWithUs">Project Pitch Guidelines</a></li>
      </ul>
    </div>
    <h2>Google Drive</h2>
    <div className="text-center">
      <iframe
        title="google-drive"
        src="https://drive.google.com/embeddedfolderview?id=0B15HLk4_JV3nWjkyOGtFUmhKZDQ#list"
        width="100%"
        height="600"
        frameBorder="0"
      />
    </div>
  </div>
);

export default MemberResources;
