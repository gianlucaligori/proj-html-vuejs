<script>
import { store } from "../store"


export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- INIZIO JUMBO -->
    <div class="container-fluid jumbo d-flex flex-column justify-content-center align-items-center">

        <h2>Inspiring Tomorrow Leaders</h2>
        <h3>The Future Belongs To Those Who See Possibilities Today</h3>

        <div class="bts">
            <button class="orange_btn">FIND A COURSE</button>
            <button class="blue_btn">APPLY NOW</button>
        </div>
    </div>



    <!-- PRIMA SEZIONE INSPIRED BY -->
    <div class="container first_cont">
        <section class="first_sec text-center">
            <img class="logo_lil p-2" src="../assets/images/page-logo-1.png" alt="">
            <h3 class="p-2">Inspired By Excellence & Innovation</h3>
            <p class="p-2">We offer a wide range of high quality of teaching and extra-curricular activities</p>


            <div class="row m-5">

                <div class="col-6">
                    <h3 class="text-start my-4">WHY CHOOSE AVADA UNIVERSITY?</h3>
                    <p class="text-start my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, maiores
                        similique
                        assumenda numquam
                        autem velit excepturi. Reiciendis tempora, asperiores omnis eligendi maiores ex voluptatem, dolorum
                        perspiciatis possimus voluptatum est eveniet?</p>
                    <p class="text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, maiores similique
                        assumenda numquam
                        autem velit excepturi. Reiciendis tempora, asperiores omnis eligendi maiores ex voluptatem, dolorum
                        perspiciatis possimus voluptatum est eveniet?</p>
                </div>

                <div class="col-6">
                    <!-- VIDEO QUI -->
                    <iframe width="450" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
            </div>
        </section>
    </div>



    <!-- SECONDA SEZIONE WORLD CLASS FACILITIES -->
    <div class="container second_cont">
        <section>
            <div class="row m-5">

                <div class="col-6 wcf_art">
                    <div>
                        <h3>WORLD CLASS FACILITIES</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, doloribus. Omnis, quis incidunt quo
                            tempora
                            quia tenetur voluptatibus deserunt commodi magni quasi reprehenderit at ipsa sit autem non fugit
                            placeat.</p>
                    </div>

                    <ul class="my-4 ul_icons">
                        <li>
                            <i class="fa-solid fa-globe"></i>
                            <span> <strong> International focus-</strong> </span> <span>Our students</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-graduation-cap"></i>
                            <span> <strong> Residential courses-</strong></span> <span>Our students</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-address-book"></i>
                            <span> <strong> People not profits-</strong></span> <span>Our students</span>
                        </li>
                    </ul>
                </div>
                <!-- ACCORDION TENDINA 5 ELEMENTI -->
                <div class="col-6 accordion">
                    <h3>OUR VALUES</h3>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="true"
                                    aria-controls="flush-collapseOne">
                                    <h6>OUR MISSION</h6>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                                    body.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="true"
                                    aria-controls="flush-collapseTwo">
                                    <h6>OUR PHILOSOPHY</h6>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                    body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="true"
                                    aria-controls="flush-collapseThree">
                                    <h6>OUR COMMITMENT</h6>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                    body. Nothing more exciting happening here in terms of content, but just filling up the
                                    space to make it look, at least at first glance, a bit more representative of how this
                                    would look in a real-world application.</div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="true"
                                        aria-controls="flush-collapseOne">
                                        <h6>OUR PROMISE</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                        demonstrate the <code>.accordion-flush</code> class. This is the first item's
                                        accordion
                                        body.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="true"
                                        aria-controls="flush-collapseOne">
                                        <h6>OUR VALUES</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                        demonstrate the <code>.accordion-flush</code> class. This is the first item's
                                        accordion
                                        body.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>


    <!-- THREE CARDS -->
    <div class="container-fluid three_cards-sec three_cards">
        <div class="row">
            <div class="col-4 p-0 card_one">
                <h3>COURSES</h3>
                <p>View More</p>
                <!-- <img src="../assets/images/home_courses_section_bg.jpg" alt=""> -->
            </div>
            <div class="col-4 p-0 card_two">
                <h3>EVENTS</h3>
                <p>View More</p>
                <!-- <img src="../assets/images//home_events_section_bg.jpg" alt=""> -->

            </div>
            <div class="col-4 p-0 card_three">
                <h3>LATEST NEWS</h3>
                <p>View More</p>
                <!-- <img src="../assets/images/home_latest_news_section_bg.jpg" alt=""> -->

            </div>
        </div>
    </div>


    <!-- THIRD SECTION -->

    <section class="container text-center articles_sec">
        <img class="logo_lil p-2" src="../assets/images/page-logo-1.png" alt="">
        <h3 class="p-2">Today's University News</h3>
        <p class="p-2">Covering topics from classes to politics and student organization events</p>


        <div class="row row_card">
            <div class="col-4" v-for="articlesRandom in store.arrArticles" :key="articlesRandom">
                <div class="card">
                    <div class="card-body p-0">
                        <img :src="`src/assets/images/${articlesRandom.image}`" alt="">

                        <h5 class="card-title"> {{ articlesRandom.title }}</h5>
                        <span> By <a href="#">{{ articlesRandom.author }}</a></span>
                        <span> | {{ articlesRandom.published_at }} </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/_partials/reset";


.jumbo {
    background-image: url(../assets/images/home_main_slider_bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 650px;
    color: $dirtwhite;
    gap: 1.5rem;

    h2 {
        font-size: 4.5rem;
    }

    h3 {
        font-size: 1.3rem;
    }

    button {
        padding: .5rem;
        padding-inline: 1rem;
        color: $dirtwhite;
        margin-inline: 1rem;
        border: none;
        font-weight: 600;
    }

    .orange_btn {
        background-color: $orange;
    }

    .blue_btn {
        background-color: $skyblue;
    }
}

// DA SISTEMARE QUI I MARGINI
.container {
    margin-top: 10rem;
    margin-bottom: 5rem;
}

ul {
    list-style: none;
}

.three_cards-sec {
    .row {
        height: 700px;
        max-width: 100%;
    }

    .card_one {
        background-image: url(../assets/images/home_courses_section_bg.jpg);
    }

    .card_two {
        background-image: url(../assets/images/home_events_section_bg.jpg);
    }

    .card_three {
        background-image: url(../assets/images/home_latest_news_section_bg.jpg);
    }

    .card_one,
    .card_two,
    .card_three {
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    h3,
    p {
        color: $dirtwhite;
    }
}

.articles_sec {
    h5 {
        margin: .5rem;
        color: $orange;
        font-size: 1.5rem;
        text-align: start;
    }

    a {
        text-decoration: none;
        color: $orange;
    }

    .row_card {
        margin-top: 5rem;
    }
}

.ul_icons {

    i {
        color: $orange;
    }
}

.accordion {
    h6 {
        color: $orange;
    }
}

.card-body {


    img {
        width: 100%;
    }
}
</style>
