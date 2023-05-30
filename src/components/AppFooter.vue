<script>
</script>

<template>
    <footer>
        <div class="container_fluid d-flex flex-column justify-content-center align-items-center gap-5">
            <div>
                <h3>Join Over <span class="orange_text">500.000</span> Students Enjoyng Avada Education Now</h3>
            </div>

            <div class="input_box">
                <input type="name" name="" id="" placeholder="Name">
                <input type="email" name="" id="" placeholder="Email">
                <input type="tel" name="" id="" placeholder="Telehpone">
                <input class="orange_submit" type="submit" value="Apply Now">
            </div>
        </div>


        <div class="container">

            <ul>
                <li></li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/_partials/reset";
@import "../node_modules/bootstrap/scss/bootstrap";

.container_fluid {
    height: 400px;
    background-color: $darkgrey;
    color: $white;

    .orange_text {
        color: $orange;
    }

    input {
        margin-inline: .5rem;
        background-color: $darkgreylighter;
        border-style: none;
        padding: .5rem;
        color: $white;
    }

    .orange_submit {
        background-color: $orange;
    }
}
</style>
