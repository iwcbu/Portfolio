import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://portfolio.example/", {
      headers: {
        accept: "text/html",
        host: "portfolio.example",
        "x-forwarded-host": "portfolio.example",
        "x-forwarded-proto": "https",
      },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete accessible portfolio shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Your Name — Software Engineer &amp; Data Developer<\/title>/i);
  assert.match(html, /Skip to portfolio content/);
  assert.match(html, /aria-label="Portfolio journey"/);
  assert.match(html, /id="universe"/);
  assert.match(html, /id="galaxy"/);
  assert.match(html, /id="projects"/);
  assert.match(html, /id="earth"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /Project Five/);
  assert.match(html, /hello@example.com/);
  assert.match(html, /og:image/);
  assert.match(html, /portfolio\.example\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps content, camera tuning, fallbacks, and interactions modular", async () => {
  const [page, profile, projects, camera, experience, projectPanel, css] = await Promise.all([
    readFile(new URL("app/page.tsx", projectRoot), "utf8"),
    readFile(new URL("data/profile.ts", projectRoot), "utf8"),
    readFile(new URL("data/projects.ts", projectRoot), "utf8"),
    readFile(new URL("config/cameraCheckpoints.ts", projectRoot), "utf8"),
    readFile(new URL("components/experience/PortfolioExperience.tsx", projectRoot), "utf8"),
    readFile(new URL("components/projects/ProjectPanel.tsx", projectRoot), "utf8"),
    readFile(new URL("app/globals.css", projectRoot), "utf8"),
  ]);

  assert.match(page, /PortfolioExperience/);
  assert.match(profile, /PLACEHOLDER CONTENT/);
  assert.equal((projects.match(/id: "project-/g) ?? []).length, 5);
  assert.equal((camera.match(/id: "/g) ?? []).length, 5);
  assert.match(experience, /ExperienceErrorBoundary/);
  assert.match(experience, /webglAvailable === false/);
  assert.match(projectPanel, /event\.key === "Escape"/);
  assert.match(projectPanel, /role="dialog"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /@media \(max-width: 600px\)/);
  await access(new URL("public/og.png", projectRoot));
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", projectRoot)));
});
