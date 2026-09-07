<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

interface OwnerSocialLink {
  label: string
  icon: 'youtube' | 'facebook'
  link: string
}

interface OwnerProfile {
  name: string
  title: string
  image: string
  socials: OwnerSocialLink[]
}

const { frontmatter } = useData()
const owner = computed(() => frontmatter.value.owner as OwnerProfile | undefined)

function iconPath(icon: OwnerSocialLink['icon']) {
  return withBase(`/icons/${icon}.svg`)
}
</script>

<template>
  <aside
    v-if="owner"
    class="owner-profile"
    aria-labelledby="owner-profile-name"
  >
    <img
      class="owner-profile__portrait"
      :src="withBase(owner.image)"
      :alt="`${owner.name}, ${owner.title}`"
      width="168"
      height="168"
    >

    <div class="owner-profile__details">
      <p id="owner-profile-name" class="owner-profile__name">
        {{ owner.name }}
      </p>
      <p class="owner-profile__title">{{ owner.title }}</p>

      <nav class="owner-profile__socials" aria-label="Social profiles">
        <a
          v-for="social in owner.socials"
          :key="social.link"
          class="owner-profile__social-link"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${owner.name} on ${social.label}`"
        >
          <img
            :src="iconPath(social.icon)"
            alt=""
            width="18"
            height="18"
            aria-hidden="true"
          >
          <span>{{ social.label }}</span>
        </a>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.owner-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  margin-top: 18px;
  padding: 8px 12px 8px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  text-align: left;
}

.owner-profile__portrait {
  flex: 0 0 auto;
  width: 56px;
  height: 56px;
  border: 2px solid var(--vp-c-bg);
  border-radius: 50%;
  object-fit: cover;
}

.owner-profile__details {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 12px;
  align-items: center;
}

.owner-profile__name,
.owner-profile__title {
  margin: 0;
}

.owner-profile__name {
  color: var(--vp-c-text-1);
  line-height: 1.3;
  font-size: 14px;
  font-weight: 700;
}

.owner-profile__title {
  padding-top: 1px;
  color: var(--vp-c-text-2);
  line-height: 1.3;
  font-size: 12px;
  font-weight: 500;
}

.owner-profile__socials {
  display: flex;
  grid-column: 2;
  grid-row: 1 / span 2;
  justify-content: center;
  gap: 6px;
}

.owner-profile__social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  background: var(--vp-c-bg);
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.owner-profile__social-link span {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.owner-profile__social-link:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px var(--vp-c-brand-soft);
  transform: translateY(-1px);
}

.owner-profile__social-link:focus-visible {
  outline: 3px solid var(--vp-c-brand-soft);
  outline-offset: 2px;
}

@media (max-width: 639px) {
  .owner-profile {
    gap: 9px;
    margin: 16px auto 0;
    padding: 7px 9px 7px 7px;
  }

  .owner-profile__portrait {
    width: 48px;
    height: 48px;
  }

  .owner-profile__details {
    column-gap: 8px;
  }

  .owner-profile__name {
    font-size: 13px;
  }

  .owner-profile__social-link {
    width: 30px;
    height: 30px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .owner-profile__social-link {
    transition: none;
  }
}
</style>
