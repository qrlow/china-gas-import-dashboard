(function () {
  const data = window.CHINA_LNG_NEWS;
  const factorMap = new Map(data.factors.map((factor, index) => [factor.id, { ...factor, index }]));
  let sourceFilter = "All";
  let factorFilter = "All";

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

  function factorFor(item) {
    return factorMap.get(item.factorId) ?? { id: item.factorId, name: item.factorId, index: 999 };
  }

  function filteredItems() {
    return data.items
      .filter((item) => sourceFilter === "All" || item.source === sourceFilter)
      .filter((item) => factorFilter === "All" || item.factorId === factorFilter)
      .sort((a, b) => {
        const factorOrder = factorFor(a).index - factorFor(b).index;
        if (factorOrder) return factorOrder;
        return b.date.localeCompare(a.date);
      });
  }

  function option(value, label, selected) {
    return `<option value="${escapeHtml(value)}" ${value === selected ? "selected" : ""}>${escapeHtml(label)}</option>`;
  }

  function init() {
    byId("news-scan-date").textContent = `Scan: ${data.meta.scanLabel}`;
    byId("news-source-count").textContent = `${data.coverage.length} sources checked`;
    byId("news-note").textContent = data.meta.note;

    const sourceSelect = byId("news-source-filter");
    const factorSelect = byId("news-factor-filter");
    sourceSelect.innerHTML = [option("All", "All", sourceFilter)]
      .concat(unique(data.items.map((item) => item.source)).map((source) => option(source, source, sourceFilter)))
      .join("");
    factorSelect.innerHTML = [option("All", "All", factorFilter)]
      .concat(data.factors.map((factor) => option(factor.id, factor.name, factorFilter)))
      .join("");

    sourceSelect.addEventListener("change", () => {
      sourceFilter = sourceSelect.value;
      render();
    });
    factorSelect.addEventListener("change", () => {
      factorFilter = factorSelect.value;
      render();
    });

    renderFactors();
    renderCoverage();
    render();
  }

  function render() {
    const items = filteredItems();
    renderSignals(items);
    renderTable(items);
  }

  function renderFactors() {
    byId("news-factor-grid").innerHTML = data.factors.map((factor) => `
      <article class="factor-card">
        <h3>${escapeHtml(factor.name)}</h3>
        <p>${escapeHtml(factor.driver)}</p>
        <dl>
          <div>
            <dt>Current read</dt>
            <dd>${escapeHtml(factor.read)}</dd>
          </div>
          <div>
            <dt>Watch</dt>
            <dd>${escapeHtml(factor.watch)}</dd>
          </div>
        </dl>
      </article>
    `).join("");
  }

  function renderSignals(items) {
    const grouped = data.factors
      .map((factor) => ({
        factor,
        items: items.filter((item) => item.factorId === factor.id),
      }))
      .filter((group) => group.items.length);

    byId("news-signal-groups").innerHTML = grouped.map(({ factor, items: groupItems }) => `
      <section class="signal-group">
        <div class="signal-group-head">
          <h3>${escapeHtml(factor.name)}</h3>
          <p>${escapeHtml(factor.read)}</p>
        </div>
        <div class="news-card-list">
          ${groupItems.map((item) => signalItem(item)).join("")}
        </div>
      </section>
    `).join("");
  }

  function signalItem(item) {
    return `
      <article class="news-card">
        <div class="news-card-meta">
          <span>${escapeHtml(item.date)}</span>
          <span>${escapeHtml(item.source)}</span>
          <span class="bias-badge bias-${escapeHtml(item.biasTone)}">${escapeHtml(item.bias)}</span>
        </div>
        <h3><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.headline)}</a></h3>
        <p>${escapeHtml(item.readthrough)}</p>
        <p class="news-action">${escapeHtml(item.action)}</p>
      </article>
    `;
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
        <td>${escapeHtml(factorFor(item).name)}</td>
        <td><span class="bias-badge bias-${escapeHtml(item.biasTone)}">${escapeHtml(item.bias)}</span></td>
        <td class="news-headline"><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.headline)}</a></td>
        <td>${escapeHtml(item.readthrough)}</td>
        <td>${escapeHtml(item.action)}</td>
        <td>${escapeHtml(item.access)}</td>
      </tr>
    `).join("");
  }

  init();
})();
