(function () {
  const data = window.CHINA_LNG_NEWS;
  let sourceFilter = "All";
  let themeFilter = "All";

  function byId(id) {
    return document.getElementById(id);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function unique(values) {
    return [...new Set(values)].sort();
  }

  function priorityRank(priority) {
    return { High: 0, Medium: 1, Manual: 2, Low: 3 }[priority] ?? 4;
  }

  function filteredItems() {
    return data.items
      .filter((item) => sourceFilter === "All" || item.source === sourceFilter)
      .filter((item) => themeFilter === "All" || item.theme === themeFilter)
      .sort((a, b) => {
        const priority = priorityRank(a.priority) - priorityRank(b.priority);
        if (priority) return priority;
        return b.date.localeCompare(a.date);
      });
  }

  function option(value, selected) {
    return `<option value="${escapeHtml(value)}" ${value === selected ? "selected" : ""}>${escapeHtml(value)}</option>`;
  }

  function init() {
    byId("news-scan-date").textContent = `Scan: ${data.meta.scanLabel}`;
    byId("news-source-count").textContent = `${data.coverage.length} required sources checked`;
    byId("news-note").textContent = data.meta.note;

    const sourceSelect = byId("news-source-filter");
    const themeSelect = byId("news-theme-filter");
    sourceSelect.innerHTML = [option("All", sourceFilter)]
      .concat(unique(data.items.map((item) => item.source)).map((source) => option(source, sourceFilter)))
      .join("");
    themeSelect.innerHTML = [option("All", themeFilter)]
      .concat(unique(data.items.map((item) => item.theme)).map((theme) => option(theme, themeFilter)))
      .join("");

    sourceSelect.addEventListener("change", () => {
      sourceFilter = sourceSelect.value;
      render();
    });
    themeSelect.addEventListener("change", () => {
      themeFilter = themeSelect.value;
      render();
    });

    renderCoverage();
    render();
  }

  function render() {
    const items = filteredItems();
    renderKpis(items);
    renderPriority(items);
    renderTable(items);
  }

  function renderKpis(items) {
    const highCount = data.items.filter((item) => item.priority === "High").length;
    const directSources = data.coverage.filter((source) => source.status === "Direct").length;
    const latest = data.items
      .filter((item) => item.priority !== "Manual")
      .map((item) => item.date)
      .sort()
      .at(-1);
    const cards = [
      ["Items Tracked", data.items.length, `${items.length} visible after filters`],
      ["Required Sources", data.coverage.length, `${directSources} direct public source pages`],
      ["High Priority", highCount, "Import, supply security, and trade-flow signals"],
      ["Latest Non-Manual Item", latest, data.meta.topic],
    ];
    byId("news-kpis").innerHTML = cards.map(([label, value, sub]) => `
      <article class="kpi">
        <div class="label">${escapeHtml(label)}</div>
        <div class="value">${escapeHtml(value)}</div>
        <div class="sub">${escapeHtml(sub)}</div>
      </article>
    `).join("");
  }

  function renderPriority(items) {
    const priorityItems = items.slice(0, 5);
    byId("news-priority-list").innerHTML = priorityItems.map((item) => `
      <article class="news-card">
        <div class="news-card-meta">
          <span>${escapeHtml(item.date)}</span>
          <span>${escapeHtml(item.source)}</span>
          <span class="priority-badge priority-${escapeHtml(item.priority.toLowerCase())}">${escapeHtml(item.priority)}</span>
        </div>
        <h3><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.headline)}</a></h3>
        <p>${escapeHtml(item.summary)}</p>
        <p class="news-action">${escapeHtml(item.action)}</p>
      </article>
    `).join("");
  }

  function renderCoverage() {
    byId("news-source-coverage").innerHTML = data.coverage.map((source) => `
      <div class="source news-source">
        <div class="source-title-row">
          <h3>${escapeHtml(source.source)}</h3>
          <span class="coverage-status coverage-${escapeHtml(source.status.toLowerCase())}">${escapeHtml(source.status)}</span>
        </div>
        <p><strong>Latest checked:</strong> ${escapeHtml(source.latestDate)}</p>
        <p>${escapeHtml(source.note)}</p>
        <p><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">Open source</a></p>
      </div>
    `).join("");
  }

  function renderTable(items) {
    byId("news-table").querySelector("tbody").innerHTML = items.map((item) => `
      <tr>
        <td>${escapeHtml(item.date)}</td>
        <td>${escapeHtml(item.source)}</td>
        <td>${escapeHtml(item.theme)}</td>
        <td><span class="priority-badge priority-${escapeHtml(item.priority.toLowerCase())}">${escapeHtml(item.priority)}</span></td>
        <td class="news-headline"><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.headline)}</a></td>
        <td>${escapeHtml(item.summary)}</td>
        <td>${escapeHtml(item.action)}</td>
        <td>${escapeHtml(item.access)}</td>
      </tr>
    `).join("");
  }

  init();
})();
