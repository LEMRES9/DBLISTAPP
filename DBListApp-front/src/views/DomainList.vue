<!-- メインメニュー-->
<template>
  <v-container class="DomainList app-back pa-0" fluid>
    <v-col align="center" class="pt-9 content-area">
      <div class="mt-7">
        <strong class="white--text font-weight-bold display-2">LOGO</strong>
      </div>

      <p class="white--text caption mt-3 mb-16">
        test
      </p>
      <!-- ログイン情報入力 -->
      
        <v-card width="400px" class="mx-auto mt-5">
          <v-card-title>
            <h1 class="display-1">ログイン</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" />
              <v-text-field 
              v-bind:type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              append-icon="mdi-eye-off"
              label="パスワード"
              @click:append="showPassword = !showPassword" />
              <v-card-actions>
              <v-btn class="info" >ログイン</v-btn>
              </v-card-actions>
              <v-card-actions>
              <v-btn class="info"
              router-link
              to="/DbList" >DBリストへ</v-btn>
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
  name: 'App',
  data: () => ({
    showPassword : false
  }),

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
  background-color: #070a33;
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
