<template>
  <div class="container">
    <div v-if="items" v-for="item in items" :key="item.id" class="card">
      <div class="card__left">
        <img :src="item.img" alt="Product image" />
        <div class="content">
          <div class="types">{{ item.type }}</div>
          <div class="content__title">{{ item.title }}</div>
          <div class="address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 14.5C7.5 14.5 12.5 9.40909 12.5 5.59091C12.5 2.66213 10.2614 0.5 7.5 0.5C4.73858 0.5 2.5 2.66213 2.5 5.59091C2.5 9.40909 7.5 14.5 7.5 14.5ZM7.49979 7.86848C8.68326 7.86848 9.64265 6.87879 9.64265 5.65795C9.64265 4.43711 8.68326 3.44743 7.49979 3.44743C6.31632 3.44743 5.35693 4.43711 5.35693 5.65795C5.35693 6.87879 6.31632 7.86848 7.49979 7.86848Z"
                fill="#969DC3"
              /></svg
            >{{ item.address }}
          </div>
          <div class="horis__group">
            <span class="title">Продавец</span> <span>{{ item.seller }}</span>
          </div>
          <div class="vert__group">
            <span class="title">Вид товара</span>
            <span>{{ item.productType }}</span>
          </div>
          <div class="description">
            {{ item.description }}
          </div>
        </div>
      </div>
      <div class="card__right">
        <div class="info">
          <div class="price">{{ item.price }}</div>
          <div class="horis__group">
            <span class="title">Количество</span>
            <span>{{ item.quantity }}</span>
          </div>
          <div class="horis__group">
            <span class="title">Стоимость за штуку</span>
            <span>{{ item.pricePerUnit }}</span>
          </div>
        </div>
        <div class="buttons">
          <div class="add__btn">Добавить в сделки</div>
          <div class="favorite__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.33423 5.15646C3.76936 5.66876 3.37143 6.48526 3.37143 7.72395C3.37143 8.49178 3.74054 9.37595 4.39401 10.3171C5.0395 11.2468 5.91325 12.1619 6.80764 12.9768C7.69901 13.7889 8.59325 14.4856 9.26619 14.98C9.5571 15.1937 9.80563 15.3689 9.99334 15.4985C10.182 15.3641 10.4326 15.1821 10.7264 14.9604C11.4003 14.4517 12.296 13.7378 13.1889 12.9135C14.0848 12.0864 14.9605 11.1642 15.6075 10.2403C16.2647 9.30178 16.6286 8.44202 16.6286 7.72398C16.6286 5.85557 15.1163 4.35487 13.2692 4.35487C12.1581 4.35487 11.1713 4.89912 10.5565 5.74372C10.4277 5.92072 10.2205 6.02564 9.99979 6.02563C9.77911 6.02562 9.57192 5.92069 9.44309 5.74369C8.82837 4.89912 7.84181 4.35487 6.73039 4.35487C5.73916 4.35487 4.90933 4.63487 4.33423 5.15646ZM9.99982 16.3229C9.62433 16.8897 9.6242 16.8897 9.62404 16.8896L9.62215 16.8883L9.61733 16.8852L9.5999 16.8738C9.58488 16.864 9.56313 16.8497 9.5351 16.831C9.47905 16.7938 9.39785 16.7394 9.29508 16.669C9.08961 16.5284 8.79758 16.3242 8.44779 16.0672C7.74933 15.554 6.81505 14.8266 5.87789 13.9728C4.94375 13.1217 3.98898 12.129 3.26308 11.0835C2.54515 10.0495 2 8.89125 2 7.72395C2 6.1806 2.50766 4.97383 3.40677 4.15839C4.29563 3.35224 5.48815 3 6.73039 3C8.00311 3 9.15307 3.50391 9.99985 4.31539C10.8467 3.50391 11.9967 3 13.2692 3C15.8899 3 18 5.12338 18 7.72398C18 8.85265 17.4496 9.99111 16.7353 11.0111C16.0108 12.0458 15.0579 13.0425 14.1252 13.9034C13.1895 14.7672 12.2565 15.5105 11.559 16.037C11.2097 16.3007 10.9181 16.5109 10.7131 16.6559C10.6105 16.7284 10.5295 16.7845 10.4736 16.823C10.4457 16.8422 10.424 16.8569 10.4091 16.8671L10.3918 16.8788L10.3871 16.882L10.3857 16.8829C10.3855 16.883 10.385 16.8834 9.99982 16.3229ZM9.99982 16.3229L10.3857 16.8829C10.1567 17.0365 9.85564 17.0393 9.62404 16.8896L9.99982 16.3229Z"
                fill="#2D3B87"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="card">
      <h1>Ничего не найдено по запросу</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCardsStore } from "../stores/cards";

const store = useCardsStore();
const items = computed(() => store.getItems);
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: auto;
  .card {
    display: flex;
    justify-content: space-between;
    max-width: 1166px;
    height: 366px;
    margin: 40px 17px;
    border-radius: 20px;
    border: 1px solid #e0e3ee;
    background: #fff;

    &__left {
      padding: 20px;
      display: flex;
      gap: 20px;

      img {
        width: 256px;
        height: 256px;
        border-radius: 20px;
        padding: 0;
        border: none;
        overflow: hidden;
      }

      .content {
        max-width: 536px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .types {
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          color: #969dc3;
        }

        &__title {
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          height: 38px;
          line-height: 125%;
          color: #2d3b87;
        }
        .address {
          display: inline-flex;
          align-self: flex-start;
          font-size: 13px;
          font-style: normal;
          align-items: center;
          padding: 4px 8px;
          gap: 3px;
          border-radius: 5px;
          background: #f4f5f9;
          color: #616ca5;
        }

        .horis__group {
          font-size: 13px;
          .title {
            font-size: 13px;
            color: #969dc3;
          }
          span {
            color: #2d3b87;
          }
        }
        .vert__group {
          max-width: 124px;
          font-size: 13px;
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          background: #f4f5f9;
          padding: 8px;
          gap: 6px;

          .title {
            font-size: 13px;
            color: #969dc3;
          }
          span {
            color: #616ca5;
          }
        }

        .description {
          font-size: 13px;
          line-height: 150%;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Количество строк до обрезания */
          -webkit-box-orient: vertical;
          color: #2d3b87;
          height: 63px;
        }
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 315px;
      border-radius: 20px;
      border: 1px solid #e0e3ee;
      padding: 20px;

      .info {
        .price {
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          color: #2d3b87;
          margin-bottom: 8px;
        }
        .horis__group {
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          padding: 5.5px 0px;
          .title {
            font-size: 13px;
            color: #969dc3;
          }
          span {
            color: #2d3b87;
          }
        }
      }
      .buttons {
        display: flex;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        gap: 12px;

        .add__btn {
          border-radius: 10px;
          color: #2d3b87;
          background: #f4f5f9;
          padding: 17.5px 35px;
          cursor: pointer;
        }

        .favorite__btn {
          border-radius: 10px;
          background: #f4f5f9;
          padding: 17px 16px 13px 14px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
