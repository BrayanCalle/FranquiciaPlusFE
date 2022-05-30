<template>
    <div class="slider-wrapper">
        <slot></slot>
    </div>
</template>

<script>
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
// import "../../../node_modules/tiny-slider/dist/tiny-slider.css";

export default{
    name: 'TinySlider',
    data(){
        return{
            $slider: null,
        };
    },
    mounted() {
        this.init();

    },
    methods:{
        init() {
            const settings = {
                container: this.$el,
                mode: 'carousel',
                items: 3,
                slideBy: '1',
                mouseDrag: true,
                arrowkeys:true,
                swipeAngle: false,
                speed: 600,
                controls: true,
                controlsPosition: 'bottom',
                controlsContainer: "#custom-control",
                autoplay: true,
                autoplayButtonOutput: false,
                freezable: false,
                nav:false,
                gutter: 25,
                
                responsive: {
                    350:{
                        items: 1,
                        nav: true,
                        navPosition: "bottom",
                        controls:false,
                        // edgePadding: 30,
                    },
                    768:{
                        items: 2,
                        controls: false,
                        nav: true,
                        navPosition: "bottom",
                    },
                    992:{
                        items: 3,
                        controls: true,
                        nav:false,
                    }
                }
            };
            this.$slider = tns(settings);

        }
    },
    beforeDestroy(){
        if (this.$slider){
            this.$slider.destroy();
        }
    },

}
</script>

<style scoped>
.card-slide img {
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.tns-nav {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.tns-nav button {
  height: 13px;
  width: 8px;
  background-color: #a5a5a5;
  border: none;
  margin-left: 7px;
  border-radius: 50%;
}
.tns-nav .tns-nav-active {
  background-color: black;
}
</style>