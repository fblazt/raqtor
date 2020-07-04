<template>
  <div class="h-screen flex flex-col justify-evenly text-white">
    <AppTitle title="Custom Quote"></AppTitle>
    <div id="category-selection" class="mt-5 flex flex-col justify-center items-center">
      <p class="text-2xl">Select quote category 💬</p>
      <div class="mt-5 flex flex-row">
        <div class="m-1">
          <input type="radio" name="category" id="romance" value="0" v-model="category">
          <label for="romance" class="ml-2">Romance</label>
        </div>
        <div class="m-1">
          <input type="radio" name="category" id="motivation" value="1" v-model="category">
          <label for="motivation" class="ml-2">Motivation</label>
        </div>
      </div>
    </div>
    <div id="total-quote" class="mt-5 flex flex-col justify-center items-center">
      <p class="text-2xl">How many quotes do you want? 📃</p>
      <span class="mt-5 flex flex-row justify-center items-center">
        <input type="range" min="1" max="5" v-model="totalQuote" class="mx-1">
        <p class="mx-1 text-lg text-blue-200 font-bold">{{ totalQuote }}</p>
      </span>
    </div>
    <div class="mt-5 flex flex-col justify-center items-center">
      <div v-show="category === null">
        <p class="text-red-500 text-lg">
          {{ noQuotes }}
        </p>
      </div>
      <div v-for="item in quoteResult" :key="item.id">
        <p class="w-screen text-center my-1 px-4 py-4 bg-teal-800">
          {{ item }}
        </p>
      </div>
    </div>
    <div class="my-3 flex flex-col justify-center items-center">
      <button @click="generateCustomQuote(allQuotes[category], totalQuote)" type="button" :class="category === null ? 'bg-blue-500 text-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'" class="px-3 py-2 rounded-md">Generate Quote! 🔀</button>
    </div>
    <div class="fixed bottom-0 ml-5 mb-5">
      <router-link to="/">
        <p class="px-4 text-6xl bg-blue-700 leading-none rounded-full">
          «
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue'

export default {
  name: 'CustomQuote',
  data() {
    return {
      totalQuote: 1,
      category: null,
      quoteResult: null,
      noQuotes: null,
      allQuotes: [
        [
          [
            'I love you',
            'Hey dear',
            'My love'
          ],
          [
            'You are the only one',
            'You are the cutest person',
            'I like spending my time with you'
          ],
          [
            'You are everything',
            'You always make me happy',
            'I really happy to be with you'
          ]
        ],
        [
          [
            'Stay focus',
            'Believe in yourself',
            'Act naturally'
          ],
          [
            'Ignore the lie',
            'Trust the process',
            'Work harder'
          ],
          [
            'Achieve your goal',
            'Don\'t forget to smile',
            'Never give up'
          ]
        ]
      ]
    }
  },
  components: {
    AppTitle
  },
  methods: {
    generateCustomQuote(collectionArr, totalQuote) {
      if (this.category === null) {
        this.noQuotes = 'Select category first!'
      } else {
        let quotes = [];
  
        let randomQuoteGenerator = (sentences) => {
          let firstSentenceQuote = sentences[0][Math.floor(Math.random() * sentences[0].length)];
          let secondSentenceQuote = sentences[1][Math.floor(Math.random() * sentences[1].length)];
          let thirdSentenceQuote = sentences[2][Math.floor(Math.random() * sentences[2].length)];
  
          let finalQuote = `"${firstSentenceQuote}, ${secondSentenceQuote}, ${thirdSentenceQuote}."`;
  
          return finalQuote;
        }
  
        for (let index = 0; index < totalQuote; index++) {
          quotes.push(randomQuoteGenerator(collectionArr));
        }
  
        this.quoteResult = quotes;
      }
    }
  }
}
</script>

