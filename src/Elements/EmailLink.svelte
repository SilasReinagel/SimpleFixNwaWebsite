<script>
  import company from '../static-content.js';
</script>

<div class="center-h bottom">
  <a class="row" href="mailto:{company.email}" plausible-event-name="Begin Email">
    <div class="email-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-label="Email Icon">
        <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    </div>
    <h2 class="email-address">
      {company.email}
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

  .email-icon {
    color: var(--secondary-color);
    margin-right: 12px;
    margin-top: 2px;
  }

  .email-address {
    color: var(--secondary-color);
    margin: 0;
  }

  .row:hover .email-icon, .row:hover .email-address {
    color: var(--secondary-color-hover);
  }

  .row:active .email-icon, .row:active .email-address {
    color: var(--secondary-color-press);
  }
</style>