<script>
    export let version = "v0.1.65";
    export let lastUpdated = "2025-09-14 - 14:00"; //"2025-05-19 - 23:58";
  </script>
  
  <div class="dev-banner">
    <strong>🚧 Page in Development</strong>
    <span>Version: {version}</span>
    <span>Last Updated: {lastUpdated}</span>
  </div>
  
  <style>
    .dev-banner {
      background-color: #fff3cd;
      color: #856404;
      border: 1px solid #ffeeba;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      border-radius: 4px;
      margin: 1rem auto;
      width: fit-content;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
  
    .dev-banner span {
      font-weight: normal;
      white-space: nowrap;
    }
  </style>
  