<template>
     <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-3">
         <div class="container">
            <b-navbar-brand href="#">COVID-19</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>   
                    <b-nav-item>
                        <router-link tag="span" to="/">Home</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link tag="span" to="/global">Global Data</router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
         </div>
    </b-navbar>
</template>
