<template>
   <div class="js-slideshow-animation" uk-slideshow="ratio: 3:2; autoplay: 1">

        <div class="uk-position-relative uk-visible-toggle uk-light">

            <ul class="uk-slideshow-items">
                <li v-for="(con, n) in content">
                    <img :src="`../images/${con.image || image(n)}`" alt="" uk-cover>
                    <div class="uk-position-center uk-position-small uk-text-center">
                        <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
                        <p uk-slideshow-parallax="x: 200,-200">{{con.text}}</p>
                    </div>
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

        <ul class="uk-dotnav uk-flex-center uk-margin">
            <li v-for="(con, n) in content" :uk-slideshow-item="n"><a href="#">Item {{n}}</a></li>
        </ul>

    </div>
</template>

<script>
import base from '../base/component';

export default {
    name: 'slideshow',

    extends: base,
    props: {
        animation: {
            default: 'slide',
            options: [ 'slide', 'fade', 'scale', 'pull', 'push' ]
        }
    },
    
    types: ['image', 'text'],
    methods:{
        image(i) {
            return JPGS[i % JPGS.length];
        }
    }

    
}
</script>
