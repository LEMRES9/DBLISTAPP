<!-- データ表示画面-->
<template>
  <v-container class="DomainList app-back pa-0" fluid>
    <v-col align="center" class="pt-9 content-area">
      <div class="mt-7">
        <strong class="white--text font-weight-bold display-2">LOGO</strong>
      </div>

      <p class="white--text caption mt-3 mb-16">
        test
      </p>

      <!-- データ表示 -->
        <v-card width="1000px" class="mx-auto pt-0">
          <v-card-title>
            <h1 class="display-1">DB LIST</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              
              <v-card-title>
                Nutrition
                <v-spacer></v-spacer>
                  <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
              ></v-data-table>

              <v-card-actions>
              <v-btn class="info"
              router-link
              to="/" >ログイン画面へ</v-btn>
              </v-card-actions>
              

            </v-form>
          </v-card-text>
        </v-card>
      

    </v-col>
  </v-container>
</template>

<script>
import util from '../common/Utility';

export default {
  //データベースから取得したデータを表示するデータテーブル。とりあえず今はベタ打ち

  data () {
      return {
        search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },


  created() {
  },
  computed: {
  },
  methods: {
    // 受け取った配列をn個ずつに分けた配列を返す
    divideArrIntoPieces(ary, n) {
      if (!(Array.isArray(ary) || util.isNumber(n))) {
        throw new Error('divideArrIntoPieces(ary, n)： パラメータが不正です')
      }

      const aryList = [];
      const idx = 0;
      while(idx < ary.length) {
        aryList.push(ary.splice(idx, idx+n));
      }
      return aryList;
    }
  }
};
</script>


<style lang="scss" scoped>
.app-back {
  background-color: #013f35;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
}

.domain-card-row {
    width: 50%;
}

.domain-name {
    font-size: 1em;
}

.history-area {
  width: 60%;
  .layout {
    height: 20vh;
    .flex {
      overflow: auto;
      .history-tabele {
        width: 100%;
        .history-tabele-cell {
          width: 15%;
          text-align: center;
        }
      }
    }
  }
}

.font-gray {
  color: #bbb;
}
</style>