<script lang="ts">
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  interface Props {
    value: string | number;
    label: string;
    icon: string;
    delay?: number;
  }
  
  let { value, label, icon, delay = 0 }: Props = $props();
</script>

<div 
  class="stats-card"
  in:scale={{ delay, duration: 600, easing: quintOut }}
>
  <div class="stats-icon">{icon}</div>
  <div class="stats-content">
    <div class="stats-value">{value}</div>
    <div class="stats-label">{label}</div>
  </div>
</div>

<style>
  .stats-card {
    background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(26, 60, 110, 0.1);
  }
  
  .stats-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
    border-color: rgba(26, 60, 110, 0.2);
  }
  
  .stats-icon {
    font-size: 3rem;
    background: linear-gradient(135deg, #a6e3ff 0%, #5FC3BF 100%);
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  .stats-content {
    flex: 1;
  }
  
  .stats-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a3c6e;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  
  .stats-label {
    font-size: 1rem;
    color: #4a5568;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  @media (max-width: 768px) {
    .stats-card {
      padding: 1.5rem;
      gap: 1rem;
    }
    
    .stats-icon {
      width: 60px;
      height: 60px;
      font-size: 2rem;
    }
    
    .stats-value {
      font-size: 2rem;
    }
    
    .stats-label {
      font-size: 0.875rem;
    }
  }
  
  @media (max-width: 480px) {
    .stats-card {
      flex-direction: column;
      text-align: center;
    }
  }
</style>