<script lang="ts">
  export let title: string = "";
  export let isShow: boolean = false;
</script>

<div class={"modal " + (isShow ? "show" : "hide")}>
  <div class="content">
    <button
      class="close"
      on:click={() => {
        isShow = false;
      }}>&times;</button
    >
    <h2>{title}</h2>
    <slot />
  </div>
</div>

<style>
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 400px; /* Could be more or less, depending on screen size */
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .content {
      width: 80%;
    }
  }
</style>
