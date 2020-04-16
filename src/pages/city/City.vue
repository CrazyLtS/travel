<template>
<div>
  <city-header></city-header>
  <city-search :cities="cities"></city-search>
  <city-list
  :cities="cities"
  :hotcities="hotCities"
  :letter="letter"
  ></city-list>
  <city-alphabet
  :cities="cities"
  @change="handleLetterChange"
  ></city-alphabet>
</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import CityAlphabet from './component/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.headerGetCityInfoSucc)
    },
    headerGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
