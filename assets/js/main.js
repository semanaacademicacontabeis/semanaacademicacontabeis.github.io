(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-primary-nav]');

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    navigation?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });

  navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const activateGroup = (button, selector, activeAttribute) => {
    const group = button.closest('[data-switcher]');
    if (!group) return;
    group.querySelectorAll('[data-switch]').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll(selector).forEach((panel) => {
      panel.hidden = panel.dataset[activeAttribute] !== button.dataset.switch;
    });
  };

  document.querySelectorAll('[data-switcher="schedule"] [data-switch]').forEach((button) => {
    button.addEventListener('click', () => activateGroup(button, '[data-schedule-panel]', 'schedulePanel'));
  });

  const scrollToScheduleDay = () => {
    if (!/^#dia-(19|20|21|22|23)$/.test(window.location.hash)) return;

    const target = document.querySelector(window.location.hash);
    if (!target) return;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    target.scrollIntoView({ block: 'start' });

    window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });
  };

  if (document.readyState === 'complete') {
    window.requestAnimationFrame(scrollToScheduleDay);
  } else {
    window.addEventListener('load', () => window.requestAnimationFrame(scrollToScheduleDay), { once: true });
  }

  window.addEventListener('hashchange', scrollToScheduleDay);
})();

