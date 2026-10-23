const STORAGE_KEY = "baguioTripJournal2026";

const itinerary = [
  {
    date: "November 28, 2026", subtitle: "Arrival · viewpoints · food and night market",
    items: [
      ["3:15 AM", "Depart Manila for Baguio", "Start the trip. Keep snacks and a jacket in your day bag.", "Manila to Baguio bus terminal"],
      ["8:15 AM", "Estimated arrival in Baguio", "Arrival time may vary depending on traffic.", "Baguio City"],
      ["8:30–9:30 AM", "Drop off bags at the hotel", "Confirm luggage storage with your hotel in advance.", "Your hotel in Baguio"],
      ["Morning", "Breakfast — Choco-laté de Batirol", "A cozy breakfast stop at Camp John Hay. Check opening hours.", "Choco-laté de Batirol, Camp John Hay"],
      ["Late morning", "Mines View Park", "Enjoy the overlook and browse local souvenir stalls. Entrance fee: verify before visiting.", "Mines View Park, Baguio"],
      ["Late morning", "Wright Park", "Take a relaxed stroll and see the Pool of Pines.", "Wright Park, Baguio"],
      ["12:00 PM", "Lunch — Omu", "Japanese-style omurice and a sit-down lunch.", "Omu Philippines, Baguio"],
      ["1:30 PM", "Hotel check-in and rest", "Take a breather after the early start.", "Your hotel in Baguio"],
      ["3:00 PM", "Ili-Likha Artists Village", "Explore the art-filled space and food stalls.", "Ili-Likha Artists Village, Baguio"],
      ["5:00 PM", "Cornelia St. Bistro House", "Coffee, dessert, photos, or an early bite.", "Cornelia St. Bistro House, Baguio"],
      ["Evening", "Dinner — Baguio Night Market", "Street food and ukay-ukay browsing. The market is an evening stop; check current hours.", "Baguio Night Market, Harrison Road"],
      ["Afterward", "Movie marathon at the hotel", "Put your feet up and enjoy a cozy night in.", "Your hotel in Baguio"]
    ]
  },
  {
    date: "November 29, 2026", subtitle: "Pine trees · strawberries · coffee",
    items: [
      ["7:30 AM", "Breakfast at the hotel", "Have a filling breakfast before heading out.", "Your hotel in Baguio"],
      ["8:30 AM", "Camp John Hay stroll", "Walk among the pine trees and explore the historical core.", "Camp John Hay, Baguio"],
      ["10:00 AM", "La Trinidad Strawberry Farm", "Visit the market, look for seasonal strawberries, and try local treats.", "La Trinidad Strawberry Farm, Benguet"],
      ["12:30 PM", "Lunch — Grumpy Joe", "A popular casual restaurant; weekend queues are possible.", "Grumpy Joe, Baguio"],
      ["2:30 PM", "Foam Coffee + Roastery", "Take a coffee break on Legarda Road.", "Foam Coffee + Roastery, Legarda Road, Baguio"],
      ["4:00 PM", "Burnham Park", "Walk around the lagoon or rent a boat if available.", "Burnham Park, Baguio"],
      ["6:00 PM", "Dinner — 50's Diner", "Classic diner-style comfort food.", "50's Diner, Baguio"],
      ["Evening", "Return to the hotel", "Rest, sort photos, and get ready for checkout day.", "Your hotel in Baguio"]
    ]
  },
  {
    date: "November 30, 2026", subtitle: "A slow morning · garden stroll · pasalubong",
    items: [
      ["8:00 AM", "Seollem Cafe", "Breakfast or coffee. Check the current opening hours before visiting.", "Seollem Cafe, Baguio"],
      ["9:15 AM", "Baguio Botanical Garden", "Explore the gardens and Cordillera-inspired displays.", "Baguio Botanical Garden, Baguio"],
      ["10:45 AM", "Victoria Bakery", "Pick up bread or pastries, after confirming the branch and opening hours.", "Victoria Bakery, Baguio"],
      ["11:30 AM", "Hotel checkout and collect luggage", "Leave enough time to reach the bus terminal.", "Your hotel in Baguio"],
      ["Departure", "Bus back to Manila", "Set this time based on your actual bus ticket; don't cut it too close.", "Baguio bus terminal"]
    ]
  }
];

const checklistData = {
  essentials: ["IDs / documents", "Cash and debit/credit card", "Phone and charger", "Power bank", "Warm jacket and comfy outfits", "Toiletries", "Personal medication, if needed", "Umbrella or compact raincoat", "Sunscreen", "Camera / enough phone storage", "Bus tickets and hotel booking", "Reusable water bottle"],
  day1: ["Confirm hotel luggage drop", "Check Mines View Park opening / fees", "Save restaurant locations offline", "Bring a light jacket for the evening", "Keep small cash for Night Market", "Charge phone before leaving the hotel"],
  day2: ["Bring a tote bag for strawberry purchases", "Check Strawberry Farm conditions", "Wear comfortable walking shoes", "Bring water and a power bank", "Allow extra time for weekend traffic"],
  day3: ["Pack and check under the bed", "Confirm café and bakery opening times", "Buy pasalubong", "Check out and collect luggage", "Confirm bus departure and terminal", "Keep ticket and ID easy to reach"]
};

const places = [
  ["Mines View Park", "Baguio City, Benguet", "Mines View Park Baguio"],
  ["Wright Park", "Baguio City, Benguet", "Wright Park Baguio"],
  ["Camp John Hay", "Baguio City, Benguet", "Camp John Hay Baguio"],
  ["La Trinidad Strawberry Farm", "La Trinidad, Benguet", "La Trinidad Strawberry Farm"],
  ["Burnham Park", "Baguio City, Benguet", "Burnham Park Baguio"],
  ["Baguio Botanical Garden", "Baguio City, Benguet", "Baguio Botanical Garden Baguio"],
  ["Ili-Likha Artists Village", "Baguio City, Benguet", "Ili-Likha Artists Village Baguio"],
  ["Baguio Night Market", "Harrison Road, Baguio City", "Baguio Night Market"]
];

const starterBudget = [
  { id: 1, category: "Transportation", planned: 3000, spent: 0, notes: "Bus, terminal, local rides" },
  { id: 2, category: "Accommodation", planned: 5000, spent: 0, notes: "Hotel for 2 nights" },
  { id: 3, category: "Meals", planned: 4000, spent: 0, notes: "Restaurants and cafés" },
  { id: 4, category: "Entrance Fees", planned: 500, spent: 0, notes: "Parks and attractions" },
  { id: 5, category: "Activities", planned: 1000, spent: 0, notes: "Tours, rentals, souvenirs" },
  { id: 6, category: "Others", planned: 1500, spent: 0, notes: "Pasalubong and misc." }
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") return {
      checked: saved.checked || {},
      budget: Array.isArray(saved.budget) ? saved.budget : starterBudget.map(x => ({ ...x })),
      expenses: Array.isArray(saved.expenses) ? saved.expenses : [],
      planned: saved.planned || {}
    };
  } catch (error) { console.warn("Could not load saved trip data.", error); }
  return { checked: {}, budget: starterBudget.map(x => ({ ...x })), expenses: [], planned: {} };
}
let state = loadState();
let activeDay = 0;
let activeChecklist = "essentials";
let toastTimer;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    showToast("Could not save in this browser. Check storage settings.");
  }
}
function money(value) {
  return new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 2 }).format(Number(value) || 0);
}
function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function mapsUrl(query) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query); }

function renderItinerary() {
  const day = itinerary[activeDay];
  document.querySelectorAll(".day-tab").forEach((button, index) => {
    button.classList.toggle("selected", index === activeDay);
    button.setAttribute("aria-selected", String(index === activeDay));
  });
  const panel = document.getElementById("timelinePanel");
  panel.innerHTML = `<h3 class="timeline-date">${day.date}<small>${day.subtitle}</small></h3><ol class="timeline">${day.items.map(([time, title, note, location]) => `
    <li class="timeline-item">
      <span class="timeline-time">${safeText(time)}</span>
      <div><p class="timeline-title">${safeText(title)}</p><p class="timeline-note">${safeText(note)}</p>
      <a class="timeline-location" href="${mapsUrl(location)}" target="_blank" rel="noopener">↗ Open in Google Maps</a></div>
    </li>`).join("")}</ol>`;
}
function renderChecklist() {
  const items = checklistData[activeChecklist] || checklistData.essentials;
  document.querySelectorAll(".check-tab").forEach(button => button.classList.toggle("selected", button.dataset.list === activeChecklist));
  const container = document.getElementById("checklistItems");
  container.innerHTML = items.map((item, index) => {
    const key = `${activeChecklist}:${index}`;
    const checked = Boolean(state.checked[key]);
    return `<label class="check-row"><input type="checkbox" data-check-key="${key}" ${checked ? "checked" : ""}><span class="custom-check"></span><span class="check-text">${safeText(item)}</span></label>`;
  }).join("");
  const done = items.filter((_, index) => state.checked[`${activeChecklist}:${index}`]).length;
  document.getElementById("checkProgress").textContent = `${done} / ${items.length} done`;
}
function renderPlaces() {
  document.getElementById("placeList").innerHTML = places.map(([name, area, query], index) => `
    <a class="place-link" href="${mapsUrl(query)}" target="_blank" rel="noopener">
      <span class="place-number">${index + 1}</span><span><strong>${safeText(name)}</strong><small>${safeText(area)} · Open in Google Maps</small></span><span class="place-arrow">↗</span>
    </a>`).join("");
}
function renderBudget() {
  const body = document.getElementById("budgetRows");
  body.innerHTML = state.budget.map(row => `
    <tr data-budget-id="${row.id}">
      <td><input aria-label="Category" data-field="category" value="${safeText(row.category)}" maxlength="45"></td>
      <td><input aria-label="Planned amount" data-field="planned" type="number" min="0" step="50" value="${Number(row.planned) || 0}"></td>
      <td><input aria-label="Spent amount" data-field="spent" type="number" min="0" step="1" value="${Number(row.spent) || 0}"></td>
      <td><input aria-label="Notes" data-field="notes" value="${safeText(row.notes || "")}" maxlength="100"></td>
      <td><button class="delete-row" data-delete-budget="${row.id}" aria-label="Delete ${safeText(row.category)} category" title="Delete category">×</button></td>
    </tr>`).join("");
  updateBudgetTotals();
}
function updateBudgetTotals() {
  const planned = state.budget.reduce((sum, row) => sum + (Number(row.planned) || 0), 0);
  const spentCategories = state.budget.reduce((sum, row) => sum + (Number(row.spent) || 0), 0);
  const expenses = state.expenses.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  const spent = spentCategories + expenses;
  const remaining = planned - spent;
  document.getElementById("plannedTotal").textContent = money(planned);
  document.getElementById("spentTotal").textContent = money(spent);
  document.getElementById("remainingTotal").textContent = money(remaining);
  document.getElementById("budgetMessage").textContent = remaining < 0 ? "Over the planned budget" : remaining < planned * .2 ? "Keep an eye on spending" : "A little room for memories";
}
function renderExpenses() {
  // Added expenses are represented as extra rows below the category rows.
  document.querySelectorAll(".expense-detail-row").forEach(row => row.remove());
  const body = document.getElementById("budgetRows");
  state.expenses.forEach(expense => {
    const tr = document.createElement("tr");
    tr.className = "expense-detail-row";
    tr.innerHTML = `<td><strong>${safeText(expense.name)}</strong><small style="display:block;color:#888">${safeText(expense.category)}</small></td><td>—</td><td>${money(expense.amount)}</td><td>${safeText(expense.notes || "Added expense")}</td><td><button class="delete-row" data-delete-expense="${expense.id}" aria-label="Delete expense">×</button></td>`;
    body.appendChild(tr);
  });
  updateBudgetTotals();
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function updateCountdown() {
  const target = new Date("2026-11-28T03:15:00+08:00").getTime();
  const now = Date.now();
  const diff = target - now;
  let values;
  if (diff <= 0) {
    const end = new Date("2026-12-01T00:00:00+08:00").getTime();
    if (now < end) {
      values = ["Trip time!", "Enjoy", "every", "moment"];
    } else {
      values = ["Trip", "memories", "made", "♡"];
    }
  } else {
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    values = [days, hours, mins, secs];
  }
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  document.getElementById("countdownGrid").innerHTML = values.map((value, i) => `<div><strong>${value}</strong><span>${labels[i] || ""}</span></div>`).join("");
  const hero = document.getElementById("heroCountdown");
  hero.textContent = diff <= 0 ? "Our Baguio weekend is here ♡" : `${values[0]} days, ${values[1]} hours to go`;
}
function init() {
  renderItinerary(); renderChecklist(); renderPlaces(); renderBudget(); renderExpenses(); updateCountdown();
  setInterval(updateCountdown, 1000);

  document.querySelectorAll(".day-tab").forEach(button => button.addEventListener("click", () => {
    activeDay = Number(button.dataset.day); renderItinerary();
  }));
  document.querySelectorAll(".check-tab").forEach(button => button.addEventListener("click", () => {
    activeChecklist = button.dataset.list; renderChecklist();
  }));
  document.getElementById("checklistItems").addEventListener("change", event => {
    const input = event.target.closest("input[data-check-key]");
    if (!input) return;
    state.checked[input.dataset.checkKey] = input.checked;
    saveState(); renderChecklist();
  });
  document.getElementById("budgetRows").addEventListener("change", event => {
    const input = event.target.closest("input[data-field]");
    if (!input) return;
    const rowElement = input.closest("[data-budget-id]");
    const row = state.budget.find(item => String(item.id) === rowElement.dataset.budgetId);
    if (!row) return;
    const field = input.dataset.field;
    row[field] = ["planned", "spent"].includes(field) ? Math.max(0, Number(input.value) || 0) : input.value;
    saveState(); renderBudget(); renderExpenses();
    showToast("Budget updated and saved.");
  });
  document.getElementById("budgetRows").addEventListener("click", event => {
    const delCategory = event.target.closest("[data-delete-budget]");
    const delExpense = event.target.closest("[data-delete-expense]");
    if (delCategory) {
      state.budget = state.budget.filter(row => String(row.id) !== delCategory.dataset.deleteBudget);
      saveState(); renderBudget(); renderExpenses(); showToast("Budget category removed.");
    }
    if (delExpense) {
      state.expenses = state.expenses.filter(item => String(item.id) !== delExpense.dataset.deleteExpense);
      saveState(); renderBudget(); renderExpenses(); showToast("Expense removed.");
    }
  });
  document.getElementById("addExpenseBtn").addEventListener("click", () => document.getElementById("expenseDialog").showModal());
  document.getElementById("expenseForm").addEventListener("submit", event => {
    if (event.submitter && event.submitter.value === "cancel") return;
    event.preventDefault();
    const name = document.getElementById("expenseName").value.trim();
    const amount = Number(document.getElementById("expenseAmount").value);
    if (!name || !Number.isFinite(amount) || amount <= 0) { showToast("Enter an expense name and a valid amount."); return; }
    state.expenses.push({
      id: Date.now(), name, category: document.getElementById("expenseCategory").value,
      amount, notes: document.getElementById("expenseNotes").value.trim()
    });
    saveState(); renderBudget(); renderExpenses();
    document.getElementById("expenseForm").reset();
    document.getElementById("expenseDialog").close();
    showToast("Expense added and saved.");
  });
  document.getElementById("resetBudgetBtn").addEventListener("click", () => {
    if (!confirm("Reset all budget categories and expenses to the starter budget?")) return;
    state.budget = starterBudget.map(row => ({ ...row }));
    state.expenses = [];
    saveState(); renderBudget(); renderExpenses(); showToast("Budget reset.");
  });

  document.querySelectorAll(".gallery-card").forEach(card => card.addEventListener("click", () => {
    document.getElementById("lightboxImage").src = card.dataset.image;
    document.getElementById("lightboxCaption").textContent = card.dataset.caption;
    document.getElementById("lightbox").showModal();
  }));
  const lightbox = document.getElementById("lightbox");
  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
  }));

  const sections = [...document.querySelectorAll("main section[id]")];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  sections.forEach(section => observer.observe(section));
}
document.addEventListener("DOMContentLoaded", init);
