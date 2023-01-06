<template>
  <div class="py-8">
    <h1 class="text-center font-bold text-3xl">Informations</h1>
    <div>

      <div class="grid grid-cols-2 gap-2 mt-6">

        <div class="px-8">
          <div @click="what = !what"
            class="border border-black px-4 py-2 flex items-center justify-between cursor-pointer">
            <h3 class="text-xl font-bold text-cyan-700">What is tailwind ?</h3>
            <span class="duration-500" :class="{ 'rotate-90': !what, '-rotate-90': what }">></span>
          </div>

          <!-- <div class="overflow-hidden" :class="{ 'h-0': !what, 'h-fit': what }"> -->
            <span class="block-hidden" :class="{ 'hidden': !what}">

            <p class="mt-5"> Tailwid is a CSS framework. A framework is an organized work environnement. This environnement is
              composed of librairies that help to facilitate the CSS use.<br>
              Moreover tailwind is an open source framework thus, people can bring their own contribution in the code
              editing by adding their improvements. <br><br></p>


            <p>Tailwind is a great framework to use for many reason : </p>
            <ul class="list-disc pl-8">
              <li>Saving time</li>
              <li>Easier than classic CSS</li>
              <li> Easy to maintain. In case of errors, we can find quickly where is the error and fix it</li>
            </ul>

            <p>However as all good things, Tailwind CSS has some cons : </p>

            <ul class="list-disc pl-8">
              <li>CSS basics knowledges are essential before strating Tailwind CSS </li>
              <li>It is necessary to create all the composant from 0 since all CSS styles are default removed </li>
              <li>CSS and HTML languages are mixed which could return a code that looks unorganized</li>
            </ul>
          </span>

        </div>

        <div class="px-8">
          <div @click="how = !how"
            class="border border-black px-4 py-2 flex items-center justify-between cursor-pointer">
            <h3 class="text-xl font-bold text-cyan-700">How to install tailwind ?</h3>
            <span class="duration-500" :class="{ 'rotate-90': !how, '-rotate-90': how }">></span>
          </div>
          <span class="block" :class="{ 'hidden': !how } ">
            <ol class="list-decimal mt-5 ml-8">
              <li>Install node js. Node(node js, allows to launch js serveur whereas npm allows install js librairies).</li>
              <li>Open a terminal and look for the place where <strong>index.html</strong> has been created</li>
              <li> Now you need to configurate your project ! In order to do that you have to write in your terminal the
                following command : <strong>npm init -y</strong> </li>
              <li> Install tailwind thanks to the following command :<strong>npm install -D tailwindcss</strong> </li>
              <li>Create the file : <strong>tailwind.config.js</strong>. This file will be modified : npx tailwindcss</li>
              <li> In the "content" part, add the name of the html file which will be used for the project. You will
                call
                it <strong>“./index.html”</strong>.</li>
              <li> Create a source field named <strong>"src"</strong>. In this file, create a file style.css. Inside the style.css file,
                write : <ul class="font-bold ml-10">
                  <li>@tailwind base;</li>
                  <li>@tailwind components;</li>
                  <li>@tailwind utilities;</li>
                </ul>
                 </li>
              <li>Lanch the build code: npx tailwindcss <strong> -i ./src/input.css -o ./dist/output.css --watch</strong>  <br> --watch
                indicate the file while be followed in order to launch the build code at each modifications observed in
                this file.
              </li>
              <li>In the file <strong>index.html</strong>, add a line in order to upload the new file to your project : <br>
                <strong>&lt link href="./dist/style.css" rel="stylesheet" &gt</strong>
              </li>
            </ol>
            <h3 class="italic text-center mt-8">Great you have been installed tailwind !</h3>
          </span>
        </div>


        <div class="px-8">
          <h3 class="text-xl font-bold text-cyan-700">Where to find documentation ?</h3>
          <ol>
            <li> <a href="https://flowbite.com/" class="text-blue-600 visited:text-purple-600">Flowbrite </a> </li>
            <li> <a href="https://tailwindcss.com/" class="text-blue-600 visited:text-purple-600 ...">Tailwind css</a>
            </li>
            <li> <a href="https://v2.tailwindcss.com/" class="text-blue-600 visited:text-purple-600"> Tailwind v2</a>
            </li>
            <li> <a href="https://tailwindcss.com/docs/customizing-colors" class="text-blue-600 visited:text-purple-600"> Color palette</a>
            </li>
          </ol>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue';

export default {
  name: "Informations",
  components: { h },
  data() {
    return {
      what: false,
      how: false,
    }

  }
}
</script>

<style scoped>

</style>