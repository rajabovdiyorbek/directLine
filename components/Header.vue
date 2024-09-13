<template>
  <header class="navbar">
    <div class="navbar__item">
      <NuxtLink to="/favorite" class="navbar__link" active-class="active">
        <svg
          class="navbar__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.33423 5.15646C3.76936 5.66876 3.37143 6.48526 3.37143 7.72395C3.37143 8.49178 3.74054 9.37595 4.39401 10.3171C5.0395 11.2468 5.91325 12.1619 6.80764 12.9768C7.69901 13.7889 8.59325 14.4856 9.26619 14.98C9.5571 15.1937 9.80563 15.3689 9.99334 15.4985C10.182 15.3641 10.4326 15.1821 10.7264 14.9604C11.4003 14.4517 12.296 13.7378 13.1889 12.9135C14.0848 12.0864 14.9605 11.1642 15.6075 10.2403C16.2647 9.30178 16.6286 8.44202 16.6286 7.72398C16.6286 5.85557 15.1163 4.35487 13.2692 4.35487C12.1581 4.35487 11.1713 4.89912 10.5565 5.74372C10.4277 5.92072 10.2205 6.02564 9.99979 6.02563C9.77911 6.02562 9.57192 5.92069 9.44309 5.74369C8.82837 4.89912 7.84181 4.35487 6.73039 4.35487C5.73916 4.35487 4.90933 4.63487 4.33423 5.15646ZM9.99982 16.3229C9.62433 16.8897 9.6242 16.8897 9.62404 16.8896L9.62215 16.8883L9.61733 16.8852L9.5999 16.8738C9.58488 16.864 9.56313 16.8497 9.5351 16.831C9.47905 16.7938 9.39785 16.7394 9.29508 16.669C9.08961 16.5284 8.79758 16.3242 8.44779 16.0672C7.74933 15.554 6.81505 14.8266 5.87789 13.9728C4.94375 13.1217 3.98898 12.129 3.26308 11.0835C2.54515 10.0495 2 8.89125 2 7.72395C2 6.1806 2.50766 4.97383 3.40677 4.15839C4.29563 3.35224 5.48815 3 6.73039 3C8.00311 3 9.15307 3.50391 9.99985 4.31539C10.8467 3.50391 11.9967 3 13.2692 3C15.8899 3 18 5.12338 18 7.72398C18 8.85265 17.4496 9.99111 16.7353 11.0111C16.0108 12.0458 15.0579 13.0425 14.1252 13.9034C13.1895 14.7672 12.2565 15.5105 11.559 16.037C11.2097 16.3007 10.9181 16.5109 10.7131 16.6559C10.6105 16.7284 10.5295 16.7845 10.4736 16.823C10.4457 16.8422 10.424 16.8569 10.4091 16.8671L10.3918 16.8788L10.3871 16.882L10.3857 16.8829C10.3855 16.883 10.385 16.8834 9.99982 16.3229ZM9.99982 16.3229L10.3857 16.8829C10.1567 17.0365 9.85564 17.0393 9.62404 16.8896L9.99982 16.3229Z"
            fill="#2D3B87"
          />
        </svg>

        <span>Избранное</span>
      </NuxtLink>
    </div>
    <div class="navbar__item">
      <NuxtLink to="/" class="navbar__link" active-class="active">
        <svg
          class="navbar__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9998 7.57598L6 3"
            stroke="#2D3B87"
            stroke-width="1.1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 13.4426V6.33151C17.9997 6.01975 17.9174 5.71356 17.7614 5.44365C17.6054 5.17375 17.3811 4.94961 17.1111 4.79373L10.8889 1.23818C10.6186 1.08214 10.3121 1 10 1C9.68793 1 9.38137 1.08214 9.11111 1.23818L2.88889 4.79373C2.6189 4.94961 2.39465 5.17375 2.23863 5.44365C2.08262 5.71356 2.00032 6.01975 2 6.33151V13.4426C2.00032 13.7544 2.08262 14.0606 2.23863 14.3305C2.39465 14.6004 2.6189 14.8245 2.88889 14.9804L9.11111 18.536C9.38137 18.692 9.68793 18.7741 10 18.7741C10.3121 18.7741 10.6186 18.692 10.8889 18.536L17.1111 14.9804C17.3811 14.8245 17.6054 14.6004 17.7614 14.3305C17.9174 14.0606 17.9997 13.7544 18 13.4426Z"
            stroke="#2D3B87"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 5.5L10.0002 9.89611L17.5 5.5"
            stroke="#2D3B87"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99951 18L9.99951 9.88867"
            stroke="#2D3B87"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Склад</span>
      </NuxtLink>
    </div>
    <div class="navbar__item">
      <NuxtLink to="/deals" class="navbar__link" active-class="active">
        <svg
          class="navbar__icon"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.00012 1.66675L1.50012 5.00008V16.6667C1.50012 17.1088 1.67572 17.5327 1.98828 17.8453C2.30084 18.1578 2.72476 18.3334 3.16679 18.3334H14.8335C15.2755 18.3334 15.6994 18.1578 16.012 17.8453C16.3245 17.5327 16.5001 17.1088 16.5001 16.6667V5.00008L14.0001 1.66675H4.00012Z"
            stroke="#2D3B87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.50012 5H16.5001"
            stroke="#2D3B87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.3334 8.3335C12.3334 9.21755 11.9822 10.0654 11.3571 10.6905C10.732 11.3156 9.88414 11.6668 9.00008 11.6668C8.11603 11.6668 7.26818 11.3156 6.64306 10.6905C6.01794 10.0654 5.66675 9.21755 5.66675 8.3335"
            stroke="#2D3B87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span>Сделки</span>
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  max-width: 1200px;
  height: 40px;
  margin: auto;
  margin-bottom: 110px;
  display: flex;
  justify-content: flex-end;
  background-color: #e0e3ee;
  border-radius: 0px 0px 10px 10px;

  &__item {
    width: 86px;
    margin: 60px 0px;
    text-align: center;
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #2d3b87;
    font-size: 13px;
    padding: 4px;
    font-weight: 500;
  }

  &__icon {
    width: 24px;
    height: 21.8px;
    margin-bottom: 5px;
  }
  .active {
    background-color: #f4f5f9;
    border-radius: 10px;
    transition: background-color 0.3s;
  }
}
</style>
