<template>
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
  >
    <router-link to="/">
      <span
        class="navbar-brand d-flex align-items-center px-4 px-lg-5 cursor-pointer"
      >
        <img
          class="img-fluid position-absolute"
          src="/img/logo-full.png"
          alt=""
          style="height: 40px"
        />
      </span>
    </router-link>
    <button
      type="button"
      class="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <router-link to="/">
          <span class="nav-item nav-link active">Início</span>
        </router-link>
        <router-link to="/about"
          ><span class="nav-item nav-link">Sobre</span></router-link
        >
        <router-link to="/courses"
          ><span class="nav-item nav-link">Pós-graduação</span></router-link
        >
        <div class="nav-item dropdown">
          <span class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Institucional</span
          >
          <div class="dropdown-menu fade-down m-0">
            <router-link to="/team"
              ><span class="dropdown-item">Equipe</span></router-link
            >
            <router-link to="/testimonials"
              ><span class="dropdown-item">Depoimentos</span></router-link
            >
            <router-link to="/404"
              ><span class="dropdown-item">Novidades</span></router-link
            >
          </div>
        </div>
        <router-link to="/contact"
          ><span class="nav-item nav-link">Contato</span></router-link
        >
      </div>
      <router-link to="/about"
        ><span class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >ACESSAR AVA<i class="fa fa-arrow-right ms-3"></i></span
      ></router-link>
    </div>
  </nav>
</template>
