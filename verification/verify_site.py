from playwright.sync_api import sync_playwright

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify Home Page
        page.goto("http://localhost:3000")
        page.screenshot(path="verification/home.png")
        print("Home page screenshot captured.")

        # Verify Projects Page
        page.goto("http://localhost:3000/projects")
        page.screenshot(path="verification/projects.png")
        print("Projects page screenshot captured.")

        # Verify a Project Detail Page (e.g., 001.roko)
        page.goto("http://localhost:3000/projects/001.roko")
        page.screenshot(path="verification/project_detail.png")
        print("Project detail page screenshot captured.")

        # Verify About Page
        page.goto("http://localhost:3000/about")
        page.screenshot(path="verification/about.png")
        print("About page screenshot captured.")

        browser.close()

if __name__ == "__main__":
    verify_site()
