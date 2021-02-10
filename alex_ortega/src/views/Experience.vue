<template>
  <div>
    <hero-bar>
      <h1>Experience</h1>
      <hr class="title" width="300px" />
    </hero-bar>
    <div class="box">
      To request a resume, please send me an email. My contact information will
      be found in the Home page under my Contact Card.
    </div>
    <br />
    <div class="box">
      <h2>Portfolio Website</h2>
      <hr width="300px" align="center" />

      <p align="left"></p>
      <ul>
        <li>
          Understand Single Page Application to build a simple and functional
          web application<br />
        </li>
        <li>
          Implemented the web application using the progressive Vue Framework
          and CSS for styling<br />
        </li>
        <li>
          Launched the web application after assigning a relevant domain name
          and by uploading the source code to DreamHost using FileZilla<br />
        </li>
      </ul>
      <div align="left">
        <a
          href="https://github.com/alxrtega/AlexOrtegaPersonalWebsite"
          target="_blank"
          rel="noopener"
          class="dark gray"
        >
          Source Code
        </a>
      </div>
    </div>
    <br />
    <div class="box">
      <h2>University of Texas at El Paso<br />Capstone Project</h2>
      <hr width="300px" align="center" />

      <p align="left"></p>
      <ul>
        <li>
          Collaborated in a team of five members to build a web application for
          the Department of Defense<br />
        </li>
        <li>
          Captured the client’s requirements to ensure the correct product was
          delivered<br />
        </li>
        <li>
          Fulfilled the responsibility of a Systems Architect by verifying and
          collecting the change request forms<br />
        </li>
        <li>
          Designed and implemented a full stack web application using the Vue
          Framework for the client side and MongoDB for server side<br />
        </li>
      </ul>
    </div>
    <br />
    <div class="box">
      <h2>Fred Loya Insurance<br />Web Developer Internship</h2>
      <hr width="300px" align="center" />

      <p align="left"></p>
      <ul>
        <li>
          Learned the complete life cycle of claims and understood the
          requirements of each department<br />
        </li>
        <li>
          Researched Behavior Driven Development in depth and understood the
          purpose of Gherkin and the Cucumber Testing Tool<br />
        </li>
        <li>
          Analyzed and implemented policy rules written in Gosu, a programming
          language that runs in the Java Virtual Machine<br />
        </li>
        <li>
          Identified the cause that was impeding Cucumber from integrating with
          the Guidewire platform<br />
        </li>
        <li>
          Experienced work outside of school in a self-managed environment and
          communicated any doubts<br />
        </li>
      </ul>
    </div>
    <br />
    <div class="box">
      <h2>Fred Loya Insurance</h2>
      <hr width="300px" align="center" />
      <p align="left" class="ident">
        I was fortunate enough to start working in the IT department for Fred
        Loya Insurance at a young age. Throughout my career I was able to learn
        from many talented individuals and refine my skills as an IT
        professional. I had the privilege to be part of this department for
        nearly a decade.
      </p>
      <ul>
        <li>
          <h3>Helpdesk Technician</h3>
          <ul>
            <li>
              Attended weekly meetings to stay up to date and to discuss pending
              projects
            </li>
            <li>
              Collaborated with the whole team through Microsoft Teams and we
              would brainstorm solutions and share new troubleshooting ideas
            </li>
            <li>
              Provided assistance for users in more than 500 offices around the
              company to ensure that customers received great service without
              delays
            </li>
            <li>
              Installed appropiate software and configured network printers
            </li>
            <li>
              Was responsible to create and issue tickets, some of the tickets
              would be escalated to the corresponding department
            </li>
            <li>
              Report network outages to the corresponding ISP and escalate
              tickets, if possible the equipment would undergo through
              troubleshooting steps
            </li>
          </ul>
        </li>
        <li>
          <h3>Support Technician</h3>
          <ul>
            <li>
              Priviledged to work out of town to complete projects to aid
              offices and other call centers
            </li>
            <li>
              Verify that equipment in the call centers and offices were
              properly working and workstations had the correct configuration
            </li>
            <li>
              Had the opportunity to implement workstation and printer scheme in
              a new call center
            </li>
          </ul>
        </li>
        <li>
          <h3>Repair Unit Technician</h3>
          <ul>
            <li>
              Image computers and load the correct programs in the computers
            </li>
            <li>
              Have equipment such as keyboards, computer mice and monitors ready
              for replacement
            </li>
            <li>
              Create shipping labels and ship new equipment to new offices
            </li>
            <li>
              Worked alongside other technicians to deliver equipment in a
              timely manner
            </li>
          </ul>
        </li>
        <li>
          <h3>Laptop Repair Technician</h3>
          <ul>
            <li>
              Responsible to maintain laptops in good conditions with the latest
              software updates and working hardware
            </li>
            <li>Troubleshoot laptop issues the users had and find solutions</li>
            <li>
              Provide temporary laptops and equipment with the correct software
            </li>
            <li>
              Keep track of the laptops and wireless devices inventory using the
              proper scheme through the asset system
            </li>
            <li>Provide inventory reports to request new equipment</li>
          </ul>
        </li>
        <li>
          <h3>DVR Administrator</h3>
          <ul>
            <li>
              Footage would be requested by managers with specific times and
              dates
            </li>
            <li>
              Have the correct footage immediately and delivered in a secure
              manner
            </li>
            <li>
              Verify that that the survaillance equipment such as the cameras
              and DVRs were working properly
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <br />
    <div class="box">
      <h2>Techinical Skills</h2>
      <hr width="300px" align="center" />
      <div align="left">
        <ul class="two">
          <li>Java<br /></li>
          <li>C<br /></li>
          <li>Python<br /></li>
          <li>Javascript<br /></li>
          <li>MongoDB</li>
          <li>GitHub<br /></li>
          <li>GitBash<br /></li>
          <li>VS Code<br /></li>
          <li>Jira Project Tracking Software<br /></li>
          <li>FileZilla<br /></li>
          <li>Cucumber Testing Tool<br /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBar from "@/components/HeroBar";
export default {
  components: { HeroBar }
};
</script>
<style scoped>
.two {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>
