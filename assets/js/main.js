/* Jotella Aged Home Care — site script */

/* ------------------------------------------------------------------
   SETTINGS — edit these if your details change
   ------------------------------------------------------------------ */
const JOTELLA = {
  whatsappNumber: "233599712662",            // 059 971 2662 in international format
  email: "jotellaagedhomecare@gmail.com",
  // Create a free form at https://formspree.io, then paste its ID here (e.g. "xyzabcd").
  // While empty, "Send by email" opens the visitor's email app instead.
  formspreeId: ""
};

document.documentElement.classList.add("js");

/* ------------------------------------------------------------------
   Icons (Lucide-style line icons, inlined so the site works offline)
   Usage in HTML: <i data-icon="phone"></i>
   ------------------------------------------------------------------ */
const ICONS = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  whatsapp: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.2 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.6l-.5.6c-.1.1-.1.3 0 .5.6 1 1.4 1.8 2.4 2.4.2.1.4.1.5 0l.6-.5c.2-.1.4-.2.6-.1l1.5.6c.3.1.4.3.4.5v.5c0 .3-.1.6-.6.8-.6.3-1.6.5-3-.2-1.5-.7-2.7-1.9-3.4-3.4-.6-1.4-.4-2.4-.2-3Z"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  "hand-heart": '<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  bandage: '<path d="M10 10.01h.01"/><path d="M10 14.01h.01"/><path d="M14 10.01h.01"/><path d="M14 14.01h.01"/><path d="M18 6v12"/><path d="M6 6v12"/><rect x="2" y="6" width="20" height="12" rx="2"/>',
  smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
  briefcase: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  messages: '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  "graduation-cap": '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  footprints: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
  hand: '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
  waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  "alert-circle": '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  "clipboard": '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>'
};

function renderIcons(root = document) {
  root.querySelectorAll("i[data-icon]").forEach((el) => {
    const name = el.dataset.icon;
    if (!ICONS[name]) return;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("class", ["icon", el.className].filter(Boolean).join(" "));
    svg.innerHTML = ICONS[name];
    el.replaceWith(svg);
  });
}
renderIcons();

/* ------------------------------------------------------------------
   Header: mobile menu + scrolled state
   ------------------------------------------------------------------ */
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });
  window.matchMedia("(min-width: 960px)").addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
}

if (header) {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ------------------------------------------------------------------
   Reveal on scroll (skipped when the visitor prefers reduced motion)
   ------------------------------------------------------------------ */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealEls = document.querySelectorAll(".reveal");
if (!reduceMotion && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 40}ms`;
    io.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

/* ------------------------------------------------------------------
   Team carousel — slides left to right, pauses on hover/focus,
   and stays still for visitors who prefer reduced motion
   ------------------------------------------------------------------ */
const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const DIRECTION = "right"; // "right" = cards travel left → right; "left" = right → left
  const INTERVAL = 4500;     // ms between slides
  const DURATION = 650;      // ms for each slide animation

  const viewport = carousel.querySelector(".team-carousel__viewport");
  const track = carousel.querySelector(".team");
  const toggleBtn = carousel.querySelector("[data-toggle]");
  let busy = false;
  let timer = null;
  let userPaused = reduceMotion;
  let hovering = false;
  let focused = false;
  let onScreen = false;

  const stepSize = () => {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return track.firstElementChild.getBoundingClientRect().width + gap;
  };

  const animate = (from, to, done) => {
    track.style.transition = "none";
    track.style.transform = `translateX(${from}px)`;
    void track.offsetWidth; // apply the start position before animating
    track.style.transition = reduceMotion ? "none" : `transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    track.style.transform = `translateX(${to}px)`;
    setTimeout(() => {
      if (done) done();
      busy = false;
    }, reduceMotion ? 0 : DURATION + 20);
  };

  // Previous card enters from the left; the row moves right.
  const slideRight = () => {
    if (busy) return;
    busy = true;
    track.prepend(track.lastElementChild);
    animate(-stepSize(), 0);
  };

  // Next card enters from the right; the row moves left.
  const slideLeft = () => {
    if (busy) return;
    busy = true;
    animate(0, -stepSize(), () => {
      track.append(track.firstElementChild);
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
    });
  };

  const autoStep = () => (DIRECTION === "right" ? slideRight() : slideLeft());

  const sync = () => {
    const shouldRun = !userPaused && !hovering && !focused && onScreen && !document.hidden;
    if (shouldRun && !timer) timer = setInterval(autoStep, INTERVAL);
    if (!shouldRun && timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  const setPaused = (paused) => {
    userPaused = paused;
    toggleBtn.dataset.paused = String(paused);
    toggleBtn.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow");
    sync();
  };

  // Manual moves restart the autoplay countdown so the next slide doesn't follow immediately
  const manual = (move) => () => {
    if (timer) { clearInterval(timer); timer = null; }
    if (busy) setTimeout(move, DURATION); else move();
    sync();
  };
  carousel.querySelector("[data-prev]").addEventListener("click", manual(slideRight));
  carousel.querySelector("[data-next]").addEventListener("click", manual(slideLeft));
  toggleBtn.addEventListener("click", () => setPaused(!userPaused));

  viewport.addEventListener("mouseenter", () => { hovering = true; sync(); });
  viewport.addEventListener("mouseleave", () => { hovering = false; sync(); });
  carousel.addEventListener("focusin", () => { focused = true; sync(); });
  carousel.addEventListener("focusout", (e) => {
    if (!carousel.contains(e.relatedTarget)) { focused = false; sync(); }
  });
  document.addEventListener("visibilitychange", sync);

  // Swipe on touch screens
  let startX = null;
  viewport.addEventListener("pointerdown", (e) => { startX = e.clientX; });
  viewport.addEventListener("pointerup", (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) < 40) return;
    manual(dx > 0 ? slideRight : slideLeft)();
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; sync(); }, { threshold: 0.3 }).observe(carousel);
  } else {
    onScreen = true;
  }
  setPaused(userPaused);
}

/* Footer year */
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

/* ------------------------------------------------------------------
   Contact form — WhatsApp or email
   ------------------------------------------------------------------ */
const form = document.getElementById("care-form");

if (form) {
  const summary = document.getElementById("error-summary");
  const summaryList = summary.querySelector("ul");
  const status = document.getElementById("form-status");

  const rules = {
    name: (v) => (v.trim().length >= 2 ? "" : "Please enter your full name."),
    phone: (v) =>
      v.replace(/[^\d]/g, "").length >= 9 ? "" : "Please enter a phone number we can reach you on, e.g. 024 123 4567.",
    email: (v) =>
      !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please check the email address, e.g. name@example.com.",
    message: (v) => (v.trim().length >= 10 ? "" : "Please tell us a little about the care you need (at least 10 characters).")
  };

  const showFieldError = (field, msg) => {
    const err = document.getElementById(`${field.id}-error`);
    field.setAttribute("aria-invalid", msg ? "true" : "false");
    if (err) {
      err.querySelector("span").textContent = msg;
      err.classList.toggle("is-visible", Boolean(msg));
    }
  };

  const validateField = (field) => {
    const rule = rules[field.name];
    if (!rule) return "";
    const msg = rule(field.value);
    showFieldError(field, msg);
    return msg;
  };

  Object.keys(rules).forEach((name) => {
    const field = form.elements[name];
    field.addEventListener("blur", () => {
      if (field.value || field.getAttribute("aria-invalid") === "true") validateField(field);
    });
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
    });
  });

  const validateAll = () => {
    const errors = [];
    Object.keys(rules).forEach((name) => {
      const field = form.elements[name];
      const msg = validateField(field);
      if (msg) errors.push({ field, msg });
    });
    summaryList.innerHTML = "";
    if (errors.length) {
      errors.forEach(({ field, msg }) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${field.id}`;
        a.textContent = msg;
        a.addEventListener("click", (e) => {
          e.preventDefault();
          field.focus();
        });
        li.appendChild(a);
        summaryList.appendChild(li);
      });
      summary.classList.add("is-visible");
      summary.focus();
    } else {
      summary.classList.remove("is-visible");
    }
    return errors.length === 0;
  };

  const buildMessage = () => {
    const d = new FormData(form);
    const lines = [
      "Hello Jotella Aged Home Care,",
      "",
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      d.get("email") ? `Email: ${d.get("email")}` : null,
      `Care is for: ${d.get("care_for")}`,
      `Service of interest: ${d.get("service")}`,
      `Preferred contact: ${d.get("contact_pref")}`,
      "",
      `${d.get("message")}`
    ];
    return lines.filter((l) => l !== null).join("\n");
  };

  const showStatus = (type, text) => {
    status.className = `form-status form-status--${type} is-visible`;
    status.innerHTML = "";
    const icon = document.createElement("i");
    icon.dataset.icon = type === "success" ? "check-circle" : "alert-circle";
    const span = document.createElement("span");
    span.textContent = text;
    status.append(icon, span);
    renderIcons(status);
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.classList.remove("is-visible");
    if (!validateAll()) return;

    const via = e.submitter && e.submitter.value === "email" ? "email" : "whatsapp";
    const text = buildMessage();

    if (via === "whatsapp") {
      window.open(`https://wa.me/${JOTELLA.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      showStatus("success", "WhatsApp has opened with your message. Just press send and we'll reply as soon as we can.");
      return;
    }

    const subject = `Care enquiry from ${form.elements.name.value.trim()}`;

    if (!JOTELLA.formspreeId) {
      window.location.href = `mailto:${JOTELLA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      showStatus("success", "Your email app should now be open with your message ready to send.");
      return;
    }

    const btn = e.submitter;
    const label = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = "Sending…";
    try {
      const res = await fetch(`https://formspree.io/f/${JOTELLA.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: (() => {
          const fd = new FormData(form);
          fd.append("_subject", subject);
          return fd;
        })()
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      showStatus("success", "Thank you, your message has been sent. A member of our team will contact you shortly.");
    } catch {
      showStatus("error", `Sorry, your message could not be sent. Please try again, or call us on 059 971 2662.`);
    } finally {
      btn.disabled = false;
      btn.innerHTML = label;
    }
  });
}
