<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

interface JourneyStep {
  number: number
  title: string
  color: 'blue' | 'teal' | 'purple' | 'orange'
  link: string
}

const { frontmatter } = useData()
const steps = computed(() => (frontmatter.value.journey ?? []) as JourneyStep[])
</script>

<template>
  <nav v-if="steps.length" class="day-journey" aria-label="ลำดับ Section กิจกรรม">
    <div class="day-journey__grid">
      <a
        v-for="step in steps"
        :key="step.number"
        :class="['day-journey__card', `day-journey__card--${step.color}`]"
        :href="withBase(step.link)"
        :aria-label="`Section ${step.number}: ${step.title}`"
      >
        <span class="day-journey__number" aria-hidden="true">{{ step.number }}</span>
        <span class="day-journey__title">{{ step.title }}</span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.day-journey {
  padding: 0 24px 64px;
}

.day-journey__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  margin: 0 auto;
  max-width: 1152px;
}

.day-journey__card {
  --journey-color: var(--vp-c-brand-1);
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 92px;
  padding: 18px 20px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
}

.day-journey__card::before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  background: var(--journey-color);
  content: '';
}

.day-journey__card--blue {
  --journey-color: #0f6cbd;
}

.day-journey__card--teal {
  --journey-color: #008272;
}

.day-journey__card--purple {
  --journey-color: #5c2e91;
}

.day-journey__card--orange {
  --journey-color: #ca5010;
}

.day-journey__number {
  flex: 0 0 auto;
  color: var(--journey-color);
  line-height: 1;
  font-size: 30px;
  font-weight: 750;
}

.day-journey__title {
  line-height: 1.35;
  font-size: 17px;
  font-weight: 650;
}

.day-journey__card:hover {
  border-color: var(--journey-color);
  background: var(--vp-c-bg-alt);
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.09);
}

.day-journey__card:focus-visible {
  border-color: var(--journey-color);
  outline: 3px solid color-mix(in srgb, var(--journey-color) 28%, transparent);
  outline-offset: 3px;
}

.dark .day-journey__card--blue {
  --journey-color: #75b6e7;
}

.dark .day-journey__card--teal {
  --journey-color: #54b8aa;
}

.dark .day-journey__card--purple {
  --journey-color: #c6a7ea;
}

.dark .day-journey__card--orange {
  --journey-color: #f98845;
}

@media (min-width: 640px) {
  .day-journey {
    padding-right: 48px;
    padding-left: 48px;
  }

  .day-journey__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 960px) {
  .day-journey {
    padding-right: 64px;
    padding-left: 64px;
  }

  .day-journey__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (prefers-reduced-motion: reduce) {
  .day-journey__card {
    transition: none;
  }
}
</style>
