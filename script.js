const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

function animateCount(id, to) {
  const el = document.getElementById(id);
  let n = 0;
  const step = Math.max(1, Math.floor(to / 40));
  const t = setInterval(() => {
    n += step;
    if (n >= to) { n = to; clearInterval(t); }
    el.textContent = n;
  }, 20);
}

animateCount("years", 6);
animateCount("tech", 8);
animateCount("coffee", 120);
