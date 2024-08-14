<script>
  import company from '../static-content.js';
</script>

<div class="center-h bottom">
  <a class="row" href="tel:{company.phone}">
    <div class="phone-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-label="Phone Icon">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.29 22 2 13.71 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.2 2.2z"/>
      </svg>
    </div>
    <h2 class="phone-number">
      {company.phone}
    </h2>
  </a>
</div>

<style>

  .bottom {
    height: 32px;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
  }

  .phone-icon {
    color: var(--secondary-color);
    margin-right: 12px;
    margin-top: 3px;
  }

  .phone-number {
    color: var(--secondary-color);
    margin: 0;
  }

  .row:hover .phone-icon, .row:hover .phone-number {
    color: var(--secondary-color-hover);
  }

  .row:active .phone-icon, .row:active .phone-number {
    color: var(--secondary-color-press);
  }
</style>