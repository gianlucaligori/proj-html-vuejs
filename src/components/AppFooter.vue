<script>
</script>

<template>
    <footer>
        <div class="container_fluid d-flex flex-column justify-content-center align-items-center gap-5">
            <div>
                <h3>Join Over <span class="orange_text">500,000</span> Students Enjoyng Avada Education Now</h3>
                <p class="text-center">Become Part of Avada University to Further Your Career</p>
            </div>

            <div class="input_box">
                <input type="name" name="" id="" placeholder="Name">
                <input type="email" name="" id="" placeholder="Email">
                <input type="tel" name="" id="" placeholder="Telephone">
                <input class="orange_submit" type="submit" value="Apply Now">
            </div>
        </div>


        <div class="container contacts_footer">
            <div class="ori_ul_1">
                <!-- PRIMA UL FOOTER -->

                <ul>
                    <h5>AVADA UNIVERSITY</h5>
                    <li>
                        <i></i>
                        <p>Residential Location 9521 Brooadsberry Avenue</p>
                    </li>
                    <li>
                        <i></i>
                        <p>1.800.458.556</p>
                    </li>
                    <li>
                        <i></i>
                        <p>info@your.domain.com</p>
                    </li>
                    <li>
                        <i></i>
                        Monday - Friday: 8:00 AM - 10:00 PM
                    </li>
                </ul>

                <!-- SECONDA UL FOOTER -->
                <ul>
                    <h5>RECENT POSTS</h5>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <!-- TERZA UL FOOTER -->
            <div class="ver_ul_1">
                <ul>
                    <h5>COURSES</h5>
                    <li>Arts & Humanities</li>
                    <li>Business & Managemenr</li>
                    <li>Engineering & Technology</li>
                    <li>Life Sciences & Medicine</li>
                    <li>Natural Sciences</li>
                </ul>

                <ul>
                    <h5>ADMISSIONS</h5>
                    <li>Eligibility</li>
                    <li>Application</li>
                    <li>Review Process</li>
                    <li>How to Apply</li>
                </ul>
            </div>

            <div class="ver_ul_2">
                <ul>
                    <h5>RESOURCES</h5>
                    <li>Campus Directory</li>
                    <li>Academic Calendar</li>
                    <li>Sport Clubs</li>
                    <li></li>
                    <li></li>
                </ul>

                <ul>
                    <h5>QUICKLINKS</h5>
                    <li>University Library</li>
                    <li>Campus Services</li>
                    <li>Careers</li>
                </ul>
            </div>

            <div class="up_events">
                <h5>UPCOMING EVENTS</h5>
                <li></li>
            </div>
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

    p {
        color: $dirtwhite;
    }

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

.contacts_footer {
    display: flex;

    .ori_ul_1,
    .ver_ul_1,
    .ver_ul_2 {

        ul {
            list-style: none;
        }
    }

    .ori_ul_1 {
        display: flex;
    }

    .ver_ul_1,
    .ver_ul_2 {
        display: flex;
        flex-direction: column;
    }
}
</style>
