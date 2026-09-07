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
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(292px, calc(100% - 20px));
  padding: 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 88%, transparent);
  box-shadow: 0 18px 46px rgba(15, 108, 189, 0.16);
  text-align: center;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(12px);
}

.owner-profile__portrait {
  width: 148px;
  height: 148px;
  border: 4px solid var(--vp-c-bg);
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(12, 59, 94, 0.18);
  object-fit: cover;
}

.owner-profile__details {
  padding-top: 10px;
}

.owner-profile__name,
.owner-profile__title {
  margin: 0;
}

.owner-profile__name {
  color: var(--vp-c-text-1);
  line-height: 1.35;
  font-size: 17px;
  font-weight: 700;
}

.owner-profile__title {
  padding-top: 2px;
  color: var(--vp-c-text-2);
  line-height: 1.4;
  font-size: 14px;
  font-weight: 500;
}

.owner-profile__socials {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 12px;
}

.owner-profile__social-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 34px;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  line-height: 1;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
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
    width: 250px;
    padding: 14px;
    border-radius: 20px;
  }

  .owner-profile__portrait {
    width: 132px;
    height: 132px;
  }

  .owner-profile__details {
    padding-top: 8px;
  }

  .owner-profile__socials {
    padding-top: 9px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .owner-profile__social-link {
    transition: none;
  }
}
</style>
