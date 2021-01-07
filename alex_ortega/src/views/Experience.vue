<template>
  <div>
    <hero-bar>
      <h1>Experience</h1>
    </hero-bar>
    <h2>Fred Loya Insurance</h2>
    <hr width="300px" align="left" />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
      asperiores aut quam dolores repudiandae est omnis maiores recusandae
      dignissimos commodi, enim assumenda, laboriosam, aspernatur odio voluptas
      mollitia explicabo illum debitis.
    </p>
    <dl>
      <dt>
        <h3>Helpdesk</h3>
      </dt>

      <dd>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          deleniti, nulla incidunt rem at ad reiciendis delectus. Consequatur
          nobis iusto corrupti esse quaerat nisi, molestias quae unde sapiente
          totam amet.
        </p>
      </dd>

      <dt>
        <h3>Repair Unit Technician</h3>
      </dt>

      <dd>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          deleniti, nulla incidunt rem at ad reiciendis delectus. Consequatur
          nobis iusto corrupti esse quaerat nisi, molestias quae unde sapiente
          totam amet.
        </p>
      </dd>

      <dt>
        <h3>Laptop Repair Technician</h3>
      </dt>

      <dd>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          deleniti, nulla incidunt rem at ad reiciendis delectus. Consequatur
          nobis iusto corrupti esse quaerat nisi, molestias quae unde sapiente
          totam amet.
        </p>
      </dd>

      <dt>
        <h3>DVR Administrator</h3>
      </dt>

      <dd>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          deleniti, nulla incidunt rem at ad reiciendis delectus. Consequatur
          nobis iusto corrupti esse quaerat nisi, molestias quae unde sapiente
          totam amet.
        </p>
      </dd>
    </dl>

    <h2>University of Texas at El Paso Capstone Project</h2>
    <hr width="300px" align="left" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum atque
      velit ullam aliquam rem quis iure provident autem. Laborum ducimus
      deleniti excepturi ratione necessitatibus dolorem officiis quaerat officia
      odit.
    </p>

    <h2>Fred Loya Insurance Software Engineering Internship</h2>
    <hr width="300px" align="left" />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nostrum
      rem atque sint distinctio sequi, quo suscipit quaerat amet est expedita
      asperiores error facere aspernatur minima aliquam voluptatem libero odit!
    </p>

    <h2>Other Interesting Skils</h2>
    <hr width="300px" align="left" />

    <p></p>
    <dl>
      <dt>Skills</dt>
      <dd>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
        blanditiis! Eaque in alias culpa animi numquam natus quo dolorum ut
        quibusdam nisi! Provident ad consequatur numquam maiores vero minus
        libero.
      </dd>
    </dl>
  </div>
</template>

<script>
import HeroBar from "@/components/HeroBar";
export default {
  components: { HeroBar },
  computed: {
    heroRouterLinkTo() {
      return "/";
    },
    heroRouterLinkLabel() {
      return "Back";
    }
  }
};
</script>

<style scoped>
div {
  max-width: 600px;
  min-width: 100px;
}
</style>
