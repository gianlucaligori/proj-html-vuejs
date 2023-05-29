<script>
</script>

<template>
    <div class="jumbo d-flex flex-column justify-content-center align-items-center">

        <h2>Inspiring Tomorrow Leaders</h2>
        <h3>The Future Belongs To Those Who See Possibilities Today</h3>

        <div class="bts">
            <button class="orange_btn">FIND A COURSE</button>
            <button class="blue_btn">APPLY NOW</button>
        </div>
    </div>




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
                    <iframe width="450" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
            </div>
        </section>
    </div>


    <div class="container">
        <div class="row m-5">

            <div class="col-6">
                <h3>WORLD CLASS FACILITIES</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, doloribus. Omnis, quis incidunt quo tempora
                    quia tenetur voluptatibus deserunt commodi magni quasi reprehenderit at ipsa sit autem non fugit
                    placeat.</p>

                <ul>
                    <li>
                        <span>International focus:</span> <span>Our students</span>
                    </li>
                </ul>
            </div>

            <div class="col-6">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/_partials/reset";


.jumbo {
    background-image: url(../assets/images/home_main_slider_bg.jpg);
    background-repeat: no-repeat;
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

section {
    margin-top: 8rem;
}
</style>
