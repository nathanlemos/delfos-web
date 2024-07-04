<template>
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
  >
    <router-link to="/">
      <span
        class="navbar-brand d-flex align-items-center px-4 px-lg-5 cursor-pointer"
      >
        <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>Delfos</h2>
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
          <span class="nav-item nav-link active">Home</span>
        </router-link>
        <router-link to="/about"
          ><span class="nav-item nav-link">About</span></router-link
        >
        <router-link to="/courses"
          ><span class="nav-item nav-link">Courses</span></router-link
        >
        <div class="nav-item dropdown">
          <span class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Pages</span
          >
          <div class="dropdown-menu fade-down m-0">
            <router-link to="/team"
              ><span class="dropdown-item">Our Team</span></router-link
            >
            <router-link to="/testimonials"
              ><span class="dropdown-item">Testimonial</span></router-link
            >
            <router-link to="/404"
              ><span class="dropdown-item">404 Page</span></router-link
            >
          </div>
        </div>
        <router-link to="/contact"
          ><span class="nav-item nav-link">Contact</span></router-link
        >
      </div>
      <router-link to="/about"
        ><span class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >Join Now<i class="fa fa-arrow-right ms-3"></i></span
      ></router-link>
    </div>
  </nav>
</template>
