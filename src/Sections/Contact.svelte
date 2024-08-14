<script>
  import company from '../static-content';
</script>

<div class="bg-[var(--background)] p-8" id="contact">
  <h2 class="text-center text-3xl font-bold mb-8">Contact me!</h2>
  <div class="flex flex-col md:flex-row justify-between">
    <div class="md:w-1/2 mb-8 md:mb-0">
      <h3 class="text-xl font-semibold mb-4">Contact info:</h3>
      <p class="text-lg font-bold mb-2">{company.contactName}</p>
      <div class="mb-2"><a href="tel:{company.phone}" class="text-lg font-bold  mb-2">{company.phone}</a></div>
      <div><a href="mailto:{company.email}" class="text-lg font-bold  mb-4">{company.email}</a></div>
    </div>
  </div>
</div>

<style>
  #contact {
    scroll-margin-top: 24px;
    min-height: 100vh;
  }

  h2 {
    color: var(--header-color);
  }

  p {
    color: var(--primary-color);
  }

  a {
    font-weight: 600;
  }

.p-8 {
  padding: 2rem;
}

.text-center {
  text-align: center;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.font-bold {
  font-weight: 700;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.justify-between {
  justify-content: space-between;
}

.mb-8 {
  margin-bottom: 2rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-semibold {
  font-weight: 600;
}

.font-bold {
  font-weight: 700;
}


.text-lg {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.w-1\/2 {
  width: 50%;
}

.p-2 {
  padding: 0.5rem;
}

.border {
  border-width: 1px;
}

.rounded {
  border-radius: 0.25rem;
}

.w-full {
  width: 100%;
}
</style>
