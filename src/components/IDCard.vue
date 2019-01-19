<template>
    <div class="hola-columns-item">
        <div class="hola-card id-card">
            <div class="id-card__avatar">
                <img :src="info.avatar">
            </div>
            <div class="id-card__info">
                <div class="info__item" v-for="(val, key, index) in info" :key="index">
                    <template v-if="key !== 'avatar'">
                        <span class="info__item--key">{{ key }}: </span>
                        <span class="info__item--value" v-if="key.toLowerCase() !== 'github'">{{ val }}</span>
                        <a v-else class="info__item--value" :href="val">{{ val }}</a>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    info: {
      default: () => ({}),
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.id-card {
    .id-card__avatar {
      margin: 0 0 2rem 0;
      text-align: center;

      img {
        display: inline-block;
        width: 30%;
        border-radius: 14vw;
        overflow: hidden;
        border: 1px solid #dfdfdf;
      }
    }

    .id-card__info {
        .info__item {
            margin: 0.5rem 0;
            .info__item--key {
                font-weight: bold;
                font-size: 1rem;
            }
        }
    }
}
</style>
