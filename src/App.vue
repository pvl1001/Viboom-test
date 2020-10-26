<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/logo.png">-->
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <div class="wrapper">
            <div class="title">Прогноз продвижения</div>
            <div class="content">
                <!--                <div class="content__col1">-->
                <div class="content__col1_text">
                    Мы пользуемся только официальными инструментами рекламы, рекомендуемыми самим YouTube, поэтому
                    все приведенные нами просмотры, лайки и комментарии будут настоящими, а подписчики живыми и
                    заинтересованными в тематике Вашего канала
                </div>

                <div class="row1">
                    <div class="views-followers">
                        <div class="views-followers__counter">{{ counterShow() }}</div>
                        <div class="views-followers__text">просмотров</div>
                    </div>
                    <div class="views-followers">
                        <div class="views-followers__counter">{{ followersCounter() }}</div>
                        <div class="views-followers__text">подписчиков</div>
                    </div>
                </div>

                <div class="price c-price">
                    <div class="price__text">
                        Введите сумму, чтобы увидеть прогноз по подписчикам и просмотрам
                    </div>
                    <div class="row-input">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="14.5" stroke="#7045C4"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.8354 4.61722C12.5432 4.53516 11.5585 5.58963 11.5584 6.78394L11.5576 14.7565L9.87783 14.7563C9.21508 14.7562 8.67776 15.2934 8.67767 15.9561C8.67759 16.6188 9.21478 17.1562 9.87752 17.1563L11.5576 17.1565L11.5571 18.561H9.89325C9.23051 18.561 8.69325 19.0983 8.69325 19.761C8.69325 20.4237 9.23051 20.961 9.89325 20.961H11.5562L11.5549 24.1848C11.5547 24.8476 12.0917 25.385 12.7545 25.3853C13.4172 25.3855 13.9547 24.8485 13.9549 24.1858L13.9562 20.961H17.7683C18.431 20.961 18.9683 20.4237 18.9683 19.761C18.9683 19.0983 18.431 18.561 17.7683 18.561H13.9571L13.9577 17.127C15.8505 16.9824 17.5576 16.3794 18.8615 15.3993C20.4599 14.198 21.459 12.4099 21.3126 10.3198C21.1895 8.56382 20.3378 7.15398 18.9613 6.1838C17.6235 5.24091 15.8428 4.74471 13.8354 4.61722ZM13.9586 14.7183C15.3784 14.5807 16.569 14.1201 17.4196 13.4808C18.4776 12.6856 18.999 11.6371 18.9184 10.4876C18.8483 9.48671 18.3953 8.72107 17.5787 8.14551C16.7691 7.57488 15.5603 7.16825 13.9584 7.03274L13.9584 7.09785C13.9604 7.12688 13.9615 7.15619 13.9615 7.18575L13.9586 14.7183Z"
                                  fill="#7045C4"/>
                        </svg>
                        <input type="text" maxlength="13" v-model="myInputModel">
                        <span>руб.</span>
                    </div>
                </div>

                <div class="graph">
                    <RandomChart :myInputModel="myInputModel"/>
                </div>

                <div class="predict-text">
                    Прогноз подписчиков зависит от Вашего контента. Сделайте его интересным и старайтесь не снижать
                    планку
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import RandomChart from "@/components/RandomChart";
    // import createNumberMask from 'text-mask-addons/dist/createNumberMask';
    //
    // const currencyMask = createNumberMask({
    //     prefix: '',
    //     thousandsSeparatorSymbol: ' ',
    //     allowDecimal: true,
    //     includeThousandsSeparator: true,
    //     allowNegative: false,
    // });


    export default {
        name: 'App',
        components: {
            RandomChart
        },
        data: () => ({
            // mask: currencyMask,
            myInputModel: ''
        }),

        methods: {
            counterShow() {
               return Math.floor( this.myInputModel / 50 )
            },
            followersCounter() {
                return '+' + Math.floor( this.myInputModel / 2500 )
            }
        },
    }
</script>

<style lang="scss">
    #app {
        font-family: 'PT Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }

    input {
        outline: none;
    }

    body {
        margin: 0;
    }

    .wrapper {
        padding: 0 40px;
        max-width: 1520px;
        margin: 0 auto;
    }

    .title {
        font-weight: bold;
        font-size: 46px;
        line-height: 64px;
        letter-spacing: 0.01em;
        color: #212121;
        margin-bottom: 60px;
        text-align: center;
    }

    .content {
        display: grid;
        grid-template-columns: minmax(502px, 1fr) minmax(0, 1fr);
        grid-template-rows: auto auto;
        column-gap: 30px;
        row-gap: 40px;
    }

    .content__col1_text {
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #505361;
        max-width: 590px;
    }

    .predict-text {
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: 0.02em;
        color: #717171;
        max-width: 590px;
        margin-top: -87px;
    }

    .row1 {
        display: flex;
        justify-content: flex-end;
    }

    .row1 > div:first-child {
        margin-right: 24px;
    }

    .views-followers {
        width: 240px;
        height: 112px;
        background: rgba(188, 154, 244, .3);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .views-followers__counter {
        font-family: PT Sans, sans-serif;
        font-weight: bold;
        font-size: 30px;
        line-height: 40px;
        color: #212121;
        width: 100%;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0 10px;
        box-sizing: border-box;
    }

    .graph {
        height: 283px;
        max-width: 701px;
        width: 100%;
        margin-left: auto;
    }

    .graph canvas {
        border: 1px solid #E2E5EE;
        box-sizing: border-box;
        border-radius: 6px;
        max-width: 100%;
    }

    .price {
        font-family: Montserrat, sans-serif;
        height: 209px;
        color: #212121;
        background: #E2E5EE;
        border-radius: 6px;
        padding: 30px 50px 47px;
        text-align: left;
        max-width: 590px;
        width: 100%;
        box-sizing: border-box;
    }

    .price__text {
        max-width: 358px;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 40px;
    }

    .row-input {
        display: flex;
        align-items: center;
    }

    .row-input svg {
        margin-right: 20px;
        flex-shrink: 0;
    }

    .row-input input {
        max-width: 308px;
        width: 100%;
        height: 44px;
        border: 1px solid #E2E5EE;
        box-sizing: border-box;
        border-radius: 6px;
        margin-right: 20px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.02em;
        padding: 0 20px;
    }

    @media (max-width: 1024px) {

        .price {
            padding: 30px 40px 46px;
            grid-area: price;
        }

        .graph {
            grid-area: graph;
        }

        .content__col1_text {
            grid-area: text;
        }

        .predict-text {
            grid-area: predict-text;
        }

        .content {
            grid-template-areas:'text text'
                                'price followers'
                                'graph graph'
                                'predict-text predict-text';
        }

        .predict-text {
            margin: 0;
        }

        .row1 {
            flex-wrap: wrap;
        }

        .views-followers {
            width: 100%;
            height: 92px;
        }

        .row1 > div:first-child {
            margin-right: 0;
            margin-bottom: 22px;
        }

        .content__col1_text,
        .graph {
            max-width: none;
            height: auto;
        }

        .title {
            margin-bottom: 20px;
        }

        .content {
            flex-wrap: wrap;
        }
    }

    @media (max-width: 767px) {

        .price {
            max-width: none;
            border-radius: 0;
            padding: 24px 20px 30px;

        }

        #app {
            margin-top: 50px;
        }

        .wrapper {
            padding: 0;
        }

        .content {
            row-gap: normal;
            grid-template-columns: 1fr;
            grid-template-areas:'text'
                                'price'
                                'followers'
                                'graph'
                                'predict-text';
        }

        .content__col1_text {
            text-align: center;
            padding: 0 20px;
            margin-bottom: 30px;
        }

        .row1 {
            padding: 16px 20px;
            flex-wrap: nowrap;
            display: initial;
        }

        .row1 > div:first-child {
            margin-right: 16px;
            margin-bottom: 0;
            float: left;
        }

        .views-followers {
            width: calc(50% - 8px);
            display: inline-flex;
        }

        .predict-text {
            padding: 30px 20px 50px;
        }

    }
</style>
