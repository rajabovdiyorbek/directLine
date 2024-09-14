<template>
  <div class="container">
    <div class="tabs">
      <div class="tab active">Все типы</div>
      <div class="tab">Прямые продажи</div>
      <div class="tab">Аукцион</div>
    </div>

    <div class="search-container">
      <input type="text" class="search-input" placeholder="Поиск" />
      <button class="search-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <rect width="40" height="40" rx="10" fill="#2D3B87" />
          <g clip-path="url(#clip0_1_2935)">
            <path
              d="M17.9167 12.5C19.3533 12.5 20.731 13.0707 21.7468 14.0865C22.7627 15.1023 23.3333 16.4801 23.3333 17.9167C23.3333 19.2583 22.8417 20.4917 22.0333 21.4417L22.2583 21.6667H22.9167L27.0833 25.8333L25.8333 27.0833L21.6667 22.9167V22.2583L21.4417 22.0333C20.4917 22.8417 19.2583 23.3333 17.9167 23.3333C16.4801 23.3333 15.1023 22.7627 14.0865 21.7468C13.0707 20.731 12.5 19.3533 12.5 17.9167C12.5 16.4801 13.0707 15.1023 14.0865 14.0865C15.1023 13.0707 16.4801 12.5 17.9167 12.5ZM17.9167 14.1667C15.8333 14.1667 14.1667 15.8333 14.1667 17.9167C14.1667 20 15.8333 21.6667 17.9167 21.6667C20 21.6667 21.6667 20 21.6667 17.9167C21.6667 15.8333 20 14.1667 17.9167 14.1667Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2935">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(10 10)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 10px;
}

.tabs {
  display: flex;
  gap: 12px;
  background-color: #f4f5f9;
  border: 1px solid #e0e3ee;
  border-radius: 10px;

  .tab {
    padding: 12px;
    color: #969dc3;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;

    &.active {
      color: #2d3b87;
    }
  }
}

.search-container {
  position: relative;

  .search-input {
    display: flex;
    width: 274px;
    height: 48px;
    padding: 20px 50px 20px 20px;
    align-items: center;
    gap: 8px;
    color: #2d3b87;
    border-radius: 10px;
    border: 1px solid #e0e3ee;
    background: #fff;
    outline: none;
  }

  .search-btn {
    position: absolute;
    top: 4px;
    right: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: none;
    outline: none;
  }
}
</style>
