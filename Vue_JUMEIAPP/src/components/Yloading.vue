<template>
    <div>
        <div class="j_max_index" style="z-index: 5001;">
            <div>
                <div class="beast-mask" style="height: 100%;width: 100%;position: fixed;z-index: 1000;top: 0px;left: 0px;opacity: 0;background: rgb(0, 0, 0);display: none;"></div>
                <div class="beast__dialog" style="z-index: 1001 !important;" :style="{display:loading?'block':'none'}">
                    <div class="beast-loading__icon"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

