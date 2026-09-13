<script setup lang="ts">
const menuOpen = ref(false)

const assets = [
  { title: 'Grassland & Dirt Pack', textures: '69', image: '/images/grassland-dirt.png', tone: 'olive' },
  { title: 'Desert & Sand Pack', textures: '37', image: '/images/desert-sand.png', tone: 'sand' },
  { title: 'Forest & Jungle Pack', textures: '47', image: '/images/forest-jungle.png', tone: 'forest' },
  { title: 'Snow & Frozen Pack', textures: '37', image: '/images/snow-frozen.png', tone: 'ice' },
  { title: 'Complete Terrain Texture Bundle', textures: '190', image: '/images/bundle.png', tone: 'bundle', featured: true },
]

const closeMenu = () => { menuOpen.value = false }
const responsiveSrcset = (path: string) => {
  const base = path.replace('.png', '')
  return [768, 1280, 1920, 2560].map((width) => `${base}-${width}.webp ${width}w`).join(', ')
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand brand-logo" href="#top" aria-label="POLTREA home" @click="closeMenu"><img src="/images/poltrea-logo-black.png" alt="POLTREA" width="526" height="120"></a>
      <button class="menu-button" :aria-expanded="menuOpen" aria-controls="site-nav" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
        <span /><span />
      </button>
      <nav id="site-nav" class="main-nav" :class="{ open: menuOpen }" aria-label="Main navigation">
        <a href="#assets" @click="closeMenu">Assets</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#support" @click="closeMenu">Support</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <picture class="hero-image"><source type="image/webp" :srcset="responsiveSrcset('/images/hero.png')" sizes="100vw"><img src="/images/hero.png" alt="Stylized Unity terrain environment with low-poly vegetation" width="3840" height="2160" fetchpriority="high" decoding="async"></picture>
        <div class="hero-shade" />
        <div class="hero-content">
          <p class="eyebrow light">POLTREA ASSETS</p>
          <h1 id="hero-title">Low Poly Assets<br>for Stylized Worlds</h1>
          <p class="hero-copy">Stylized environment assets crafted for Unity.</p>
          <a class="button button-light" href="#assets">Explore Assets <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero-caption"><span>Terrain texture</span><span>Vegetation</span><span>Environment</span></div>
      </section>

      <section id="assets" class="section assets-section" aria-labelledby="assets-title">
        <div class="section-intro split-intro">
          <div><p class="eyebrow">01 / ASSETS</p><h2 id="assets-title">Terrain textures,<br>ready for your world.</h2></div>
          <p>Practical terrain texture packs for Unity projects — designed to give stylized scenes a cohesive, finished feel.</p>
        </div>
        <div class="asset-grid">
          <article v-for="asset in assets" :key="asset.title" class="asset-card" :class="[{ featured: asset.featured }, asset.tone]">
            <div class="asset-image-wrap"><picture><source type="image/webp" :srcset="responsiveSrcset(asset.image)" :sizes="asset.featured ? '100vw' : '(max-width: 720px) 100vw, 50vw'"><img :src="asset.image" :alt="`${asset.title} preview`" width="3840" height="2160" loading="lazy" decoding="async"></picture></div>
            <div class="asset-details">
              <p class="asset-index">{{ String(assets.indexOf(asset) + 1).padStart(2, '0') }}</p>
              <h3>{{ asset.title }}</h3>
              <p>{{ asset.textures }} Textures</p>
              <span class="coming-soon">Coming soon</span>
            </div>
          </article>
        </div>
      </section>

      <section class="section feature-section" aria-labelledby="features-title">
        <div class="section-intro"><p class="eyebrow">BUILT FOR UNITY</p><h2 id="features-title">Built for Unity Terrain.</h2></div>
        <ul class="features-list">
          <li>Terrain Textures</li><li>Terrain Layers &amp; Materials</li><li>Demo &amp; Showcase Scenes</li><li>Unity 6 / URP Ready</li>
        </ul>
      </section>

      <section id="about" class="about-section" aria-labelledby="about-title">
        <div class="about-image-wrap"><picture><source type="image/webp" :srcset="responsiveSrcset('/images/about.png')" sizes="(max-width: 720px) 100vw, 54vw"><img src="/images/about.png" alt="Stylized low-poly forest environment for Unity" width="3840" height="2160" loading="lazy" decoding="async"></picture></div>
        <div class="about-content"><p class="eyebrow">02 / ABOUT</p><h2 id="about-title">Made for worlds<br>with character.</h2><p>Poltrea Assets creates stylized low-poly assets for game development.</p><p>Our focus is on environment assets designed to help developers build distinctive stylized worlds — from terrain textures to vegetation and 3D props.</p></div>
      </section>

      <section id="support" class="section support-section" aria-labelledby="support-title">
        <p class="eyebrow">03 / SUPPORT</p><h2 id="support-title">Let’s build something<br>worth exploring.</h2>
        <p>Questions, feedback, or product support?</p><a class="email-link" href="https://github.com/poltrea-assets/poltrea-assets.github.io/issues" target="_blank" rel="noreferrer">Open an issue on GitHub <span aria-hidden="true">↗</span></a>
      </section>
    </main>

    <footer class="site-footer"><div><a class="brand brand-logo" href="#top" aria-label="POLTREA home"><img src="/images/poltrea-logo-black.png" alt="POLTREA" width="526" height="120"></a><p>Poltrea Assets</p></div><p>© {{ new Date().getFullYear() }} Poltrea Assets</p><div class="footer-links"><a href="#assets">Unity Asset Store <span aria-hidden="true">↗</span></a></div></footer>
  </div>
</template>
