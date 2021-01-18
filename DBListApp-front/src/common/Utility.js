/*
 * 汎用的な処理を定義
 */

export default {
  /* 計算可能な数値ならばtrue */
  isNumber(p) {
    return typeof p === 'number' && isFinite(p);
  }
};
