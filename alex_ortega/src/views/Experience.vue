<template>
  <div>
    <hero-bar>
      <h1>Experience</h1>
      <hr class="title" width="300px" />
    </hero-bar>
    <div class="box">
      To request a resume, please send me an email. My contact information will
      be found in the Bio page under my Contact Card.
    </div>
    <br />
    <div class="box">
      <h2>Portfolio Website</h2>
      <hr width="300px" align="center" />

      <p align="left"></p>
      <ul>
        <li>
          Single Page Application to build a simple and functional web
          application<br />
        </li>
        <li>
          Implemented the web application using the progressive Vue Framework
          and CSS for the frontend<br />
        </li>
        <li>
          Launched web application to a web hosting provider and assigned a
          relevant domain name<br />
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
          Captured the client’s requirements to ensure the correct product was
          delivered<br />
        </li>
        <li>
          Collaborated in a team of five members to build a web application for
          the Department of Defense<br />
        </li>
        <li>
          Fulfilled the responsibility of a Systems Architect by verifying and
          collecting the change request forms<br />
        </li>
        <li>
          Designed and implemented a full stack web application covering the
          client side and the server side<br />
        </li>
        <li>
          Presented the web application to the clients to verify that the
          requirements were met<br />
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
          Cucumber Testing Tool<br />
        </li>
        <li>
          Implemented and analyzed rules written in the programming language,
          Gosu<br />
        </li>
      </ul>
    </div>
    <br />
    <div class="box">
      <h2>Fred Loya Insurance</h2>
      <hr width="300px" align="center" />
      <p align="left">
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
              Attend weekly meetings to stay up to date and to discuss pending
              projects
            </li>
            <li>
              Provide assistance for users in more than 500 offices around the
              company to ensure that customers received great service without
              delays
            </li>
            <li>
              Install appropiate software and network printers in the computers
            </li>
            <li>Configure new equipment and devices that had arrived</li>
            <li>
              Our responsibility was to create and issue tickets that would be
              escalated to the corresponding department
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
              Verify that equipment in the call centers and offices were
              properly working and workstations had the correct configuration
            </li>
            <li>
              In some ocassions it was needed for us to travel out of town to
              aid offices and other call centers
            </li>
            <li>
              Had the opportunity to implement a printer and workstation scheme
              for the equipment in a new call center
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
              to replace
            </li>
            <li>
              Create shipping labels and ship new equipment for new offices
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
              Provide temporary laptops and equipment with the correct software,
              promptly
            </li>
            <li>
              Keep track of the laptop inventory using the proper scheme through
              the asset system
            </li>
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
        <button class="button green" @click="$refs.modalName02.openModal()">
          List of Skills</button
        ><br />
        <modal ref="modalName02">
          <template v-slot:header>
            <ul>
              <li>Java (5 years)<br /></li>
              <li>C (2 years)<br /></li>
              <li>Python (1 year)<br /></li>
              <li>Javascript (1 year)<br /></li>
              <li>GitHub<br /></li>
              <li>GitBash<br /></li>
              <li>Visual Studio Code<br /></li>
              <li>Jira Project Tracking Software<br /></li>
              <li>FileZilla<br /></li>
              <li>Cucumber Testing Tool<br /></li>
            </ul>
            <div>
              <button
                class="button red"
                @click="$refs.modalName02.closeModal()"
              >
                Close
              </button>
            </div>
          </template>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import HeroBar from "@/components/HeroBar";
export default {
  components: { Modal, HeroBar }
};
</script>
<style scoped>
.two {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>
