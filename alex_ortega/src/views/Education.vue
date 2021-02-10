<template>
  <div>
    <hero-bar>
      <h1>Education</h1>
      <hr class="title" width="300px" />
    </hero-bar>
    <div class="box">
      <h2>The University of Texas at El Paso</h2>
      <hr width="300px" align="center" />

      <p align="left" class="ident">
        Pursuing a Bachelor's Degree in Computer Science with a Concentration in
        Software Engineering. All the courses have been rewarding thus far. The
        science behind computer components are complex but understanding the
        logic and the structuring helps understand designs.
        <ul>
          <li>Software Engineering 1 & 2</li>
          <li>Software Integration and V&V</li>
          <li>Software Construction</li>
          <li>Object-Oriented Programming</li>
          <li>Computer Networks</li>
          <li>Programming Languages</li>
        </ul>
        </p>
    </div>
    <br />
    <div class="box">
      <h2>El Paso Community College</h2>
      <hr width="300px" align="center" />

      <p align="left" class="ident">
        Early in my college career I had begun to grow interest in computer
        science because I had a great professor that would motivate and insipire
        through the lectures and assignments.
        <ul>
              <li>Data Structures and Algorithms</li>
              <li>Discrete Mathematics</li>
              <li>Machine Language</li>
              <li>Calculus 1 & 2</li>
            </ul>
      </p>
    </div>
  </div>
</template>

<script>
import HeroBar from "@/components/HeroBar";
export default {
  components: { HeroBar },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
