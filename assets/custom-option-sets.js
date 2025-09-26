const swatchInstances = [];

document.querySelectorAll('.product__controls-set').forEach(set => {
  set.querySelectorAll('.product__color-swatch').forEach(label => {
    const instance = tippy(label, {
      content: `<img class="tippy-swatch-img" loading="eager" src="${label.dataset.image}">`,
      allowHTML: true,
      theme: 'swatch',
    });

    swatchInstances.push(instance);
  });
});

function updateSwatchTooltips() {
  const isMobile = window.innerWidth <= 719;
  swatchInstances.forEach(instance => {
    instance[isMobile ? 'disable' : 'enable']();
  });
}

updateSwatchTooltips();
window.addEventListener('resize', updateSwatchTooltips);
